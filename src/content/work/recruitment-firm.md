---
title: "Build It, Don't Rent It"
client: "SearcHive"
logo: "/work/searchive/searchive-logo.jpg"
website: "https://searchive.ai"
industry: "Finance Recruitment Startup"
services:
  - CRM
  - Automation
  - Outreach & GTM
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

**The starting point.** A working but entirely manual growth engine. Six disconnected tools, ~30 hours a month of manual admin, and no email authentication in place.

**The design decision.** Rather than wire together a stack of expensive SaaS subscriptions, build bespoke automation into the systems the client already owns.

> [!info] Delivered, at a glance
> - Rejected an expensive SaaS CRM solution in favour of an AI-coded solution with custom connections
> - Saved the team hours of manual CSV updates by building automatic synchronisation for tools and sign-ups
> - This included setting up the daily syncing of **~95,000** critical LinkedIn leads
> - And adding actionable enrichment fields at no extra cost (job-change alerts, email history)
> - Email Outreach _opens_, _clicks_, _replies_ and _bounces_ now automatically land alongside the contact
> - Dashboard features added: live KPI tiles, activity timelines and monitoring of connected data

## The challenge

SearcHive places finance and accounting professionals. The sector has a real talent shortage, which translates into a lot of churn. People move firms constantly. Their work email addresses go stale almost as fast as you can collect them.

The growth engine worked, but as a manual process. There were six tools, none of which were really talking to each other. 

At least 30 hours every month went on the glue work between them. Finding email addresses. Validating them. Building and uploading lists. Making sure that Outreach was going to the right email and not someone who has just bounced in another tool.

There was a strategic aspect too - the founders are building toward an exit. So data that's clean, compliant, and defensible is essential. 

## The approach: build on what they own

The obvious move would have been to recommend a SaaS stack. A proper CRM, an enrichment platform, some middleware to wire it together. This was the recommendation on the table early on.

We evaluated a well-regarded enrichment platform. It worked fine, but we parked it when we discovered pricing was usage-based and scaled with the size of SearcHive's database.

The decision instead: **build the automation into the infrastructure SearcHive already owns.**

They had a custom CRM on Replit. Replit bundles AI-assisted development, hosting, and version control in one place. So rather than renting capability, we built it.

With AI-assisted development, building is fast enough that bespoke beats buy. The client ends up owning the code, the data, the deployment, and the change history outright. No lock-in. No per-seat creep. And it does exactly what they need, rather than 80% of what an off-the-shelf tool does.

What got built:

**A LinkedIn data pipeline.** A background job runs every morning. It pulls SearcHive's LinkedIn connection data into the CRM and flags when someone has changed roles, providing a key lead signal. The job is built to look after itself, with a monitoring view on the dashboard.

**An "is the pipeline alive?" dashboard.** Background jobs fail silently. So the CRM home page now shows three health indicators, one for each feed (LinkedIn sync, campaign behaviour, platform sign-ups). Each one goes green only when data has arrived recently and the last run was clean. Amber if something went wrong. Red if it's gone quiet. Alongside them are live counts: job changes detected, new platform sign-ups, campaign replies. The point is to spot trouble before someone has to firefight it.

**Campaign behaviour flowing into the CRM.** The CRM now records, automatically, what each prospect is doing in an email campaign. Opens, clicks, replies, bounces, unsubscribes. The team didn't have that visibility before. There's also a redesigned activity timeline that an operator can actually work in. Filter by what happened and where it came from, save useful views, export to a spreadsheet.

**Platform sign-ups flowing into the CRM**, built jointly with SearcHive's platform developer. A registration on their product now becomes a flagged contact automatically.

**Deliverability put right.** Diagnosed and fixed the email authentication on the brand domain, which addressed the delivery failures the team had been living with. Stood up a separate, properly warmed domain for cold outreach.

<figure class="case-study-figure">
  <img src="/work/searchive/dashboard-mobile.png" alt="The dashboard on mobile, showing the LeadDelta sync health card with a green healthy status and the Job Changes KPI tile below it." />
  <figcaption>The dashboard indicators on mobile: sync running healthy, with yesterday's flagged role changes.</figcaption>
</figure>

## Results

The headline numbers: around 95,000 LinkedIn profiles synced into the CRM. Brand-domain email authentication fixed, email delivery fixed. A dedicated, warmed cold-outreach domain now in place.

Projected around 30 hours a month of manual work removed.

> [!quote] Ben Davies, COO, SearcHive
> Marc could have sold us another subscription. Instead he built it into the system we already own. The code is ours, the data is ours, no vendor in the middle.

## Services delivered

- Technology strategy and tooling evaluation, with cost modelling at the client's real volume
- Custom development on the client's own stack (CRM features, integrations, monitoring dashboard, background data worker)
- Email deliverability diagnosis and remediation; cold-outreach domain setup
- Data-layer design and an idempotent migration path
- Documentation and handover

> [!tip] Principles that ran through the project
> - Work out the real cost of a tool before recommending it - the cash cost at the client's actual volume and the required tier.
> - Look hard at what's already there before replacing it. A home-built system you understand can be worth more than a polished one you don't.
> - Don't pay for a tool before it's actually doing something. Sequence the spend.
