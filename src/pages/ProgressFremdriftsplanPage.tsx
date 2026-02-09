import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";
import { LINKS } from "../config/links";

function setMeta(title: string, description: string) {
  if (typeof document === "undefined") return;
  document.title = title;

  let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

const ProgressFremdriftsplanPage: React.FC = () => {
  const { lang } = useI18n();
  const isNo = lang === "no";

  const title = isNo
    ? "Hva er en fremdriftsplan – og hvorfor er den et av de viktigste verktøyene du kan lære deg?"
    : "What is a schedule – and why is it one of the most important tools you can learn?";

  const description = isNo
    ? "Lær hva en fremdriftsplan er, hvorfor den gir kontroll og forutsigbarhet, og hvordan den går fra statisk plan til levende styringsverktøy."
    : "Learn what a schedule is, why it creates predictability and control, and how it evolves from a static plan into a living management tool.";

  useEffect(() => {
    setMeta(title, description);
  }, [title, description]);

  return (
    <main className="page">
      <section className="fs-hero">
        <h1>{title}</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          {isNo
            ? "Hvis du noen gang har vært med på et prosjekt som startet med gode intensjoner, men endte i stress, misforståelser og forsinkelser, er sjansen stor for at én ting manglet: en tydelig fremdriftsplan."
            : "If you've ever been in a project that started with good intentions but ended in stress, misunderstandings, and delays, chances are one thing was missing: a clear schedule."}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            marginTop: "1rem",
            alignItems: "center",
          }}
        >
          <Link className="hero-cta" to="/progress">
            {isNo ? "← Tilbake til Progress" : "← Back to Progress"}
          </Link>

          <a className="hero-cta" href={LINKS.progress} rel="noopener noreferrer">
            {isNo ? "Åpne Progress-appen" : "Open the Progress app"}
          </a>

          <Link className="hero-cta" to="/progress/fremdriftsplan-bruk">
            {isNo ? "Videre: Bruk planen effektivt →" : "Next: Use it effectively →"}
          </Link>
        </div>
      </section>

      <section className="intro-grid two-columns" style={{ marginTop: 0 }}>
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Hva er en fremdriftsplan?" : "What is a schedule?"}</h2>
          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "En fremdriftsplan er i sin enkleste form en oversikt som viser hva som skal gjøres, i hvilken rekkefølge og når. Men i praksis er den langt mer enn bare en tidslinje. Riktig brukt er fremdriftsplanen et av de mest kraftfulle verktøyene vi har for å skape struktur, forutsigbarhet og kontroll – uansett fagfelt."
              : "A schedule is, at its simplest, an overview showing what needs to be done, in what order, and when. In practice it's far more than a timeline. Used well, it is one of the most powerful tools we have for structure, predictability, and control—regardless of domain."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Hvorfor trenger vi fremdriftsplaner?" : "Why do we need schedules?"}</h2>
          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Et prosjekt – enten det er bygging av en skole, utvikling av programvare, planlegging av et skoleår eller rehabilitering etter skade – består alltid av mange oppgaver, begrenset tid, begrensede ressurser og mennesker som er avhengige av hverandre."
              : "A project—whether it's building a school, developing software, planning an academic year, or rehabilitation—always involves many tasks, limited time, limited resources, and people who depend on each other."}
          </p>

          <p style={{ marginTop: "0.75rem" }}>
            {isNo ? "Uten en fremdriftsplan skjer ofte det samme:" : "Without a schedule, the same things tend to happen:"}
          </p>

          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "Oppgaver blir gjort i feil rekkefølge" : "Tasks happen in the wrong order"}</li>
            <li>{isNo ? "Viktige aktiviteter blir glemt" : "Important activities are forgotten"}</li>
            <li>{isNo ? "Frister settes uten helhetlig vurdering" : "Deadlines are set without a holistic view"}</li>
            <li>{isNo ? "Ingen har full oversikt" : "No one has the full picture"}</li>
          </ul>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "En fremdriftsplan tvinger oss til å tenke gjennom prosjektet før vi starter. Den gjør det mulig å stille de riktige spørsmålene tidlig, når det fortsatt er enkelt å justere."
              : "A schedule forces us to think the project through before we start. It helps us ask the right questions early—when it's still easy to adjust."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Planleggingsverktøyet (den statiske fasen)" : "The planning tool (the static phase)"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "I mange prosjekter starter fremdriftsplanen som et statisk planleggingsverktøy. Denne fasen undervurderes ofte – men er helt avgjørende."
              : "In many projects, the schedule starts as a static planning tool. This phase is often underestimated—but it's crucial."}
          </p>

          <p style={{ marginTop: "0.75rem" }}>
            {isNo ? "Her brukes planen til å:" : "Here it's used to:"}
          </p>

          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "bryte prosjektet ned i konkrete oppgaver" : "break the project into concrete tasks"}</li>
            <li>{isNo ? "vurdere rekkefølge og avhengigheter" : "assess order and dependencies"}</li>
            <li>{isNo ? "estimere tidsbruk" : "estimate duration"}</li>
            <li>{isNo ? "planlegge bemanning og ressurser" : "plan staffing and resources"}</li>
          </ul>

          <p style={{ marginTop: "0.75rem" }}>
            {isNo
              ? "Derfor brukes fremdriftsplaner ofte som vedlegg i tilbud og anbud, beslutningsgrunnlag for ledelse og eiere, og en felles referanse i tidlig planlegging."
              : "That’s why schedules are often used as attachments in bids, as decision support for management and owners, and as a shared reference early on."}
          </p>

          <p style={{ marginBottom: 0 }}>
            {isNo
              ? "Det er helt vanlig – og helt riktig – at planen i denne fasen deles som PDF. Den fungerer da som et fast bilde av hvordan prosjektet er tenkt gjennomført, gitt dagens forutsetninger."
              : "It’s common—and correct—for this phase to be shared as a PDF. It becomes a fixed snapshot of how the project is expected to run, given today's assumptions."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Når planen møter virkeligheten" : "When the plan meets reality"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Prosjekter lever. Når gjennomføringen starter, melder virkeligheten seg: leveranser blir forsinket, ressurser endres, nye oppgaver dukker opp, noe tar kortere – annet tar lengre."
              : "Projects are living. Once execution starts, reality shows up: deliveries slip, resources change, new tasks appear, some things take less time—others more."}
          </p>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "Da går fremdriftsplanen over i sin neste rolle: et levende styringsverktøy."
              : "That’s when the schedule becomes its next role: a living management tool."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Det levende styringsverktøyet" : "The living management tool"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "En levende fremdriftsplan brukes til å justere tidslinjer når noe endrer seg, se konsekvenser før beslutninger tas, kommunisere status og forventninger, og ta bedre beslutninger underveis."
              : "A living schedule helps you adjust timelines when things change, see consequences before decisions are made, communicate status and expectations, and make better decisions along the way."}
          </p>

          <p style={{ marginTop: "0.75rem" }}>
            {isNo ? "I stedet for å skape stress, gir planen trygghet:" : "Instead of creating stress, it creates safety:"}
          </p>

          <p style={{ marginBottom: 0 }}>
            {isNo
              ? "Du ser hva som påvirkes – og hva som ikke gjør det."
              : "You can see what’s affected—and what isn’t."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Hvem har nytte av fremdriftsplaner?" : "Who benefits from schedules?"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "En vanlig misforståelse er at fremdriftsplaner kun er for prosjektledere. I realiteten trengs de på mange nivåer og i mange fagfelt."
              : "A common misconception is that schedules are only for project managers. In reality, they help across roles and industries."}
          </p>

          <h3 style={{ marginTop: "1rem" }}>
            {isNo ? "Bygg, industri og prosjektarbeid" : "Construction, industry, and project work"}
          </h3>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "Koordinering av aktiviteter" : "Coordination of activities"}</li>
            <li>{isNo ? "Planlegging av rekkefølge og bemanning" : "Order and staffing planning"}</li>
            <li>{isNo ? "Forutsigbar fremdrift" : "Predictable progress"}</li>
          </ul>

          <h3 style={{ marginTop: "1rem" }}>{isNo ? "IT og utvikling" : "IT and development"}</h3>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "Sprintplanlegging" : "Sprint planning"}</li>
            <li>{isNo ? "Leveranser og milepæler" : "Deliveries and milestones"}</li>
            <li>{isNo ? "Avhengigheter mellom oppgaver" : "Dependencies between tasks"}</li>
          </ul>

          <h3 style={{ marginTop: "1rem" }}>
            {isNo ? "Skoler og utdanning" : "Schools and education"}
          </h3>
          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Fremdriftsplaner brukes her på flere nivåer: eiere og administrasjon planlegger skoleår, lærere strukturerer undervisning, og elever/studenter planlegger semester, oppgaver og eksamen."
              : "Schedules are used at multiple levels: administration plans the year, teachers structure teaching, and students plan semesters, assignments, and exams."}
          </p>

          <h3 style={{ marginTop: "1rem" }}>{isNo ? "Helse og rehabilitering" : "Health and rehab"}</h3>
          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Progresjon over tid er helt sentralt: opptrening, rehabiliteringsløp og samhandling. En fremdriftsplan gir struktur og tydelige delmål – ofte avgjørende for motivasjon og mestring."
              : "Progress over time is central: training, rehab programs, collaboration. A schedule gives structure and clear milestones—often key for motivation."}
          </p>

          <h3 style={{ marginTop: "1rem" }}>
            {isNo ? "Privat og alternative bruksområder" : "Personal use"}
          </h3>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "Flytting" : "Moving"}</li>
            <li>{isNo ? "Oppussing" : "Renovation"}</li>
            <li>{isNo ? "Arrangementer" : "Events"}</li>
            <li>{isNo ? "Personlige mål og livsplanlegging" : "Personal goals and planning"}</li>
          </ul>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Hva har du å tjene på det?" : "What do you gain?"}</h2>

          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "bedre kontroll" : "better control"}</li>
            <li>{isNo ? "færre overraskelser" : "fewer surprises"}</li>
            <li>{isNo ? "tydeligere kommunikasjon" : "clearer communication"}</li>
            <li>{isNo ? "mindre stress" : "less stress"}</li>
            <li>{isNo ? "høyere sannsynlighet for å lykkes" : "higher chance of success"}</li>
          </ul>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "Og kanskje viktigst av alt: du går fra å reagere på problemer – til å forutse dem."
              : "And perhaps most importantly: you go from reacting to problems to anticipating them."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Fra teori til praksis" : "From theory to practice"}</h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Vil du prøve dette i praksis? I dag finnes det enkle digitale verktøy som lar deg lage, justere og bruke fremdriftsplaner uten unødvendig kompleksitet."
              : "Want to try this in practice? Today there are simple digital tools that let you create, adjust, and use schedules without unnecessary complexity."}
          </p>

          <p style={{ marginBottom: 0 }}>
            {isNo
              ? "Progress er ett av dem – laget for å være lett å ta i bruk, enten planen er statisk eller levende."
              : "Progress is one of them—designed to be easy to start with, whether your plan is static or living."}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <a className="hero-cta" href={LINKS.progress} rel="noopener noreferrer">
              {isNo ? "Prøv Progress gratis" : "Try Progress for free"}
            </a>
            <Link className="hero-cta" to="/progress/priser">
              {isNo ? "Se priser" : "See pricing"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgressFremdriftsplanPage;
