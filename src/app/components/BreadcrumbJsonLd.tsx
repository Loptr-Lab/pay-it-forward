import Script from "next/script";

type BreadcrumbItem = {
  name: string;
  item?: string;
};

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };

  return <Script id="breadcrumb-jsonld" type="application/ld+json">{JSON.stringify(data)}</Script>;
}
