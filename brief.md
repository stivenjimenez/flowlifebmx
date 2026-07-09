# Spec: Web Flow Life — Mentor BMX

## Título

**Maquetación web para mentor de BMX — Flow Life**

---

## Contexto

Queremos construir una web para un mentor de BMX llamada **Flow Life**.

El diseño visual, estructura de secciones y referencia principal ya existen en Claude Design. Por lo tanto, esta primera etapa no busca rediseñar la web, sino **implementar la maquetación respetando el diseño existente**.

Referencia de diseño:

```txt
Use the claude_design MCP (https://api.anthropic.com/v1/design/mcp, auth via /design-login) to import this project:
https://claude.ai/design/p/85abb2ce-c142-42b0-8367-8dfdd271bb6e?file=Flow+Life.html

Implement: Flow Life.html
```

La web se desarrollará usando **Astro JS** como framework principal.

El objetivo de esta fase es tener una versión frontend maquetada, responsive y lista para extender más adelante con funcionalidades de back office.

La gestión de imágenes y videos debe quedar preparada de forma simple, usando arrays de datos para que luego sea fácil reemplazar, agregar o conectar contenido real desde un backend o CMS.

---

## Constraints

### Stack técnico

- Usar **Astro JS**.
- Usar **CSS Modules** para los estilos.
- Usar **React solo donde sea necesario**, principalmente para formularios o componentes con estado/interacción.
- Usar **React Hook Form** para formularios.
- Si se necesita estado global, usar **Nanostores atom**.
- Mantener el código bajo principios:
  - **KISS**: simple, directo y fácil de entender.
  - **DRY**: evitar duplicación innecesaria.
  - **YAGNI**: no construir cosas que todavía no se necesitan.

### Diseño

- El diseño ya está definido en Claude Design.
- No rediseñar la experiencia visual.
- No cambiar secciones, jerarquía visual o composición sin una razón clara.
- La implementación debe respetar lo más posible el archivo `Flow Life.html`.

### Contenido multimedia

- Las imágenes deben estar definidas en arrays reutilizables.
- Los videos deben estar definidos en arrays reutilizables.
- En esta primera fase pueden usarse assets placeholder o rutas temporales.
- La estructura debe permitir reemplazar esos assets fácilmente después.

Ejemplo esperado:

```ts
export const galleryImages = [
  {
    src: "/images/bmx-01.jpg",
    alt: "Mentor de BMX entrenando con alumno",
  },
  {
    src: "/images/bmx-02.jpg",
    alt: "Sesión de BMX en skatepark",
  },
];

export const videos = [
  {
    src: "/videos/session-01.mp4",
    poster: "/images/video-poster-01.jpg",
    title: "Entrenamiento BMX Flow Life",
  },
];
```

### Formularios

- Los formularios deben implementarse con **React**.
- Usar **React Hook Form** para manejar:
  - valores
  - validaciones
  - errores
  - submit
- No conectar todavía con backend real.
- El submit puede quedar preparado con un handler mock o comentario claro para integración futura.

### Estado global

- No agregar estado global si no es necesario.
- Si aparece una necesidad real de estado compartido, usar **Nanostores atom**.
- No usar Redux, Zustand u otras soluciones más pesadas.

### Lo que NO queremos

- No usar **Tailwind CSS**.
- No hacer sobreingeniería.
- No crear una arquitectura compleja innecesaria.
- No implementar back office en esta fase.
- No conectar CMS, base de datos ni autenticación todavía.
- No crear abstracciones prematuras.
- No agregar librerías si Astro, React, CSS Modules o APIs nativas resuelven el caso.
- No convertir toda la web en React si no hace falta.
- No modificar el diseño original salvo por ajustes técnicos/responsive necesarios.

---

## Definition of Done

La primera etapa se considera terminada cuando:

- La web está creada con **Astro JS**.
- El proyecto usa **CSS Modules** para estilos.
- El diseño de `Flow Life.html` está implementado como maquetación web.
- Las secciones principales del diseño están presentes.
- La web es responsive en desktop, tablet y mobile.
- Las imágenes están organizadas en arrays de datos reutilizables.
- Los videos están organizados en arrays de datos reutilizables.
- Los formularios, si existen en el diseño, están implementados con:
  - React
  - React Hook Form
  - validaciones básicas
  - estados de error
  - handler de submit preparado para integración futura
- No se usa Tailwind CSS.
- No hay lógica de back office todavía.
- No hay integración con backend todavía.
- El código está limpio, simple y fácil de extender.
- La estructura permite que en una siguiente fase se pueda agregar:
  - back office
  - contenido dinámico
  - persistencia de formularios
  - gestión de imágenes/videos desde backend o CMS

---

## Notas para implementación

Priorizar una estructura simple como:

```txt
src/
  components/
    sections/
    ui/
    forms/
  data/
    images.ts
    videos.ts
  layouts/
  pages/
  styles/
```

La implementación debe favorecer componentes pequeños y claros, pero sin abstraer de más.

Astro debe ser la base de la web. React debe usarse solo en islas interactivas, especialmente formularios.
