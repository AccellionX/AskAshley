# Ask Ashley Prototype

Personal brand one-page prototype for **Ashley Russo**, Wealth Management Advisor and founder of Russo Wealth Management. Built with Astro + Tailwind CSS (static output). Forms are visual only.

## Run locally

```bash
cd askashley-prototype
npm install
npm run dev
```

## Deploy to Vercel

Connect this folder as the project root (or set Root Directory to `askashley-prototype`). Zero config — Vercel detects Astro automatically. Build command: `npm run build`. Output: `dist/`.

---

## Placeholders that need real content

### Identity & media assets
| Placeholder | Location | Notes |
|---|---|---|
| `[YouTube channel URL placeholder]` | Footer, JSON-LD `sameAs` | Channel URL not listed on site |
| `PLACEHOLDER_VIDEO_ID` | Podcast & media embed | Reference ID on media page: `c9sGN_Ko4aM` — confirm as “latest talk” |
| `[Calendar embed / booking widget placeholder]` | Contact | Wire Calendly / firm scheduling tool |
| `[Calendar booking URL placeholder]` | Contact CTA | Booking link |
| `[Form ADV / Disclosures placeholder]` | Footer link | Compliance-approved URL |
| `[Required regulatory disclosures and firm information, to be provided by Ashley's compliance team]` | Footer disclosure block | Exact disclosure copy from compliance |

### Brand / logo row
| Placeholder | Location |
|---|---|
| `[Media / event logo placeholder]` × 5 | “As featured in / Spoken at” row |

Confirm preferred outlets/events. From Ashley’s media page (not used as logos yet): CBS, CNBC, Fox, SF Chronicle.

### About — focus areas (confirm with Ashley)
| Placeholder | Example hint shown in UI |
|---|---|
| `[Focus area 1 — confirm with Ashley]` | e.g. Equity compensation for tech professionals |
| `[Focus area 2 — confirm with Ashley]` | e.g. Wealth planning for families |
| `[Focus area 3 — confirm with Ashley]` | e.g. Tax-aware investing |

### Speaking
| Placeholder | Location |
|---|---|
| `[Speaking intro copy placeholder — confirm preferred positioning for corporate and association events]` | Speaking intro |
| `[Speaking topic 1 from Ashley's site]` + description | Topic cards |
| `[Speaking topic 2 from Ashley's site]` + description | Topic cards |
| `[Speaking topic 3 from Ashley's site]` + description | Topic cards |

No dedicated speaking-topics list was found on askashley.com at build time.

### Insights
| Placeholder | Location |
|---|---|
| `[Insight article title placeholder]` × 3 | Insights cards |
| `[Date placeholder]` × 3 | Insights cards |
| `[One-line article summary placeholder]` × 3 | Insights cards |

### Forms
- Newsletter email + Subscribe — **visual only**, no submission
- Contact calendar — placeholder only

---

## Content taken from askashley.com

- **Name:** Ashley Russo  
- **Role / firm:** Wealth management advisor; founder of Russo Wealth Management  
- **Bio:** Three sentences from the podcast page (financial strategist / speaker / founder; Fox, CNBC, CBS; work with Apple, Airbnb, Lyft, Salesforce, ServiceNow)  
- **Media cards:** CBS — Tax Tips That Could Save You Money; CNBC — What is Financial Flexibility; Fox — Celebrating women in finance  

---

## Compliance notes (prototype)

- No performance numbers, return claims, guarantees, or client testimonials  
- Media logos are placeholders only (outlet names noted in README, not rendered as fake logos)  
- Footer disclosure block is always visible  
