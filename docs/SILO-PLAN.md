# LoanApp.co.ke (loanapp5) — silo plan

Niche: digital loan comparison, Kenya. "Compare loan apps in Kenya" — rates, limits,
terms across 12+ apps (M-Shwari, Fuliza, KCB M-Pesa, Tala, Branch, Zenka, Timiza,
OKash, Hustler Fund, Eazzy, iPesa, Kashway). Kenya English, KES. YMYL-FINANCIAL
(lending) -> accuracy on rates/fees/regulation is the bar. Monetisation is the
comparison + affiliate/referral to the apps + the calculators; NOT a lead form.

Content: `data/blogPosts*.ts` (~13 posts) + `data/loanApps.ts` (the 12+ app entities =
the commercial pillars). Tool pages: loan-finder, total-cost-calculator, crb-check,
crb-quiz. Decision pages: cbk-licensed, blacklist, sacco-vs-digital. No `/guides`
route yet.

## 0. Architecture prerequisite (Claude Code, before the writer runs)

1. Build `/guides/[slug]/` + `data/guides.ts` with the 10 hubs; hub pages render a
   child-spoke grid by `hub`; align each hub to its tool/decision pillar. Add Guides
   to nav + sitemap.
2. Consolidate the blog data: add `hub: string` + `draft: boolean` to the post type
   across blogPosts*.ts (the aggregator is all-blog-posts.ts); draft gate (draft:true
   404s, excluded from /blog, hub grids, sitemap).
3. Schema: Article + BreadcrumbList + FAQPage on hubs + spokes; for individual
   app-review spokes use Review/Product schema only if backed by a real, disclosed
   rating method (else Article). Author byline = "LAK" (LoanApp Kenya) editorial
   entity, no invented person.
4. Kenya-English + KES sweep.

## 1. The ten pillar hubs (/guides)

| ID | Hub | Pillar/tool |
|---|---|---|
| H1 | Best and cheapest loan apps in Kenya | /loan-finder/ + loanApps.ts |
| H2 | Loan costs, interest and fees | /total-cost-calculator/ |
| H3 | CRB and credit checks | /crb-check/, /crb-quiz/ |
| H4 | Loan app blacklist and defaulting | /blacklist/ |
| H5 | CBK-licensed digital lenders | /cbk-licensed/ |
| H6 | SACCO vs digital loans | /sacco-vs-digital/ |
| H7 | Loan app reviews (Tala, Branch, Zenka...) | each app in loanApps.ts |
| H8 | M-Pesa and mobile loans | M-Shwari, Fuliza, KCB M-Pesa, Hustler Fund, Timiza |
| H9 | Loan eligibility and limits | how to qualify / increase your limit |
| H10 | Loan types and use-cases | emergency, business, salary advance, logbook, student |

## 2. Reserved head terms (owned by tool/pillar pages)

| Reserved | Owned by |
|---|---|
| best/cheapest loan app Kenya | Homepage + /loan-finder/ |
| [app name] (Tala, Branch...) head term | that app's pillar/review page |
| CBK licensed lenders, CRB clearance | the respective decision pages |
Spokes take narrower angles (how-to, comparison, troubleshooting, eligibility).

## 3. Spoke fan-out (~10/hub, Kenya-framed, current figures)

- **H1 best/cheapest:** cheapest loan apps right now; best for bad credit; best instant loans; best with low/no CRB; best for large limits; loan apps without M-Pesa; new loan apps 2026; loan apps that don't list CRB; legit vs fake loan apps.
- **H2 costs:** how loan app interest really works (APR vs flat); hidden fees and rollover; late-payment penalties; total cost example by app; daily vs monthly interest; why your loan costs more than advertised.
- **H3 CRB:** how to check your CRB status (Metropol/TransUnion/Creditinfo); get a CRB clearance certificate; how long a default stays; CRB listing for small amounts; dispute a wrong CRB listing; does checking CRB hurt your score; CRB and loan approval.
- **H4 blacklist/defaulting:** what happens if you don't pay a loan app; can a loan app blacklist you; getting removed from a blacklist; do loan apps take you to court; harassment by loan apps and your rights (Data Protection / DCI); negotiating a settlement.
- **H5 CBK-licensed:** the list of CBK-licensed digital lenders; risks of unlicensed apps; how to verify a lender is licensed; the Digital Credit Providers regulations; what licensing means for borrowers; reporting an illegal lender.
- **H6 SACCO vs digital:** SACCO loans vs app loans; joining a SACCO for cheaper credit; SACCO loan requirements; when a SACCO beats an app; FOSA vs BOSA.
- **H7 app reviews (one per app):** Tala review; Branch review; Zenka review; Timiza review; OKash review; iPesa review; Eazzy Loan review; Kashway review (rates, limits, eligibility, pros/cons, honest, no fabricated user reviews).
- **H8 M-Pesa/mobile loans:** M-Shwari loan and lock savings; Fuliza explained and charges; KCB M-Pesa loan; Hustler Fund (how to borrow, limits, default); Timiza (Absa); qualify for M-Shwari; increase Fuliza limit.
- **H9 eligibility/limits:** why a loan app rejected you; how to increase your loan limit; what apps check before lending; build a borrowing history; eligibility with no payslip; first-time borrower tips.
- **H10 loan types:** emergency loans; business/working-capital loans; salary advance apps; logbook loans; student loans; asset financing; comparing by use-case.

## 4. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub and to the relevant pillar in context (the
  loan-finder, the total-cost-calculator, the app's review page, or the CRB/CBK
  decision page). Vary anchors.
- Hubs link down to spokes + their pillar; sideways to 1-2 adjacent hubs (H1<->H2 cost,
  H3<->H4 CRB/default, H5<->H7 licensing/review, H8<->H1).
- External: max 2/page, one per domain, cite the AUTHORITY first mention (CBK Digital
  Credit Providers register, the CRBs, the app's official terms, Office of the Data
  Protection Commissioner). Every rate/fee dated + "verify, rates change".
- NO fabricated user reviews, ratings, or app data; disclose the affiliate
  relationship; balanced pros/cons; never promise approval.

## 5. Automation (schedulers, mirror essexdental)

- **`loanapp-writer`** (writer): one Kenya-framed loan spoke per run, draft:true,
  under the right hub, schema + up-link + pillar/calculator/app link. Created DISABLED
  until section 0 exists.
- **`loanapp-publisher`** (publisher): flips the oldest parked draft live 2/week;
  enable AFTER a human-reviewed batch (YMYL-financial; rate accuracy + no fake reviews).

## 6. Status tracker

10 hubs (built, /guides live). Spokes: 68 legacy posts mapped live via HUB_MAP
(H1:7 H2:8 H3:6 H4:13 H5:3 H6:0 H7:2 H8:14 H9:7 H10:7) + 1 writer d