/* eslint-disable @next/next/no-img-element -- Local WebP previews are pre-compressed (21–41 KB) and need predictable static rendering in Vinext. */

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
  delivery: string;
  facts: Array<[string, string]>;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  sceneLabel: string;
  sceneLines: string[];
  shiftTitle: string;
  shiftItems: Array<[string, string]>;
  quickEyebrow: string;
  quickTitle: string;
  quickBody: string;
  quickSteps: Array<[string, string]>;
  pathEyebrow: string;
  pathTitle: string;
  pathBody: string;
  nights: Array<[string, string]>;
  scriptsEyebrow: string;
  scriptsTitle: string;
  scriptsBody: string;
  scriptBefore: string;
  scriptPushback: string;
  pagesEyebrow: string;
  pagesTitle: string;
  pagesBody: string;
  previewAlts: string[];
  includedEyebrow: string;
  includedTitle: string;
  included: Array<[string, string, string]>;
  fitTitle: string;
  forLabel: string;
  notForLabel: string;
  forItems: string[];
  notForItems: string[];
  evidenceTitle: string;
  evidenceBody: string;
  evidenceLink: string;
  faqEyebrow: string;
  faqTitle: string;
  faqs: Array<[string, string]>;
  finalEyebrow: string;
  finalTitle: string;
  finalBody: string;
  finalCta: string;
  priceLabel: string;
  footerScope: string;
  copyright: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    lang: "en",
    switchLabel: "View this page in Spanish",
    switchHref: "/es",
    switchText: "ES",
    notice: "A printable plan you can start tonight in ten minutes",
    navCta: "Get the kit",
    eyebrow: "FOR FAMILIES WITH CHILDREN AGES 6–12",
    headline: "Make the screen handoff clear before everyone is tired.",
    subhead:
      "A seven-night printable kit for one school-night screen boundary, predictable warnings, ready-to-use scripts, and a plan your family can repeat.",
    heroBullets: [
      "Choose one boundary instead of rebuilding the whole household",
      "Use exact words for warnings, pushback, exceptions, and repair",
      "Adjust the setup with real information from your own home",
    ],
    primaryCta: "Start the 7-night reset",
    secondaryCta: "See what is inside",
    delivery: "Instant digital download · 29 printable A4 pages · English edition",
    facts: [
      ["10 min", "to set up tonight"],
      ["7 nights", "one small step each night"],
      ["29 pages", "scripts, plans, and printables"],
      ["Ages 6–12", "two age-aware routines"],
    ],
    problemEyebrow: "THE MOMENT THIS KIT IS FOR",
    problemTitle: "It is 7:42 p.m. The rule exists. The handoff does not.",
    problemBody:
      "The timer went off. One more round has already become three. Homework, dinner, or bedtime is waiting, and the adult plan is changing sentence by sentence. You do not need a longer lecture. You need a visible endpoint, a prepared bridge, and words you can still remember when you are tired.",
    sceneLabel: "A familiar school night",
    sceneLines: [
      "“But I just started.”",
      "“You never said that.”",
      "“I need it for homework.”",
      "“Just five more minutes.”",
    ],
    shiftTitle: "The useful shift",
    shiftItems: [
      ["From vague", "Be good with screens."],
      ["To visible", "Recreational screens park at 7:30 on school nights."],
      ["From reactive", "Why are you doing this again?"],
      ["To prepared", "Five minutes left. When the timer ends, the device parks here."],
    ],
    quickEyebrow: "START BEFORE YOU READ EVERYTHING",
    quickTitle: "Your first ten minutes are already planned.",
    quickBody:
      "Open page two, make four decisions, and test the smallest version of the plan tonight. The rest of the kit helps you improve it without moving the boundary in the middle of a hard moment.",
    quickSteps: [
      ["01", "Pick the moment with the most friction"],
      ["02", "Write one rule a child can repeat"],
      ["03", "Give a predictable warning"],
      ["04", "Prepare two acceptable next activities"],
    ],
    pathEyebrow: "ONE BOUNDARY. SEVEN NIGHTS.",
    pathTitle: "A short experiment, not a verdict on your parenting.",
    pathBody:
      "Each night adds one practical skill. You keep the endpoint stable, notice what happens, and change one variable at a time.",
    nights: [
      ["1", "Make the ending visible"],
      ["2", "Separate feeling from boundary"],
      ["3", "Fix the bridge"],
      ["4", "Align the adults"],
      ["5", "Use exceptions clearly"],
      ["6", "Give one small job"],
      ["7", "Keep, adjust, or replace"],
    ],
    scriptsEyebrow: "WORDS FOR THE HARD PART",
    scriptsTitle: "You do not have to invent the sentence at 7:42 p.m.",
    scriptsBody:
      "The kit includes short scripts for the moments that usually stretch a simple limit into a long argument.",
    scriptBefore:
      "Five minutes left. When the timer ends, the device parks here. Then you can choose a snack with me or Lego at the table.",
    scriptPushback:
      "I hear that you do not like it. The plan is still the same. Do you want to park it, or should I help?",
    pagesEyebrow: "REAL PAGES FROM THE KIT",
    pagesTitle: "Designed to be used, written on, and returned to.",
    pagesBody:
      "No dense theory chapters. The pages move between decisions, scripts, trackers, troubleshooting, and repair.",
    previewAlts: [
      "Quick-start worksheet from the English screen reset kit",
      "Seven-minute family meeting page from the English screen reset kit",
      "Pushback scripts page from the English screen reset kit",
      "Seven-night tracker from the English screen reset kit",
    ],
    includedEyebrow: "THE COMPLETE ACTION KIT",
    includedTitle: "Everything needed to run the seven-night plan.",
    included: [
      ["01", "Ten-minute quick start", "Begin tonight without reading all 29 pages."],
      ["02", "Boundary builder", "Turn a vague intention into one visible, repeatable rule."],
      ["03", "Seven-night plan", "One focused action and observation prompt per night."],
      ["04", "Ready-to-use scripts", "Warnings, pushback, exceptions, mistakes, and repair."],
      ["05", "Two age-aware routines", "Separate examples for ages 6–8 and 9–12."],
      ["06", "Printable tools", "Parking labels, agreement, tracker, and replacement menu."],
      ["07", "Troubleshooting table", "Change the setup before changing the promise."],
      ["08", "Support guide", "Know when the plan is not enough and what help to seek."],
    ],
    fitTitle: "A narrow tool for a specific family job.",
    forLabel: "This is for you if…",
    notForLabel: "This is not designed to…",
    forItems: [
      "School-night screen endings keep stretching into arguments",
      "Different adults give different answers",
      "You want scripts and printables, not another long theory book",
      "You can test one boundary for seven nights",
    ],
    notForItems: [
      "Diagnose or treat a medical or mental-health condition",
      "Set one universal daily screen-time number",
      "Promise obedience, better grades, sleep, mood, or behavior",
      "Replace individualized professional support",
    ],
    evidenceTitle: "Grounded without pretending every family is the same.",
    evidenceBody:
      "The workflow draws on family media planning principles published by the American Academy of Pediatrics and current parent research. It separates recreational use from homework, communication, accessibility, and creative work. No organization endorses this product.",
    evidenceLink: "See the AAP family media plan",
    faqEyebrow: "QUESTIONS BEFORE YOU START",
    faqTitle: "The practical details.",
    faqs: [
      ["Is this a book or a workbook?", "It is a 29-page action kit. You get concise guidance, exact scripts, worksheets, routines, a tracker, and troubleshooting pages."],
      ["Do I need to ban screens for seven days?", "No. You choose one school-night boundary. Necessary use for homework, communication, accessibility, and creative work is treated separately."],
      ["Will this work for more than one child?", "Yes. The agreement and device-parking pages include space for several people and devices. Start with one shared friction point when possible."],
      ["What ages is it for?", "The kit is written for families with children ages 6–12 and includes separate routine examples for ages 6–8 and 9–12."],
      ["What do I receive?", "An instant English-language PDF with 29 A4 pages for personal household use. You may print copies for your family."],
      ["Is this medical or therapeutic advice?", "No. It is an educational planning and communication tool. Page 28 explains when to pause and seek individualized support."],
    ],
    finalEyebrow: "TONIGHT CAN BE CLEARER THAN YESTERDAY",
    finalTitle: "Choose one boundary. Prepare one bridge. Start small.",
    finalBody:
      "Open the quick-start page, write the rule, prepare the next activity, and run the first night in about ten minutes.",
    finalCta: "Get the English kit for $12",
    priceLabel: "$12 USD · one-time purchase",
    footerScope: "Educational planning tool. Not medical or mental-health advice.",
    copyright: "© 2026 School-Night Screen Reset. Personal household use.",
  },
  es: {
    lang: "es",
    switchLabel: "Ver esta página en inglés",
    switchHref: "/en",
    switchText: "EN",
    notice: "Un plan imprimible que puedes empezar esta noche en diez minutos",
    navCta: "Obtener el kit",
    eyebrow: "PARA FAMILIAS CON NIÑOS DE 6 A 12 AÑOS",
    headline: "Aclara el final de las pantallas antes de que todos estén cansados.",
    subhead:
      "Un kit imprimible de siete noches para poner un límite claro, anticipar el cambio, saber qué decir y sostener un plan que tu familia pueda repetir.",
    heroBullets: [
      "Elige un solo límite en vez de reorganizar toda la casa",
      "Usa frases exactas para avisos, resistencia, excepciones y reparación",
      "Ajusta la preparación con información real de tu propia casa",
    ],
    primaryCta: "Empezar el plan de 7 noches",
    secondaryCta: "Ver qué incluye",
    delivery: "Descarga digital inmediata · 29 páginas A4 imprimibles · edición en español",
    facts: [
      ["10 min", "para preparar esta noche"],
      ["7 noches", "un paso pequeño cada noche"],
      ["29 páginas", "frases, planes e imprimibles"],
      ["6–12 años", "dos rutinas según la edad"],
    ],
    problemEyebrow: "EL MOMENTO PARA EL QUE SE CREÓ ESTE KIT",
    problemTitle: "Son las 7:42. La regla existe. El cambio no está preparado.",
    problemBody:
      "Sonó el temporizador. Una partida más ya se convirtió en tres. La tarea, la cena o la hora de dormir esperan, y el plan adulto cambia con cada frase. No necesitas un sermón más largo. Necesitas un final visible, un puente preparado y palabras que puedas recordar incluso con cansancio.",
    sceneLabel: "Una noche escolar conocida",
    sceneLines: [
      "«Pero acabo de empezar». ",
      "«Nunca dijiste eso». ",
      "«Lo necesito para la tarea». ",
      "«Solo cinco minutos más». ",
    ],
    shiftTitle: "El cambio útil",
    shiftItems: [
      ["De algo vago", "Pórtate bien con las pantallas."],
      ["A algo visible", "Las pantallas recreativas se guardan a las 7:30 en noches escolares."],
      ["De reaccionar", "¿Por qué haces esto otra vez?"],
      ["A estar preparado", "Quedan cinco minutos. Cuando termine el temporizador, el dispositivo se guarda aquí."],
    ],
    quickEyebrow: "EMPIEZA ANTES DE LEERLO TODO",
    quickTitle: "Tus primeros diez minutos ya están organizados.",
    quickBody:
      "Abre la página dos, toma cuatro decisiones y prueba esta noche la versión más pequeña del plan. El resto del kit te ayuda a mejorarlo sin mover el límite en medio de un momento difícil.",
    quickSteps: [
      ["01", "Elige el momento con más fricción"],
      ["02", "Escribe una regla que el niño pueda repetir"],
      ["03", "Da un aviso previsible"],
      ["04", "Prepara dos actividades siguientes aceptables"],
    ],
    pathEyebrow: "UN LÍMITE. SIETE NOCHES.",
    pathTitle: "Un experimento breve, no un juicio sobre tu forma de criar.",
    pathBody:
      "Cada noche añade una habilidad práctica. Mantienes estable el final, observas qué sucede y cambias una sola variable cada vez.",
    nights: [
      ["1", "Haz visible el final"],
      ["2", "Separa emoción y límite"],
      ["3", "Mejora el puente"],
      ["4", "Alinea a los adultos"],
      ["5", "Aclara las excepciones"],
      ["6", "Da una tarea pequeña"],
      ["7", "Conserva, ajusta o cambia"],
    ],
    scriptsEyebrow: "PALABRAS PARA LA PARTE DIFÍCIL",
    scriptsTitle: "No tienes que inventar la frase a las 7:42 de la noche.",
    scriptsBody:
      "El kit incluye frases breves para los momentos que suelen convertir un límite sencillo en una discusión larga.",
    scriptBefore:
      "Quedan cinco minutos. Cuando termine el temporizador, el dispositivo se guarda aquí. Después puedes elegir una merienda conmigo o Lego en la mesa.",
    scriptPushback:
      "Entiendo que no te guste. El plan sigue igual. ¿Quieres guardarlo tú o te ayudo?",
    pagesEyebrow: "PÁGINAS REALES DEL KIT",
    pagesTitle: "Diseñado para usar, escribir y volver a consultar.",
    pagesBody:
      "No hay capítulos densos de teoría. Las páginas alternan decisiones, frases, registros, ajustes y reparación.",
    previewAlts: [
      "Inicio rápido del kit de reinicio de pantallas en español",
      "Página de reunión familiar de siete minutos del kit en español",
      "Frases para la resistencia del kit en español",
      "Registro de siete noches del kit en español",
    ],
    includedEyebrow: "EL KIT DE ACCIÓN COMPLETO",
    includedTitle: "Todo lo necesario para poner en marcha el plan de siete noches.",
    included: [
      ["01", "Inicio rápido de diez minutos", "Empieza esta noche sin leer primero las 29 páginas."],
      ["02", "Constructor de límites", "Convierte una intención vaga en una regla visible y repetible."],
      ["03", "Plan de siete noches", "Una acción concreta y una observación por noche."],
      ["04", "Frases listas para usar", "Avisos, resistencia, excepciones, errores y reparación."],
      ["05", "Dos rutinas según la edad", "Ejemplos distintos para 6–8 y 9–12 años."],
      ["06", "Herramientas imprimibles", "Etiquetas, acuerdo, registro y menú de alternativas."],
      ["07", "Tabla de ajustes", "Cambia la preparación antes de cambiar la promesa."],
      ["08", "Guía de apoyo", "Reconoce cuándo el plan no basta y qué ayuda buscar."],
    ],
    fitTitle: "Una herramienta concreta para una tarea familiar concreta.",
    forLabel: "Es para ti si…",
    notForLabel: "No está diseñado para…",
    forItems: [
      "El final de las pantallas se convierte en una discusión",
      "Los adultos dan respuestas distintas",
      "Quieres frases e imprimibles, no otro libro largo de teoría",
      "Puedes probar un límite durante siete noches",
    ],
    notForItems: [
      "Diagnosticar o tratar una condición médica o psicológica",
      "Fijar una cantidad universal de pantalla diaria",
      "Prometer obediencia, mejores notas, sueño, ánimo o conducta",
      "Sustituir apoyo profesional individualizado",
    ],
    evidenceTitle: "Con fundamento, sin fingir que todas las familias son iguales.",
    evidenceBody:
      "El proceso toma principios de planificación familiar publicados por la American Academy of Pediatrics y estudios actuales con padres. Separa el uso recreativo de la tarea, la comunicación, la accesibilidad y la creación. Ninguna organización respalda este producto.",
    evidenceLink: "Consulta el plan familiar de la AAP",
    faqEyebrow: "PREGUNTAS ANTES DE EMPEZAR",
    faqTitle: "Los detalles prácticos.",
    faqs: [
      ["¿Es un libro o un cuaderno de trabajo?", "Es un kit de acción de 29 páginas. Incluye orientación breve, frases exactas, hojas de trabajo, rutinas, un registro y páginas de ajustes."],
      ["¿Tengo que prohibir las pantallas durante siete días?", "No. Eliges un solo límite para noches escolares. La tarea, la comunicación, la accesibilidad y la creación se tratan por separado."],
      ["¿Sirve para más de un niño?", "Sí. El acuerdo y las etiquetas tienen espacio para varias personas y dispositivos. Empieza por un punto de fricción compartido cuando sea posible."],
      ["¿Para qué edades está pensado?", "Para familias con niños de 6 a 12 años. Incluye ejemplos distintos para 6–8 y 9–12 años."],
      ["¿Qué recibo?", "Un PDF inmediato en español con 29 páginas A4 para uso personal del hogar. Puedes imprimir copias para tu familia."],
      ["¿Es asesoramiento médico o terapéutico?", "No. Es una herramienta educativa de planificación y comunicación. La página 28 explica cuándo conviene parar y buscar apoyo individualizado."],
    ],
    finalEyebrow: "ESTA NOCHE PUEDE SER MÁS CLARA QUE AYER",
    finalTitle: "Elige un límite. Prepara un puente. Empieza con poco.",
    finalBody:
      "Abre la página de inicio, escribe la regla, prepara la actividad siguiente y haz la primera noche en unos diez minutos.",
    finalCta: "Obtener el kit en español por $12",
    priceLabel: "$12 USD · pago único",
    footerScope: "Herramienta educativa de planificación. No es asesoramiento médico ni psicológico.",
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

export function SalesPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const purchaseUrl = process.env.NEXT_PUBLIC_PURCHASE_URL || "#purchase";
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
          <a className="button button-small" href={purchaseUrl}>{c.navCta}<Arrow /></a>
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
            <div className="hero-actions">
              <a className="button" href={purchaseUrl}>{c.primaryCta}<Arrow /></a>
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

        <section className="quick-section section-shell">
          <div className="quick-copy">
            <p className="eyebrow">{c.quickEyebrow}</p>
            <h2>{c.quickTitle}</h2>
            <p>{c.quickBody}</p>
            <a className="text-link" href={purchaseUrl}>{c.primaryCta}<Arrow /></a>
          </div>
          <ol className="quick-steps">
            {c.quickSteps.map(([number, text]) => <li key={number}><span>{number}</span><p>{text}</p></li>)}
          </ol>
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

        <section className="scripts-section section-shell">
          <div className="scripts-copy">
            <p className="eyebrow">{c.scriptsEyebrow}</p>
            <h2>{c.scriptsTitle}</h2>
            <p>{c.scriptsBody}</p>
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

        <section className="fit-section">
          <div className="section-shell">
            <div className="section-heading"><h2>{c.fitTitle}</h2></div>
            <div className="fit-grid">
              <article className="fit-card fit-card-yes">
                <h3>{c.forLabel}</h3>
                <ul>{c.forItems.map((item) => <li key={item}><Check />{item}</li>)}</ul>
              </article>
              <article className="fit-card fit-card-no">
                <h3>{c.notForLabel}</h3>
                <ul>{c.notForItems.map((item) => <li key={item}><span aria-hidden="true">×</span>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <aside className="evidence-section section-shell">
          <div className="evidence-mark" aria-hidden="true">i</div>
          <div>
            <h2>{c.evidenceTitle}</h2>
            <p>{c.evidenceBody}</p>
            <a className="text-link" href="https://www.healthychildren.org/English/family-life/Media/Pages/How-to-Make-a-Family-Media-Use-Plan.aspx" target="_blank" rel="noreferrer">{c.evidenceLink}<Arrow /></a>
          </div>
        </aside>

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
            </div>
            <div className="final-offer">
              <span>{c.priceLabel}</span>
              <a className="button button-mustard" href={purchaseUrl}>{c.finalCta}<Arrow /></a>
              <small>{c.delivery}</small>
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

      <div className="mobile-purchase-bar">
        <span>$12 USD</span>
        <a className="button button-small" href={purchaseUrl}>{c.navCta}<Arrow /></a>
      </div>
    </main>
  );
}
