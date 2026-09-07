import { useState } from "react";
import { ChevronDown, Heart, Radio, Scale } from "lucide-react";
import { SecureMediaHub } from "@/components/SecureMediaHub";

type Language = "en" | "fr";

type Translation = {
  en: string;
  fr: string;
};

const copy: Record<string, Translation> = {
  title: { en: "Justice For Barran", fr: "Justice pour Barran" },
  subtitle: {
    en: "A public record for Indigenous rights, dignity, and accountability.",
    fr: "Un dossier public pour les droits, la dignité et la responsabilité des peuples autochtones.",
  },
  identity: {
    en: "The Sovereign Father · Barran · The Sovereign Clan of 23",
    fr: "Le Père Souverain · Barran · Le Clan Souverain de 23",
  },
  mission: {
    en: "This platform preserves a family record, shares verified materials, and invites respectful public attention to the protection of Indigenous children and families.",
    fr: "Cette plateforme conserve un dossier familial, partage des documents vérifiés et invite le public à porter une attention respectueuse à la protection des enfants et des familles autochtones.",
  },
  support: { en: "Support the record", fr: "Soutenir le dossier" },
  about: { en: "About this platform", fr: "À propos de cette plateforme" },
  aboutText: {
    en: "The public record is presented by The Sovereign Father on behalf of Barran and The Sovereign Clan of 23. Personal civilian surnames and private contact details are intentionally excluded from this public interface.",
    fr: "Le dossier public est présenté par le Père Souverain au nom de Barran et du Clan Souverain de 23. Les noms de famille civils et les coordonnées privées sont volontairement exclus de cette interface publique.",
  },
  legal: { en: "Canadian legal framework", fr: "Cadre juridique canadien" },
  legalIntro: {
    en: "The advocacy record is framed around Canadian constitutional and Aboriginal-law authorities. These references are educational and do not replace independent legal advice.",
    fr: "Le dossier de défense s'appuie sur des sources du droit constitutionnel et du droit autochtone canadiens. Ces références sont informatives et ne remplacent pas un avis juridique indépendant.",
  },
  section35: {
    en: "Section 35(1) of the Constitution Act, 1982 recognizes and affirms existing Aboriginal and treaty rights.",
    fr: "Le paragraphe 35(1) de la Loi constitutionnelle de 1982 reconnaît et confirme les droits ancestraux et issus de traités existants.",
  },
  sparrow: {
    en: "R. v. Sparrow is a leading Supreme Court of Canada decision on the protection, interpretation, and justification of section 35 rights.",
    fr: "R. c. Sparrow est un arrêt de principe de la Cour suprême du Canada sur la protection, l'interprétation et la justification des droits protégés par l'article 35.",
  },
  pintea: {
    en: "Pintea v. Johns is cited for the principle that self-represented litigants should receive fair access to the justice system and meaningful procedural assistance.",
    fr: "Pintea c. Johns est cité pour le principe selon lequel les personnes non représentées doivent avoir un accès équitable à la justice et une aide procédurale significative.",
  },
  roncarelli: {
    en: "Roncarelli v. Duplessis is a foundational rule-of-law decision concerning the lawful exercise of public discretion.",
    fr: "Roncarelli c. Duplessis est un arrêt fondamental sur la primauté du droit et l'exercice légal du pouvoir discrétionnaire public.",
  },
  media: { en: "Media and evidence registry", fr: "Registre des médias et des éléments de preuve" },
  mediaIntro: {
    en: "Listen to the supplied recording or view the privacy-oriented video embed. Media controls remain client-side and the video uses YouTube's privacy-enhanced embed domain.",
    fr: "Écoutez l'enregistrement fourni ou visionnez la vidéo intégrée avec une approche axée sur la confidentialité. Les commandes audio restent côté client et la vidéo utilise le domaine d'intégration amélioré de YouTube.",
  },
  contact: { en: "Authorized public contact", fr: "Contact public autorisé" },
  contactText: {
    en: "For verified public correspondence, use only the authorized addresses below.",
    fr: "Pour toute correspondance publique vérifiée, utilisez uniquement les adresses autorisées ci-dessous.",
  },
  footer: { en: "The Sovereign Clan of 23", fr: "Le Clan Souverain de 23" },
  disclaimer: {
    en: "This website is an advocacy and documentation platform, not a substitute for legal advice or emergency services.",
    fr: "Ce site est une plateforme de défense et de documentation; il ne remplace pas un avis juridique ni les services d'urgence.",
  },
};

