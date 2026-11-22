"use client";

import { useEffect, useState } from "react";

type OEmbedResponse = { html?: string; provider_name?: string; error?: string };

export default function ThreadsEmbed({ url, title }: { url: string; title: string }) {
  const [html, setHtml] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const endpoint = `https://graph.threads.com/v1.0/oembed?url=${encodeURIComponent(url)}&maxwidth=500`;
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error("Threads embed unavailable");
        return response.json() as Promise<OEmbedResponse>;
      })
      .then((data) => {
        if (!active || !data.html) throw new Error("Missing embed markup");
        // Keep provider's embed markup, but remove its script tag; load the script separately.
        const markup = data.html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
        setHtml(markup);
      })
      .catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [url]);

  useEffect(() => {
    if (!html) return;
    const script = document.querySelector<HTMLScriptElement>('script[data-threads-embed-loader="true"]');
    if (!script) {
      const loader = document.createElement("script");
      loader.src = "https://www.threads.com/embed.js";
      loader.async = true;
      loader.dataset.threadsEmbedLoader = "true";
      document.body.appendChild(loader);
    } else {
      // Re-insert the provider script to trigger its embed pass after new markup appears.
      const loader = document.createElement("script");
      loader.src = "https://www.threads.com/embed.js";
      loader.async = true;
      document.body.appendChild(loader);
    }
  }, [html]);

  return <div className="threads-embed-shell" aria-label={title}>
    {html ? <div className="threads-embed-content" dangerouslySetInnerHTML={{ __html: html }} /> : failed ? <div className="threads-embed-fallback"><p>Threads embed unavailable in this browser or session.</p><a href={url} target="_blank" rel="noreferrer">Open the original source on Threads ↗</a></div> : <div className="threads-embed-loading" aria-live="polite">Loading original Threads source…</div>}
    <p className="threads-source-link"><a href={url} target="_blank" rel="noreferrer">View source on Threads ↗</a></p>
  </div>;
}
