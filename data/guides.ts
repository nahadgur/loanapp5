// data/guides.ts
// The ten pillar hubs for LoanApp.co.ke (see docs/SILO-PLAN.md section 1). Each
// hub aligns to its tool/decision pillar and renders a child-spoke grid from the
// blog posts whose `hub` equals the hub slug. Live spokes are pulled at render
// time from the blog aggregator; `plannedSpokeTitles` is the editorial roadmap.
//
// YMYL-financial (lending): figures here are framework-level and dated, the
// authority is named on first mention (CBK, the CRBs, the Office of the Data
// Protection Commissioner, the lender's own terms), and we steer to the lender
// and the calculator for exact current rates. No fabricated ratings or app data.

export interface ToolPillar {
  href: string;
  label: string;
}

export interface GuideData {
  slug: string;
  title: string;
  shortTitle: string;
  heroBadge: string;
  reservedKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroDirectAnswer: string;
  keyPoints: string[];
  sections: { heading: string; paragraphs: string[] }[];
  plannedSpokeTitles: string[];
  toolPillars: ToolPillar[];
  adjacentHubSlugs: string[];
  faqs: { question: string; answer: string }[];
  publishedAt: string;
  lastReviewedAt: string;
}

const REVIEWED = '2026-06-12';

export const GUIDES: GuideData[] = [
  {
    slug: 'best-cheapest-loan-apps',
    title: 'Best and Cheapest Loan Apps in Kenya',
    shortTitle: 'Best and cheapest',
    heroBadge: 'Compare and choose',
    reservedKeyword: 'best loan app kenya',
    metaTitle: 'Best and Cheapest Loan Apps in Kenya 2026: How to Compare | LoanApp.co.ke',
    metaDescription:
      'How to find the cheapest loan app in Kenya: comparing the true cost not the headline rate, instant disbursement, large limits and apps that suit bad credit.',
    heroDirectAnswer:
      'There is no single cheapest loan app in Kenya, because the best choice depends on how much you borrow, for how long, and your credit profile. The way to compare honestly is on total cost, meaning interest plus every fee over the full term, not the advertised rate. Run the same amount through two or three apps in the calculator and pick the lowest total you will actually repay.',
    keyPoints: [
      'Compare apps on total repayment over the term, not the headline daily or monthly rate; fees often dwarf the quoted interest.',
      'Instant disbursement, large limits and bad-credit tolerance pull in different directions, so the best app depends on what you need most.',
      'A licensed lender is the floor, not a bonus: borrow only from apps on the CBK Digital Credit Providers register (source: Central Bank of Kenya).',
      'New apps appear constantly; a low rate from an unlicensed or opaque lender is not a saving once collection practices are counted.',
      'We may earn affiliate commission from some apps, which never changes the cost to you or the ranking logic.',
    ],
    sections: [
      {
        heading: 'Why the cheapest app is a moving target',
        paragraphs: [
          'Loan apps compete on the number that looks smallest in an advert, which is rarely the number you end up paying. A low daily rate on a short term can cost more than a higher monthly rate over a longer one, and a facilitation or processing fee charged upfront changes the comparison entirely. The only fair basis is total cost: what leaves your M-Pesa over the full life of the loan.',
          'That total shifts with the amount and the term, so the cheapest app for a KES 2,000 two-week loan is often not the cheapest for a KES 30,000 one-month loan. This is exactly what the total cost calculator is for: feeding the same scenario through several apps so the comparison is like for like rather than advert against advert.',
        ],
      },
      {
        heading: 'Match the app to what you actually need',
        paragraphs: [
          'Speed, size and leniency trade off against each other. If you need money in minutes, the instant mobile-money products win but tend to carry higher effective rates. If you need a large limit, you usually have to build a borrowing history first. If your CRB record is poor, the apps that will still lend often price that risk in. Deciding which of these matters most narrows the field before you compare cost.',
          'The loan finder exists to do that narrowing. Rather than scrolling every app, you filter by what you need, then compare the shortlist on total cost. That two-step approach, narrow then cost-compare, is how you avoid both overpaying and applying to apps that will reject you.',
        ],
      },
      {
        heading: 'Cheap is not cheap if the lender is a problem',
        paragraphs: [
          'A genuinely low rate from a regulated, transparent lender is a saving. A low rate from an unlicensed app that harasses contacts or hides fees is not, because the cost shows up in ways the advert never mentioned. The Central Bank of Kenya licenses digital credit providers, and checking that register is the single best filter against predatory lenders.',
          'We disclose that some apps pay us affiliate commission. That is how the site is funded, and it does not change what you pay or how we rank options, which is always on total cost and licensing rather than commission. Where a cheaper or safer option pays us nothing, it still belongs at the top.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'The cheapest loan apps in Kenya right now',
      'Best loan apps for bad credit',
      'Best instant loan apps',
      'Best loan apps with low or no CRB check',
      'Best loan apps for large limits',
      'Loan apps that work without a smartphone',
      'New loan apps in 2026 and what to check',
      'Legit vs fake loan apps in Kenya',
    ],
    toolPillars: [
      { href: '/loan-finder', label: 'Loan Finder' },
      { href: '/total-cost-calculator', label: 'Total Cost Calculator' },
    ],
    adjacentHubSlugs: ['loan-costs-fees', 'mpesa-mobile-loans'],
    faqs: [
      {
        question: 'Which is the cheapest loan app in Kenya?',
        answer:
          'It depends on the amount, the term and your credit profile, because apps price these differently. Compare on total repayment over the full term rather than the advertised rate; the total cost calculator lets you line up the same scenario across apps.',
      },
      {
        question: 'Are loan apps with the lowest rate always the best?',
        answer:
          'No. A low rate from an unlicensed or opaque app can cost more once fees and aggressive collection are counted. Borrow only from apps on the CBK Digital Credit Providers register, then compare the licensed options on total cost.',
      },
      {
        question: 'Do you earn money from these apps?',
        answer:
          'We may earn affiliate commission from some apps. That funds the site and never changes what you pay or how we rank options, which is based on total cost and licensing.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'loan-costs-fees',
    title: 'Loan App Costs, Interest and Fees in Kenya',
    shortTitle: 'Costs and fees',
    heroBadge: 'What you really pay',
    reservedKeyword: 'loan app interest calculator',
    metaTitle: 'Loan App Interest and Fees in Kenya: The True Cost Explained | LoanApp.co.ke',
    metaDescription:
      'How loan app interest really works in Kenya: flat vs reducing, processing and facilitation fees, rollover and late penalties, and why a loan costs more than advertised.',
    heroDirectAnswer:
      'Most Kenyan loan apps quote a flat fee for a fixed term, not an annual percentage rate, which makes a short loan look cheaper than it is. The real cost is the interest plus every fee, processing, facilitation, insurance and any late penalty, over the actual days you hold the money. Always work out the total you will repay before borrowing, not the advertised rate.',
    keyPoints: [
      'Apps usually charge a flat fee per term rather than an APR, so a 7 to 8 percent monthly-looking fee can be a very high annualised cost.',
      'Processing, facilitation and insurance fees are often charged upfront and are easy to miss in the advertised rate.',
      'Late payment penalties and rollover fees can quickly exceed the original interest if you do not repay on time.',
      'The same KES amount can cost very different totals across apps, which only a like-for-like total comparison reveals.',
      'CBK now regulates digital credit pricing and disclosure; lenders must state charges, so read the terms before accepting.',
    ],
    sections: [
      {
        heading: 'Flat fees, not the APR you are used to',
        paragraphs: [
          'A bank quotes an annual rate; a loan app usually quotes a flat fee for a set term, for example a percentage of the amount for thirty days. The flat fee feels small, but because the term is short, the annualised cost is far higher than the number suggests. Understanding that distinction is the difference between thinking a loan is cheap and knowing what it actually costs.',
          'This is why comparing two apps on their quoted rates can mislead. One app quoting a daily fee and another quoting a monthly fee are not directly comparable until you convert both to the total you would repay for your specific amount and term. The total cost calculator does that conversion so the comparison is honest.',
        ],
      },
      {
        heading: 'The fees hiding behind the rate',
        paragraphs: [
          'The advertised interest is often only part of the price. Many apps add a processing or facilitation fee, sometimes an insurance charge, and these are frequently deducted upfront so you receive less than you borrowed while repaying the full amount plus interest. Counting only the headline rate understates the cost, sometimes substantially.',
          'The Central Bank of Kenya now regulates digital credit providers and requires charges to be disclosed, which means the information is there if you read the terms. The discipline that protects you is simple: before accepting, find the single figure for the total you will repay, including every fee, and judge the loan on that.',
        ],
      },
      {
        heading: 'Late penalties and the rollover trap',
        paragraphs: [
          'The cost of a loan app loan can change after you take it. Missing the due date triggers late-payment penalties, and rolling the loan over to buy time stacks new fees on the old balance. A small loan left to run late can end up costing more in penalties than it ever did in interest, which is how manageable borrowing turns into a debt spiral.',
          'The defence is to size the loan to what you can repay on time and to know the penalty terms before you borrow, not after you miss a payment. If repayment is slipping, contacting the lender about a plan early is almost always cheaper than letting penalties and rollovers compound.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How loan app interest really works: flat vs APR',
      'Hidden fees and rollover charges explained',
      'Late payment penalties on Kenyan loan apps',
      'A total cost example by app',
      'Daily vs monthly interest compared',
      'Why your loan costs more than advertised',
    ],
    toolPillars: [{ href: '/total-cost-calculator', label: 'Total Cost Calculator' }],
    adjacentHubSlugs: ['best-cheapest-loan-apps', 'loan-types-use-cases'],
    faqs: [
      {
        question: 'How is loan app interest calculated in Kenya?',
        answer:
          'Most apps charge a flat fee for a fixed term rather than an annual rate, so a fee that looks small for thirty days is a high annualised cost. Add every fee, processing, facilitation and insurance, to get the real total you will repay.',
      },
      {
        question: 'Why did I receive less than I borrowed?',
        answer:
          'Many apps deduct a processing or facilitation fee upfront, so you receive the amount minus those fees while repaying the full principal plus interest. Check the terms for upfront deductions before accepting.',
      },
      {
        question: 'What happens if I repay a loan app late?',
        answer:
          'Late-payment penalties apply and rolling the loan over adds new fees to the old balance, which can exceed the original interest. Contact the lender about a repayment plan early rather than letting penalties compound.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'crb-credit-checks',
    title: 'CRB and Credit Checks in Kenya',
    shortTitle: 'CRB and credit',
    heroBadge: 'Your credit record',
    reservedKeyword: 'crb clearance kenya',
    metaTitle: 'CRB and Credit Checks in Kenya: Status, Clearance and Disputes | LoanApp.co.ke',
    metaDescription:
      'How CRB works in Kenya: check your status with Metropol, TransUnion or Creditinfo, get a clearance certificate, how long a default lasts, and disputing a wrong listing.',
    heroDirectAnswer:
      'Kenya has three licensed Credit Reference Bureaus, Metropol, TransUnion and Creditinfo, and lenders report your repayment behaviour to them. You can check your own status with any of the bureaus, request a clearance certificate once a default is settled, and dispute a listing you believe is wrong. Being listed is not a permanent blacklist; it is a record that updates as you repay.',
    keyPoints: [
      'Three CBK-licensed bureaus operate in Kenya: Metropol, TransUnion and Creditinfo (source: Central Bank of Kenya).',
      'You are entitled to check your own credit status, and can request a clearance certificate once a defaulted loan is cleared.',
      'A negative listing is a record that updates as you repay, not a lifetime ban from borrowing.',
      'You can dispute an incorrect listing directly with the bureau and the lender that reported it.',
      'Even small mobile-loan defaults can be reported, so clearing a tiny balance can matter more than its size suggests.',
    ],
    sections: [
      {
        heading: 'How CRB listing actually works',
        paragraphs: [
          'A Credit Reference Bureau does not decide whether you get a loan; it holds the record lenders use to decide. When you borrow and repay, lenders report that behaviour to the bureaus, building a history that can be positive as well as negative. Being "listed" with a negative status simply means a default or late payment is on that record, and it is visible to other lenders considering you.',
          'There are three licensed bureaus in Kenya, Metropol, TransUnion and Creditinfo, and you have the right to see your own report. Checking it is the first step whenever a loan is refused for reasons you do not understand, because it tells you what lenders are actually seeing.',
        ],
      },
      {
        heading: 'Clearing a default and getting a certificate',
        paragraphs: [
          'A negative listing is not permanent. Once you settle a defaulted loan, the status updates to reflect that it is cleared, and you can request a clearance certificate from the bureau as proof, which some lenders and employers ask for. The record of the default may still show its history, but the cleared status is what matters for new borrowing.',
          'The practical point is that a small unpaid balance can sit on your record and block much larger future borrowing. Clearing even a tiny mobile-loan default, then obtaining the certificate, can unlock credit worth far more than the amount you settled.',
        ],
      },
      {
        heading: 'Disputing a listing that is wrong',
        paragraphs: [
          'Mistakes happen: a loan you repaid is marked unpaid, or a listing belongs to someone else. You have the right to dispute an incorrect entry, raising it with both the bureau and the lender that reported it, and to have it corrected if the record is wrong. Keeping your repayment confirmations, such as M-Pesa messages, is what makes a dispute quick to resolve.',
          'Checking your own status does not damage your score, so there is no reason to avoid it. Knowing your record, and acting on errors, is how you stay in control of what lenders see rather than discovering a problem only when a loan is refused.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'How to check your CRB status with Metropol, TransUnion and Creditinfo',
      'How to get a CRB clearance certificate',
      'How long a default stays on your CRB record',
      'CRB listing for small amounts',
      'How to dispute a wrong CRB listing',
      'Does checking your CRB hurt your score?',
      'CRB status and loan approval',
    ],
    toolPillars: [
      { href: '/crb-check', label: 'CRB Check Guide' },
      { href: '/crb-quiz', label: 'CRB Quiz' },
    ],
    adjacentHubSlugs: ['loan-app-blacklist', 'cbk-licensed-lenders'],
    faqs: [
      {
        question: 'How do I check my CRB status in Kenya?',
        answer:
          'Request your report from any of the three licensed bureaus, Metropol, TransUnion or Creditinfo. You are entitled to see your own credit record, and checking it does not harm your score.',
      },
      {
        question: 'How do I clear my name from CRB?',
        answer:
          'Settle the defaulted loan, after which the status updates to cleared, then request a clearance certificate from the bureau as proof. A small unpaid balance can block much larger future borrowing, so clearing it is worth it.',
      },
      {
        question: 'Can I dispute a wrong CRB listing?',
        answer:
          'Yes. Raise the dispute with the bureau and the lender that reported it, with proof of repayment such as M-Pesa confirmations, and an incorrect entry can be corrected.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'loan-app-blacklist',
    title: 'Loan App Defaulting, Blacklists and Your Rights',
    shortTitle: 'Defaulting and rights',
    heroBadge: 'If you cannot pay',
    reservedKeyword: 'loan app blacklist kenya',
    metaTitle: 'What Happens If You Default on a Loan App in Kenya, and Your Rights | LoanApp.co.ke',
    metaDescription:
      'What happens when you do not pay a loan app in Kenya: CRB listing, debt collection, your rights under data protection law against contact harassment, and negotiating a settlement.',
    heroDirectAnswer:
      'If you default on a loan app in Kenya, the lender can report you to a CRB and pursue the debt, but it must do so lawfully. Apps are not allowed to harass you or your contacts in ways that breach the Data Protection Act, and the Office of the Data Protection Commissioner has acted against lenders that misuse contact data. You can negotiate a repayment plan or settlement, and you have rights worth knowing.',
    keyPoints: [
      'Defaulting can lead to a negative CRB listing and continued collection, but not to unlawful harassment.',
      'Accessing and using your phone contacts to shame you can breach the Data Protection Act, 2019 (source: Office of the Data Protection Commissioner).',
      'The ODPC has penalised digital lenders for misusing borrowers’ contact data; you can complain to it.',
      'You can usually negotiate a repayment plan or a reduced settlement rather than ignoring the debt.',
      'Ignoring a small default is costly: it grows with penalties and sits on your CRB record blocking future credit.',
    ],
    sections: [
      {
        heading: 'What a lender can and cannot do',
        paragraphs: [
          'A lender you have not repaid is entitled to pursue the debt and to report the default to a Credit Reference Bureau. What it is not entitled to do is harass you or broadcast your debt to your contacts. Kenya’s Data Protection Act, 2019 governs how lenders may use your personal data, and contacting your phonebook to pressure you can breach it.',
          'This matters because contact-shaming was a notorious tactic of unregulated apps. The Office of the Data Protection Commissioner has investigated and penalised digital lenders for misusing borrowers’ contact lists, which establishes that the practice is unlawful, not just unpleasant. Knowing that changes how you respond to threats.',
        ],
      },
      {
        heading: 'Your rights against harassment',
        paragraphs: [
          'If an app threatens to call your contacts, accesses data without a lawful basis, or harasses you, you can complain to the Office of the Data Protection Commissioner, which has the power to act. Keeping evidence, screenshots of messages and call logs, makes a complaint stronger. You do not have to tolerate unlawful collection just because you owe money.',
          'Borrowing only from CBK-licensed providers reduces this risk in the first place, because licensed lenders operate under conditions and oversight that unlicensed apps do not. The licensing check and the data-protection rights work together: one prevents the problem, the other addresses it.',
        ],
      },
      {
        heading: 'Negotiating instead of hiding',
        paragraphs: [
          'The worst response to a debt you cannot pay is silence, because the balance grows with penalties and the default hardens on your CRB record. Most lenders prefer a recovery to a write-off, which gives you room to negotiate a realistic repayment plan or a reduced settlement. Approaching them early, before the account is handed to aggressive collectors, gives you the most leverage.',
          'A settled or restructured debt also lets you clear your CRB status afterwards and rebuild. The path back to borrowing runs through dealing with the debt, not avoiding it, and doing so on terms you negotiate rather than ones imposed in a crisis.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'What happens if you do not pay a loan app',
      'Can a loan app blacklist you?',
      'Getting removed from a blacklist',
      'Do loan apps take you to court?',
      'Harassment by loan apps and your rights',
      'How to stop a loan app calling your contacts',
      'Negotiating a settlement with a loan app',
      'How loan apps use your data and your privacy rights',
    ],
    toolPillars: [{ href: '/blacklist', label: 'Apps to Avoid' }],
    adjacentHubSlugs: ['crb-credit-checks', 'cbk-licensed-lenders'],
    faqs: [
      {
        question: 'What happens if I do not pay a loan app in Kenya?',
        answer:
          'The lender can report the default to a CRB and pursue the debt, and penalties grow the balance. It cannot lawfully harass you or your contacts. Negotiating a repayment plan early is cheaper than ignoring it.',
      },
      {
        question: 'Can a loan app call my contacts if I default?',
        answer:
          'Using your contacts to shame or pressure you can breach the Data Protection Act, 2019. The Office of the Data Protection Commissioner has penalised lenders for this, and you can complain to it with evidence.',
      },
      {
        question: 'Can I negotiate a loan app debt?',
        answer:
          'Usually yes. Most lenders prefer recovery to write-off, so you can often agree a repayment plan or reduced settlement. Approaching them early, before aggressive collection, gives you the most leverage.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'cbk-licensed-lenders',
    title: 'CBK-Licensed Digital Lenders in Kenya',
    shortTitle: 'CBK licensing',
    heroBadge: 'Licensing and safety',
    reservedKeyword: 'cbk licensed digital lenders',
    metaTitle: 'CBK-Licensed Digital Lenders in Kenya: How to Verify a Loan App | LoanApp.co.ke',
    metaDescription:
      'Why CBK licensing matters for loan apps in Kenya, how to verify a lender is on the Digital Credit Providers register, the risks of unlicensed apps and how to report one.',
    heroDirectAnswer:
      'Since 2022, digital credit providers in Kenya must be licensed by the Central Bank of Kenya, and the CBK publishes the register of approved lenders. Borrowing from a licensed app means the lender operates under rules on pricing disclosure and data use; an unlicensed app does not. Always check the lender against the CBK register before you borrow, and report illegal lenders to the CBK.',
    keyPoints: [
      'Digital credit providers must be licensed by the CBK under the framework introduced in 2022 (source: Central Bank of Kenya).',
      'The CBK publishes and updates the list of licensed Digital Credit Providers; verify your app against it.',
      'Licensing brings rules on pricing disclosure and on how borrower data may be used.',
      'Unlicensed apps operate outside that oversight, which is where most predatory pricing and harassment occur.',
      'You can report an unlicensed or abusive lender to the CBK and the Office of the Data Protection Commissioner.',
    ],
    sections: [
      {
        heading: 'What CBK licensing means for you',
        paragraphs: [
          'For years digital lenders operated with little oversight, which is how abusive pricing and contact-harassment spread. That changed when the Central Bank of Kenya was given authority over digital credit providers and required them to be licensed, with a framework introduced in 2022 and the register of approved lenders published since. Licensing is the line between a lender bound by rules and one that is not.',
          'A licensed provider operates under conditions covering how it prices loans, how it discloses charges, and how it may use your personal data. None of that guarantees the cheapest loan, but it means there is a regulator and a rulebook behind the app, which is the baseline of safety worth insisting on.',
        ],
      },
      {
        heading: 'How to verify a lender',
        paragraphs: [
          'Verification is straightforward: the CBK maintains and updates the list of licensed Digital Credit Providers, and you can check whether the app you are about to use appears on it. Because the list is updated as licences are granted or withdrawn, the current register is the authority rather than an older screenshot or a claim in the app store.',
          'A licence is the first filter, applied before you even compare cost. There is little point lining up rates from an app that should not be lending at all, so confirming licensing first, then comparing the licensed options on total cost, is the order that keeps you safe and saves money.',
        ],
      },
      {
        heading: 'Reporting an illegal lender',
        paragraphs: [
          'If an app is not licensed, or a licensed one breaks the rules through hidden charges or data misuse, you can report it. The Central Bank of Kenya is the regulator for digital credit providers, and the Office of the Data Protection Commissioner handles misuse of personal data such as contact harassment. Complaints carry weight, and the ODPC has already acted against lenders.',
          'Reporting protects other borrowers as well as you, and it is part of how the worst apps have been pushed out. The safest position is to borrow only from licensed lenders, keep evidence if something goes wrong, and use the official channels rather than absorbing abuse quietly.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'The list of CBK-licensed digital lenders',
      'Risks of using unlicensed loan apps',
      'How to verify a lender is licensed',
      'The Digital Credit Providers regulations explained',
      'What licensing means for borrowers',
      'How to report an illegal lender',
      'How CBK rules affect mobile loan pricing',
    ],
    toolPillars: [{ href: '/cbk-licensed', label: 'CBK Licensed Apps' }],
    adjacentHubSlugs: ['loan-app-reviews', 'loan-app-blacklist'],
    faqs: [
      {
        question: 'How do I check if a loan app is licensed in Kenya?',
        answer:
          'Check the app against the Central Bank of Kenya’s published list of licensed Digital Credit Providers. The register is updated as licences change, so rely on the current CBK list rather than an app-store claim.',
      },
      {
        question: 'Why does CBK licensing matter?',
        answer:
          'Licensed lenders operate under CBK rules on pricing disclosure and data use, with a regulator behind them. Unlicensed apps do not, which is where most predatory pricing and harassment occur.',
      },
      {
        question: 'How do I report an illegal lender?',
        answer:
          'Report unlicensed lending or rule-breaking to the Central Bank of Kenya, and report data misuse such as contact harassment to the Office of the Data Protection Commissioner. Keep evidence to support the complaint.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'sacco-vs-digital',
    title: 'SACCO Loans vs Digital Loan Apps in Kenya',
    shortTitle: 'SACCO vs digital',
    heroBadge: 'Cheaper credit',
    reservedKeyword: 'sacco vs loan app',
    metaTitle: 'SACCO Loans vs Loan Apps in Kenya: Which Is Cheaper | LoanApp.co.ke',
    metaDescription:
      'SACCO loans vs digital loan apps in Kenya: how SACCO credit is far cheaper, the requirements and waiting, FOSA vs BOSA, and when an app still makes sense.',
    heroDirectAnswer:
      'A SACCO loan is almost always far cheaper than a digital loan app, because SACCOs lend to members at modest interest on reducing balance while apps charge high flat fees for speed. The trade-off is access: a SACCO needs membership, savings and sometimes guarantors, and is slower, while an app is instant. For planned borrowing, a SACCO wins on cost; for a genuine emergency, an app wins on speed.',
    keyPoints: [
      'SACCOs lend to members at relatively low interest, typically on a reducing balance, which is much cheaper than app flat fees.',
      'SACCO borrowing requires membership, a savings record and often guarantors, and is slower than an app.',
      'SACCOs are regulated, with deposit-taking SACCOs supervised by SASRA (source: Sacco Societies Regulatory Authority).',
      'FOSA is the over-the-counter savings and short-term facility; BOSA is the longer-term member loan side.',
      'Apps suit genuine emergencies where speed matters; SACCOs suit planned and larger borrowing where cost matters.',
    ],
    sections: [
      {
        heading: 'Why SACCO credit is cheaper',
        paragraphs: [
          'The gap between a SACCO loan and a loan app is mostly the price of speed. A SACCO is a member-owned society that lends members’ pooled savings back to them at modest interest, usually calculated on a reducing balance so you pay interest only on what you still owe. A loan app lends instantly to strangers and prices that risk and convenience with high flat fees. Over any meaningful amount or term, the SACCO is dramatically cheaper.',
          'Deposit-taking SACCOs are regulated by the Sacco Societies Regulatory Authority, which adds a layer of oversight and member protection. This is structured, lower-cost credit rather than emergency cash, and for borrowing you can plan, that structure is exactly what makes it affordable.',
        ],
      },
      {
        heading: 'The cost of joining and waiting',
        paragraphs: [
          'Cheaper credit comes with conditions. To borrow from a SACCO you generally need to be a member, to have built a savings record over time, and often to provide guarantors who are also members. Loan amounts are commonly tied to a multiple of your savings, and disbursement takes longer than an app. None of this suits a same-day emergency.',
          'Understanding FOSA and BOSA helps here. FOSA, the Front Office Service Activity, is the over-the-counter side offering savings accounts and short-term facilities, more bank-like and quicker. BOSA, the Back Office Service Activity, is the traditional member-loan side where the cheap, savings-linked, guarantor-backed loans sit. Knowing which you are using sets the right expectation on speed and cost.',
        ],
      },
      {
        heading: 'When an app still makes sense',
        paragraphs: [
          'None of this means apps are never the right tool. For a true emergency, a medical bill tonight, where a SACCO simply cannot move fast enough, the instant app loan can be worth its higher cost. The mistake is using an expensive app for borrowing you could have planned through a SACCO at a fraction of the price.',
          'The practical approach is to build a SACCO relationship for planned and larger needs, keeping apps for genuine emergencies and small short-term gaps. That way you pay app prices only when speed is the thing you are actually buying, and SACCO prices the rest of the time.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'SACCO loans vs app loans on cost',
      'Joining a SACCO for cheaper credit',
      'SACCO loan requirements explained',
      'When a SACCO beats a loan app',
      'FOSA vs BOSA explained',
    ],
    toolPillars: [{ href: '/sacco-vs-digital', label: 'SACCO vs Digital' }],
    adjacentHubSlugs: ['best-cheapest-loan-apps', 'loan-costs-fees'],
    faqs: [
      {
        question: 'Is a SACCO loan cheaper than a loan app?',
        answer:
          'Almost always. SACCOs lend to members at modest interest on a reducing balance, while apps charge high flat fees for instant access. For any planned or larger borrowing, the SACCO is far cheaper.',
      },
      {
        question: 'What do I need to borrow from a SACCO?',
        answer:
          'Generally membership, a savings record built over time, and often guarantors who are also members. Loan limits are commonly a multiple of your savings, and disbursement is slower than an app.',
      },
      {
        question: 'What is the difference between FOSA and BOSA?',
        answer:
          'FOSA is the over-the-counter side with savings accounts and short-term facilities, more bank-like and quicker. BOSA is the traditional member-loan side where cheaper savings-linked, guarantor-backed loans sit.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'loan-app-reviews',
    title: 'Loan App Reviews: Tala, Branch, Zenka and More',
    shortTitle: 'App reviews',
    heroBadge: 'App by app',
    reservedKeyword: 'tala review kenya',
    metaTitle: 'Loan App Reviews in Kenya: Tala, Branch, Zenka, Timiza and More | LoanApp.co.ke',
    metaDescription:
      'Honest reviews of Kenyan loan apps: rates, limits, eligibility and pros and cons for Tala, Branch, Zenka, Timiza, OKash, iPesa, Eazzy and more. No fabricated user ratings.',
    heroDirectAnswer:
      'Our app reviews cover the things that decide whether an app suits you: the rate and fees, the limit range, eligibility, disbursement speed, and the honest pros and cons. We do not invent user star ratings or testimonials. Rates and limits change, so each review names the figure as current and points to the app’s own terms and the calculator for your exact cost.',
    keyPoints: [
      'Each review covers rates and fees, limits, eligibility, speed and balanced pros and cons.',
      'We do not publish fabricated user ratings, testimonials or star scores; claims are based on the app’s own terms.',
      'Compare any two apps on total cost for your amount rather than on a headline rate.',
      'Only apps on the CBK Digital Credit Providers register belong in a serious shortlist.',
      'Rates and limits change frequently, so treat any figure as date-stamped and confirm with the lender.',
    ],
    sections: [
      {
        heading: 'What an honest app review covers',
        paragraphs: [
          'A useful loan app review answers the questions that actually decide a borrowing choice: what does it cost in total, how much can you get, who qualifies, how fast does it pay out, and what are the real drawbacks. A review that only lists features, or leans on a star score, does not help you choose. We focus on the figures and the trade-offs, app by app.',
          'Crucially, we do not fabricate user ratings or testimonials. Invented reviews are both misleading and, on a financial product, a clear integrity problem. Where we describe an app’s reputation we frame it as such, and the hard claims, rates, limits and eligibility, come from the app’s own published terms.',
        ],
      },
      {
        heading: 'Reading a review without being misled',
        paragraphs: [
          'Two things keep a review honest in your hands. First, compare on total cost for your specific amount, because the app that is cheapest for a small two-week loan may be dearest for a larger monthly one. Second, treat every rate and limit as a snapshot: apps revise these often, so the figure in a review is a starting point to confirm against the lender before you borrow.',
          'Licensing is the gate before any of this. An app that is not on the CBK register does not belong on your shortlist regardless of its advertised rate, so the review process starts with whether the lender is licensed and only then weighs cost and features.',
        ],
      },
      {
        heading: 'From review to decision',
        paragraphs: [
          'A single review tells you about one app; a decision needs a comparison. Once a couple of apps look plausible from their reviews, the loan finder and the total cost calculator turn that into a like-for-like choice on the number that matters, what you will repay. The review narrows the field; the tools settle it.',
          'Because we may earn affiliate commission from some apps, we state it plainly. It funds the reviews and does not buy a better verdict: an app earns its place through cost, licensing and honest pros and cons, not through what it pays us.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Tala review: rates, limits and eligibility',
      'Branch review: rates, limits and eligibility',
      'Zenka review: rates, limits and eligibility',
      'Timiza review: rates, limits and eligibility',
      'OKash review: rates, limits and eligibility',
      'iPesa review: rates, limits and eligibility',
      'Eazzy Loan vs Timiza for SMEs',
      'Tala vs Branch compared',
    ],
    toolPillars: [
      { href: '/loan-finder', label: 'Loan Finder' },
      { href: '/#compare', label: 'Compare All Apps' },
    ],
    adjacentHubSlugs: ['cbk-licensed-lenders', 'best-cheapest-loan-apps'],
    faqs: [
      {
        question: 'Do your loan app reviews use real user ratings?',
        answer:
          'We do not publish fabricated user ratings, star scores or testimonials. Reviews are based on the app’s own published terms for rates, limits and eligibility, with balanced pros and cons.',
      },
      {
        question: 'Which loan app is best, Tala or Branch?',
        answer:
          'It depends on your amount, term and profile. Compare them on total cost for your specific scenario rather than the headline rate, and check both are on the CBK licensed list first.',
      },
      {
        question: 'Are the rates in reviews current?',
        answer:
          'Apps change rates and limits often, so treat any figure as a date-stamped snapshot and confirm the current number with the lender’s terms before borrowing.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'mpesa-mobile-loans',
    title: 'M-Pesa and Mobile Loans in Kenya',
    shortTitle: 'M-Pesa loans',
    heroBadge: 'Mobile money credit',
    reservedKeyword: 'm-shwari fuliza loan',
    metaTitle: 'M-Pesa Mobile Loans in Kenya: M-Shwari, Fuliza, KCB and Hustler Fund | LoanApp.co.ke',
    metaDescription:
      'How M-Pesa mobile loans work: M-Shwari, Fuliza, KCB M-Pesa, Timiza and the Hustler Fund, with how to qualify, increase limits, and what each really costs.',
    heroDirectAnswer:
      'The mobile-money loans built into M-Pesa, M-Shwari, Fuliza, KCB M-Pesa and Timiza, plus the government Hustler Fund, are the most accessible credit in Kenya because they need no app download and disburse instantly. They differ sharply in cost and structure: Fuliza is a daily-fee overdraft, M-Shwari and KCB M-Pesa are fixed-term loans, and the Hustler Fund is a low-rate government product. Match the product to the need and watch the daily costs.',
    keyPoints: [
      'M-Shwari (Safaricom and NCBA) and KCB M-Pesa are fixed-term loans accessed through the M-Pesa menu.',
      'Fuliza is an overdraft charged a daily access and maintenance fee, so its cost depends on how long you stay overdrawn.',
      'The Hustler Fund is a government digital credit product at a low rate, with limits that grow as you repay (source: Hustler Fund / Government of Kenya).',
      'These products build a limit over time based on your usage and repayment, so qualifying and increasing limits is about history.',
      'Because Fuliza and short loans look small per day, the annualised cost can still be high; size and repay them deliberately.',
    ],
    sections: [
      {
        heading: 'The products built into M-Pesa',
        paragraphs: [
          'The reason mobile-money loans dominate Kenyan borrowing is access: there is nothing to download and the money arrives instantly through a menu most people already use. But they are not one thing. M-Shwari, run with NCBA, and KCB M-Pesa are fixed-term loans with a set fee and a thirty-day-style term. Fuliza is different in kind, an overdraft that completes a transaction when your balance is short and charges a daily fee until you clear it. Timiza, from Absa, is another bank-backed mobile loan.',
          'Treating them as interchangeable is where costs creep in. A fixed-term loan and a daily-fee overdraft behave differently: a small Fuliza balance left running for a week can quietly cost more than a planned M-Shwari loan of the same size, because the fee accrues every day it is outstanding.',
        ],
      },
      {
        heading: 'The Hustler Fund and lower-cost options',
        paragraphs: [
          'The Hustler Fund is the government’s digital credit product, designed to offer credit at a low rate compared with commercial apps, with a personal limit that grows as you borrow and repay. For small amounts it is among the cheapest instant options, and it includes a savings component. Its limits and rules are set by the government and updated, so confirm the current terms rather than relying on launch-era figures.',
          'Across all these products, your limit is earned. The systems build a borrowing limit from your M-Pesa usage and your repayment record, which is why two people see very different limits. Qualifying for more, on M-Shwari, Fuliza or the Hustler Fund, is largely about consistent activity and repaying on time.',
        ],
      },
      {
        heading: 'Keeping the cost under control',
        paragraphs: [
          'The danger with mobile loans is precisely their convenience: borrowing is frictionless, so it is easy to roll one into the next or to lean on Fuliza as if it were free. The per-day or per-term fee looks small, but annualised it is often high, and stacking products is how manageable borrowing becomes a trap. The discipline is to size each loan to what you can repay on the due date and to clear Fuliza quickly.',
          'For anything beyond a tiny short-term gap, comparing the mobile-money option against a fixed-term loan app on total cost is worth the minute it takes. The calculator does it directly, so you borrow through the cheapest route for your amount rather than defaulting to whatever is one tap away.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'M-Shwari loan and lock savings explained',
      'Fuliza explained and its daily charges',
      'KCB M-Pesa loan explained',
      'Hustler Fund: how to borrow, limits and default',
      'Timiza by Absa explained',
      'How to qualify for M-Shwari',
      'How to increase your Fuliza limit',
    ],
    toolPillars: [
      { href: '/total-cost-calculator', label: 'Total Cost Calculator' },
      { href: '/loan-finder', label: 'Loan Finder' },
    ],
    adjacentHubSlugs: ['best-cheapest-loan-apps', 'loan-costs-fees'],
    faqs: [
      {
        question: 'Is Fuliza cheaper than M-Shwari?',
        answer:
          'It depends on how long you borrow. Fuliza charges a daily fee while overdrawn, so a balance left running for days can cost more than a fixed-term M-Shwari loan of the same size. Clear Fuliza quickly and compare on total cost.',
      },
      {
        question: 'How do I increase my mobile loan limit?',
        answer:
          'These products build your limit from your M-Pesa usage and repayment history, so consistent activity and repaying on time grow it. There is no shortcut around building that record.',
      },
      {
        question: 'Is the Hustler Fund cheaper than loan apps?',
        answer:
          'The Hustler Fund is a government product offered at a low rate compared with commercial apps and is among the cheapest instant options for small amounts. Confirm the current limits and terms, as the government updates them.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'loan-eligibility-limits',
    title: 'Loan Eligibility and Limits in Kenya',
    shortTitle: 'Eligibility and limits',
    heroBadge: 'Qualify and grow',
    reservedKeyword: 'increase loan limit kenya',
    metaTitle: 'Loan App Eligibility and Limits in Kenya: Qualify and Increase Your Limit | LoanApp.co.ke',
    metaDescription:
      'Why loan apps reject you, what they check before lending, and how to increase your loan limit in Kenya, including building a borrowing history and borrowing without a payslip.',
    heroDirectAnswer:
      'Loan apps in Kenya decide eligibility and limits from your data, mainly your M-Pesa transaction history, repayment record and how you use the app, not a payslip. You raise your limit by borrowing small amounts and repaying on time, keeping active M-Pesa flows, and staying with an app long enough to build trust. Rejections usually trace back to thin history, a CRB issue, or borrowing too much too soon.',
    keyPoints: [
      'Most apps score you on M-Pesa activity, repayment history and app usage rather than formal income documents.',
      'Limits grow through a track record: borrow modestly, repay on time, repeat.',
      'Common rejection causes are a thin borrowing history, a negative CRB status, or requesting too much too early.',
      'You can borrow without a payslip; consistent M-Pesa flows often matter more to these apps than a formal salary.',
      'Applying to many apps at once does not help and can signal distress; build depth with one or two instead.',
    ],
    sections: [
      {
        heading: 'What apps actually check',
        paragraphs: [
          'Digital lenders rarely ask for a payslip because their model is built on alternative data. They look at your M-Pesa transaction patterns, how regularly money flows in and out, your repayment history with them and on your CRB record, and how you engage with the app. This is why two people with similar incomes can see very different limits: the apps are reading behaviour, not salary.',
          'That has a useful implication. If your formal income is irregular but your M-Pesa is active and your repayments are clean, you can still build meaningful limits. The lever you control is the data the apps read, and the strongest signal in it is repaying on time, every time.',
        ],
      },
      {
        heading: 'How to increase your limit',
        paragraphs: [
          'Limits are earned in steps, not jumps. The pattern that works is to borrow a modest amount you can comfortably repay, repay it on or before the due date, and repeat, letting the app see a clean cycle each time. Trying to leap to a large limit early usually triggers a rejection, because there is no history to justify it.',
          'Consistency beats intensity. Keeping your M-Pesa active, staying with one or two apps long enough to build depth, and never missing a due date does more for your limit than spreading thin applications across many apps. Depth of good history with a few lenders is what unlocks larger borrowing.',
        ],
      },
      {
        heading: 'Why you were rejected',
        paragraphs: [
          'A rejection is information. The usual causes are a thin or absent borrowing history, a negative CRB status from an old default, requesting more than your record supports, or inconsistent M-Pesa activity that gives the app little to score. Often more than one of these is in play. Checking your CRB status is the first diagnostic, because an old unpaid balance is a common silent blocker.',
          'The fix follows the cause: clear a CRB issue, start with a smaller request, and build activity before reapplying. Appealing rarely overturns an automated decision, but improving the underlying signals does, which is why the route back is patience and a clean record rather than reapplying immediately.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Why a loan app rejected you',
      'How to increase your loan limit',
      'What apps check before lending',
      'How to build a borrowing history',
      'Borrowing with no payslip',
      'First-time borrower tips',
      'How to appeal a rejected loan app',
    ],
    toolPillars: [{ href: '/loan-finder', label: 'Loan Finder' }],
    adjacentHubSlugs: ['best-cheapest-loan-apps', 'crb-credit-checks'],
    faqs: [
      {
        question: 'Why do loan apps keep rejecting me?',
        answer:
          'Usually a thin borrowing history, a negative CRB status, requesting too much too soon, or inconsistent M-Pesa activity. Check your CRB status first, then start with a smaller request and build a clean repayment record.',
      },
      {
        question: 'How do I increase my loan limit?',
        answer:
          'Borrow modest amounts and repay on or before the due date, repeatedly, while keeping your M-Pesa active. Limits grow from a track record, so depth of good history with one or two apps beats spreading applications widely.',
      },
      {
        question: 'Can I get a loan app loan without a payslip?',
        answer:
          'Yes. Most apps score M-Pesa activity and repayment behaviour rather than a formal salary, so consistent M-Pesa flows and clean repayments often matter more than a payslip.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
  {
    slug: 'loan-types-use-cases',
    title: 'Loan Types and Use Cases in Kenya',
    shortTitle: 'Loan types',
    heroBadge: 'By what you need it for',
    reservedKeyword: 'emergency loan kenya',
    metaTitle: 'Loan Types in Kenya: Emergency, Business, Salary Advance and More | LoanApp.co.ke',
    metaDescription:
      'Choosing a loan by what you need it for in Kenya: emergency loans, business and working-capital, salary advance, logbook, student and school-fees borrowing compared.',
    heroDirectAnswer:
      'The right loan in Kenya depends on the purpose. An emergency wants speed, so an instant mobile loan fits; school fees or business capital want a lower rate and longer term, where a SACCO or bank often beats an app. Matching the loan type to the use, and the term to the need, is what keeps the cost sensible rather than borrowing fast money for a slow purpose.',
    keyPoints: [
      'Emergencies favour instant mobile loans; planned needs favour cheaper SACCO or bank credit.',
      'Business and working-capital borrowing usually wants a longer term and lower rate than an instant app provides.',
      'Salary advance products bridge to payday and suit salaried workers with predictable income.',
      'Logbook and asset financing use security to unlock larger, longer and cheaper loans than unsecured apps.',
      'For school fees, compare a bank or SACCO loan against digital lenders; the cheaper route is rarely the fastest app.',
    ],
    sections: [
      {
        heading: 'Match the loan to the purpose',
        paragraphs: [
          'Borrowing goes wrong most often when fast, expensive money is used for a slow, predictable need. An instant app loan is the right tool for a genuine emergency where speed is the point, but using it for school fees you knew were coming, or to fund a business over months, means paying emergency prices for planned borrowing. The first question is not which app, but which type of credit the purpose actually calls for.',
          'Once the purpose is clear, the term should match the need. Short-term gaps want short-term products; multi-month needs want multi-month credit so repayments are affordable. Forcing a longer need into a thirty-day app product is how borrowers end up rolling loans over and stacking fees.',
        ],
      },
      {
        heading: 'Emergencies, salary advances and bridges',
        paragraphs: [
          'For a true emergency, a medical bill tonight, the instant mobile and app loans earn their cost because nothing else moves fast enough. Salary advance products serve a related but different need: bridging a salaried worker to payday at a defined cost, which suits predictable income better than open-ended borrowing. Both are about timing rather than large sums.',
          'The discipline with fast credit is to keep it small and short. These products are priced for speed, so the cheapest version of using them is borrowing the minimum you need and repaying it the moment the gap closes, rather than letting a convenient balance linger.',
        ],
      },
      {
        heading: 'Business, school fees and secured borrowing',
        paragraphs: [
          'Larger and longer needs usually have cheaper homes than an app. Working-capital and business borrowing tends to suit bank or SACCO facilities, or asset financing, where the rate and term reflect a planned use. School fees are worth comparing across a bank or SACCO loan and digital lenders, because the cheapest option is seldom the fastest app even when the app is the easiest to reach.',
          'Logbook and asset financing show the value of security: pledging a vehicle or asset unlocks a larger, longer and cheaper loan than an unsecured app can offer, at the cost of putting that asset at risk. For the right purpose, that trade is sensible. The common thread across every type is to choose by purpose and term first, then compare the suitable options on total cost.',
        ],
      },
    ],
    plannedSpokeTitles: [
      'Best emergency loans in Kenya',
      'Business and working-capital loans',
      'Salary advance apps for salaried workers',
      'Logbook loans explained',
      'Student and school-fees borrowing',
      'Asset financing in Kenya',
      'Comparing loans by use case',
    ],
    toolPillars: [{ href: '/loan-finder', label: 'Loan Finder' }],
    adjacentHubSlugs: ['best-cheapest-loan-apps', 'mpesa-mobile-loans'],
    faqs: [
      {
        question: 'What is the best loan for an emergency in Kenya?',
        answer:
          'For a genuine emergency where speed is the point, an instant mobile or app loan fits because nothing else moves as fast. Keep it small and repay it quickly, since these products are priced for speed.',
      },
      {
        question: 'Should I use a loan app for school fees?',
        answer:
          'Compare a bank or SACCO loan against digital lenders first. School fees are usually predictable, so a cheaper, longer-term option often beats a fast app, even though the app is easier to reach.',
      },
      {
        question: 'What is a logbook loan?',
        answer:
          'A logbook loan is secured against your vehicle, which unlocks a larger, longer and cheaper loan than an unsecured app, at the cost of putting the asset at risk if you default. It suits planned, larger borrowing.',
      },
    ],
    publishedAt: REVIEWED,
    lastReviewedAt: REVIEWED,
  },
];

export const GUIDES_BY_SLUG: Record<string, GuideData> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);

export function getGuide(slug: string): GuideData | undefined {
  return GUIDES_BY_SLUG[slug];
}
