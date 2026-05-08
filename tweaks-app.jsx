// FeltKart — tweaks panel
// Lar deg eksperimentere med hovedbudskap (uten ordet "salgssjef"), CRM-vinkel,
// per-selger-fokus, og hvor mye vekt vi legger på "hver selger er forskjellig".

const HERO_H1_OPTIONS = {
  forskjellig: { html: 'Hver dør er et <span class="accent">tall</span>.<br/><span class="underline">Hver selger er forskjellig.</span>' },
  historie:    { html: 'Hver dør er et <span class="accent">tall</span>.<br/><span class="underline">Hver rute er en historie.</span>' },
  data:        { html: 'CRM for feltselgere.<br/><span class="underline">Bygd på <span class="accent">data</span>, ikke magefølelse.</span>' },
  bedre:       { html: 'Bli en <span class="accent">bedre</span> selger<br/><span class="underline">én dør om gangen.</span>' },
};

const HERO_SUB_OPTIONS = {
  // Den nye, foretrukne (CRM + per-selger-vekt, ingen "salgssjef")
  crm: 'FeltKart er CRM-et bygd for feltselgere. Du ser hva hver enkelt selger trenger å jobbe med — hvilke produkter de lukker, hvor de mister kunden, hvor de gjør det best — og bruker dataen til å gjøre dem til bedre selgere.',
  // Pekes mot lederen, men nøytralt
  leder: 'CRM, kart og økonomi i ett. Lederen ser hva som skjer i felten, selgeren ser sin egen utvikling — og dataen forteller dere begge hva som må jobbes med.',
  // Tydelig på data-til-handling
  handling: 'Hver selger er forskjellig. FeltKart samler salgene, dørene, økonomien og oppfølgingene — og oversetter det til konkrete coaching-punkter per person. Ingen generelle pep-talks.',
  // Kort, punchy
  kort: 'CRM for feltsalg. Sanntidsdata, lønnsomhet og per-selger innsikt — så hver enkelt blir en bedre selger.',
};

const COACH_HEADING_OPTIONS = {
  forskjellig: 'Hver selger er forskjellig — dataen forteller deg hvordan',
  styrker:     'Spill på styrkene. Tett hullene.',
  konkret:     'Konkrete coaching-punkter, ikke generelle pep-talks',
  utvikling:   'Følg utviklingen — selger for selger',
};

const FEATURE1_TAG_OPTIONS = {
  crm: 'CRM & sanntidsdata',
  per: 'Per-selger innsikt',
  dash: 'Dashboard & KPI\'er',
  data: 'Data → handling',
};

function applyHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}
function applyText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}
function fmtKr(n) {
  // 1 900, 12 500, 399 — norsk tusenskille
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
}

