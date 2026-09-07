import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const read = (relativePath: string) => readFileSync(resolve(projectRoot, relativePath), "utf8");

describe("secure public content shell", () => {
  it("keeps the homepage bilingual and free of the removed third-language selector", () => {
    const home = read("client/src/pages/Home.tsx");
    expect(home).toContain('type Language = "en" | "fr"');
    expect(home).toContain("Canadian English");
    expect(home).toContain("Français canadien");
    expect(home).not.toContain("Haitian Creole");
    expect(home).not.toContain("Créole Haïtien");
  });

  it("uses the privacy-oriented video host and project-managed audio path", () => {
    const media = read("client/src/components/SecureMediaHub.tsx");
    expect(media).toContain("www.youtube-nocookie.com/embed/");
    expect(media).toContain("/manus-storage/Carment_b8735cfc.m4a");
    expect(media).toContain("preload=\"none\"");
  });

  it("limits the public router to the secured shell", () => {
    const app = read("client/src/App.tsx");
    expect(app).toContain('Route path="/" component={Home}');
    expect(app).not.toContain("McGovernInstitute");
    expect(app).not.toContain("LanguageToggle");
  });
});
