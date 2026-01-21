# ⚡ INICIO RÁPIDO - 30 Segundos

## 🎯 Quiero: Puzzle Primero

### Paso 1
Abre: **`src/config/sections.ts`**

### Paso 2
Agrega esta línea al inicio (línea 2):
```typescript
import { PUZZLE_FIRST_CONFIG } from './presets';
```

### Paso 3
Encuentra esta línea (aproximadamente línea 42):
```typescript
export const appConfig = {
```

### Paso 4
Reemplázala por:
```typescript
export const appConfig = PUZZLE_FIRST_CONFIG;
```

### Paso 5
Borra todo lo demás de `appConfig` (las líneas con `startAt` y `sections`)

### Resultado Final
Tu archivo debería verse así:

```typescript
import { PUZZLE_FIRST_CONFIG } from './presets';

export type SectionType = 'welcome' | 'memory-gallery' | 'quiz' | 'puzzle' | 'proposal';

export interface SectionConfig {
  id: SectionType;
  enabled: boolean;
  name: string;
}

export const appConfig = PUZZLE_FIRST_CONFIG;

// ... resto del archivo
```

### ¡Listo! 🎉
Guarda el archivo y recarga tu navegador.

---

## 🎮 Otros Cambios Rápidos

### Solo quiero probar la propuesta final:
```typescript
import { PROPOSAL_ONLY_CONFIG } from './presets';
export const appConfig = PROPOSAL_ONLY_CONFIG;
```

### Experiencia corta (sin juegos):
```typescript
import { QUICK_CONFIG } from './presets';
export const appConfig = QUICK_CONFIG;
```

### Volver a la original:
```typescript
import { ORIGINAL_CONFIG } from './presets';
export const appConfig = ORIGINAL_CONFIG;
```

---

## 📝 Para Ediciones Manuales

Si prefieres editar manualmente, simplemente reorganiza las líneas en el array `sections`.

**Ejemplo - Mover puzzle al segundo lugar:**

```typescript
sections: [
  { id: 'welcome', enabled: true, name: 'Bienvenida' },
  { id: 'puzzle', enabled: true, name: 'Puzzle' },           // ← Arrastra esta línea aquí
  { id: 'memory-gallery', enabled: true, name: 'Galería' },
  { id: 'quiz', enabled: true, name: 'Quiz' },
  { id: 'proposal', enabled: true, name: 'Propuesta' }
]
```

---

## 🆘 Ayuda

Lee los archivos de documentación:
- **README_CONFIGURACION.md** - Resumen
- **EJEMPLOS_VISUALES.md** - Ejemplos visuales
- **GUIA_CONFIGURACION.md** - Guía completa

---

## ✅ Checklist

- [ ] Abrí `src/config/sections.ts`
- [ ] Importé el preset que quiero
- [ ] Reemplacé `export const appConfig = ...`
- [ ] Guardé el archivo
- [ ] Recargué el navegador
- [ ] ¡Funcionó! 🎉
