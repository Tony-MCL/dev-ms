import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";

type Card = { title: string; body: string };

const ProgressPage: React.FC = () => {
  const { t, lang } = useI18n();
  const isNo = lang === "no";

  // Riktig “nåværende” oppsett i språkfilene: progressPage.*
  const heroTagline = t<string>("progressPage.hero.tagline");
  const heroIntro = t<string>("progressPage.hero.intro");
  const heroBadge = t<string>("progressPage.hero.badge");
  const heroNotifyCta = t<string>("progressPage.hero.notifyCta");

  const cards: Card[] = [
    {
      title: t<string>("progressPage.cards.oneTruth.title"),
      body: t<string>("progressPage.cards.oneTruth.body"),
    },
    {
      title: t<string>("progressPage.cards.realProjects.title"),
      body: t<string>("progressPage.cards.realProjects.body"),
    },
    {
      title: t<string>("progressPage.cards.print.title"),
      body: t<string>("progressPage.cards.print.body"),
    },
    {
      title: t<string>("progressPage.cards.lowFriction.title"),
      body: t<string>("progressPage.cards.lowFriction.body"),
    },
  ];

  const audienceTitle = t<string>("progressPage.audience.title");
  const audienceBody = t<string>("progressPage.audience.body");

  const nextTitle = t<string>("progressPage.next.title");
  const nextBody = t<string>("progressPage.next.body");
  const backToMcl = t<string>("progressPage.next.back");

  // Midlertidig hardkodet – flyttes til språkfil når alt er stabilt
  const learnTitle = isNo ? "Lær mer om fremdriftsplaner" : "Learn more about schedules";
  const learnLead = isNo
    ? "Vi har skrevet to pedagogiske artikler som forklarer hva en fremdriftsplan er, og hvordan den brukes effektivt i praksis."
    : "Two practical articles explain what a schedule is, and how to use it effectively.";

  const article1Title = isNo
    ? "Hva er en fremdriftsplan – og hvorfor er den et av de viktigste verktøyene du kan lære deg?"
    : "What is a schedule – and why is it one of the most important tools you can learn?";
  const article1Cta = isNo ? "Les artikkel 1 →" : "Read article 1 →";

  const article2Title = isNo
    ? "Hvordan bruke en fremdriftsplan effektivt – og hva du faktisk har å vinne på det"
    : "How to use a schedule effectively – and what you actually gain from it";
  const article2Cta = isNo ? "Les artikkel 2 →" : "Read article 2 →";

  return (
    <main className="page">
      {/* HERO (rolig, uten gamle CTA-knapper) */}
      <section className="fs-hero">
        <h1>Manage Progress</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          {heroTagline}
        </p>

        <p style={{ maxWidth: 980 }}>{heroIntro}</p>

        <p style={{ maxWidth: 980, marginTop: "0.75rem", opacity: 0.9 }}>
          <strong>{heroBadge}</strong>
        </p>

        {/* “Notify” som enkel lenke (ikke knapp) */}
        <p style={{ maxWidth: 980, marginTop: "0.75rem", marginBottom: 0 }}>
          <Link to="/kontakt">{heroNotifyCta}</Link>
        </p>
      </section>

      {/* CARDS */}
      <section className="intro-grid two-columns" style={{ marginTop: 0 }}>
        {cards.map((c) => (
          <div className="intro-card" key={c.title}>
            <h3 style={{ marginTop: 0 }}>{c.title}</h3>
            <p style={{ marginBottom: 0 }}>{c.body}</p>
          </div>
        ))}
      </section>

      {/* AUDIENCE */}
      <section className="intro-grid two-columns">
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>{audienceTitle}</h3>
          <p style={{ marginBottom: 0 }}>{audienceBody}</p>
        </div>
      </section>

      {/* SEO / læring: artikler */}
      <section className="intro-grid two-columns">
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>{learnTitle}</h3>
          <p style={{ marginBottom: 0 }}>{learnLead}</p>
        </div>

        <div className="intro-card">
          <h3 style={{ marginTop: 0 }}>{article1Title}</h3>
          <p style={{ marginBottom: 0 }}>
            <Link to="/progress/fremdriftsplan">{article1Cta}</Link>
          </p>
        </div>

        <div className="intro-card">
          <h3 style={{ marginTop: 0 }}>{article2Title}</h3>
          <p style={{ marginBottom: 0 }}>
            <Link to="/progress/fremdriftsplan-bruk">{article2Cta}</Link>
          </p>
        </div>
      </section>

      {/* NEXT */}
      <section className="intro-grid two-columns">
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>{nextTitle}</h3>
          <p style={{ marginBottom: "0.75rem" }}>{nextBody}</p>
          <p style={{ marginBottom: 0 }}>
            <Link to="/">{backToMcl}</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProgressPage;
