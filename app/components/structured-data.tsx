export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Venuka Ranasinghe",
    url: "https://venukar.github.io",
    image: "https://venukar.github.io/og.png",
    jobTitle: "Computer Science Student",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "Informatics Institute of Technology",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Westminster",
    },
    sameAs: [
      "https://github.com/venukaranasinghe",
      "https://twitter.com/venuka_r",
      "https://linkedin.com/in/venuka-ranasinghe",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
    knowsAbout: [
      "Software Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Computer Science",
      "Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Venuka Ranasinghe Portfolio",
    url: "https://venukar.github.io",
    description: "Computer Science student portfolio showcasing projects and skills",
    author: {
      "@type": "Person",
      name: "Venuka Ranasinghe",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
