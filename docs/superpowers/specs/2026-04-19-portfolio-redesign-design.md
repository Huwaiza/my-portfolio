# Portfolio Redesign — Design Spec
**Date:** 2026-04-19  
**Author:** Huwaiza Tahir

---

## Summary

Full redesign of the portfolio website. The current site looks unprofessional (cartoon 3D character, excessive decorative elements, placeholder content). The new site is minimal, engineering-focused, and presents Huwaiza as a senior backend engineer — not a creative developer.

---

## Design Direction

**Aesthetic:** Minimal Dark (Option A)  
- Background: `#050505` (dark), `#fafaf8` (light — warm off-white)  
- Text: `#fff` / `#0a0a0a` primary, `#555` / `#999` secondary, `#333` / `#ccc` labels  
- Borders: `#111` (dark), `#e8e8e4` (light)  
- No accent color — pure monochrome  
- Typography: existing Geist font, heavy weight for name/headings, tight letter-spacing  
- Zero decorative elements — no gradient circles, no glow effects, no animated blobs

**Theme:** Dark/light toggle button (☾/☀) in navbar top-right. Saves to `localStorage`. Default: dark.

---

## Layout

**Structure:** Classic single-page vertical scroll  
1. Navbar (fixed)
2. Hero
3. About
4. What I Do (Skills)
5. Career
6. Work (horizontal scroll)
7. Tech Stack (3D balls)
8. Contact + Footer

**Spacing principle:** Tight. Sections breathe but don't bloat. No 100vh padding on sections that don't need it. Use `border-bottom: 1px solid` as section dividers instead of whitespace.

---

## Sections

### Navbar
- Logo: `HT` (left)
- Email: `muhammadhuwaizatahir@gmail.com` (center, desktop only)
- Nav links: ABOUT · WORK · CONTACT (right)
- Theme toggle: ☾/☀ icon (far right, after nav links)
- Fixed, backdrop-blur background, `border-bottom: 1px solid` divider

### Hero
- Full viewport height (`100vh`), content pinned to bottom-left
- Eyebrow: `SENIOR SOFTWARE ENGINEER` (small, label color, letter-spaced)
- Name: `HUWAIZA` / `TAHIR` — massive, `font-weight: 900`, `letter-spacing: -4px`
- Meta row (pinned bottom, separated by `border-top`):
  - Currently at: **Arbisoft**
  - Platform scale: 250K+ MAU
  - Experience: 5+ years
  - Focus: Backend · Cloud · AI
- No 3D character model — **removed entirely**
- No animated gradient circles — **removed entirely**

### About
- Section label: `ABOUT` (small, uppercase, label color)
- Single paragraph, large font (`clamp(22px, 3vw, 36px)`), `color: #888` with `<strong>` highlights in white
- Content: "I build scalable backend systems and high-traffic platforms. Currently backend lead at Arbisoft, architecting distributed systems that serve 250K+ monthly active users. Experienced in cloud infrastructure, AI orchestration, and pushing the limits of what backend systems can do."

### What I Do
- Section label: `WHAT I DO`
- Two-column grid (1fr 1fr), `gap: 1px`, `background: border-color` (grid-line trick)
- **Backend block**: Python, Django, Flask, DRF, Node.js, React, Redis, PostgreSQL, Neo4j, Elasticsearch
- **Cloud & AI block**: AWS, Azure, GCP, Firebase, LLMs, RAG, New Relic, K6, JMeter, Docker
- Tags: `border: 1px solid`, no background fill, subdued color

### Career
- Section label: `CAREER`
- Three-column grid per row: `year | role+description | status`
- Rows separated by `border-bottom: 1px solid`
- Entries:
  1. 2020 — Software Engineer, Phaedra Solutions
  2. 2022 — Lead Software Engineer, SpyreSync  
  3. NOW — Senior Software Engineer, Arbisoft (status highlighted white)
- No animated timeline dot, no gradient heading — **removed**

