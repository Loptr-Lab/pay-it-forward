"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui-sdk/react/select";
const activities = [
  ["local music and record shops", "Local music & record shops"],
  ["street art, galleries, and murals", "Art, galleries & murals"],
  ["food and neighborhood cafes", "Food & neighborhood cafes"],
  ["comic shops, toys, and collectibles", "Comics, toys & collectibles"],
  ["parks and photography", "Parks & photography"],
  ["a show or live music", "Live music"],
  ["a low-sensory or quiet experience", "Quiet / low-sensory experience"],
];
export default function AdventureBuilder() {
  const [artist, setArtist] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [activity, setActivity] = useState(activities[0][0]);
  const [budget, setBudget] = useState("free or low-cost");
  const [company, setCompany] = useState("solo or open invitation");
  const [accessNeeds, setAccessNeeds] = useState("");
  const [copied, setCopied] = useState(false);\n  const sidekickMessage = copied ? "QUEST DATA STOLEN. GO MAKE TROUBLE." : (artist || location || interests) ? "SIGNAL LOCKED. LET’S FIND SOMETHING WEIRD." : "WHAT’S THE PLAN, HUMAN? GIVE ME A PLACE OR A FEELING.";
  const prompt = [
    "Build a PLAY IT FORWARD adventure around independent music and discovery.",
    "Artist: " + (artist || "Choose an independent artist"),
    "Location: " + (location || "Online or location-flexible"),
    "Interests: " + (interests || "Music and creative exploration"),
    "Starting point: " + activity,
    "Budget: " + budget,
    "Who might join: " + company,
    "Accessibility and practical needs: " + (accessNeeds || "Offer accessible alternatives and note details that need verification"),
    "",
    "Create a welcoming, achievable plan with optional steps. Suggest relevant local experiences, such as music, record shops, art, food, comics, parks, transit, or a show, when they fit. Provide direct artist-support links and practical transport/access information. Do not invent venues, events, affiliations, hours, prices, or facts; flag details that need verification. No ticket, purchase, account, posting, or existing friend group should be required. Include a title, step-by-step adventure, optional invitation, reflection prompt, and one idea to pass it forward."
  ].join("\n");
  async function copyPrompt() {
    try { await navigator.clipboard.writeText(prompt); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  }
  return (
    <section className="adventure-builder-section" id="make-an-adventure" aria-labelledby="builder-title">\n        <div className="danger-mobile" role="status" aria-live="polite">
          <div className="danger-mobile-avatar" aria-hidden="true"><span className="danger-antenna"/><span className="danger-eye danger-eye-left"/><span className="danger-eye danger-eye-right"/><span className="danger-mouth"/><span className="danger-bolt danger-bolt-left"/><span className="danger-bolt danger-bolt-right"/></div>
          <div className="danger-mobile-copy"><span className="danger-mobile-label">DANGER MOBILE // COMPANION MODULE</span><strong>{copied ? "QUEST ACQUIRED" : (artist || location || interests) ? "SIGNAL LOCKED" : "QUEST SYSTEM ONLINE"}</strong><p>{sidekickMessage}</p></div>
          <span className="danger-mobile-status" aria-hidden="true">●</span>
        </div>
      <div className="builder-intro">
        <p className="eyebrow">PLAY IT FORWARD · MAKE IT YOURS</p>
        <h2 id="builder-title">BUILD AN<br/><em>ADVENTURE.</em></h2>
        <p>Start with an artist, a place, or a feeling. Make a plan for exploring at your own pace. Nothing is sent or posted.</p>
      </div>
      <div className="builder-panel">\n        <div className="danger-mobile" role="status" aria-live="polite">\n          <div className="danger-mobile-avatar" aria-hidden="true"><span className="danger-antenna"/><span className="danger-eye danger-eye-left"/><span className="danger-eye danger-eye-right"/><span className="danger-mouth"/></div>\n          <div className="danger-mobile-copy"><span className="danger-mobile-label">DANGER MOBILE // COMPANION MODULE</span><strong>{copied ? "QUEST ACQUIRED" : (artist || location || interests) ? "SIGNAL LOCKED" : "QUEST SYSTEM ONLINE"}</strong><p>{sidekickMessage}</p></div>\n          <span className="danger-mobile-status" aria-hidden="true">●</span>\n        </div>
        <div className="builder-fields">
          <label className="builder-field">Artist or band<input value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist name (optional)" /></label>
          <label className="builder-field">City or region<input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, neighborhood, or leave blank" /></label>
          <label className="builder-field">Interests<textarea value={interests} onChange={(e) => setInterests(e.target.value)} rows={2} placeholder="Anything you want to explore…" /></label>
          <div className="builder-field sdk-field"><span className="builder-field-label">Start with</span>
            <Select value={activity} onValueChange={(value) => setActivity(Array.isArray(value) ? value[0] ?? activities[0][0] : value ?? activities[0][0])}><SelectTrigger className="builder-select-trigger" aria-label="Adventure starting activity"><SelectValue /></SelectTrigger><SelectContent>{activities.map(([value,label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select>
          </div>
          <div className="builder-field sdk-field"><span className="builder-field-label">Budget</span>
            <Select value={budget} onValueChange={(value) => setBudget(Array.isArray(value) ? value[0] ?? "free or low-cost" : value ?? "free or low-cost")}><SelectTrigger className="builder-select-trigger" aria-label="Adventure budget"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="free or low-cost">Free or low-cost</SelectItem><SelectItem value="flexible">Flexible</SelectItem><SelectItem value="set a budget before suggesting activities">Set a budget</SelectItem></SelectContent></Select>
          </div>
          <div className="builder-field sdk-field"><span className="builder-field-label">Who might join?</span>
            <Select value={company} onValueChange={(value) => setCompany(Array.isArray(value) ? value[0] ?? "solo or open invitation" : value ?? "solo or open invitation")}><SelectTrigger className="builder-select-trigger" aria-label="Who might join the adventure"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="solo">Solo</SelectItem><SelectItem value="invite a friend">Invite a friend</SelectItem><SelectItem value="open invitation, opt-in">Open invitation (opt-in)</SelectItem><SelectItem value="community group">Community group</SelectItem></SelectContent></Select>
          </div>
          <label className="builder-field">Accessibility or practical needs<textarea value={accessNeeds} onChange={(e) => setAccessNeeds(e.target.value)} rows={2} placeholder="Mobility, sensory, timing, transit, or other needs (optional)" /></label>
        </div>
        <div className="builder-output">
          <div className="builder-output-head"><h3>Your adventure prompt</h3><button className="button primary" type="button" onClick={copyPrompt}>{copied ? "COPIED ✓" : "COPY PROMPT"}</button></div>
          <textarea aria-label="Generated adventure prompt" className="builder-prompt" value={prompt} readOnly rows={13}/>
          <p className="builder-note" role="status">{copied ? "Copied to clipboard. Use it with your chosen assistant—or edit it yourself." : "This preview updates as you make choices. It stays on this page until you copy it."}</p>
        </div>
      </div>
    </section>
  );
}
