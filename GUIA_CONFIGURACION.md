# 🎮 Guía Rápida: Configuración de Secciones

## 📍 Archivo de Configuración
Todas las configuraciones están en: **`src/config/sections.ts`**

---

## 🚀 Casos de Uso Comunes

### 1️⃣ Cambiar el Orden de las Secciones

**Quiero que el Puzzle sea primero:**

```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },           // ← Movido aquí
  { id: 'memory-gallery', enabled: true, name: 'Galería' },
  { id: 'quiz', enabled: true, name: 'Quiz' },
  { id: 'proposal', enabled: true, name: 'Propuesta' }
]
```

**Quiero este orden: Welcome → Quiz → Puzzle → Memories → Proposal:**

```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'quiz', enabled: true, name: 'Quiz' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },
  { id: 'memory-gallery', enabled: true, name: 'Galería' },
  { id: 'proposal', enabled: true, name: 'Propuesta' }
]
```

---

### 2️⃣ Omitir Secciones

**Omitir el Quiz:**

```typescript
{ id: 'quiz', enabled: false, name: 'Quiz de Amor' },
```

**Solo mostrar Bienvenida → Galería → Propuesta:**

```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'memory-gallery', enabled: true, name: 'Galería' },
  { id: 'quiz', enabled: false, name: 'Quiz' },              // ← Deshabilitado
  { id: 'puzzle', enabled: false, name: 'Puzzle' },          // ← Deshabilitado
  { id: 'proposal', enabled: true, name: 'Propuesta' }
]
```

---

### 3️⃣ Empezar en una Sección Específica

**Empezar directo en el Puzzle:**

```typescript
startAt: 3,  // 0=welcome, 1=memory, 2=quiz, 3=puzzle, 4=proposal
```

**Empezar directo en la Propuesta:**

```typescript
startAt: 4,  // Salta todo y va directo a la propuesta
```

**Empezar en la Galería de Recuerdos:**

```typescript
startAt: 1,  // Salta el welcome
```

---

## 🎯 Ejemplos Completos

### Ejemplo A: Testing - Solo Propuesta
**Útil para probar la pantalla final:**

```typescript
export const appConfig = {
  startAt: 4,  // Empieza en propuesta
  sections: [
    { id: 'welcome', enabled: false, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: false, name: 'Galería' },
    { id: 'quiz', enabled: false, name: 'Quiz' },
    { id: 'puzzle', enabled: false, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta' }
  ]
};
```

### Ejemplo B: Experiencia Corta
**Welcome → Galería → Propuesta:**

```typescript
export const appConfig = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería' },
    { id: 'quiz', enabled: false, name: 'Quiz' },
    { id: 'puzzle', enabled: false, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta' }
  ]
};
```

### Ejemplo C: Puzzle Primero
**Puzzle → Galería → Quiz → Propuesta:**

```typescript
export const appConfig = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: false, name: 'Bienvenida' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'memory-gallery', enabled: true, name: 'Galería' },
    { id: 'quiz', enabled: true, name: 'Quiz' },
    { id: 'proposal', enabled: true, name: 'Propuesta' }
  ]
};
```

---

## 📝 IDs de Secciones Disponibles

| ID | Componente | Descripción |
|---|---|---|
| `'welcome'` | Welcome.tsx | Pantalla de bienvenida |
| `'memory-gallery'` | MemoryGallery.tsx | Galería de recuerdos |
| `'quiz'` | QuizGame.tsx | Quiz de preguntas |
| `'puzzle'` | PuzzleGame.tsx | Juego de puzzle |
| `'proposal'` | FinalProposal.tsx | Propuesta final |

---

## ⚡ Tips

1. **Siempre deja al menos una sección `enabled: true`**
2. **La `proposal` debería ser siempre la última sección activa**
3. **Los cambios se aplican automáticamente al recargar** (no necesitas recompilar)
4. **Si `startAt` apunta a una sección deshabilitada, empezará en la primera activa**

---

## 🔄 Restaurar Configuración Original

```typescript
export const appConfig = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ]
};
```

---

## ❓ ¿Necesitas Ayuda?

Si tienes dudas, los ejemplos dentro de `src/config/sections.ts` tienen comentarios detallados.