### Work
- Section label: `WORK`
- Horizontal scroll via GSAP ScrollTrigger — **kept**
- Real projects replacing placeholders:
  1. Xiangqi Platform — Django · Redis · New Relic · K6 · 250K MAU
  2. Trier — Emergency Triage System — Neo4j · RAG · LLMs · Conformal Prediction
  3. Vboard ETL Solution — Django · Elasticsearch · Stripe · YouTube API
  4. Waste2x Platform — Django · Firebase · Docusign · DRF
  5. OWL Sense — Sentiment · Narrative Analysis · Crime Geomapping
  6. Xiangqi Maia — Neural Network · Python · Game AI
- Card design: clean, no decorative borders, project number + name + stack tags + image placeholder

### Tech Stack
- Section label: `TECH STACK`
- 3D physics balls — **kept**
- Replace current images (React, Next, Node, Express, Mongo, MySQL, TypeScript, JavaScript) with:
  Python, Django, Redis, AWS, Azure, Neo4j, Docker, React, PostgreSQL, Elasticsearch
- Download logo images as `.webp` and place in `public/images/`
- Ball colors: dark sphere, no emissive glow — subdued to match minimal theme

### Contact
- Large heading: `Let's talk.`
- Two-column grid: left = email + LinkedIn, right = social links list
- Social links: Github → `https://github.com/Huwaiza`, LinkedIn → `https://www.linkedin.com/in/huwaiza-tahir-80092a147/`, Medium → `https://medium.com/@muhammadhuwaizatahir`
- Footer: `HUWAIZA TAHIR © 2025` left, `BACKEND · CLOUD · AI` right
- **Remove** phone number (not in resume either), Twitter, Instagram

---

## Interactive Elements

| Element | Decision |
|---|---|
| 3D Character Model | **REMOVED** — unprofessional, heavy |
| Animated gradient circles | **REMOVED** — decorative, not minimal |
| Career timeline dot/glow | **REMOVED** — decorative |
| Purple accent color | **REMOVED** — monochrome only |
| Custom cursor | **KEPT** — subtle, recolored to match theme |
| GSAP Smooth Scroll | **KEPT** |
| Horizontal Work scroll | **KEPT** |
| 3D Physics Tech Balls | **KEPT** — logos updated to real stack |
| Loading screen | **KEPT** — update marquee text, logo |

---

## Theme System

- CSS custom properties on `:root` for dark (default), `.light` class on `<html>`
- Toggle button in navbar sets/removes `.light` class and saves to `localStorage`
- On load: read `localStorage`, apply class before first paint (in `<head>` script to avoid flash)
- Cursor recolored per theme: dark = `#e0e0e0`, light = `#1a1a1a`

**Dark tokens:**
```css
--bg: #050505;
--bg-2: #0d0d0d;
--border: #111;
--text-primary: #ffffff;
--text-secondary: #555555;
--text-label: #333333;
```

**Light tokens:**
```css
--bg: #fafaf8;
--bg-2: #f0f0ec;
--border: #e8e8e4;
--text-primary: #0a0a0a;
--text-secondary: #999999;
--text-label: #cccccc;
```

---

## Files to Change

| File | Change |
|---|---|
| `index.html` | Add theme init script in `<head>` |
| `index.css` | Replace all hardcoded colors with CSS vars, add `.light` overrides |
| `Navbar.tsx` | Add theme toggle button |
| `Landing.tsx` | Remove character model integration, new hero layout |
| `MainContainer.tsx` | Remove CharacterModel import/render |
| `App.tsx` | Remove CharacterModel lazy load |
| `About.tsx` | New bio text, tighter layout |
| `WhatIDo.tsx` + CSS | Replace hover cards with grid layout, updated tags |
| `Career.tsx` + CSS | New three-column grid layout, remove glow dot |
| `Work.tsx` | Replace placeholder content with real projects |
| `TechStack.tsx` | Update image URLs to new stack logos |
| `Contact.tsx` | Remove phone/Twitter/Instagram, add Medium, update footer |
| `SocialIcons.tsx` | Already updated |
| `Loading.tsx` | Already updated |
| `public/images/` | Add: python, django, redis, aws, azure, neo4j, docker, postgresql, elasticsearch webp logos |
| `Character/` directory | **DELETE entirely** |
