# TROT Solutions — Client Handover Documentation & Deployment Guide

**Version:** 1.0  
**Date:** August 15, 2026  
**Prepared by:** Development Team  
**Prepared for:** TROT Solutions

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Architecture Overview](#3-architecture-overview)
4. [Project Structure](#4-project-structure)
5. [Database Schema](#5-database-schema)
6. [Admin Panel Guide](#6-admin-panel-guide)
7. [Public Website Features](#7-public-website-features)
8. [API Reference](#8-api-reference)
9. [Environment Variables](#9-environment-variables)
10. [Code Audit Report](#10-code-audit-report)
11. [Deployment Guide](#11-deployment-guide)
12. [Post-Deployment Checklist](#12-post-deployment-checklist)
13. [Maintenance & Operations](#13-maintenance--operations)
14. [Known Limitations & Recommendations](#14-known-limitations--recommendations)

---

## 1. Project Overview

TROT Solutions is a corporate website for a global leader in Port and Terminal Equipment Lifecycle management, headquartered in Dubai, UAE. The platform serves two audiences:

- **Public visitors** — can browse services, blog/tech-talk articles, available equipment for resale, open careers, and submit contact/job-application inquiries.
- **Admin staff** — manage all website content (blogs, tech talks, careers, resale equipment), review inquiry leads and job applications, and configure SMTP email settings — all through a secured admin panel.

### Key URLs

| Environment | URL |
|-------------|-----|
| Production  | `https://www.trotsolutions.com` |
| Staging (current) | `https://trot.bandmusic.in` |
| Admin Panel | `<base-url>/admin` |
| Login Page  | `<base-url>/login` |

---

## 2. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 16.3.0 |
| **Language** | TypeScript | ^5 |
| **Runtime** | Node.js | >= 20 LTS |
| **Database** | MariaDB / MySQL | >= 10.6 |
| **ORM** | Prisma Client | ^7.9.1 |
| **DB Adapter** | `@prisma/adapter-mariadb` | ^7.9.1 |
| **Auth** | NextAuth.js (v4) | ^4.24.15 |
| **Password Hashing** | bcryptjs | ^3.0.3 |
| **Email** | Nodemailer | ^7.0.13 |
| **Rich-text Editor** | React Quill New | ^3.8.3 |
| **Styling** | Tailwind CSS v4 + Vanilla CSS | ^4 |
| **Font** | Exo 2 (Google Fonts, self-hosted via next/font) | — |
| **Process Manager** | PM2 | >= 5 |
| **Reverse Proxy** | Nginx (recommended) | >= 1.24 |

---

## 3. Architecture Overview

```
Internet
   |
   v
Nginx (port 80/443, SSL termination)
   |
   v
Next.js App (PM2 — port 4000)
   |
   |-- Public Pages (SSR / Static)
   |     └── Services, Blog, Tech Talks, Careers, Resale, Contact
   |
   |-- Admin Panel (/admin/*) — JWT-protected via NextAuth
   |     └── Blogs, Tech Talks, Equipments, Careers, Leads, Profile, SMTP Settings
   |
   |-- API Routes
   |     |-- POST /api/contact        (contact form submission)
   |     |-- POST /api/careers        (job application submission)
   |     |-- POST /api/upload         (file upload — admin only)
   |     |-- GET  /api/uploads/:path* (file serving)
   |     └── POST /api/auth/*         (NextAuth endpoints)
   |
   └── Server Actions (Next.js RPC, admin-auth guarded)
         |-- blog.ts, techtalk.ts, career.ts, equipment.ts
         |-- lead.ts, profile.ts, smtp.ts
         └── (all call requireAuth() before DB access)

MariaDB ---- Prisma Client (driver adapter)
```

### Authentication Flow

```
Browser → /login (credentials form)
   ↓
NextAuth CredentialsProvider
   ↓
bcrypt.compare(password, hash)   ← DB lookup via Prisma
   ↓
JWT issued (stored in httpOnly cookie)
   ↓
Protected pages/actions call getServerSession() or requireAuth()
```

---

## 4. Project Structure

```
trot-website/
├── prisma/
│   └── schema.prisma              # Database schema (8 models)
├── prisma.config.ts               # Prisma configuration (loads .env)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, global CSS, legacy scripts)
│   │   ├── page.tsx               # Homepage
│   │   ├── globals.css            # Minimal global overrides
│   │   ├── sitemap.ts             # Auto-generated XML sitemap
│   │   ├── robots.ts              # robots.txt generation
│   │   ├── (admin)/admin/         # Admin panel (route group, no URL prefix)
│   │   │   ├── layout.tsx         # Admin shell layout
│   │   │   ├── page.tsx           # Dashboard with live counters
│   │   │   ├── AdminSidebar.tsx   # Sidebar navigation component
│   │   │   ├── LogoutButton.tsx   # Client-side sign-out button
│   │   │   ├── blogs/             # Blog CRUD pages
│   │   │   ├── tech-talks/        # Tech Talks CRUD pages
│   │   │   ├── careers/           # Career postings CRUD pages
│   │   │   ├── equipments/        # Resale equipment CRUD pages
│   │   │   ├── leads/             # Inquiry & career lead management
│   │   │   ├── profile/           # Admin profile & password change
│   │   │   └── settings/          # SMTP configuration
│   │   ├── actions/               # Next.js Server Actions (admin-guarded)
│   │   │   ├── blog.ts
│   │   │   ├── techtalk.ts
│   │   │   ├── career.ts
│   │   │   ├── equipment.ts
│   │   │   ├── lead.ts
│   │   │   ├── profile.ts
│   │   │   └── smtp.ts
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/ # NextAuth handler
│   │   │   ├── contact/route.ts   # Contact form endpoint
│   │   │   ├── careers/route.ts   # Job application endpoint
│   │   │   ├── upload/route.ts    # File upload endpoint (admin-only)
│   │   │   └── uploads/[...path]/ # File serving endpoint
│   │   └── [service pages]/       # 20+ public service/content pages
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Main navigation
│   │   │   ├── Footer.tsx         # Footer with links & info
│   │   │   ├── FrontendShell.tsx  # Wraps public pages (hides header/footer on admin)
│   │   │   ├── LegacyScripts.tsx  # jQuery & Bootstrap JS injection
│   │   │   ├── PageHeader.tsx     # Reusable inner-page hero banner
│   │   │   └── ServicePageLayout.tsx # Two-column layout for service pages
│   │   ├── forms/                 # Contact & careers form components
│   │   ├── sections/              # Homepage section components
│   │   ├── ui/                    # Shared UI primitives
│   │   └── admin/                 # Admin-only shared components
│   ├── lib/
│   │   ├── auth.ts                # NextAuth options & credential logic
│   │   ├── prisma.ts              # Prisma client singleton (MariaDB adapter)
│   │   ├── server-auth.ts         # requireAuth() helper for Server Actions
│   │   ├── email.ts               # Nodemailer helpers & branded email templates
│   │   └── carouselImages.ts      # Static image lists for homepage slider
│   └── types/
│       └── next-auth.d.ts         # Session type augmentation (adds id field)
├── public/
│   ├── assets/                    # CSS, JS, images (legacy + custom)
│   └── uploads/                   # User-uploaded files (runtime-generated, gitignored)
├── generated/prisma/              # Prisma generated client (gitignored, rebuilt on deploy)
├── ecosystem.config.js            # PM2 process configuration (port 4000)
├── next.config.ts                 # Next.js config (security headers, rewrites)
├── create-admin.ts                # One-time admin seeding script
├── package.json
└── .env                           # Environment variables (NEVER commit this)
```

---

## 5. Database Schema

The application uses **MariaDB** (MySQL-compatible) with 8 Prisma models.

### AdminUser

Stores admin login credentials.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String (CUID) | Primary key |
| `email` | String | Unique |
| `password` | String | bcrypt-hashed |
| `name` | String? | Display name |
| `createdAt` | DateTime | Auto-set |

### Blog

Blog posts displayed on `/blog`.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String (CUID) | |
| `title` | String | |
| `slug` | String | Unique, URL-safe |
| `image` | String? | Relative URL `/uploads/...` |
| `excerpt` | Text? | Short preview |
| `content` | Text | Full HTML (from Quill editor) |
| `status` | String | `"draft"` or `"published"` |
| `createdAt` / `updatedAt` | DateTime | |

### TechTalk

Articles for `/tech-talks`. Identical structure to `Blog`.

### Career

Job postings for `/careers`.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String | |
| `title` | String | Job title |
| `position` | String | Position name |
| `image` | String? | |
| `location` | String | |
| `deadline` | DateTime? | Application deadline |
| `excerpt` | Text? | |
| `jobDetailsPdf` | String? | PDF URL |
| `status` | String | `"open"` or `"closed"` |

### Equipment

Resale equipment listings for `/resale-equipments`.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String | |
| `title` | String | |
| `image` through `image5` | String? | Up to 5 image slots |
| `modelNo` | String? | |
| `stock` | Int? | Default 0 |
| `location` | String? | |
| `incoterms` | String? | Shipping terms |
| `status` | String | `"available"` or `"sold"` |

### InquiryLead

Contact form submissions.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String | |
| `name` | String | |
| `companyName` | String? | |
| `email` | String | |
| `phone` | String | |
| `userType` | String? | `"Customer"` or `"Job Seeker"` |
| `category` | String | Equipment category |
| `message` | Text | |
| `status` | String | `"NEW"`, `"Contacted"`, `"Closed"` |
| `createdAt` | DateTime | |

### CareerLead

Job application submissions.

| Field | Type | Notes |
|-------|------|-------|
| `id` | String | |
| `name` | String | |
| `email` | String | |
| `phone` | String? | |
| `resumeUrl` | String? | Uploaded file URL |
| `coverLetter` | Text? | |
| `position` | String? | Applied-for role |
| `status` | String | `"NEW"`, `"Reviewed"`, `"Interviewing"`, `"Hired"`, `"Rejected"` |
| `createdAt` | DateTime | |

### SmtpConfig

SMTP settings stored in DB (single record).

| Field | Type | Notes |
|-------|------|-------|
| `host` | String | e.g., `smtp.gmail.com` |
| `port` | Int | 465 (SSL) or 587 (STARTTLS) |
| `secure` | Boolean | `true` for SSL/TLS |
| `user` | String | SMTP username |
| `password` | String | SMTP password (plain text in DB — see Recommendations) |
| `fromEmail` | String | Sender address |
| `notifyEmail` | String? | Where admin notifications go |

---

## 6. Admin Panel Guide

The admin panel is accessible at `/admin`. Login is required (`/login`).

### 6.1 Dashboard

Shows live counts for: Blogs, Tech Talks, Equipments, Inquiries, Job Applications. Quick-link buttons navigate to each section.

### 6.2 Blogs (`/admin/blogs`)

| Action | How |
|--------|-----|
| **List** | Shows all blogs with status badges |
| **Create** | `/admin/blogs/new` — Title, Slug (auto-generated from title), Excerpt, Image upload, Rich-text content (Quill), Status |
| **Edit** | `/admin/blogs/[id]` — Same fields as create |
| **Delete** | Button on list page — permanent, no undo |
| **Publish/Draft** | Toggle via Status field in edit form |

> **Note:** Only `"published"` blogs appear on the public `/blog` page.

### 6.3 Tech Talks (`/admin/tech-talks`)

Identical management interface to Blogs. Published content appears on `/tech-talks`.

### 6.4 Careers (`/admin/careers`)

| Action | How |
|--------|-----|
| **Create** | Title, Position, Location, Deadline (optional), Image, PDF upload, Excerpt, Status |
| **Status** | `"open"` (visible to public) or `"closed"` (hidden) |
| **PDF** | Upload job description PDF via file upload — stored as `/uploads/...` |

### 6.5 Equipments (`/admin/equipments`)

| Feature | Detail |
|---------|--------|
| **Images** | Up to 5 images per equipment listing |
| **Fields** | Title, Model No, Stock count, Location, Incoterms, Status |
| **Status** | `"available"` or `"sold"` |

### 6.6 Leads (`/admin/leads`)

Two tabs — **Inquiries** and **Job Applications**.

| Feature | Detail |
|---------|--------|
| **View** | All submitted forms with full details |
| **Status update** | Inquiry: NEW → Contacted → Closed; Career: NEW → Reviewed → Interviewing → Hired/Rejected |
| **Delete** | Permanently removes a lead record |
| **Resume download** | Click "Download CV" link for career applications that included a resume |
| **Export** | Table supports sorting; use browser print/save for export (no built-in CSV export) |

### 6.7 Profile (`/admin/profile`)

Change the admin email address and/or password. Current password verification is required before setting a new password.

### 6.8 Settings (`/admin/settings`)

Configure the SMTP email server. Required for the contact form and career application auto-reply emails to work.

| Field | Example Value |
|-------|--------------|
| SMTP Host | `smtp.gmail.com` |
| Port | `465` |
| Secure (SSL) | `true` |
| Username | `no-reply@trotsolutions.com` |
| Password | App-specific password |
| From Email | `no-reply@trotsolutions.com` |
| Notify Email | `info@trotsolutions.com` |

> **Important:** If SMTP is not configured, form submissions are still saved to the database — only emails fail silently. Configure SMTP immediately after deployment.

---

## 7. Public Website Features

### Pages & Routes

| URL | Description |
|-----|-------------|
| `/` | Homepage with hero, service highlights, stats counter, news |
| `/blog` | Blog listing (published only) |
| `/blog-details/[slug]` | Individual blog post |
| `/tech-talks` | Tech Talks listing |
| `/careers` | Open career listings with application form |
| `/contact` | Contact inquiry form |
| `/resale-equipments` | Equipment listing |
| `/brokerage-resale` | Brokerage service page |
| `/bromma` | Bromma partnership page |
| `/dutch-lanka` | Dutch Lanka partnership page |
| `/documentation-compliance` | Service page |
| `/end-of-life-assessment-engineering-studies` | Service page |
| `/end-of-life-services` | Service page |
| `/engineering-products` | Service page |
| `/health-assessment-diagnostics` | Service page |
| `/heavy-lift-transport-logistics` | Service page |
| `/lifecycle-cost-optimization` | Service page |
| `/modernization-upgrades` | Service page |
| `/optional-value-recovery-services` | Service page |
| `/preventive-predictive-maintenance` | Service page |
| `/safety-enhancements` | Service page |
| `/scrap-management-recycling` | Service page |
| `/structural-life-extension` | Service page |
| `/sustainability-enhancements` | Service page |
| `/technical-consulting-services` | Service page |
| `/terms-and-privacy` | Terms & Privacy policy |
| `/sitemap.xml` | Auto-generated XML sitemap |
| `/robots.txt` | Auto-generated robots.txt |

### Contact Form

- Fields: Name, Company (optional), Email, Phone, User Type (Customer/Job Seeker), Equipment Category, Message
- Validation: server-side (email format, min lengths, category allowlist)
- On submit: saved to `InquiryLead` table + dual email sent (admin notification + user auto-reply)

### Career Application Form

- Fields: Name, Email, Phone (optional), Position, Resume PDF (upload), Cover Letter
- On submit: saved to `CareerLead` table + dual email sent

---

## 8. API Reference

### POST /api/contact

Submits a contact inquiry.

**Request body (JSON):**
```json
{
  "name": "John Doe",
  "companyName": "ACME Corp",
  "email": "john@example.com",
  "phone": "+971501234567",
  "userType": "Customer",
  "category": "Container Cranes",
  "message": "I am interested in a quote for..."
}
```

**Valid categories:** `Container Cranes`, `Bulk Cranes`, `Spreaders`, `Trailers & Port Carts`, `Others`

**Response:** `{ "success": true }` or `{ "error": "..." }`

---

### POST /api/careers

Submits a job application.

**Request body (JSON):**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+971509876543",
  "position": "Service Engineer",
  "resumeUrl": "/uploads/upload-1234-abcd.pdf",
  "coverLetter": "I am writing to express..."
}
```

**Response:** `{ "success": true }` or `{ "error": "..." }`

---

### POST /api/upload (Admin only)

Uploads a file. Requires an active admin session (cookie).

**Request:** `multipart/form-data`

- `file` — The file to upload (max 10MB)
- `oldFileUrl` — (optional) Previous file URL to delete on replacement

**Allowed types:** JPEG, PNG, WEBP, GIF, PDF

**Security:** MIME type + magic bytes verification, path traversal prevention

**Response:** `{ "url": "/uploads/upload-1234-abcd.ext" }`

---

### GET /api/uploads/[...path]

Serves uploaded files stored in `public/uploads/`. This route exists to enable the URL rewrite pattern (`/uploads/:path*` to `/api/uploads/:path*`).

---

## 9. Environment Variables

Create a `.env` file at the project root with these variables:

```env
# Database connection string
# Format: mysql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="mysql://trotAdmin:YOUR_DB_PASSWORD@localhost:3306/trotDb"

# NextAuth secret — MUST be a long random string (min 32 chars)
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-very-long-random-secret-here"

# The canonical base URL of the application (no trailing slash)
# Used by NextAuth for callbacks and by email templates
NEXTAUTH_URL="https://www.trotsolutions.com"
```

> **CAUTION:** Never commit `.env` to version control. The `.gitignore` already excludes `.env*`. Always set these variables directly on the server or through your hosting panel's environment secrets.

> **WARNING:** Change the `NEXTAUTH_SECRET` and database password before going to production. The values in the current `.env` are development placeholders.

---

## 10. Code Audit Report

### Security — PASS

| Area | Finding | Status |
|------|---------|--------|
| Authentication | bcrypt password hashing (cost factor 10) | PASS |
| Session | JWT strategy, httpOnly cookie | PASS |
| Secret validation | App crashes at startup if `NEXTAUTH_SECRET` is missing | PASS |
| Server Actions | All admin actions call `requireAuth()` before any DB operation | PASS |
| Input validation | All public API routes validate and sanitize inputs server-side | PASS |
| SQL injection | All DB queries use Prisma parameterized queries — no raw SQL | PASS |
| File upload | MIME allowlist + magic bytes verification + path traversal prevention | PASS |
| XSS | DOMPurify dependency for sanitizing Quill HTML output | PASS |
| Security headers | CSP, HSTS, X-Frame-Options, X-Content-Type-Options, etc. | PASS |
| Timing attacks | Short password length check prevents early-exit timing leaks | PASS |
| SMTP host validation | Regex allowlist prevents SSRF via SMTP host injection | PASS |

### Issues Found

---

#### Issue 1 — Default admin credentials in seed script

**File:** `create-admin.ts` (lines 22–23)  
**Risk:** HIGH  

The seed script hardcodes a weak default password:

```typescript
const email = "admin@trotsolutions.com";
const password = "admin"; // WEAK DEFAULT — must be changed immediately
```

**Action Required:** After running this script, immediately log into the admin panel and change the password via `/admin/profile`.

---

#### Issue 2 — SMTP password stored in plaintext

**File:** `prisma/schema.prisma` (line 105)  
**Risk:** MEDIUM  

The `SmtpConfig.password` field stores the SMTP password as plaintext in the database. If the database is ever compromised, the SMTP credentials are exposed.

**Recommendation:** Encrypt this field at the application layer using a symmetric key (stored as an environment variable) before saving, and decrypt on read. Suitable as a post-launch improvement.

---

#### Issue 3 — `updateAdminProfile` uses `any` type

**File:** `src/app/actions/profile.ts` (line 25)  
**Risk:** LOW  

```typescript
const updateData: any = { email: data.email };
```

Using `any` bypasses TypeScript's type safety. In this case the impact is minimal because the fields are checked before assignment, but it is a code quality concern.

**Recommendation:** Replace with an explicit typed object (e.g., `{ email: string; password?: string }`).

---

#### Issue 4 — No rate limiting on public API routes

**Risk:** MEDIUM  

`/api/contact` and `/api/careers` have no rate limiting. A bot could spam the database and flood the admin notification inbox with thousands of entries.

**Recommendation:** Add rate limiting via Nginx's `limit_req_zone` directive or an application-layer solution like `@upstash/ratelimit`.

---

#### Issue 5 — Sitemap does not include dynamic blog/tech-talk slugs

**File:** `src/app/sitemap.ts`  
**Risk:** LOW (SEO impact)  

Only static routes are in the sitemap. Individual blog post and tech-talk URLs (`/blog-details/[slug]`) are missing, meaning search engines may not index them efficiently.

**Recommendation:** Fetch published slugs from the database inside `sitemap.ts` and append them to the returned array.

---

#### Issue 6 — Legacy jQuery/Bootstrap JS bundle loaded on every page

**File:** `src/components/layout/LegacyScripts.tsx`  
**Risk:** LOW (Performance)  

Multiple legacy JavaScript libraries (jQuery, Owl Carousel, Magnific Popup, AOS, etc.) are loaded via script tags on every page, including the admin panel, increasing page weight and Time-to-Interactive.

**Recommendation:** Audit which libraries are actually used. Remove unused ones. Consider migrating remaining interactive components to React.

---

#### Issue 7 — `blog-backup` directory in the app router

**Risk:** LOW  

A `blog-backup` directory exists inside `src/app/`. If it contains a `page.tsx`, it exposes a live route at `/blog-backup` that may not be intended for public access.

**Action:** Verify the directory is empty of page files. If unused, delete it entirely.

---

### Code Quality — GOOD

- Consistent use of TypeScript throughout
- All server actions are properly gated with `requireAuth()`
- No raw `eval()` usage; no unsanitized `innerHTML` outside of controlled Quill rendering
- Prisma client uses the singleton pattern correctly for Next.js hot-reloading safety
- Security headers are comprehensive and well-configured in `next.config.ts`
- Input fields are length-capped before DB writes (e.g., `.substring(0, 255)`)
- Status values are validated against strict allowlists — no open-ended strings reach the database

---

## 11. Deployment Guide

### Prerequisites

- Linux server (Ubuntu 22.04 LTS recommended)
- Node.js 20 LTS installed
- npm installed
- PM2 installed globally: `npm install -g pm2`
- MariaDB 10.6+ running and accessible
- Nginx installed
- Domain DNS pointed to server IP
- SSL certificate (Let's Encrypt recommended)

---

### Step 1 — Prepare the Database

```sql
-- Connect to MariaDB as root
mysql -u root -p

-- Create the database and user
CREATE DATABASE trotDb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'trotAdmin'@'localhost' IDENTIFIED BY 'YOUR_STRONG_DB_PASSWORD';
GRANT ALL PRIVILEGES ON trotDb.* TO 'trotAdmin'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

### Step 2 — Transfer Project Files

```bash
# Option A: Clone from Git repository
git clone https://your-repo-url.git /var/www/trot-solutions
cd /var/www/trot-solutions

# Option B: Transfer via SCP
scp -r ./trot-solutions user@server:/var/www/trot-solutions
```

---

### Step 3 — Set Environment Variables

```bash
cd /var/www/trot-solutions
nano .env
```

Paste and configure:

```env
DATABASE_URL="mysql://trotAdmin:YOUR_STRONG_DB_PASSWORD@localhost:3306/trotDb"
NEXTAUTH_SECRET="GENERATE_WITH: openssl rand -base64 32"
NEXTAUTH_URL="https://www.trotsolutions.com"
```

Set secure file permissions:

```bash
chmod 600 .env
```

---

### Step 4 — Install Dependencies

```bash
npm install
```

---

### Step 5 — Generate Prisma Client

```bash
npx prisma generate
```

---

### Step 6 — Run Database Migrations

```bash
npx prisma migrate deploy
```

> On a fresh database this creates all tables. On an existing database it only applies new pending migrations.

---

### Step 7 — Create Initial Admin User

```bash
npx tsx create-admin.ts
```

Creates `admin@trotsolutions.com` with password `admin`.

> **CAUTION:** Immediately log in and change this password at `/admin/profile` after deployment.

---

### Step 8 — Build the Application

```bash
npm run build
```

This compiles the Next.js app for production. Expect 1–3 minutes.

---

### Step 9 — Start with PM2

```bash
# Start the application
pm2 start ecosystem.config.js

# Verify it is running
pm2 status

# Save PM2 process list to survive server reboots
pm2 save

# Enable PM2 to auto-start on system boot
pm2 startup
# Follow the instructions printed by that command
```

The app will run on **port 4000**.

---

### Step 10 — Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/trotsolutions
```

Paste:

```nginx
server {
    listen 80;
    server_name www.trotsolutions.com trotsolutions.com;
    return 301 https://www.trotsolutions.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.trotsolutions.com;

    ssl_certificate     /etc/letsencrypt/live/www.trotsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.trotsolutions.com/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # Must match the 10MB limit enforced by the upload API
    client_max_body_size 10m;

    location / {
        proxy_pass         http://127.0.0.1:4000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/trotsolutions /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### Step 11 — Obtain SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d www.trotsolutions.com -d trotsolutions.com
```

Certbot will auto-renew certificates via a cron job it installs automatically.

---

### Step 12 — Configure SMTP from Admin Panel

1. Navigate to `https://www.trotsolutions.com/login`
2. Log in with `admin@trotsolutions.com` / `admin`
3. **Immediately go to `/admin/profile` and change the password**
4. Go to `/admin/settings`
5. Enter your SMTP server details and save
6. Test by submitting the contact form on the website

---

## 12. Post-Deployment Checklist

```
[ ] Database created and migrations applied successfully
[ ] .env configured with production values (not development placeholders)
[ ] Admin user created and DEFAULT PASSWORD CHANGED
[ ] SMTP configured and tested via contact form submission
[ ] PM2 running: pm2 status shows "online"
[ ] PM2 auto-start enabled: pm2 startup && pm2 save
[ ] Nginx configured and running
[ ] SSL certificate installed — HTTPS working
[ ] HTTP to HTTPS redirect working
[ ] www to non-www (or vice versa) redirect working
[ ] Contact form tested end-to-end (submission + both emails received)
[ ] Career application form tested end-to-end
[ ] File upload (image + PDF) tested from admin panel
[ ] Blog article published and visible on /blog
[ ] /sitemap.xml accessible
[ ] /robots.txt accessible
[ ] /uploads/ directory is writable by the Node.js process user
[ ] Google Search Console — sitemap URL submitted
```

---

## 13. Maintenance & Operations

### Updating the Application

```bash
cd /var/www/trot-solutions

# Pull latest code
git pull

# Install any new dependencies
npm install

# Regenerate Prisma client if schema changed
npx prisma generate

# Apply any new database migrations
npx prisma migrate deploy

# Rebuild the application
npm run build

# Zero-downtime reload via PM2
pm2 reload trot-website
```

### Viewing Logs

```bash
# Real-time application logs
pm2 logs trot-website

# Last 100 lines
pm2 logs trot-website --lines 100

# Nginx access log
sudo tail -f /var/log/nginx/access.log

# Nginx error log
sudo tail -f /var/log/nginx/error.log
```

### Database Backup

```bash
# Manual backup
mysqldump -u trotAdmin -p trotDb > backup-$(date +%Y%m%d).sql

# Restore from backup
mysql -u trotAdmin -p trotDb < backup-YYYYMMDD.sql
```

Recommended automated daily backup via cron:

```bash
# Add to crontab (crontab -e)
0 2 * * * mysqldump -u trotAdmin -pYOUR_PASSWORD trotDb > /backups/trot-$(date +\%Y\%m\%d).sql
```

### Backing Up Uploaded Files

Uploaded files live in `public/uploads/` and are **not** tracked by git. Back this directory up separately:

```bash
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz /var/www/trot-solutions/public/uploads/
```

### Process Monitoring

```bash
# Interactive PM2 monitor (CPU + memory + logs)
pm2 monit

# Detailed process info
pm2 info trot-website
```

---

## 14. Known Limitations & Recommendations

### Priority Recommendations

| Priority | Item | Effort |
|----------|------|--------|
| HIGH | Change default admin password immediately after deploy | 2 min |
| HIGH | Generate a strong unique NEXTAUTH_SECRET for production | 2 min |
| MEDIUM | Add rate limiting to /api/contact and /api/careers | 2–4 hrs |
| MEDIUM | Encrypt SMTP password at rest in the database | 4–8 hrs |
| MEDIUM | Add published blog/tech-talk slugs to sitemap.ts | 1–2 hrs |
| LOW | Fix `updateData: any` type in profile.ts | 30 min |
| LOW | Review and delete the blog-backup directory | 10 min |
| LOW | Audit and remove unused legacy JavaScript bundles | 4–8 hrs |
| LOW | Add CSV export to the leads management table | 4–8 hrs |
| NICE | Multi-admin role-based access control | 2–3 days |
| NICE | CDN-backed image storage (S3 / Cloudflare R2) | 1–2 days |

### Functional Limitations

- **Single admin account** — The system is designed for one admin. Adding multi-user support requires an `AdminUser` schema update and role management logic.
- **No image CDN** — Uploaded files are served directly by the Node.js process. Under heavy traffic, moving uploads to object storage (S3 or Cloudflare R2) is strongly recommended.
- **No audit log** — Admin create/update/delete operations are not logged. Consider adding a simple audit trail for compliance purposes.
- **Email is best-effort** — If SMTP is misconfigured, form submissions are saved but emails are silently dropped. There is no retry queue or dead-letter mechanism.
- **No two-factor authentication** — The admin login relies solely on email/password. 2FA would significantly improve account security.

---

*End of Document*

---

**Document Version History**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-08-15 | Dev Team | Initial handover documentation |
