# Plan por fases — Flow Life BMX (maquetación Astro)

> Basado en `brief.md` y en el diseño real leído desde Claude Design (`Flow Life.dc.html`, proyecto "BMX freestyle mentor web").
> Cada fase deja la web funcionando y verificable. Se trabaja fase por fase.

## Estado

- [x] Fase 0 — Scaffold y fundaciones
- [x] Fase 1 — Esqueleto de página: Nav, Hero, Marquee, Footer
- [x] Fase 2 — Secciones estáticas: Profe, Riders, Precios, Spots
- [x] Fase 3 — Islas interactivas: Agenda y Galería
- [x] Fase 4 — Formulario de contacto (React + RHF)
- [x] Fase 5 — Responsive fino y QA final (a11y: solo lo básico que ya venía de las fases 1–4, por decisión de alcance)

---

## Lo que dice el diseño (ya analizado)

**Tokens:** fondo `#0B0B0B`, superficie `#1A1A1A`, fondo alterno `#111111`, bordes `#2D2D2D`/`#4a4a4a`, texto `#F2F2EA`, muted `#A3A3A3`/`#5a5a5a`, acento `--acc: #C6FF00` sobre `--accInk: #0B0B0B`, warning `#FFB020`, error `#FF5A1F`.

**Fuentes Google:** Bebas Neue (display), Manrope (cuerpo), Space Mono (labels).

**Breakpoints:** `<860px` móvil, `<640px` móvil chico. En el diseño son checks JS de `window.innerWidth`; en la implementación se convierten a **media queries CSS** (ajuste técnico permitido por el brief).

**Secciones (en orden):**

1. **Nav** — sticky, logo "FLOW LIFE / BMX FREESTYLE", links ancla (Profe, Agenda, Riders, Galería, Precios, Spots), CTA "Reservar clase", hamburguesa en móvil
2. **Menú móvil** — overlay fullscreen con los mismos links
3. **Hero** (`#inicio`) — headline, subtexto, 3 CTAs, placeholder de video loop
4. **Marquee** — cinta animada infinita (PARK ✕ STREET ✕ BOWL…), keyframes `fl-marquee`
5. **Profe** (`#profe`) — grid de fotos placeholder, bio, 3 stats (12+ años, 80+ riders, 6 spots), tags de disciplinas
6. **Agenda** (`#agenda`) — chips de filtro por nivel + lista de clases (día, hora, lugar, tipo, nivel, cupos, estado Disponible/Pocos cupos/Completo, botón Reservar) — **interactiva**
7. **Riders** (`#riders`) — cards con media, nombre, nivel, progreso antes→después, quote
8. **Galería** (`#galeria`) — chips de filtro por categoría + grid de fotos/clips con badge ▶ VIDEO + **modal lightbox** — **interactiva**
9. **Precios** (`#precios`) — 4 planes (Individual $25, Grupal $15, Pack Mensual $50 destacado, Pregrabadas $10)
10. **Spots** (`#spots`) — placeholder de mapa + cards de spots (nombre, nivel, descripción, días)
11. **Contacto** (`#contacto`) — CTA WhatsApp, links sociales, **formulario** (nombre*, edad, nivel*, zona, día, bici, qué aprender, whatsapp*, mensaje) con estado de error y pantalla de éxito "¡LISTO!"
12. **Footer** — logo + tagline
13. **CTA flotante** — botón fijo "Reservar clase" abajo a la derecha

Los datos de ejemplo (`clasesData`, `galeriaData`, `ridersData`, `planesData`, `spotsData`) están en el script del diseño y se trasladan tal cual a `src/data/`.

---

## Decisiones de arquitectura

- **Astro estático, una sola página** (`src/pages/index.astro`) con secciones ancla.
- **CSS Modules** por componente + `src/styles/global.css` con variables CSS (tokens), reset mínimo, keyframes del marquee y fuentes (link de Google Fonts en el layout, como en el diseño).
- **Islas React (solo 3):**
  - `ContactForm.tsx` — React Hook Form, validaciones (nombre, nivel, whatsapp requeridos), estado de error, pantalla de éxito, submit mock con comentario `// TODO: integrar backend`.
  - `Agenda.tsx` — chips de filtro por nivel + lista filtrada.
  - `Galeria.tsx` — chips de filtro por categoría + grid + modal.
- **Menú móvil con `<script>` vanilla en el Nav** (toggle de clase; no justifica React — KISS).
- **Placeholders de medios:** componente `MediaPlaceholder.astro` que reproduce el patrón rayado del diseño (`repeating-linear-gradient`) con el label mono. Los items de `images.ts`/`videos.ts` llevan `src` opcional: si hay `src` se renderiza `<img>`/`<video>`, si no, el placeholder. Reemplazar assets después = solo editar el array.
- **Sin Nanostores por ahora** — no hay estado compartido entre islas (YAGNI). Se agrega solo si aparece la necesidad.
- **TypeScript** (default de Astro; el brief usa `.ts` en los ejemplos). Package manager: **pnpm**.

