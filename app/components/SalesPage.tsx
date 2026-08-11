/* eslint-disable @next/next/no-img-element -- Local WebP previews are pre-compressed (21–41 KB) and need predictable static rendering in Vinext. */

import { MetaPixel } from "./MetaPixel";

type Locale = "en" | "es";

type Copy = {
  lang: string;
  switchLabel: string;
  switchHref: string;
  switchText: string;
  notice: string;
  navCta: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  heroBullets: string[];
  primaryCta: string;
  secondaryCta: string;
  heroPrice: string;
  guaranteeBadge: string;
  delivery: string;
  facts: Array<[string, string]>;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  sceneLabel: string;
  sceneLines: string[];
  shiftTitle: string;
  shiftItems: Array<[string, string]>;
  scriptsEyebrow: string;
  scriptsTitle: string;
  scriptsBody: string;
  scriptBefore: string;
  scriptPushback: string;
  scriptCta: string;
  pagesEyebrow: string;
  pagesTitle: string;
  pagesBody: string;
  previewAlts: string[];
  includedEyebrow: string;
  includedTitle: string;
  included: Array<[string, string, string]>;
  pathEyebrow: string;
  pathTitle: string;
  pathBody: string;
  nights: Array<[string, string]>;
  faqEyebrow: string;
  faqTitle: string;
  faqs: Array<[string, string]>;
  compareTitle: string;
  compareItems: Array<[string, string]>;
  compareUs: [string, string];
  guaranteeTitle: string;
  guaranteeBody: string;
  aapLine: string;
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  finalCta: string;
  priceLabel: string;
  barCta: string;
  footerScope: string;
  copyright: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    lang: "en",
    switchLabel: "View this page in Spanish",
    switchHref: "/es",
    switchText: "ES",
    notice: "Instant download · 15-day money-back guarantee",
    navCta: "Get it — $12",
    eyebrow: "FOR PARENTS OF KIDS AGES 6–12",
    headline: "End the nightly screen fight in seven nights.",
    subhead:
      "A 29-page printable kit that gives you one clear boundary, the exact words to say when the pushback comes, and a seven-night plan. Set it up tonight in ten minutes.",
    heroBullets: [
      "One boundary — not a whole new household routine",
      "Word-for-word scripts for warnings, pushback, and exceptions",
      "A seven-night plan you run, adjust, and keep",
    ],
    primaryCta: "Get the kit — $12",
    secondaryCta: "See what's inside",
    heroPrice: "$12 one-time · instant PDF download",
    guaranteeBadge: "15-day money-back guarantee",
    delivery: "Instant digital download · 29 printable A4 pages · English edition",
    facts: [
      ["10 min", "to set up tonight"],
      ["7 nights", "one small step each night"],
      ["29 pages", "scripts, plans, and printables"],
      ["Ages 6–12", "two age-aware routines"],
    ],
    problemEyebrow: "THE MOMENT THIS IS FOR",
    problemTitle: "It's 7:42 p.m. The rule exists. The ending doesn't.",
    problemBody:
      "The timer went off. One more round already became three. Homework, dinner, or bed is waiting — and your plan is changing sentence by sentence. You don't need a longer lecture. You need a visible ending, a prepared next step, and words you can still remember when you are this tired.",
    sceneLabel: "A familiar school night",
    sceneLines: [
      "“But I just started.”",
      "“You never said that.”",
      "“I need it for homework.”",
      "“Just five more minutes.”",
    ],
    shiftTitle: "The shift that ends the argument",
    shiftItems: [
      ["From vague", "Be good with screens."],
      ["To visible", "Recreational screens park at 7:30 on school nights."],
      ["From reactive", "Why are you doing this again?"],
      ["To prepared", "Five minutes left. When the timer ends, the device parks here."],
    ],
    scriptsEyebrow: "TAKE THESE TWO FOR FREE",
    scriptsTitle: "Here are two of the scripts. Use them tonight.",
    scriptsBody:
      "You should not have to invent the sentence at 7:42 p.m. These two come straight from page 18. Try them tonight before you decide anything. The kit has the rest — including what to say when the answer is no, when you got it wrong, and when the two adults disagree.",
    scriptBefore:
      "Five minutes left. When the timer ends, the device parks here. Then you can choose a snack with me or Lego at the table.",
    scriptPushback:
      "I hear that you do not like it. The plan is still the same. Do you want to park it, or should I help?",
    scriptCta: "Get all the scripts — $12",
    pagesEyebrow: "REAL PAGES FROM THE KIT",
    pagesTitle: "Made to be used, written on, and returned to.",
    pagesBody:
      "No dense theory chapters. The pages move between decisions, scripts, trackers, troubleshooting, and repair.",
    previewAlts: [
      "Quick-start worksheet from the English screen reset kit",
      "Seven-minute family meeting page from the English screen reset kit",
      "Pushback scripts page from the English screen reset kit",
      "Seven-night tracker from the English screen reset kit",
    ],
    includedEyebrow: "EVERYTHING IN THE KIT",
    includedTitle: "Eight tools. One evening to set up.",
    included: [
      ["01", "Ten-minute quick start", "Start tonight without reading all 29 pages first."],
      ["02", "Boundary builder", "Turn a vague intention into one visible rule your kid can repeat."],
      ["03", "Seven-night plan", "One focused action and one observation per night."],
      ["04", "Ready-to-use scripts", "Warnings, pushback, exceptions, mistakes, and repair."],
      ["05", "Two age-aware routines", "Separate examples for ages 6–8 and 9–12."],
      ["06", "Printable tools", "Parking labels, family agreement, tracker, replacement menu."],
      ["07", "Troubleshooting table", "What to change when a night goes badly."],
      ["08", "Support guide", "How to tell when the plan is not the right tool."],
    ],
    pathEyebrow: "ONE BOUNDARY. SEVEN NIGHTS.",
    pathTitle: "A short experiment, not a verdict on your parenting.",
    pathBody:
      "Each night adds one practical skill. You keep the ending stable, watch what happens, and change one variable at a time.",
    nights: [
      ["1", "Make the ending visible"],
      ["2", "Separate feeling from boundary"],
      ["3", "Fix the bridge"],
      ["4", "Align the adults"],
      ["5", "Use exceptions clearly"],
      ["6", "Give one small job"],
      ["7", "Keep, adjust, or replace"],
    ],
    faqEyebrow: "BEFORE YOU BUY",
    faqTitle: "The practical details.",
    faqs: [
      ["What exactly do I get?", "A 29-page printable PDF, delivered instantly after checkout. Scripts, worksheets, two age-based routines, a seven-night tracker, and a troubleshooting table. Print it as many times as your family needs."],
      ["What if it does not work for us?", "Then you do not pay for it. Ask for a refund within 15 days and you get all $12 back. You keep the kit either way."],
      ["Do I have to ban screens for a week?", "No. You pick one school-night moment. Homework, calls with family, accessibility, and creative use stay exactly as they are."],
      ["Does it work with more than one kid?", "Yes. The agreement, parking labels, and tracker have space for several kids and devices. Start with the one moment that causes the most friction."],
      ["Will it work for a 6-year-old and an 11-year-old?", "The kit includes two separate routines — one for ages 6–8, one for 9–12. Same plan, different words."],
      ["How fast can I start?", "You can run night one about ten minutes after you open the file. Every night gives you information, so you are not waiting until day seven to learn anything."],
    ],
    compareTitle: "What solving this another way costs",
    compareItems: [
      ["One session with a parenting coach", "$90+"],
      ["Another 300-page parenting book", "$18 and six hours you do not have"],
      ["A screen-time app subscription", "$60 a year"],
    ],
    compareUs: ["This kit, in your hands tonight", "$12 once"],
    guaranteeTitle: "Try it for 15 nights.",
    guaranteeBody:
      "Run the plan. If the evening does not get easier, ask for a refund within 15 days and you get all $12 back — and you keep the kit.",
    aapLine:
      "Built on the family media planning framework published by the American Academy of Pediatrics.",
    finalEyebrow: "TONIGHT CAN END BETTER THAN LAST NIGHT",
    finalTitle: "Pick one boundary. Prepare one bridge. Start tonight.",
    finalBody:
      "Open the quick-start page, write the rule, choose the next activity, and run night one in about ten minutes.",
    finalCta: "Get the kit — $12",
    priceLabel: "$12 USD · one-time purchase",
    barCta: "Get the kit",
    footerScope: "Educational planning tool for families.",
    copyright: "© 2026 School-Night Screen Reset. Personal household use.",
  },
  es: {
    lang: "es",
    switchLabel: "Ver esta página en inglés",
    switchHref: "/en",
    switchText: "EN",
    notice: "Descarga inmediata · garantía de 15 días",
    navCta: "Obtenerlo — $12",
    eyebrow: "PARA MADRES Y PADRES DE NIÑOS DE 6 A 12 AÑOS",
    headline: "Acaba con la pelea de las pantallas en siete noches.",
    subhead:
      "Un kit imprimible de 29 páginas con un límite claro, las frases exactas para cuando aparece la resistencia y un plan de siete noches. Lo preparas esta noche en diez minutos.",
    heroBullets: [
      "Un solo límite, no una rutina nueva para toda la casa",
      "Frases palabra por palabra para avisos, resistencia y excepciones",
      "Un plan de siete noches que aplicas, ajustas y conservas",
    ],
    primaryCta: "Obtener el kit — $12",
    secondaryCta: "Ver qué incluye",
    heroPrice: "$12 pago único · descarga inmediata en PDF",
    guaranteeBadge: "Garantía de 15 días",
    delivery: "Descarga digital inmediata · 29 páginas A4 imprimibles · edición en español",
    facts: [
      ["10 min", "para prepararlo esta noche"],
      ["7 noches", "un paso pequeño cada noche"],
      ["29 páginas", "frases, planes e imprimibles"],
      ["6–12 años", "dos rutinas según la edad"],
    ],
    problemEyebrow: "EL MOMENTO PARA EL QUE SE CREÓ",
    problemTitle: "Son las 7:42. La regla existe. El final, no.",
    problemBody:
      "Sonó el temporizador. Una partida más ya se convirtió en tres. La tarea, la cena o la hora de dormir esperan, y tu plan cambia con cada frase. No necesitas un sermón más largo. Necesitas un final visible, un paso siguiente ya preparado y palabras que puedas recordar incluso con este cansancio.",
    sceneLabel: "Una noche escolar conocida",
    sceneLines: [
      "«Pero acabo de empezar».",
      "«Nunca dijiste eso».",
      "«Lo necesito para la tarea».",
      "«Solo cinco minutos más».",
    ],
    shiftTitle: "El cambio que termina la discusión",
    shiftItems: [
      ["De algo vago", "Pórtate bien con las pantallas."],
      ["A algo visible", "Las pantallas recreativas se guardan a las 7:30 en noches escolares."],
      ["De reaccionar", "¿Por qué haces esto otra vez?"],
      ["A estar preparado", "Quedan cinco minutos. Cuando termine el temporizador, el dispositivo se guarda aquí."],
    ],
    scriptsEyebrow: "LLÉVATE ESTAS DOS GRATIS",
    scriptsTitle: "Aquí tienes dos de las frases. Úsalas esta noche.",
    scriptsBody:
      "No deberías tener que inventar la frase a las 7:42 de la noche. Estas dos salen tal cual de la página 18. Pruébalas esta noche antes de decidir nada. El kit tiene el resto, incluido qué decir cuando la respuesta es no, cuando te equivocaste y cuando los dos adultos no están de acuerdo.",
    scriptBefore:
      "Quedan cinco minutos. Cuando termine el temporizador, el dispositivo se guarda aquí. Después puedes elegir una merienda conmigo o Lego en la mesa.",
    scriptPushback:
      "Entiendo que no te guste. El plan sigue igual. ¿Quieres guardarlo tú o te ayudo?",
    scriptCta: "Quiero todas las frases — $12",
    pagesEyebrow: "PÁGINAS REALES DEL KIT",
    pagesTitle: "Hecho para usar, escribir encima y volver a consultar.",
    pagesBody:
      "No hay capítulos densos de teoría. Las páginas alternan decisiones, frases, registros, ajustes y reparación.",
    previewAlts: [
      "Inicio rápido del kit de reinicio de pantallas en español",
      "Página de reunión familiar de siete minutos del kit en español",
      "Frases para la resistencia del kit en español",
      "Registro de siete noches del kit en español",
    ],
    includedEyebrow: "TODO LO QUE INCLUYE EL KIT",
    includedTitle: "Ocho herramientas. Una noche para prepararlo.",
    included: [
      ["01", "Inicio rápido de diez minutos", "Empieza esta noche sin leer antes las 29 páginas."],
      ["02", "Constructor de límites", "Convierte una intención vaga en una regla que tu hijo puede repetir."],
      ["03", "Plan de siete noches", "Una acción concreta y una observación por noche."],
      ["04", "Frases listas para usar", "Avisos, resistencia, excepciones, errores y reparación."],
      ["05", "Dos rutinas según la edad", "Ejemplos distintos para 6–8 y para 9–12 años."],
      ["06", "Herramientas imprimibles", "Etiquetas, acuerdo familiar, registro y menú de alternativas."],
      ["07", "Tabla de ajustes", "Qué cambiar cuando una noche sale mal."],
      ["08", "Guía de apoyo", "Cómo saber cuándo el plan no es la herramienta adecuada."],
    ],
    pathEyebrow: "UN LÍMITE. SIETE NOCHES.",
    pathTitle: "Un experimento breve, no un juicio sobre tu forma de criar.",
    pathBody:
      "Cada noche añade una habilidad práctica. Mantienes estable el final, observas qué pasa y cambias una sola variable cada vez.",
    nights: [
      ["1", "Haz visible el final"],
      ["2", "Separa emoción y límite"],
      ["3", "Mejora el puente"],
      ["4", "Alinea a los adultos"],
      ["5", "Aclara las excepciones"],
      ["6", "Da una tarea pequeña"],
      ["7", "Conserva, ajusta o cambia"],
    ],
    faqEyebrow: "ANTES DE COMPRAR",
    faqTitle: "Los detalles prácticos.",
    faqs: [
      ["¿Qué recibo exactamente?", "Un PDF imprimible de 29 páginas, entregado al instante después del pago. Frases, hojas de trabajo, dos rutinas según la edad, un registro de siete noches y una tabla de ajustes. Puedes imprimirlo tantas veces como tu familia necesite."],
      ["¿Y si no funciona en mi casa?", "Entonces no lo pagas. Pide el reembolso dentro de 15 días y recuperas los $12 completos. El kit se queda contigo igual."],
      ["¿Tengo que prohibir las pantallas una semana?", "No. Eliges un solo momento de la noche escolar. La tarea, las llamadas con la familia, la accesibilidad y el uso creativo siguen igual."],
      ["¿Sirve con más de un hijo?", "Sí. El acuerdo, las etiquetas y el registro tienen espacio para varios niños y dispositivos. Empieza por el momento que genera más fricción."],
      ["¿Sirve para un niño de 6 y otro de 11?", "El kit trae dos rutinas separadas: una para 6–8 años y otra para 9–12. El mismo plan, con palabras distintas."],
      ["¿Qué tan rápido puedo empezar?", "Puedes hacer la primera noche unos diez minutos después de abrir el archivo. Cada noche te da información, así que no esperas hasta el día siete para aprender algo."],
    ],
    compareTitle: "Lo que cuesta resolver esto de otra forma",
    compareItems: [
      ["Una sesión con un coach de crianza", "$90+"],
      ["Otro libro de crianza de 300 páginas", "$18 y seis horas que no tienes"],
      ["Una suscripción a una app de control", "$60 al año"],
    ],
    compareUs: ["Este kit, en tus manos esta noche", "$12 una vez"],
    guaranteeTitle: "Pruébalo durante 15 noches.",
    guaranteeBody:
      "Aplica el plan. Si la noche no se vuelve más fácil, pide el reembolso dentro de 15 días y recuperas los $12 completos. Y el kit se queda contigo.",
    aapLine:
      "Construido sobre el marco de planificación familiar publicado por la American Academy of Pediatrics.",
    finalEyebrow: "ESTA NOCHE PUEDE TERMINAR MEJOR QUE AYER",
    finalTitle: "Elige un límite. Prepara un puente. Empieza esta noche.",
    finalBody:
      "Abre la página de inicio rápido, escribe la regla, elige la actividad siguiente y haz la primera noche en unos diez minutos.",
    finalCta: "Obtener el kit — $12",
    priceLabel: "$12 USD · pago único",
    barCta: "Obtener el kit",
    footerScope: "Herramienta educativa de planificación familiar.",
    copyright: "© 2026 Reinicio de pantallas en noches escolares. Uso personal del hogar.",
  },
};

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="check-icon">
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function Shield() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="shield-icon">
      <path d="M12 3l7 3v5.2c0 4.4-2.9 8.3-7 9.8-4.1-1.5-7-5.4-7-9.8V6l7-3z" />
      <path d="m8.6 12.2 2.4 2.4 4.4-4.8" />
    </svg>
  );
}

