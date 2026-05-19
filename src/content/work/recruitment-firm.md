---
title: "Build It, Don't Rent It"
client: "SearcHive"
logo: "/work/searchive/searchive-logo.jpg"
website: "https://searchive.ai"
industry: "Finance & accounting recruitment startup"
services:
  - CRM
  - Automation
  - Email & Outreach
stats:
  - value: "Deliverability Fixed"
    label: "Brand-domain email authentication put right"
  - value: "Workflow Connected"
    label: "Platform and campaign data flowing through webhooks"
  - value: "Data Untangled"
    label: "Six tools' worth of admin landing in one owned system"
# testimonial:
#   quote: "MP actually listened to what we needed, not just sold us what he wanted to build."
#   attribution: "Ben Davies, COO, SearcHive"
featured: true
order: 1
---

**The brief in a line.** A working but entirely manual growth engine. Six disconnected tools, around 35 hours a month of hand-cranked admin, and email deliverability quietly eroding. Rather than wire together another stack of SaaS subscriptions, build bespoke automation into the systems the client already owns.

> [!info] At a glance
> - Cold-email tool wired in so opens, clicks, replies and bounces land alongside each contact in the CRM
> - Cold-outreach sender reputation protected on a separately warmed domain, with brand-domain email authentication put right
> - **~95,000** LinkedIn profiles flowing into the CRM
> - CRM contacts on the live LinkedIn feed: **~10,500 → ~28,200**
> - Replaced a paid SaaS subscription, same job for less, no lock-in
> <!-- Candidates to shortlist later (cull before publish): -->
> - Live KPI tiles on the CRM home page tracking job changes flagged, new sign-ups, and campaign replies
> - A run of CRM upgrades: redesigned activity timeline, saved views, exports, dashboard
> - Multiple CRM features built into the system they already own, not stitched together from third-party tools
> - Product sign-ups landing in the CRM as flagged contacts the moment someone joins
> - Key tools now linked end to end: LinkedIn data, campaign behaviour, and platform sign-ups all feeding one CRM
> - LeadDelta chosen as the enrichment tool after evaluation, now delivering **~28,200** enriched contacts

## The challenge

SearcHive places finance and accounting professionals. The sector has a real talent shortage, which translates into a lot of churn. People move firms constantly. Their work email addresses go stale almost as fast as you can collect them.

The growth engine worked. But it was held together by hand. There were six tools, and none of them really talked to each other. LinkedIn Sales Navigator. A LinkedIn outreach tool. A cold-email platform. An email finder. An email validator. A CRM the team had built themselves on Replit.

Roughly 35 hours every month went on the glue work between them. Finding email addresses. Validating them. Building lists. De-duplicating across team members so two recruiters didn't approach the same person. Chasing bounces.

Email coverage sat at around 60%. Deliverability was degrading too. Part of the reason was that the brand domain's email authentication (SPF, DKIM, DMARC) was misconfigured in ways nobody had spotted. A chunk of legitimate mail was quietly landing in spam.

There was a strategic overlay as well. The founders are building toward an exit. So data that's clean, compliant, and defensible isn't a nice-to-have. It's part of what the business is worth.

## The approach: build on what they own

The obvious move would have been to recommend a SaaS stack. A proper CRM, an enrichment platform, some middleware to wire it together. There was a recommendation along those lines on the table early on.

It evolved as the options got tested. Which is the point of testing. One of the leading candidates was a well-regarded enrichment platform. We evaluated it. It worked fine. We parked it. The pricing was usage-based and scaled with the size of SearcHive's database, and going with it would have meant their prospect data living inside a vendor's system.

The decision instead: **build the automation into the infrastructure SearcHive already owns.**

They had a custom CRM on Replit. Replit bundles AI-assisted development, hosting, and version control in one place. So rather than renting capability, we built it. Bespoke features in their app, on their database, in their git history.

