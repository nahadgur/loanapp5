// lib/schema.ts
// JSON-LD builders for LoanApp.co.ke. One editorial entity (LAK) is the
// author/publisher across hubs and spokes; no invented person and no fabricated
// ratings. Article + BreadcrumbList + FAQPage are emitted on /guides/[slug] and
// /blog/[slug]. App-review spokes use Article (not Review/Product) because there
// is no disclosed, real rating method behind a star score.

export const SITE_URL = 'https://loanapp.co.ke';
export const SITE_NAME = 'LoanApp.co.ke';

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
// "LAK" editorial entity — the byline author/reviewer for every guide and spoke.
const editorialId = `${SITE_URL}/#editorial`;

export const EDITORIAL = {
  id: editorialId,
  byline: 'LAK',
  name: 'LoanApp Kenya Editorial Team',
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: SITE_NAME,
    alternateName: 'LoanApp Kenya',
    url: SITE_URL,
    description:
      'Independent comparison of digital loan apps in Kenya: rates, limits, fees, CRB and CBK licensing. We are not a lender and may earn affiliate commission from some apps.',
    areaServed: { '@type': 'Country', name: 'Kenya' },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': orgId },
    inLanguage: 'en-KE',
  };
}

export function editorialEntitySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': editorialId,
    name: EDITORIAL.name,
    url: `${SITE_URL}/guides`,
    parentOrganization: { '@id': orgId },
    description:
      'Editorial team for LoanApp.co.ke. Loan rates, fees and limits are checked against the lender’s own terms and CBK guidance and dated; figures change, so we link the official source and never publish fabricated user ratings.',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

interface ArticleInput {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function articleSchemaFor({ url, headline, description, datePublished, dateModified }: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    datePublished,
    dateModified,
    author: { '@id': editorialId },
    publisher: { '@id': orgId },
    mainEntityOfPage: url,
    inLanguage: 'en-KE',
  };
}

export function jsonLd(...schemas: unknown[]) {
  return { __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) };
}
