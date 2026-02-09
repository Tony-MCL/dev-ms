import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";
import { LINKS } from "../config/links";

type Card = { title: string; body: string };

const ProgressPage: React.FC = () => {
  const { t, lang } = useI18n();

  // RIKTIGE i18n-nøkler (finnes i no.ts/en.ts): progressPage.*
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

  // SEO / læring (hardkodet – kan flyttes til språkfil senere hvis du vil)
  const learnTitle = lang === "no" ? "Lær mer om fremdriftsplaner" : "Learn more about schedules";
  const learnLead =
    lang === "no"
      ? "Vi har skrevet to pedagogiske artikler som forklarer hva en fremdriftsplan er, og hvordan den brukes effektivt i praksis."
      : "Two practical articles explain what a schedule is, and how to use it effectively.";

  const article1Title =
    lang === "no"
      ? "Hva er en fremdriftsplan – og hvorfor er den et av de viktigste verktøyene du kan lære deg?"
      : "What is a schedule – and why is it one of the most important tools you can learn?";
  const article1Cta = lang === "no" ? "Les artikkel 1 →" : "Read article 1 →";

  const article2Title =
    lang === "no"
      ? "Hvordan bruke en fremdriftsplan effektivt – og hva du faktisk har å vinne på det"
      : "How to use a schedule effectively – and what you actually gain from it";
  const article2Cta = lang === "no" ? "Les artikkel 2 →" : "Read article 2 →";

  return (
    <main className="page">
      {/* HERO */}
      <section className="fs-hero">
        <h1>Manage Progress</h1>

        <p className="fs-tagline" style={{ maxWidth: 980 }}>
          {heroTagline}
        </p>

        <p style={{ maxWidth: 980 }}>{heroIntro}</p>

        <div style={{ marginTop: "0.75rem", maxWidth: 980, opacity: 0.9 }}>
          <strong>{heroBadge}</strong>
        </div>

        {/* CTA buttons */}
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
            {lang === "no" ? "Åpne Progress" : "Open Progress"}
          </a>

          <Link className="hero-cta" to="/progress/priser">
            {lang === "no" ? "Se priser" : "See pricing"}
          </Link>

          {/* Behold denne som “kontakt”-CTA (som teksten antyder), eller bytt til /kontakt om du har */}
          <a className="hero-cta" href={LINKS.mcl} rel="noopener noreferrer">
            {heroNotifyCta}
          </a>
        </div>
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

      {/* NEXT */}
      <section className="intro-grid two-columns">
        <div className="intro-card" style={{ gridColumn: "1 / -1" }}>
          <h3 style={{ marginTop: 0 }}>{nextTitle}</h3>
          <p style={{ marginBottom: 0 }}>{nextBody}</p>
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
    </main>
  );
};

export default ProgressPage;
