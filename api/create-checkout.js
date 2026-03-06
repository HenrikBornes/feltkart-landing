module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://feltkart.no');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, orgNavn, orgId, antallSelgere } = req.body;

  if (!email || !orgNavn || !antallSelgere) {
    return res.status(400).json({ error: 'Mangler påkrevde felt' });
  }

  const PLATTFORM_PRICE_ID = 'price_1T801Y2e5goSBACu9pU5qd6G';
  const SELGERE_PRICE_ID   = 'price_1T804Q2e5goSBACuDbB1SNIW';

  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        mode: 'subscription',
        customer_email: email,
        client_reference_id: orgId || orgNavn,
        success_url: 'https://app.feltkart.no?betalt=true',
        cancel_url: 'https://feltkart.no/signup.html',
        'line_items[0][price]': PLATTFORM_PRICE_ID,
        'line_items[0][quantity]': '1',
        'line_items[1][price]': SELGERE_PRICE_ID,
        'line_items[1][quantity]': String(antallSelgere),
        'metadata[org_navn]': orgNavn,
        'metadata[antall_selgere]': String(antallSelgere),
      }),
    });

    const session = await response.json();

    if (session.error) {
      return res.status(400).json({ error: session.error.message });
    }

    return res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Checkout error:', err);
    return res.status(500).json({ error: err.message });
  }
};
