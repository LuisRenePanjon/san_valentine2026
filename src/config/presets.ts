/**
 * 🎨 CONFIGURACIONES PREDEFINIDAS
 *
 * Copia y pega cualquiera de estas configuraciones en src/config/sections.ts
 * para cambiar rápidamente el comportamiento de la app.
 */

import type { SectionConfig } from './sections';

// ════════════════════════════════════════════════════════════
// 🎯 CONFIGURACIÓN ORIGINAL (Recomendada para tu novia)
// ════════════════════════════════════════════════════════════
export const ORIGINAL_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// 🧩 PUZZLE PRIMERO (Tu petición)
// ════════════════════════════════════════════════════════════
export const PUZZLE_FIRST_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// ⚡ EXPERIENCIA RÁPIDA
// ════════════════════════════════════════════════════════════
export const QUICK_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: false, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: false, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// 🎮 SOLO JUEGOS
// ════════════════════════════════════════════════════════════
export const GAMES_ONLY_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: false, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: false, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// 💝 SOLO PROPUESTA (Para testing)
// ════════════════════════════════════════════════════════════
export const PROPOSAL_ONLY_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'welcome', enabled: false, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: false, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: false, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: false, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// 🔄 ORDEN INVERSO
// ════════════════════════════════════════════════════════════
export const REVERSE_CONFIG = {
  startAt: 0,
  sections: [
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

// ════════════════════════════════════════════════════════════
// 🎯 DIRECTO A GALERÍA
// ════════════════════════════════════════════════════════════
export const SKIP_TO_GALLERY_CONFIG = {
  startAt: 1,  // Salta el welcome
  sections: [
    { id: 'welcome', enabled: true, name: 'Bienvenida' },
    { id: 'memory-gallery', enabled: true, name: 'Galería de Recuerdos' },
    { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
    { id: 'puzzle', enabled: true, name: 'Puzzle' },
    { id: 'proposal', enabled: true, name: 'Propuesta Final' }
  ] as SectionConfig[]
};

/*
 * ═══════════════════════════════════════════════════════════════
 * 📖 CÓMO USAR ESTOS PRESETS:
 * ═══════════════════════════════════════════════════════════════
 *
 * 1. Abre: src/config/sections.ts
 *
 * 2. Importa el preset que quieras usar:
 *    import { PUZZLE_FIRST_CONFIG } from './presets';
 *
 * 3. Reemplaza appConfig con el preset:
 *    export const appConfig = PUZZLE_FIRST_CONFIG;
 *
 * ¡Listo! La app usará esa configuración.
 *
 * ═══════════════════════════════════════════════════════════════
 */
