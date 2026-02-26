import { dbSubjects } from "$lib/db/repository";

export async function GET() {
  const dbSubjectsList = await dbSubjects.find();
  const subjects = dbSubjectsList.map(s => s.id);
  
  if (subjects.length === 0) {
      subjects.push("piks", "eapap", "zet", "atg");
  }

  const pages = ["", "report"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://fri-capsule.web.app/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("")}
  ${subjects
    .map(
      (subject) => `
  <url>
    <loc>https://fri-capsule.web.app/${subject}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
    )
    .join("")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
