# 🎯 Ejemplos Visuales - Cambios Más Comunes

## 📍 Archivo a Editar
👉 **`src/config/sections.ts`**

---

## 🔥 Cambio #1: Puzzle Primero (Tu Petición)

### ❌ ANTES:
```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
  { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },           // ← Posición 3
  { id: 'proposal', enabled: true, name: 'Propuesta Final' }
]
```

### ✅ DESPUÉS:
```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },           // ← Movido a posición 1
  { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
  { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
  { id: 'proposal', enabled: true, name: 'Propuesta Final' }
]
```

**Resultado:** Welcome → **Puzzle** → Gallery → Quiz → Proposal

---

## 🔥 Cambio #2: Saltar el Quiz

### ❌ ANTES:
```typescript
{ id: 'quiz', enabled: true, name: 'Quiz de Amor' },
```

### ✅ DESPUÉS:
```typescript
{ id: 'quiz', enabled: false, name: 'Quiz de Amor' },  // ← Solo cambia true a false
```

**Resultado:** La app saltará el quiz automáticamente

---

## 🔥 Cambio #3: Empezar Directo en la Galería

### ❌ ANTES:
```typescript
export const appConfig = {
  startAt: 0,  // Empieza en la primera sección
  sections: [
```

### ✅ DESPUÉS:
```typescript
export const appConfig = {
  startAt: 1,  // ← Cambia 0 a 1 (0=welcome, 1=gallery)
  sections: [
```

**Resultado:** Salta la pantalla de bienvenida

---

## 🔥 Cambio #4: Solo Galería y Propuesta

### ❌ ANTES:
```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
  { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },
  { id: 'proposal', enabled: true, name: 'Propuesta Final' }
]
```

### ✅ DESPUÉS:
```typescript
sections: [
  { id: 'welcome', enabled: false, name: 'Bienvenida' },           // ← false
  { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
  { id: 'quiz', enabled: false, name: 'Quiz de Amor' },            // ← false
  { id: 'puzzle', enabled: false, name: 'Puzzle' },                // ← false
  { id: 'proposal', enabled: true, name: 'Propuesta Final' }
]
```

**Resultado:** Solo Gallery → Proposal

---

## 🔥 Cambio #5: Testing - Solo Ver la Propuesta

### ❌ ANTES:
```typescript
export const appConfig = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería' },
    { id: 'quiz', enabled: true, name: 'Quiz' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta' }
  ]
}
```

### ✅ DESPUÉS:
```typescript
export const appConfig = {
  startAt: 0,  // No importa el número si solo hay una sección activa
  sections: [
    { id: 'welcome', enabled: false, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: false, name: 'Galería' },
    { id: 'quiz', enabled: false, name: 'Quiz' },
    { id: 'puzzle', enabled: false, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta' }      // ← Solo este true
  ]
}
```

**Resultado:** Va directo a la propuesta (útil para testing)

---

## 💡 Método Alternativo: Usar Presets

En lugar de editar manualmente, puedes usar las configuraciones predefinidas:

### 1️⃣ Abre `src/config/sections.ts`

### 2️⃣ Agrega esta línea al inicio (después de los imports):
```typescript
import { PUZZLE_FIRST_CONFIG } from './presets';
```

### 3️⃣ Reemplaza la configuración:
```typescript
// ❌ Comenta o elimina esto:
// export const appConfig = {
//   startAt: 0,
//   sections: [...]
// };

// ✅ Usa esto:
export const appConfig = PUZZLE_FIRST_CONFIG;
```

### Presets disponibles:
- `ORIGINAL_CONFIG` - Configuración por defecto
- `PUZZLE_FIRST_CONFIG` - Puzzle primero
- `QUICK_CONFIG` - Solo welcome, gallery y proposal
- `GAMES_ONLY_CONFIG` - Solo quiz y puzzle
- `PROPOSAL_ONLY_CONFIG` - Solo propuesta (testing)
- `REVERSE_CONFIG` - Orden inverso
- `SKIP_TO_GALLERY_CONFIG` - Salta el welcome

---

## ⚡ Quick Reference

| Quiero... | Cambiar... |
|-----------|------------|
| Cambiar el orden | Reorganizar las líneas en `sections: []` |
| Omitir una sección | `enabled: true` → `enabled: false` |
| Empezar en otra sección | `startAt: 0` → `startAt: 1` (o 2, 3, 4) |
| Testing rápido | Usar `PROPOSAL_ONLY_CONFIG` |

---

## 🔢 Referencia de Índices

```
startAt: 0  →  Welcome
startAt: 1  →  Memory Gallery
startAt: 2  →  Quiz
startAt: 3  →  Puzzle
startAt: 4  →  Proposal
```

*(Asumiendo que todas las secciones están en su orden original)*

---

## 🚨 Recordatorios Importantes

1. ✅ Siempre guarda el archivo después de hacer cambios
2. ✅ Recarga la página en el navegador para ver los cambios
3. ✅ La propuesta debería ser siempre la última sección activa
4. ✅ Ten al menos una sección con `enabled: true`

---

## 🎉 ¡Listo!

Con estos ejemplos ya puedes personalizar completamente el flujo de tu aplicación. 💕