## Estructura

```
src/
  components/
    sections/   Nav.astro, Hero.astro, Marquee.astro, Profe.astro,
                AgendaSection.astro (wrapper), Riders.astro, GaleriaSection.astro (wrapper),
                Precios.astro, Spots.astro, Contacto.astro, Footer.astro, CtaFlotante.astro
    ui/         MediaPlaceholder.astro (más solo si se repite de verdad)
    forms/      ContactForm.tsx (+ .module.css)
    islands/    Agenda.tsx, Galeria.tsx (+ .module.css)
  data/         images.ts, videos.ts, clases.ts, riders.ts, planes.ts, spots.ts, site.ts (nav, sociales)
  layouts/      Layout.astro
  pages/        index.astro
  styles/       global.css
design/         flow-life-reference.html (copia local del diseño para comparar)
```

---

## Fases

### Fase 0 — Scaffold y fundaciones

- `git init` + `pnpm create astro@latest` (template minimal, TS), integración `@astrojs/react`, deps `react`, `react-dom`, `react-hook-form`.
- Estructura de carpetas de arriba; `global.css` con tokens (variables CSS), reset, fuentes, keyframes marquee.
- `Layout.astro` (head, fuentes, meta, global.css) y `index.astro` vacío renderizando.
- Guardar el diseño de referencia en `design/flow-life-reference.html` (re-fetch vía DesignSync).

**Done:** `pnpm dev` levanta, página oscura vacía con fuentes cargadas, `pnpm build` pasa.

### Fase 1 — Esqueleto de página: Nav, Hero, Marquee, Footer

- `Nav.astro` con menú móvil (script vanilla), `Hero.astro` (con `MediaPlaceholder` para el video), `Marquee.astro`, `Footer.astro`, `CtaFlotante.astro`.
- `data/site.ts` (links de nav y sociales), `data/videos.ts` (video del hero).

**Done:** página navegable con anclas, marquee animado, menú móvil abre/cierra, responsive básico de estas piezas.

### Fase 2 — Secciones estáticas: Profe, Riders, Precios, Spots

- `Profe.astro` (fotos desde `images.ts`, stats, tags), `Riders.astro` (`riders.ts`), `Precios.astro` (`planes.ts`, plan destacado con badge), `Spots.astro` (`spots.ts` + placeholder de mapa).

**Done:** las 4 secciones idénticas al diseño en desktop y móvil, todo el contenido saliendo de `src/data/`.

### Fase 3 — Islas interactivas: Agenda y Galería

- `Agenda.tsx` (`client:visible`): chips por nivel, lista filtrada, estados de cupo con color, botón Reservar/Completo.
- `Galeria.tsx` (`client:visible`): chips por categoría, grid con ratios variables y badge video, modal lightbox (cerrar con click fuera / ✕ / Escape).
- Datos como props desde `clases.ts` y items de galería combinando `images.ts`/`videos.ts`.

**Done:** filtros y modal funcionando igual que el prototipo del diseño.

### Fase 4 — Formulario de contacto (React + RHF)

- `Contacto.astro` (columna izquierda estática) + `ContactForm.tsx` (`client:visible`).
- RHF: requeridos nombre/nivel/whatsapp, mensajes de error en el estilo del diseño (`#FF5A1F`), estado de éxito "¡LISTO!" con "Enviar otro", handler mock preparado para integración futura.

**Done:** validaciones y flujo completo de éxito/error funcionando sin backend.

### Fase 5 — Responsive fino, accesibilidad y QA final

- Repaso responsive completo (860px / 640px / móvil chico), grid de clases en móvil, hover states, focus visible en inputs (`border-color: var(--acc)`).
- Accesibilidad básica: alt en imágenes, labels asociados, `aria-expanded` en hamburguesa, `aria-modal` en lightbox.
- Comparación lado a lado contra `design/flow-life-reference.html`; checklist del Definition of Done del brief; `npm run build` limpio.

**Done:** brief completo — checklist DoD del `brief.md` verificado.

---

## Verificación (por fase y final)

- `npm run dev` + revisión visual contra el diseño de referencia (desktop / ~800px / ~600px / 375px).
- Interacciones: menú móvil, filtros de agenda y galería, modal (incl. Escape), formulario (submit vacío → errores; completo → éxito → reset).
- `npm run build && npm run preview` sin errores al cierre de cada fase.

## Fuera de alcance (explícito en el brief)

Tailwind, back office, CMS/DB/auth, estado global (mientras no haga falta), librerías extra, rediseño visual.
