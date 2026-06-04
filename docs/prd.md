# Product Requirement Document (PRD)

**Project:** Quantum SimpleX Consulting Enterprise Website

**Target Execution Engine:** AI Coding Agent (Claude / Codex)

**Status:** Ready for Implementation

---

## 1. System Overview & Tech Stack

The goal is to build a high-performance, minimalist, responsive B2B website for **Quantum SimpleX Consulting**. The site must load near-instantly, project deep technical authority, and drive corporate leads to a booking calendar.

* **Framework:** Next.js (App Router, Static Site Generation) or Astro.
* **Styling:** Tailwind CSS.
* **Configuration:** The agent must pull all HEX color codes, font families, and visual variables directly from the existing files located in the `designSystem` folder.

---

## 2. Page-by-Page Specifications & Content Mapping

### Page 1: Homepage (`/`)

* **Branding:** Display the firm name **Quantum SimpleX Consulting** prominently in the navigation header and hero anchoring.
* **Hero Section:**
  * *Headline:* **Building the Scaffolding for AI Transformation.**
  * *Subheadline:* High-impact strategic advisory, technical leadership, and workforce upskilling designed to transition organizations from baseline literacy to autonomous operations.
  * *Primary CTA Button:* "View Strategic Offerings" (links to `/services`).
  * *Secondary CTA Button:* "Schedule Briefing" (links to `/book`).

* **The Foundational Philosophy Section:**
  Display the following text prominently in an editorial, high-contrast blockquote layout:

> Most consulting engagements failed not because the strategy was wrong, but because the organization wasn't ready to receive it. You can hand a company the perfect AI roadmap and watch it collect dust, because the people, culture, and workflows weren't ready to execute it. IMHO, that's the real problem with how AI consulting is sold today. It's all strategy and no scaffolding.

### Page 2: Services Grid (`/services`)

* **Section Intro:**

> Services are structured in three levels, each one building the foundation the next level needs. The three levels are sequential by design. You can't transform what you haven't mobilized. You can't mobilize what you haven't inspired. Start wherever your organization actually is, and we'll build from there.

* **Visual Framework:** Render a clean, interactive 3-tier matrix or responsive card grid mapping out the engagement lifecycle:

| Phase / Tier | Core Focus | Included Service Modules |
| --- | --- | --- |
| **LEVEL 1: Inspire** | Speaking & Education to Change Mindset | • **Strategic Keynotes:** High-impact speaking for conferences, boards, and executives to replace hype with concrete mental models.<br>• **Foundational Education:** Comprehensive enterprise workforce upskilling to build deep operational literacy in Big Data, ML, and AI. |
| **LEVEL 2: Mobilize** | Advisory & Alignment to Change Behaviors | • **AI Product Strategy:** Strategic advisory defining, validating, and shaping high-ROI AI initiatives, GTM strategy, and value proposition design.<br>• **Internal AI Adoption:** Custom enablement frameworks and behavioral change programs tracking adoption KPIs to anchor AI workflows into daily work. |
| **LEVEL 3: Transform** | Redesign & Reorganize to Change Operation | • **AI-Centric Workflow:** Deep-dive operational re-engineering auditing legacy bottlenecks and deploying bespoke agentic automation to restructure operations.<br>• **Human-Centric Growth:** Talent ecosystem restructuring, redefining job functions, programmatic reskilling, and corporate narrative management for an AI-augmented future. |

### Page 3: Discovery Call Booking (`/book`)

* **Layout:** Clean, minimalist page container.
* **Functionality:** Embed a standard responsive `iframe` container placeholder configured to load an external scheduling application (e.g., Calendly/SavvyCal).
* **Fallback:** Include a basic contact form mapping fields for: *Name, Corporate Email, Organization, Role, and Brief Project Scope.*

---

## 3. Global Technical & Non-Functional Requirements

* **Responsive Layout:** Mobile-first approach transitioning seamlessly to clean multi-column layouts on desktop screens (≥1024px).
* **Performance Targets:**
  * Pure semantic HTML tags used throughout.
  * Images/icons optimized out of the box.
  * Zero reliance on heavy external client-side JavaScript libraries outside the core framework.

* **Navigation & Footer:**
  * *Header:* Minimalist text navigation containing **Quantum SimpleX Consulting** logo layout, linking to `/`, `/services`, and `/book`.
  * *Footer:* Copyright notice, structural links, and layout slots reserved for professional networks (LinkedIn/GitHub).

---

## 4. Implementation Instructions for the AI Agent

1. Parse the global styles, typography configurations, and color tokens from the files inside the `designSystem` folder to set up your Tailwind configuration file.
2. Build the three core routes (`/`, `/services`, and `/book`) using the semantic text layouts detailed in Section 2.
3. Ensure absolute layout precision and clean margins using standard padding components. No mock content or placeholder `Lorem Ipsum` components should be used.