const legalSources = [
  { key: "section35", href: "https://laws-lois.justice.gc.ca/eng/const/page-16.html" },
  { key: "sparrow", href: "https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/609/index.do" },
  { key: "pintea", href: "https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/16770/index.do" },
  { key: "roncarelli", href: "https://decisions.scc-csc.ca/scc-csc/scc-csc/en/item/7265/index.do" },
] as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = (key: string) => copy[key]?.[language] ?? key;

  return (
    <main className="min-h-screen bg-black text-yellow-300">
      <header className="sticky top-0 z-50 border-b border-yellow-300/30 bg-black/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <a href="#top" className="font-serif text-xl font-bold tracking-wide text-yellow-300">
            Justice For Barran
          </a>
          <nav aria-label="Language selection" className="flex flex-wrap gap-2">
            {(["en", "fr"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`min-h-11 rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 ${
                  language === option
                    ? "bg-yellow-300 text-black"
                    : "bg-black text-yellow-300 hover:bg-yellow-300 hover:text-black"
                }`}
              >
                {option === "en" ? "Canadian English" : "Français canadien"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[78vh] items-center justify-center overflow-hidden px-4 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <svg viewBox="0 0 1200 650" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0 570h1200v80H0z" fill="#6b5a00" />
            <path d="M100 570V310h120V210h80v100h120v260H100Zm700 0V280h120V145h80v135h120v290H800Z" fill="#8f7b00" />
            <path d="M130 310h70v260h-70zm170 0h70v260h-70zm530-30h70v290h-70zm170 0h70v290h-70z" fill="#d4af37" />
            <path d="M205 210h70L240 80zM915 145h70L950 20z" fill="#d4af37" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-200">{t("identity")}</p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-yellow-300 md:text-7xl">{t("title")}</h1>
          <p className="mt-6 text-xl text-yellow-100 md:text-2xl">{t("subtitle")}</p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-yellow-100">{t("mission")}</p>
          <a href="#about" className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-md bg-yellow-300 px-7 py-3 text-lg font-bold text-black transition-colors hover:bg-yellow-200">
            <Heart size={20} aria-hidden="true" />
            {t("about")}
          </a>
        </div>
        <a href="#about" aria-label={language === "en" ? "Scroll to about" : "Faire défiler vers à propos"} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-yellow-300">
          <ChevronDown size={30} aria-hidden="true" />
        </a>
      </section>

      <section id="about" className="border-t border-yellow-300/40 px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-xl border border-yellow-300/50 bg-black p-8">
            <h2 className="font-serif text-4xl font-bold text-yellow-300">{t("about")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-yellow-100">{t("aboutText")}</p>
            <a href="#contact" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-yellow-300 px-5 py-2 font-semibold text-yellow-300 hover:bg-yellow-300 hover:text-black">
              {t("contact")}
            </a>
          </article>
          <article className="rounded-xl border border-yellow-300/50 bg-black p-8">
            <div className="flex items-center gap-3">
              <Scale size={28} aria-hidden="true" />
              <h2 className="font-serif text-3xl font-bold">{t("legal")}</h2>
            </div>
            <p className="mt-5 text-yellow-100">{t("legalIntro")}</p>
            <div className="mt-6 space-y-5">
              {legalSources.map((source) => (
                <a key={source.key} href={source.href} target="_blank" rel="noreferrer" className="block rounded-md border-l-2 border-yellow-300 pl-4 text-yellow-100 hover:text-yellow-300">
                  {t(source.key)}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="media" className="border-t border-yellow-300/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Radio size={32} aria-hidden="true" />
            <div>
              <h2 className="font-serif text-4xl font-bold">{t("media")}</h2>
              <p className="mt-2 max-w-3xl text-yellow-100">{t("mediaIntro")}</p>
            </div>
          </div>
          <SecureMediaHub language={language} />
        </div>
      </section>

      <section id="contact" className="border-t border-yellow-300/40 px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-xl border border-yellow-300/50 p-8 text-center">
          <h2 className="font-serif text-3xl font-bold">{t("contact")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-yellow-100">{t("contactText")}</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="rounded-md bg-yellow-300 px-5 py-3 font-semibold text-black hover:bg-yellow-200" href="mailto:justiceforbarran@gmail.com">justiceforbarran@gmail.com</a>
            <a className="rounded-md border border-yellow-300 px-5 py-3 font-semibold text-yellow-300 hover:bg-yellow-300 hover:text-black" href="mailto:pbjlabor@gmail.com">pbjlabor@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-300/40 px-4 py-10 text-center">
        <p className="font-serif text-2xl font-bold text-yellow-300">{t("footer")}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-yellow-100">{t("disclaimer")}</p>
      </footer>
    </main>
  );
}
