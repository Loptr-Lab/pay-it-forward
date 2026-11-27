const site = "https://loptr-lab.github.io/pay-it-forward";
type Crumb = { label: string; href: string };
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.label,
      item: item.href.startsWith("http") ? item.href : `${site}${item.href}`,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