export function SalesPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  // Each locale sells a separate Hotmart product, so the checkout differs per
  // language. These must be written as full literals: Next inlines
  // NEXT_PUBLIC_* at build time and cannot resolve a computed key.
  const localeUrl =
    locale === "en"
      ? process.env.NEXT_PUBLIC_PURCHASE_URL_EN
      : process.env.NEXT_PUBLIC_PURCHASE_URL_ES;
  const purchaseUrl = localeUrl || process.env.NEXT_PUBLIC_PURCHASE_URL || "#purchase";
  const prefix = `/product/${locale}`;
  const title = locale === "en" ? "The 7-Day School-Night Screen Reset" : "El reinicio de pantallas en 7 noches escolares";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: c.subhead,
    image: `${prefix}-cover.webp`,
    inLanguage: locale,
    audience: { "@type": "PeopleAudience", suggestedMinAge: 6, suggestedMaxAge: 12 },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "12.00",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main lang={c.lang}>
      <a className="skip-link" href="#main-content">
        {locale === "en" ? "Skip to content" : "Ir al contenido"}
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <MetaPixel locale={locale} />

      <div className="notice-bar">
        <span className="notice-dot" aria-hidden="true" />
        {c.notice}
      </div>

      <header className="site-header">
        <a className="brand" href={`/${locale}`} aria-label={title}>
          <span className="brand-mark" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => <i key={day} />)}
          </span>
          <span>{locale === "en" ? "School-Night Screen Reset" : "Reinicio de pantallas"}</span>
        </a>
        <nav aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
          <a className="nav-link" href="#inside">{locale === "en" ? "Inside" : "Contenido"}</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <a className="language-link" href={c.switchHref} aria-label={c.switchLabel}>{c.switchText}</a>
          <a className="button button-small" href={purchaseUrl} data-purchase>{c.navCta}<Arrow /></a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.headline}</h1>
            <p className="hero-subhead">{c.subhead}</p>
            <ul className="hero-list">
              {c.heroBullets.map((item) => <li key={item}><Check />{item}</li>)}
            </ul>
            <p className="hero-price">
              <strong>{c.heroPrice}</strong>
              <span className="guarantee-badge"><Shield />{c.guaranteeBadge}</span>
            </p>
            <div className="hero-actions">
              <a className="button" href={purchaseUrl} data-purchase>{c.primaryCta}<Arrow /></a>
              <a className="text-link" href="#inside">{c.secondaryCta}<Arrow /></a>
            </div>
            <p className="delivery-note">{c.delivery}</p>
          </div>

          <div className="product-stage" aria-label={locale === "en" ? "Product preview" : "Vista previa del producto"}>
            <div className="stage-shape stage-shape-sage" aria-hidden="true" />
            <div className="stage-shape stage-shape-coral" aria-hidden="true" />
            <img className="page-preview page-preview-left" src={`${prefix}-quickstart.webp`} alt="" width="760" height="1075" />
            <img className="page-preview page-preview-main" src={`${prefix}-cover.webp`} alt={title} width="760" height="1075" />
            <img className="page-preview page-preview-right" src={`${prefix}-tracker.webp`} alt="" width="760" height="1075" />
            <div className="stage-note stage-note-top">29<br/><span>{locale === "en" ? "pages" : "páginas"}</span></div>
            <div className="stage-note stage-note-bottom">7<br/><span>{locale === "en" ? "nights" : "noches"}</span></div>
          </div>
        </section>

        <section className="fact-strip" aria-label={locale === "en" ? "Product facts" : "Datos del producto"}>
          <div className="section-shell fact-grid">
            {c.facts.map(([value, label]) => <div className="fact" key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="problem-section section-shell">
          <div className="section-heading section-heading-left">
            <p className="eyebrow">{c.problemEyebrow}</p>
            <h2>{c.problemTitle}</h2>
            <p>{c.problemBody}</p>
          </div>
          <div className="problem-visual">
            <div className="clock-card">
              <span>{c.sceneLabel}</span>
              <strong>7:42</strong>
              <small>PM</small>
            </div>
            <div className="objection-stack">
              {c.sceneLines.map((line, index) => <div className={`objection objection-${index + 1}`} key={line}>{line}</div>)}
            </div>
          </div>
        </section>

        <section className="shift-section">
          <div className="section-shell">
            <div className="section-heading section-heading-compact">
              <p className="eyebrow">{c.shiftTitle}</p>
            </div>
            <div className="shift-grid">
              {c.shiftItems.map(([label, text], index) => (
                <article className={index % 2 === 0 ? "shift-card muted" : "shift-card clear"} key={`${label}-${text}`}>
                  <span>{label}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scripts-section section-shell">
          <div className="scripts-copy">
            <p className="eyebrow">{c.scriptsEyebrow}</p>
            <h2>{c.scriptsTitle}</h2>
            <p>{c.scriptsBody}</p>
            <a className="button" href={purchaseUrl} data-purchase>{c.scriptCta}<Arrow /></a>
          </div>
          <div className="script-cards">
            <blockquote className="script-card script-card-light">
              <span>{locale === "en" ? "Before the timer ends" : "Antes de que termine el tiempo"}</span>
              <p>“{c.scriptBefore}”</p>
            </blockquote>
            <blockquote className="script-card script-card-coral">
              <span>{locale === "en" ? "When pushback arrives" : "Cuando aparece la resistencia"}</span>
              <p>“{c.scriptPushback}”</p>
            </blockquote>
          </div>
        </section>

        <section className="pages-section" id="inside">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">{c.pagesEyebrow}</p>
              <h2>{c.pagesTitle}</h2>
              <p>{c.pagesBody}</p>
            </div>
            <div className="page-gallery">
              {["quickstart", "meeting", "pushback", "tracker"].map((name, index) => (
                <figure key={name}>
                  <img src={`${prefix}-${name}.webp`} alt={c.previewAlts[index]} width="760" height="1075" loading="lazy" />
                  <figcaption>{String([2, 8, 18, 24][index]).padStart(2, "0")} / 29</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="included-section section-shell">
          <div className="section-heading section-heading-left">
            <p className="eyebrow">{c.includedEyebrow}</p>
            <h2>{c.includedTitle}</h2>
          </div>
          <div className="included-grid">
            {c.included.map(([number, itemTitle, text]) => (
              <article className="included-card" key={number}>
                <span>{number}</span>
                <h3>{itemTitle}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="path-section">
          <div className="section-shell">
            <div className="section-heading">
              <p className="eyebrow">{c.pathEyebrow}</p>
              <h2>{c.pathTitle}</h2>
              <p>{c.pathBody}</p>
            </div>
            <ol className="night-path">
              {c.nights.map(([number, text], index) => (
                <li key={number}>
                  <span className={index === 6 ? "night-number final" : "night-number"}>{number}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="section-heading section-heading-left faq-heading">
            <p className="eyebrow">{c.faqEyebrow}</p>
            <h2>{c.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {c.faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-section" id="purchase">
          <div className="section-shell final-grid">
            <div>
              <p className="eyebrow">{c.finalEyebrow}</p>
              <h2>{c.finalTitle}</h2>
              <p>{c.finalBody}</p>

              <div className="compare-block">
                <p className="compare-title">{c.compareTitle}</p>
                <ul className="compare-list">
                  {c.compareItems.map(([label, price]) => (
                    <li key={label}><span>{label}</span><strong>{price}</strong></li>
                  ))}
                  <li className="compare-us">
                    <span>{c.compareUs[0]}</span>
                    <strong>{c.compareUs[1]}</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="final-column">
              <div className="final-offer">
                <span>{c.priceLabel}</span>
                <a className="button button-mustard" href={purchaseUrl} data-purchase>{c.finalCta}<Arrow /></a>
                <small>{c.delivery}</small>
              </div>

              <div className="guarantee-card">
                <Shield />
                <div>
                  <strong>{c.guaranteeTitle}</strong>
                  <p>{c.guaranteeBody}</p>
                </div>
              </div>

              <p className="aap-line">
                {c.aapLine}{" "}
                <a
                  href="https://www.healthychildren.org/English/family-life/Media/Pages/How-to-Make-a-Family-Media-Use-Plan.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  {locale === "en" ? "See the framework" : "Ver el marco"}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true">{[1, 2, 3, 4, 5, 6, 7].map((day) => <i key={day} />)}</span>
          <span>{locale === "en" ? "School-Night Screen Reset" : "Reinicio de pantallas"}</span>
        </div>
        <p>{c.footerScope}</p>
        <p>{c.copyright}</p>
      </footer>

      <div className="purchase-bar">
        <div className="purchase-bar-price">
          <strong>$12 USD</strong>
          <span><Shield />{c.guaranteeBadge}</span>
        </div>
        <a className="button button-small" href={purchaseUrl} data-purchase>{c.barCta}<Arrow /></a>
      </div>
    </main>
  );
}
