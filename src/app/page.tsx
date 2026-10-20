import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedWork from "@/components/home/FeaturedWork";
import Disciplines from "@/components/home/Disciplines";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import Writing from "@/components/home/Writing";
import Faq from "@/components/home/Faq";
import { site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "Orangewood Labs" },
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressCountry: "IN" },
  sameAs: site.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <Intro />
      <FeaturedWork />
      <Disciplines />
      <Clients />
      <Services />
      <Writing />
      <Faq />
    </>
  );
}
