const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://comforthands.care";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ComfortHands",
    url: BASE_URL,
    logo: `${BASE_URL}/images/main-logo.png`,
    description:
      "ComfortHands provides therapeutic gloves and comfort solutions for stress relief, hand comfort, and overall well-being.",
    email: "gioceci18@gmail.com",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
    ],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ComfortHands",
    url: BASE_URL,
    logo: `${BASE_URL}/images/main-logo.png`,
    image: `${BASE_URL}/images/main-logo.png`,
    description:
      "ComfortHands provides therapeutic gloves and comfort solutions for stress relief, hand comfort, and overall well-being.",
    email: "gioceci18@gmail.com",
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
    ],
  };
}