With AI-assisted development, building is fast enough that bespoke beats buy. The client ends up owning the code, the data, the deployment, and the change history outright. No lock-in. No per-seat creep. And it does exactly what they need, rather than 80% of what an off-the-shelf tool does.

What got built:

**A LinkedIn data pipeline.** A background job runs every morning. It pulls SearcHive's LinkedIn connection data into the CRM and flags when someone has changed roles. That's a recruitment signal, not just data hygiene. The job is built to look after itself. It recovers from interruptions, retries when something fails, copes with bad data, and shows a clear status on the dashboard when it can't. Around 95,000 profiles have flowed through it. CRM contacts on the live feed climbed from about 10,500 to about 28,200. A backlog of roughly 18,000 unmatched profiles was worked down and reconciled. The pipeline also replaced a paid LinkedIn-automation subscription, doing the same job for less and without the lock-in.

**An "is the pipeline alive?" dashboard.** Background jobs fail silently. So the CRM home page now shows three health indicators, one for each feed (LinkedIn sync, campaign behaviour, platform sign-ups). Each one goes green only when data has arrived recently and the last run was clean. Amber if something went wrong. Red if it's gone quiet. Alongside them are live counts: job changes detected, new platform sign-ups, campaign replies. The point is to spot trouble before someone has to firefight it.

<figure class="case-study-figure">
  <img src="/work/searchive/dashboard-mobile.png" alt="The SearcHive CRM dashboard on mobile, showing the LeadDelta sync health card with a green healthy status and the Job Changes KPI tile below it." />
  <figcaption>The CRM home page on mobile: sync running healthy, with yesterday's flagged role changes.</figcaption>
</figure>

**Campaign behaviour flowing into the CRM.** The CRM now records, automatically, what each prospect is doing in an email campaign. Opens, clicks, replies, bounces, unsubscribes. The team didn't have that visibility before. There's also a redesigned activity timeline that an operator can actually work in. Filter by what happened and where it came from, save useful views, export to a spreadsheet.

**Platform sign-ups flowing into the CRM**, built jointly with SearcHive's platform developer. A registration on their product now becomes a flagged contact automatically.

**Deliverability put right.** Diagnosed and fixed the email authentication on the brand domain, which addressed the delivery failures the team had been living with. Stood up a separate, properly warmed domain for cold outreach.

> [!tip] Principles that ran through the project
> - Work out the real cost of a tool before recommending it. The cash cost at the client's actual volume, not the sticker price.
> - Look hard at what's already there before replacing it. A home-built system you understand can be worth more than a polished one you don't.
> - Don't pay for a tool before it's actually doing something. Sequence the spend.

## Results

The headline numbers: around 95,000 LinkedIn profiles synced into the CRM, contacts on the live feed climbing from about 10,500 to about 28,200, and a backlog of roughly 18,000 unmatched profiles worked down and reconciled. Brand-domain email authentication fixed, addressing the delivery failures the team had been living with. A dedicated, warmed cold-outreach domain now in place.

Projected (and being measured as the engagement closes out): around 27 hours a month of manual work removed, worth roughly £10,000 a year in time. Email coverage moving from 60% to 85%. Response rates roughly doubling. An estimated extra 13 placements a year on the back of better data and protected deliverability.

There's a structural shift behind the numbers. SearcHive's growth engine isn't a pile of subscriptions held together by hand any more. It's their own system, documented, with an audit trail, and they own it. That matters more than it might sound when there's an exit on the horizon.

> [!quote] Ben Davies, COO, SearcHive
> He could have sold us another subscription. Instead he built it into the system we already own. The code is ours, the data is ours, no vendor in the middle.

## Services delivered

- Technology strategy and tooling evaluation, with cost modelling at the client's real volume
- Custom development on the client's own stack (CRM features, integrations, monitoring dashboard, background data worker)
- Email deliverability diagnosis and remediation; cold-outreach domain setup
- Data-layer design and an idempotent migration path
- Documentation and handover