function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "heroH1": "forskjellig",
    "heroSub": "crm",
    "coachHeading": "forskjellig",
    "feature1Tag": "crm",
    "showCoachingSection": true,
    "showProofStrip": true,
    "ctaEmphasis": "egentlig",
    "pricePerUser": 399,
    "setupFee": 1900,
    "primaryCtaLabel": "Ta kontakt",
    "secondaryCtaLabel": "Ta kontakt"
  }/*EDITMODE-END*/;

  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply changes live
  React.useEffect(() => {
    applyHtml('#heroH1', HERO_H1_OPTIONS[tw.heroH1]?.html || HERO_H1_OPTIONS.forskjellig.html);
  }, [tw.heroH1]);

  React.useEffect(() => {
    applyText('#heroSub', HERO_SUB_OPTIONS[tw.heroSub] || HERO_SUB_OPTIONS.crm);
  }, [tw.heroSub]);

  React.useEffect(() => {
    const el = document.querySelector('#coaching .section-head h2');
    if (el) el.textContent = COACH_HEADING_OPTIONS[tw.coachHeading] || COACH_HEADING_OPTIONS.forskjellig;
  }, [tw.coachHeading]);

  React.useEffect(() => {
    const tag = document.querySelector('#funksjoner .feature-row:first-of-type .feature-tag');
    if (tag) tag.textContent = FEATURE1_TAG_OPTIONS[tw.feature1Tag] || FEATURE1_TAG_OPTIONS.crm;
  }, [tw.feature1Tag]);

  React.useEffect(() => {
    const sec = document.querySelector('#coaching');
    if (sec) sec.style.display = tw.showCoachingSection ? '' : 'none';
  }, [tw.showCoachingSection]);

  React.useEffect(() => {
    const sec = document.querySelector('.proof');
    if (sec) sec.style.display = tw.showProofStrip ? '' : 'none';
  }, [tw.showProofStrip]);

  React.useEffect(() => {
    const em = document.querySelector('.cta-banner h2 em');
    if (em) em.textContent = tw.ctaEmphasis;
  }, [tw.ctaEmphasis]);

  // Pricing
  React.useEffect(() => {
    const el = document.getElementById('planPrice');
    if (el) el.textContent = fmtKr(tw.pricePerUser);
    // Hero meta first item
    const meta = document.getElementById('heroMeta');
    if (meta) {
      const spans = meta.querySelectorAll('span:not(.meta-dot)');
      if (spans[0]) spans[0].textContent = `${fmtKr(tw.pricePerUser)} kr / bruker / mnd`;
    }
  }, [tw.pricePerUser]);

  React.useEffect(() => {
    const el = document.getElementById('planSetup');
    if (el) el.textContent = `+ ${fmtKr(tw.setupFee)} kr i etablering — engangs`;
    const meta = document.getElementById('heroMeta');
    if (meta) {
      const spans = meta.querySelectorAll('span:not(.meta-dot)');
      if (spans[1]) spans[1].textContent = `${fmtKr(tw.setupFee)} kr i etablering`;
    }
  }, [tw.setupFee]);

  React.useEffect(() => {
    const btn = document.querySelector('[data-stripe="standard"]');
    if (btn) btn.textContent = tw.primaryCtaLabel;
  }, [tw.primaryCtaLabel]);

  React.useEffect(() => {
    const btn = document.querySelector('[data-stripe="enterprise"]');
    if (btn) btn.textContent = tw.secondaryCtaLabel;
  }, [tw.secondaryCtaLabel]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hovedbudskap">
        <TweakSelect
          label="Tittel"
          value={tw.heroH1}
          options={[
            { value: 'forskjellig', label: 'Hver selger er forskjellig' },
            { value: 'historie', label: 'Hver rute er en historie' },
            { value: 'data', label: 'Bygd på data' },
            { value: 'bedre', label: 'Bli en bedre selger' },
          ]}
          onChange={(v) => setTweak('heroH1', v)}
        />
        <TweakSelect
          label="Underbudskap"
          value={tw.heroSub}
          options={[
            { value: 'crm', label: 'CRM + per-selger (anbefalt)' },
            { value: 'leder', label: 'Leder + selger ser samme data' },
            { value: 'handling', label: 'Data → konkret coaching' },
            { value: 'kort', label: 'Kort & punchy' },
          ]}
          onChange={(v) => setTweak('heroSub', v)}
        />
      </TweakSection>

      <TweakSection label="Per-selger seksjon">
        <TweakToggle
          label="Vis coaching-kort"
          value={tw.showCoachingSection}
          onChange={(v) => setTweak('showCoachingSection', v)}
        />
        <TweakSelect
          label="Overskrift"
          value={tw.coachHeading}
          options={[
            { value: 'forskjellig', label: 'Hver selger er forskjellig' },
            { value: 'styrker', label: 'Spill på styrkene' },
            { value: 'konkret', label: 'Konkrete coaching-punkter' },
            { value: 'utvikling', label: 'Følg utviklingen' },
          ]}
          onChange={(v) => setTweak('coachHeading', v)}
        />
      </TweakSection>

      <TweakSection label="Funksjon 1 — etikett">
        <TweakRadio
          label=""
          value={tw.feature1Tag}
          options={[
            { value: 'crm', label: 'CRM' },
            { value: 'per', label: 'Per-selger' },
            { value: 'dash', label: 'Dashboard' },
            { value: 'data', label: 'Data' },
          ]}
          onChange={(v) => setTweak('feature1Tag', v)}
        />
      </TweakSection>

      <TweakSection label="Prising">
        <TweakNumber
          label="Pris per bruker (kr/mnd)"
          value={tw.pricePerUser}
          min={0}
          step={10}
          onChange={(v) => setTweak('pricePerUser', v)}
        />
        <TweakNumber
          label="Etablering (engangs, kr)"
          value={tw.setupFee}
          min={0}
          step={100}
          onChange={(v) => setTweak('setupFee', v)}
        />
        <TweakText
          label="Knapp — hovedpakke"
          value={tw.primaryCtaLabel}
          onChange={(v) => setTweak('primaryCtaLabel', v)}
        />
        <TweakText
          label="Knapp — enterprise/trial"
          value={tw.secondaryCtaLabel}
          onChange={(v) => setTweak('secondaryCtaLabel', v)}
        />
      </TweakSection>

      <TweakSection label="Andre">
        <TweakToggle
          label='Vis "Bygd med og for"-strip'
          value={tw.showProofStrip}
          onChange={(v) => setTweak('showProofStrip', v)}
        />
        <TweakText
          label="CTA — uthevet ord"
          value={tw.ctaEmphasis}
          onChange={(v) => setTweak('ctaEmphasis', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<App />);
