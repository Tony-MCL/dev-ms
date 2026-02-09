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

const ProgressFremdriftsplanBrukPage: React.FC = () => {
  const { lang } = useI18n();
  const isNo = lang === "no";

  const title = isNo
    ? "Hvordan bruke en fremdriftsplan effektivt – og hva du faktisk har å vinne på det"
    : "How to use a schedule effectively – and what you actually gain from it";

  const description = isNo
    ? "Praktisk guide: bryt ned prosjektet, avklar avhengigheter, sett realistiske estimater, og bruk planen aktivt som styrings- og kommunikasjonsverktøy."
    : "Practical guide: break down work, clarify dependencies, estimate realistically, and use the schedule actively for management and communication.";

  useEffect(() => {
    setMeta(title, description);
  }, [title, description]);

  return (
    <main className="page">
      <section className="fs-hero">
        <h1>{title}</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          {isNo
            ? "Å lage en fremdriftsplan er én ting. Å bruke den riktig er noe helt annet."
            : "Creating a schedule is one thing. Using it well is another."}
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
          <Link className="hero-cta" to="/progress/fremdriftsplan">
            {isNo ? "← Tilbake: Hva er en fremdriftsplan?" : "← Back: What is a schedule?"}
          </Link>

          <a className="hero-cta" href={LINKS.progress} rel="noopener noreferrer">
            {isNo ? "Åpne Progress-appen" : "Open the Progress app"}
          </a>

          <Link className="hero-cta" to="/progress/priser">
            {isNo ? "Se priser" : "See pricing"}
          </Link>
        </div>
      </section>

      <section className="intro-grid two-columns" style={{ marginTop: 0 }}>
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Første steg: Forstå hva prosjektet faktisk består av" : "Step one: Understand what the project really is"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Det første – og kanskje viktigste – steget i all fremdriftsplanlegging er å bryte prosjektet ned. Store prosjekter feiler sjelden fordi én oppgave er vanskelig. De feiler fordi oppgavene er for grovt definert, sammenhenger ikke er tydelige, og ingen ser helheten."
              : "The first—and perhaps most important—step is breaking the project down. Big projects rarely fail because one task is hard. They fail because tasks are too coarse, relationships are unclear, and no one sees the whole."}
          </p>

          <p style={{ marginTop: "0.75rem" }}>
            {isNo ? "En god plan starter med spørsmålet:" : "A good plan starts with the question:"}
          </p>
          <p style={{ marginTop: "0.25rem", marginBottom: 0 }}>
            <strong>
              {isNo ? "Hva må faktisk gjøres for at prosjektet skal bli ferdig?" : "What actually needs to happen for the project to be finished?"}
            </strong>
          </p>

          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "dele prosjektet opp i håndterbare oppgaver" : "split the project into manageable tasks"}</li>
            <li>{isNo ? "definere milepæler" : "define milestones"}</li>
            <li>{isNo ? "skille mellom hovedoppgaver og deloppgaver" : "separate main tasks and subtasks"}</li>
          </ul>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Rekkefølge og avhengigheter – kjernen i god planlegging" : "Order and dependencies—the core of good planning"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Noen oppgaver kan utføres parallelt. Andre må vente til noe annet er ferdig. Dette er avhengigheter – og det er her mange planer blir for optimistiske."
              : "Some tasks can run in parallel. Others must wait for something to finish. These are dependencies—and this is where many schedules get too optimistic."}
          </p>

          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "kartlegge hva som må skje før noe annet" : "map what must happen before something else"}</li>
            <li>{isNo ? "identifisere kritiske oppgaver" : "identify critical tasks"}</li>
            <li>{isNo ? "forstå hvilke forsinkelser som faktisk får konsekvenser" : "understand which delays actually matter"}</li>
          </ul>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "Du går fra håp-basert planlegging til realistisk planlegging."
              : "You move from hope-based planning to realistic planning."}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Tidsestimater: Fra magefølelse til struktur" : "Estimates: from gut feeling to structure"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Ingen forventer perfekte estimater. Men de bør være gjennomtenkte. Når tidsbruk settes inn i en plan blir antagelser synlige, uenigheter kommer frem tidlig, og risiko kan diskuteres før den inntreffer."
              : "No one expects perfect estimates. But they should be thought through. When you put time into a schedule, assumptions become visible, disagreements surface early, and risk can be discussed before it happens."}
          </p>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "Fremdriftsplanen tvinger oss til å være ærlige: Er dette realistisk – eller bare ønsketenkning?"
              : "A schedule forces honesty: is this realistic—or wishful thinking?"}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Den statiske planen – grunnmuren" : "The static plan—the foundation"}</h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "I starten brukes planen ofte som et statisk dokument. Dette er helt riktig – og helt nødvendig. Den brukes som beslutningsgrunnlag, i tilbud/anbud, for ressursvurdering og kommunikasjon med interessenter."
              : "Early on, the schedule is often a static document. This is correct—and necessary. It’s used for decision-making, bids, resource planning, and stakeholder communication."}
          </p>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo ? "En godt gjennomarbeidet statisk plan gir trygghet: “Vi vet hva vi skal gjøre – og hvorfor.”" : "A well-crafted static plan gives confidence: “We know what we’ll do—and why.”"}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Når gjennomføringen starter: Bruk planen aktivt" : "When execution starts: use it actively"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Når prosjektet går fra planlegging til utførelse handler det om hva som faktisk skjer – og hva konsekvensene blir. Gode prosjektledere bruker planen til å justere underveis, vurdere konsekvenser før beslutninger tas, og kommunisere endringer tydelig."
              : "When a project moves into execution, it’s about what actually happens—and the consequences. Strong leaders use the schedule to adjust, assess impacts before decisions, and communicate changes clearly."}
          </p>

          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
            <li>{isNo ? "justere underveis" : "adjust as you go"}</li>
            <li>{isNo ? "vurdere konsekvenser før beslutninger tas" : "assess consequences before deciding"}</li>
            <li>{isNo ? "kommunisere endringer tydelig" : "communicate changes clearly"}</li>
          </ul>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>
            {isNo ? "Fremdriftsplanen som kommunikasjonsverktøy" : "The schedule as a communication tool"}
          </h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "En god plan skaper felles forståelse, reduserer misforståelser og gjør forventninger tydelige. Når alle ser samme fremdrift, blir samarbeid enklere – og konfliktnivået lavere."
              : "A good plan creates shared understanding, reduces misunderstandings, and makes expectations clear. When everyone sees the same progress, collaboration becomes easier and conflict drops."}
          </p>

          <p style={{ marginBottom: 0, marginTop: "0.75rem" }}>
            {isNo
              ? "Prosjekter som har en plan, men ikke bruker den, ender ofte i ad hoc-endringer og brannslukking. Ironisk nok er det nettopp da man sier: “Vi har ikke tid til å oppdatere planen.”"
              : "Projects that have a plan but don't use it often end up in ad-hoc changes and firefighting. Ironically, that's when people say: “We don't have time to update the plan.”"}
          </p>
        </div>

        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h2 style={{ marginTop: 0 }}>{isNo ? "Gevinsten" : "The payoff"}</h2>

          <p style={{ marginTop: "0.5rem" }}>
            {isNo
              ? "Når fremdriftsplaner brukes riktig – fra planlegging til gjennomføring – blir prosjekter mer forutsigbare, endringer håndteres med ro, beslutninger tas på grunnlag av oversikt, stress reduseres, og kvaliteten øker. Du får kontroll nok til å styre prosjektet, i stedet for å bli styrt av det."
              : "When schedules are used well—from planning through execution—projects become more predictable, changes are handled calmly, decisions are made with visibility, stress drops, and quality rises. You gain enough control to steer the project rather than being steered by it."}
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
            <Link className="hero-cta" to="/progress/oversikt">
              {isNo ? "Se skjermbilder" : "See screenshots"}
            </Link>
            <Link className="hero-cta" to="/progress">
              {isNo ? "Tilbake til Progress" : "Back to Progress"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgressFremdriftsplanBrukPage;
