<div align="center">

# 🩺 Doctris — Healthcare Platform Monorepo

**A modern, dual-application healthcare template built with Next.js 16, React 19, and MUI 9**

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat&logo=react)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-9.5-007FFF?style=flat&logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey?style=flat)]()

[Overview](#-overview) · [Apps](#-applications) · [Architecture](#-architecture) · [Data Model](#-data-model--er-diagram) · [Structure](#-project-structure) · [Getting Started](#-getting-started) · [Features](#-feature-matrix)

</div>

---

## 📖 Overview

**Doctris** is a two-application healthcare UI suite for hospitals, clinics, and pharmacies, split into independently runnable Next.js projects that share one conceptual domain model (patients, doctors, appointments, invoices, pharmacy orders):

| App | Role | Audience |
|---|---|---|
| 🛠️ **[`Admin/`](Admin)** | Hospital/clinic back-office dashboard | Hospital staff, doctors, administrators |
| 🌐 **[`Landing/`](Landing)** | Marketing site + patient/doctor self-service portal | Patients, prospective doctors, public visitors |

Both apps are UI-complete templates driven by static mock data (`src/data/data.js`), designed to be wired to a real API/database — see the [data model](#-data-model--er-diagram) below for the schema that layer should implement.

---

## 🧩 Applications

### 🛠️ Admin Dashboard (`Admin/`)

The internal operations console for running a hospital or clinic.

- Patient & doctor records (CRUD UI, profile pages)
- Appointment scheduling with **FullCalendar** (month/week/day views, drag-and-drop)
- Billing: invoices, invoice lists, checkout
- Pharmacy mini-shop: product catalog, product detail, cart, checkout
- Internal chat/messaging between staff
- Email client UI (inbox, compose, alerts, confirmation/invoice/password-reset templates)
- Analytics dashboard with **MUI X Charts**
- Auth flows: login, signup, forgot/reset password, lock screen
- Full UI kit: alerts, avatars, badges, buttons, dropdowns, forms, icons, modals, pagination, shadows, tooltips/popovers, typography
- Theming: light/dark + multiple sidebar skins (colored, dark)

### 🌐 Landing & Patient Portal (`Landing/`)

The public-facing marketing site plus logged-in dashboards for patients and doctors.

- Marketing pages: home, about, departments/services, doctors directory, blog, FAQs, contact
- Patient-facing booking funnel: find a doctor → book appointment → review
- **Patient dashboard**: profile, invoices, appointments, reviews
- **Doctor dashboard**: profile/settings, schedule, appointments, messages/chat, invoices
- **Pharmacy storefront**: category browse, product detail, cart, checkout, account
- Framer Motion page/section animations + Lottie (`lottie-web`) illustrations
- Auth flows: login, signup, forgot password
- Legal pages: privacy, terms

---

## 🏗️ Architecture

Both apps follow the same conventions, intentionally kept symmetric so components/patterns are portable between them.

```
┌─────────────────────────────┐        ┌─────────────────────────────┐
│           Admin              │        │          Landing             │
│   (staff / back-office)      │        │  (public site + portals)     │
│                               │        │                               │
│  Next.js App Router           │        │  Next.js App Router           │
│  MUI 9 + Emotion theme        │        │  MUI 9 + Emotion theme        │
│  FullCalendar (scheduling)    │        │  Framer Motion + Lottie       │
│  MUI X Charts (analytics)     │        │  MUI X Charts (analytics)     │
└───────────────┬───────────────┘        └───────────────┬───────────────┘
                │                                          │
                │        src/data/data.js (mock)           │
                │   — stand-in for a future REST/GraphQL    │
                │     API backed by the data model below —  │
                └──────────────────────┬───────────────────┘
                                        ▼
                         Shared conceptual domain
                      Patient · Doctor · Appointment
                      Invoice · Pharmacy · Review · Chat
```

**Shared stack**

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI library | React 19 |
| Component kit | MUI (Material UI) 9 + `@mui/icons-material` + `@mui/x-charts` |
| Styling | Emotion (`@emotion/react`, `@emotion/styled`) via a custom `theme.js` + `ThemeRegistry.js` — **no Sass/Bootstrap** |
| Scheduling (Admin) | `@fullcalendar/*` (core, daygrid, interaction, react) |
| Motion (Landing) | `framer-motion`, `lottie-web` |
| Linting | ESLint 9 + `eslint-config-next` |
| Data | Static mock fixtures in `src/data/data.js` (no backend wired up yet) |

> The original Sass/Bootstrap version of each app is kept alongside in `../_original/Admin` and `../_original/Landing` for reference.

---

## 🗄️ Data Model — ER Diagram

The UI across both apps (patient profiles, doctor profiles, appointment lists, invoices, pharmacy cart/checkout, reviews, chat) implies one consistent relational domain model. This is the schema a real backend should implement to replace `src/data/data.js`.

```
┌───────────────────────┐        ┌────────────────────────┐        ┌───────────────────────┐
│        DOCTOR          │        │      APPOINTMENT        │        │        PATIENT          │
├───────────────────────┤        ├────────────────────────┤        ├───────────────────────┤
│ PK  doctor_id           │        │ PK  appointment_id      │        │ PK  patient_id           │
│     name                │   1  ◄─┤ FK  doctor_id            │─► 1   │     name                 │
│     speciality          │     ∞  │ FK  patient_id           │   ∞   │     email                │
│     location             │       │     date                 │       │     phone                │
│     schedule (timetable)│       │     time_slot             │       │     address              │
│     charges              │       │     status (pending/     │       │     dob / gender         │
│     avatar               │       │             confirmed/   │       │     avatar               │
│     rating               │       │             completed/   │       └──────────┬────────────┘
└──────────┬─────────────┘        │             cancelled)    │                  │ 1
           │ 1                    └────────────┬─────────────┘                  │
           │                                     │ 1                              │ ∞
           │ ∞                                   │ ∞                    ┌────────▼────────────┐
┌──────────▼─────────────┐        ┌───────────────▼────────────┐        │       INVOICE          │
│    DR_TIMETABLE          │        │          REVIEW              │        ├───────────────────────┤
├───────────────────────┤        ├────────────────────────┤        │ PK  invoice_id           │
│ PK  slot_id              │        │ PK  review_id            │        │ FK  patient_id           │
│ FK  doctor_id             │        │ FK  patient_id            │        │ FK  appointment_id      │
│     day_of_week          │        │ FK  doctor_id             │        │     items / line_items   │
│     start_time            │        │     rating                │        │     amount               │
│     end_time              │        │     comment                │       │     payment_status       │
└───────────────────────┘        │     created_at            │        │     issued_date          │
                                   └────────────────────────┘        └───────────────────────┘

┌───────────────────────┐        ┌────────────────────────┐        ┌───────────────────────┐
│         CHAT             │        │         MESSAGE          │        │         STAFF           │
├───────────────────────┤        ├────────────────────────┤        ├───────────────────────┤
│ PK  chat_id               │   1 ◄─┤ FK  chat_id               │        │ PK  staff_id             │
│ FK  participant_a_id     │     ∞ │ FK  sender_id             │        │     name / role          │
│ FK  participant_b_id     │       │     body                   │        │     email                │
│     created_at            │       │     sent_at                │        │     avatar               │
└───────────────────────┘        │     read_at                │        └──────────┬────────────┘
                                   └────────────────────────┘                   │ handles ∞
                                                                                  │
┌───────────────────────┐        ┌────────────────────────┐        ┌────────────▼────────────┐
│       PRODUCT            │        │       CART_ITEM           │        │         ORDER            │
├───────────────────────┤        ├────────────────────────┤        ├───────────────────────┤
│ PK  product_id           │  ∞ ◄──┤ FK  product_id            │   ∞ ◄──┤ PK  order_id             │
│     name                  │       │ FK  cart_id / order_id   │        │ FK  patient_id           │
│     category               │       │     quantity                │        │     order_date           │
│     price                  │       │     unit_price              │        │     total_amount         │
│     stock                  │       └────────────────────────┘        │     status (placed/      │
│     image                  │                                           │             shipped/     │
└──────────┬─────────────┘                                           │             delivered)   │
           │ belongs to ∞                                             └───────────────────────┘
           │
┌──────────▼─────────────┐        ┌────────────────────────┐
│       CATEGORY            │        │          BLOG             │
├───────────────────────┤        ├────────────────────────┤
│ PK  category_id           │        │ PK  post_id               │
│     name                    │        │     title                  │
└───────────────────────┘        │     author                 │
                                   │     body                    │
                                   │     published_at           │
                                   └────────────┬───────────┘
                                                 │ 1
                                                 │ ∞
                                    ┌────────────▼───────────┐
                                    │        COMMENT            │
                                    ├────────────────────────┤
                                    │ PK  comment_id            │
                                    │ FK  post_id                │
                                    │     author_name            │
                                    │     body                    │
                                    │     commented_at           │
                                    └────────────────────────┘
```

**Relationship summary**

| Relationship | Cardinality | Notes |
|---|---|---|
| Doctor → Appointment | 1 → ∞ | A doctor has many appointments |
| Patient → Appointment | 1 → ∞ | A patient books many appointments |
| Doctor → DrTimetable | 1 → ∞ | Weekly availability slots |
| Appointment → Invoice | 1 → 1 | Each completed appointment generates an invoice |
| Patient → Review | 1 → ∞ | A patient can review multiple doctors |
| Doctor → Review | 1 → ∞ | A doctor accumulates reviews |
| Patient ↔ Doctor → Chat | ∞ ↔ ∞ | Chat thread between any two participants |
| Chat → Message | 1 → ∞ | Messages belong to a chat thread |
| Product → Category | ∞ → 1 | Pharmacy catalog taxonomy |
| Patient → Order → Product | 1 → ∞ → ∞ | Pharmacy checkout, via cart/order line items |
| Blog Post → Comment | 1 → ∞ | Blog commenting |
| Staff → (Patients/Doctors) | 1 → ∞ | Admin-side management scope |

> This model is **not yet persisted** — both apps currently read from in-memory fixtures (`src/data/data.js`). It is documented here as the target schema for the API/database layer that will eventually back both apps.

---

## 📁 Project Structure

```
Doctoris/
├── Admin/                          # Hospital/clinic back-office dashboard
│   ├── public/
│   │   ├── images/                 # Logos, doctor/client avatars, UI art, payment/pharmacy icons
│   │   ├── next.svg
│   │   └── vercel.svg
│   ├── src/
│   │   ├── app/                    # Next.js App Router — one folder per route
│   │   │   ├── page.js             # Dashboard home
│   │   │   ├── layout.js           # Root layout + ThemeRegistry
│   │   │   ├── add-doctor/  add-patient/  doctors/  patients/
│   │   │   ├── appointment/  calendar/
│   │   │   ├── dr-profile/  patient-profile/
│   │   │   ├── invoice/  invoice-list/  checkout/
│   │   │   ├── shop/  shopcart/  product-detail/
│   │   │   ├── chat/  email/  email-alert/  email-confirmation/
│   │   │   ├── email-invoice/  email-password-reset/
│   │   │   ├── blogs/  blog-detail/
│   │   │   ├── login/  signup/  forgot-password/  lock-screen/
│   │   │   ├── index-sidebar-colored/  index-sidebar-dark/   # Theme variants
│   │   │   ├── ui-alert/ ui-avatar/ ui-badges/ ui-button/ ...  # UI kit showcase pages
│   │   │   ├── faqs/  review/  privacy/  terms/  comingsoon/
│   │   │   ├── maintenance/  error/  thankyou/  blank-page/
│   │   │   └── favicon.ico
│   │   ├── components/
│   │   │   ├── layout/             # Header, sidebar, footer shell
│   │   │   ├── dashboard/          # Charts, widgets, stat cards
│   │   │   ├── blog/               # Blog cards, comment UI
│   │   │   ├── profile/            # Doctor/patient profile widgets
│   │   │   ├── shop/               # Pharmacy product/cart components
│   │   │   ├── ui/                 # Reusable MUI-based primitives
│   │   │   ├── ThemeRegistry.js    # Emotion + MUI theme provider
│   │   │   └── icons.js            # Centralized icon re-exports
│   │   ├── data/
│   │   │   └── data.js             # Mock data: patients, doctors, invoices, chat, shop, blog...
│   │   └── theme/
│   │       └── theme.js            # MUI theme tokens (palette, typography)
│   ├── AGENTS.md
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.js
│   └── package.json
│
├── Landing/                         # Marketing site + patient/doctor portal
│   ├── public/
│   │   ├── images/                  # Hero art, about/doctor photos, pharmacy icons
│   │   ├── next.svg
│   │   └── vercel.svg
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.js              # Marketing homepage
│   │   │   ├── layout.js            # Root layout + ThemeRegistry
│   │   │   ├── not-found.js
│   │   │   ├── aboutus/  departments/  doctor/  faqs/  contact/
│   │   │   ├── blogs/  blog-detail/
│   │   │   ├── booking-appointment/
│   │   │   ├── patient-dashboard/  patient-profile/  patient-list/
│   │   │   ├── patient-invoice/  patient-review/
│   │   │   ├── doctor-dashboard/  doctor-profile/  doctor-profile-setting/
│   │   │   ├── doctor-appointment/  doctor-schedule/
│   │   │   ├── doctor-chat/  doctor-messages/
│   │   │   ├── invoices/
│   │   │   ├── pharmacy/  pharmacy-shop/  pharmacy-shop-cart/
│   │   │   ├── pharmacy-checkout/  pharmacy-product-detail/  pharmacy-account/
│   │   │   ├── login/  signup/  forgot-password/
│   │   │   ├── privacy/  terms/  error/
│   │   │   └── favicon.ico
│   │   ├── components/
│   │   │   ├── site/                # Header, footer, nav (marketing shell)
│   │   │   ├── home/                 # Landing page sections (hero, services, CTA)
│   │   │   ├── dash/                  # Patient/doctor dashboard widgets
│   │   │   ├── pharmacy/              # Storefront components
│   │   │   ├── motion/                # Framer Motion wrappers/animated sections
│   │   │   ├── ui/                    # Reusable MUI-based primitives
│   │   │   ├── ThemeRegistry.js
│   │   │   └── icons.js
│   │   ├── animations/
│   │   │   ├── healthcare.json        # Lottie animation
│   │   │   └── pulse.json             # Lottie animation
│   │   ├── data/
│   │   │   └── data.js                # Mock data: doctors, patients, appointments, pharmacy...
│   │   └── theme/
│   │       └── theme.js
│   ├── AGENTS.md
│   ├── README.md
│   ├── .eslintrc.json
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.js
│   └── package.json
│
└── README.md                        # ← you are here (covers both apps)
```

---

## 🚀 Getting Started

Each app is an independent Next.js project with its own `package.json` — install and run them separately.

### Prerequisites

- Node.js **18.18+** (required by Next.js 16 / React 19)
- npm (lockfiles are `package-lock.json`)

### Run the Admin dashboard

```bash
cd Admin
npm install
npm run dev        # http://localhost:3000
```

### Run the Landing site

```bash
cd Landing
npm install
npm run dev        # http://localhost:3000 (run on a different port if both are up: npm run dev -- -p 3001)
```

### Available scripts (both apps)

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## ✅ Feature Matrix

| Area | Admin | Landing |
|---|:---:|:---:|
| Patient management (list/profile/add) | ✅ | ✅ (self-service) |
| Doctor management (list/profile/add) | ✅ | ✅ (public directory + self-service) |
| Appointment scheduling | ✅ FullCalendar | ✅ booking flow + dashboard |
| Invoicing / billing | ✅ | ✅ |
| Pharmacy storefront (catalog/cart/checkout) | ✅ | ✅ |
| Internal / doctor-patient chat | ✅ | ✅ |
| Blog (list/detail/comments) | ✅ | ✅ |
| Reviews & ratings | ✅ | ✅ |
| Email templates UI | ✅ | — |
| Analytics charts | ✅ MUI X Charts | ✅ MUI X Charts |
| Marketing pages (home/about/services) | — | ✅ |
| Auth (login/signup/forgot password) | ✅ + lock screen | ✅ |
| Theming (light/dark/skins) | ✅ 3 sidebar variants | ✅ |
| Motion/animation | — | ✅ Framer Motion + Lottie |
| UI component kit showcase | ✅ (dedicated `ui-*` pages) | — |

---

## 🎨 Conventions

- **App Router only** — every route lives under `src/app/<route>/page.js`.
- **No Sass/Bootstrap** — all styling goes through MUI's `sx` prop / `styled()` and the shared Emotion theme in `src/theme/theme.js`.
- **Centralized icons** — components import icons from `src/components/icons.js` rather than directly from icon packages, to keep icon sets swappable.
- **Mock-data-first** — UI components consume named exports from `src/data/data.js`; swap these for real API calls when the backend lands (see [Data Model](#-data-model--er-diagram)).
