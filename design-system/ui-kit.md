# Sleep Sheep Mini UI Kit

Este mini kit traslada el estilo de la web actual a producto/app.
Usa como fuente oficial `design-system/tokens.json`.

## 1) Principios visuales

- Calm dark UI: fondo oscuro, texto claro, bajo ruido visual.
- Accent contenido: violeta suave para guiar, no para saturar.
- Bordes > sombras: usa bordes sutiles y blur controlado.
- Una idea por bloque: jerarquia clara en cada pantalla.
- Motion suave: transiciones cortas y nunca agresivas.

## 2) Tokens base (resumen)

- **Fondos**
  - `bg.deep`: `#0b091a`
  - `bg.surface`: `#13102a`
  - `bg.card`: `#1c1838`
- **Acentos**
  - `accent.core`: `#6b6bb5`
  - `accent.light`: `#a89fe8`
  - `accent.pale`: `#c4b8ff`
- **Texto**
  - `text.primary`: `#ede8ff`
  - `text.secondary`: `#7a7290`
- **Borde**
  - `border.subtle`: `rgba(168, 159, 232, 0.15)`

## 3) Tipografia

- Fuente unica: **Poppins** (300/400)
- Escalas recomendadas:
  - Display: `clamp(2.2rem, 8vw, 4.2rem)` / `1.05`
  - Heading: `clamp(1.7rem, 5.4vw, 2.8rem)` / `1.14`
  - Body: `16/24`
  - Body small: `14/20`
  - Eyebrow: `14/20`, 300, uppercase, tracking `0.14em`

## 4) Layout y espaciado

- Container max: `72rem`
- Padding lateral: `1.25rem` mobile, `2rem` desktop
- Alto seccion base: `5.4rem` arriba/abajo
- Radio:
  - small `12px`
  - input `14px`
  - card `20px`
  - pill `9999px`

## 5) Componentes canonicos

### Button

- **Primary**
  - fondo: gradiente `accent.light -> accent.pale`
  - texto: `bg.deep`
  - hover: opacidad `0.92`, `translateY(-1px)`
- **Outline**
  - fondo transparente
  - borde `border.subtle`
  - texto `text.primary`

### Card

- Fondo `bg.card`
- Borde `1px border.subtle`
- Radio `20px`
- Sin sombras decorativas

### Input

- Min height `48px`
- Fondo `bg.card`
- Borde `1px border.subtle`
- Focus: borde `accent.light`

### Navbar

- Estado inicial transparente
- Estado scroll:
  - fondo translcido oscuro
  - blur `10px`
  - linea inferior sutil animada
- Umbral actual: `120px`

### Stats glass (estilo premium)

- Fondo translcido + blur (`14px`) + saturacion (`130%`)
- Borde algo mas luminoso via `color-mix`
- Highlight interno suave
- Mantener contraste de texto

## 6) Motion

- Duraciones:
  - fast `220ms`
  - medium `260ms`
  - slow `520ms`
- Curvas:
  - `ease` para interacciones comunes
  - `cubic-bezier(0.22, 1, 0.36, 1)` para microtransiciones premium
- Scroll reveal:
  - `opacity 0 -> 1`
  - `translateY(18px) -> 0`

## 7) Patrones de pantalla para app

### A) Onboarding

- Fondo `bg.deep`
- Headline grande + 1 parrafo corto
- CTA primario fijo abajo
- 1 elemento visual fuerte por pantalla

### B) Dashboard de sueno

- Fondo `bg.surface`
- Cards modulares `bg.card`
- Grafica principal en top card
- KPI secundarios en grid 2x2

### C) Alarm setup

- Input/controls dentro de card
- CTA principal persistente
- Texto auxiliar en `text.secondary`

### D) Paywall

- 3 planes en cards (free/pro/annual)
- Pro resaltado por borde/acento, no por glow duro
- Mensaje de confianza corto bajo planes

## 8) Reglas de uso (Do / Dont)

### Do

- Usar siempre tokens.
- Mantener contraste alto para legibilidad nocturna.
- Priorizar bordes y blur suave.
- Limitar acentos a acciones importantes.

### Dont

- No introducir colores fuera de la paleta.
- No usar sombras grandes o neones.
- No saturar con gradientes en todo.
- No meter mas de 2 focos visuales fuertes por vista.

## 9) Implementacion rapida en app (checklist)

- [ ] Definir tokens en capa global (Theme/Design Tokens).
- [ ] Crear `Button`, `Card`, `Input`, `Chip`, `Navbar`.
- [ ] Unificar tipografia Poppins 300/400.
- [ ] Aplicar estado oscuro por defecto.
- [ ] Ajustar motion a `220/260/520ms`.
- [ ] Revisar contraste AA en texto secundario.

## 10) Mapeo rapido a iOS (SwiftUI)

- `Color("bgDeep") = #0b091a`
- `Color("bgSurface") = #13102a`
- `Color("bgCard") = #1c1838`
- `Color("accentLight") = #a89fe8`
- `Color("textPrimary") = #ede8ff`
- `Color("textSecondary") = #7a7290`
- `RoundedRectangle(cornerRadius: 20).stroke(borderSubtle)`
- `Material` solo en bloques premium, no global.

