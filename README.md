<div align="center">

# 🛡️ CCTV Carindale — Professional Security Camera Installation

**High-converting, modular Astro 5 web platform engineered for local residential and commercial CCTV installation in Carindale (4152) and South-East Brisbane.**

[![Astro](https://img.shields.io/badge/Astro-5.0.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Web3Forms](https://img.shields.io/badge/Web3Forms-API_Integrated-00C48C?style=for-the-badge&logo=fastapi&logoColor=white)](https://web3forms.com/)
[![License](https://img.shields.io/badge/QLD_Licence-Class_1_%26_2-blue?style=for-the-badge&logo=shield&logoColor=white)](https://cctvcarindale.com.au)
[![Compliance](https://img.shields.io/badge/ACMA-Open_Cabler-emerald?style=for-the-badge&logo=checkmarx&logoColor=white)](https://cctvcarindale.com.au)

[🌐 Live Production Site](https://cctvcarindale.com.au) • [📑 Report Issue](https://github.com/mamunaio/robert-astro/issues) • [📞 Contact Dispatch: (07) 3100 0000](tel:0731000000)

</div>

---

## 🚀 Overview

**CCTV Carindale** is an enterprise-grade, lightning-fast landing platform designed to convert local homeowners and business managers seeking professional surveillance installations. 

Built using **Astro 5** static site architecture with clean component separation, this project combines local Australian trust compliance (Queensland Police Service Licensing, ACMA Open Cabler certification, $20M Public Liability insurance) with cutting-edge visual presentation—including dual-theme mode, interactive live camera simulation, real-time quote submission, and fluid micro-animations.

---

## ✨ Key Features

### 🎨 Visual & UI Highlights
* **Command Cyber Dark & Clean Light Themes:** Anti-FOUC (Flash of Unstyled Content) instant localStorage theme detector supporting both cybernetic command-center dark mode and ultra-crisp corporate light mode.
* **Live CCTV OSD Simulation:** Real-time synchronized camera status overlay with live timestamp clock generator (`HH:MM:SS` 24/7 simulator).
* **Interactive Active Deterrence Showcase:** Demonstrates flashing red/blue strobe lights and two-way siren deterrence technologies.
* **Installation Proof & Standards:** Real job-site gallery showcasing wall-mounted Dahua PTZ dome installations (`image8.png`) and clean rack cable management.
* **Brand-Themed Floating Action Button:** Floating Back-to-Top button styled with brand gradient glow ring (`#2563EB` to `#06B6D4`), adaptive light/dark glassmorphic core, and auto-hiding scroll controller.
* **Zero Layout Shift Carousel:** Synchronized hero carousels with matched aspect ratios (`aspect-[941/1304]`) ensuring seamless, jump-free slide cross-fades.

### 💼 Conversion & Lead Capture
* **Zero-Plugin Web3Forms Integration:** Native, direct API integration sending quote inquiries to dispatch via client-configured access keys without heavy WordPress or external form plugins.
* **Pre-filled Package Inquiries:** Clicking package buttons (*4-Camera 4K ColorVu*, *8-Camera Commercial*, etc.) automatically focuses and pre-populates the quote form.
* **Sub-Second Performance:** 100% static pre-rendered HTML delivering near-instant First Contentful Paint (FCP) and perfect Lighthouse performance scores.

---

## 📂 Project Architecture

```text
e:\cctv-carindale-main\
├── public/                          # Static assets, diagrams, and optimized photography
│   ├── image8.png                   # High-reach Dahua PTZ field installation photo
│   ├── Cameras That Fight Back.gif  # Active deterrence animated demonstration
│   ├── 3 Brands In a Single Shot.png# Dahua, Hikvision, and Uniview showcase
│   ├── cctv-blueprint-plan.jpg      # Annotated 4-point perimeter cabling layout
│   ├── cctv-tidy-rack.jpg           # Tidy NVR data rack termination proof
│   ├── zoologo.png                  # Official brand identity badge
│   ├── robots.txt                   # Search engine crawl instructions
│   └── 2014-2026 Service Award.svg  # Customer service excellence badges
├── src/
│   ├── components/                  # Modular Astro component ecosystem
│   │   ├── Header.astro             # Sticky navigation, emergency dispatch callout, theme toggle
│   │   ├── Hero.astro               # Dual-slide synchronized carousel with live OSD
│   │   ├── TrustBadges.astro        # QPS Class 1 & 2 firm credentials and security pills
│   │   ├── ServicesGrid.astro       # 6-card commercial and residential services grid
│   │   ├── ActiveDeterrenceShowcase.astro # Flashing light & siren deterrence feature
│   │   ├── Inclusions.astro         # Installation proof tabs (Camera Mount & Tidy Cabling)
│   │   ├── SystemComparison.astro   # Good / Better / Best CCTV technology tier matrix
│   │   ├── PricingPackages.astro    # Transparent upfront packages (BYO, 4-Cam, 8-Cam)
│   │   ├── ProcessSteps.astro       # 4-stage transparent turnkey installation workflow
│   │   ├── InstallerProfile.astro   # Dedicated local field technician profile & credentials
│   │   ├── LocalCaseStudy.astro     # Real-world Carindale residential installation story
│   │   ├── Reviews.astro            # Verified Google reviews + formatted installer card
│   │   ├── FeaturedAwards.astro     # 10+ consecutive years customer satisfaction awards
│   │   ├── SuburbGrid.astro         # Interactive Brisbane East suburbs serviced pills
│   │   ├── Faq.astro                # 12 accessible accordion FAQs with smooth disclosure
│   │   ├── QuoteForm.astro          # Web3Forms API-powered direct dispatch quote form
│   │   └── Footer.astro             # Compliance footer, ACMA registration, direct phone
│   ├── layouts/
│   │   └── Layout.astro             # Base HTML5 shell, Tailwind config, fonts, floating CTA
│   └── pages/
│       └── index.astro              # Assembled high-conversion single-page application
├── astro.config.mjs                 # Astro configuration with @astrojs/sitemap
└── package.json                     # Dependency manifests and build scripts
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **[Astro 5](https://astro.build/)** | Fast, component-driven Island Architecture for static generation |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first responsive design with custom brand tokens |
| **[Web3Forms API](https://web3forms.com/)** | Zero-backend form handling and customer quote dispatch |
| **[Google Fonts](https://fonts.google.com/)** | *Plus Jakarta Sans* (headlines) and *Inter* (body readability) |
| **Vanilla JavaScript** | Ultra-lightweight reactive tab switchers, scroll controllers, and OSD clocks |

---

## 🚦 Getting Started

### Prerequisites
* **Node.js**: `v18.17.0` or higher
* **npm**: `v9.0.0` or higher

### 1. Clone the Repository
```bash
git clone https://github.com/mamunaio/robert-astro.git cctv-carindale
cd cctv-carindale
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to preview the live application.

### 4. Build for Production
```bash
npm run build
```
Generates a zero-JavaScript-overhead, pre-rendered static site ready for deployment in the `dist/` directory.

### 5. Preview Production Bundle
```bash
npm run preview
```

---

## 📬 Form Integration (Web3Forms)

The quote form in [`src/components/QuoteForm.astro`](src/components/QuoteForm.astro) submits leads directly via the **Web3Forms API**:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="cd39c6a4-dde5-42ea-88e7-8b438916b485" />
  <input type="hidden" name="subject" value="New CCTV Installation Quote Request - Carindale" />
  <input type="hidden" name="from_name" value="CCTV Carindale Dispatch" />
  <!-- Form input fields -->
</form>
```

To redirect inquiries to a different inbox, update the `access_key` parameter with your key generated at [web3forms.com](https://web3forms.com).

---

## 📜 Australian Compliance & Credentials

* **Jurisdiction:** Queensland Police Service Licensing (QPS)
* **Firm Classification:** Class 1 & 2 Security Firm and Equipment Provider
* **Telecommunications:** ACMA Registered Open Cabler with Structured Cat6 Endorsement
* **Coverage:** $20,000,000 Public Liability Insurance Policy
* **Workmanship:** 5-Year Written Cabling Guarantee

---

## 📄 License & Ownership

&copy; 2026 **CCTV Carindale** ([cctvcarindale.com.au](https://cctvcarindale.com.au)). Operated by Zoo Computer Repairs & CCTV. All rights reserved.
