/**
 * 🎯 CONFIGURACIÓN DE SECCIONES
 *
 * Aquí puedes controlar fácilmente:
 * - El orden de las secciones
 * - Qué secciones mostrar u omitir
 * - Dónde empezar la aplicación
 *
 * ═══════════════════════════════════════════════════════════════
 * 💡 ATAJO RÁPIDO: ¿Quieres usar una configuración predefinida?
 * ═══════════════════════════════════════════════════════════════
 * Revisa: src/config/presets.ts - Tiene configuraciones listas para usar
 *
 * Para usarlas, simplemente:
 * 1. Importa: import { PUZZLE_FIRST_CONFIG } from './presets';
 * 2. Usa: export const appConfig = PUZZLE_FIRST_CONFIG;
 *
 * ═══════════════════════════════════════════════════════════════
 * 📝 INSTRUCCIONES MANUALES:
 * ═══════════════════════════════════════════════════════════════
 * 1. Para cambiar el orden: Reorganiza el array 'sections'
 * 2. Para omitir una sección: Pon enabled: false
 * 3. Para empezar en una sección específica: Cambia 'startAt'
 */

export type SectionType = 'welcome' | 'memory-gallery' | 'quiz' | 'puzzle' | 'proposal';

export interface SectionConfig {
  id: SectionType;
  enabled: boolean;
  name: string;
}

// ═══════════════════════════════════════════════════════════════
// 📝 CONFIGURACIÓN ACTUAL
// ═══════════════════════════════════════════════════════════════

export const appConfig = {
  // 🚀 Índice de inicio (0 = primera sección habilitada)
  startAt: 0,

  // 🎨 Orden y estado de las secciones
  sections: [
    {
      id: 'welcome' as SectionType,
      enabled: true,
      name: 'Bienvenida'
    },
    {
      id: 'memory-gallery' as SectionType,
      enabled: true,
      name: 'Galería de Recuerdos'
    },
    {
      id: 'quiz' as SectionType,
      enabled: true,
      name: 'Quiz de Amor'
    },
    {
      id: 'puzzle' as SectionType,
      enabled: true,
      name: 'Puzzle'
    },
    {
      id: 'proposal' as SectionType,
      enabled: true,
      name: 'Propuesta Final'
    }
  ] as SectionConfig[]
};

// 🔧 Función auxiliar para obtener solo las secciones activas
export const getActiveSections = () => {
  return appConfig.sections.filter(section => section.enabled);
};

// 🔧 Función para obtener el índice de inicio real (saltando secciones deshabilitadas)
export const getStartIndex = () => {
  const activeSections = getActiveSections();
  const requestedSection = appConfig.sections[appConfig.startAt];

  if (!requestedSection || !requestedSection.enabled) {
    return 0; // Si la sección de inicio está deshabilitada, empieza desde la primera activa
  }

  return activeSections.findIndex(s => s.id === requestedSection.id);
};

// 🔧 Función para obtener la siguiente sección activa
export const getNextSectionIndex = (currentId: SectionType) => {
  const activeSections = getActiveSections();
  const currentIndex = activeSections.findIndex(s => s.id === currentId);

  if (currentIndex === -1 || currentIndex >= activeSections.length - 1) {
    return -1; // No hay siguiente sección
  }

  return currentIndex + 1;
};

/*
 * 📚 EJEMPLOS DE USO:
 *
 * ══════════════════════════════════════════════════════════════
 * EJEMPLO 1: Empezar directo en el puzzle
 * ══════════════════════════════════════════════════════════════
 * startAt: 3  // (welcome=0, memory=1, quiz=2, puzzle=3)
 *
 * ══════════════════════════════════════════════════════════════
 * EJEMPLO 2: Cambiar el orden - Puzzle primero
 * ══════════════════════════════════════════════════════════════
 * sections: [
 *   { id: 'welcome', enabled: true, name: 'Bienvenida' },
 *   { id: 'puzzle', enabled: true, name: 'Puzzle' },      // ← Movido aquí
 *   { id: 'memory-gallery', enabled: true, name: '...' },
 *   { id: 'quiz', enabled: true, name: 'Quiz de Amor' },
 *   { id: 'proposal', enabled: true, name: '...' }
 * ]
 *
 * ══════════════════════════════════════════════════════════════
 * EJEMPLO 3: Omitir el quiz
 * ══════════════════════════════════════════════════════════════
 * { id: 'quiz', enabled: false, name: 'Quiz de Amor' },
 *
 * ══════════════════════════════════════════════════════════════
 * EJEMPLO 4: Solo mostrar galería y propuesta
 * ══════════════════════════════════════════════════════════════
 * sections: [
 *   { id: 'welcome', enabled: false, name: 'Bienvenida' },
 *   { id: 'memory-gallery', enabled: true, name: '...' },
 *   { id: 'quiz', enabled: false, name: 'Quiz de Amor' },
 *   { id: 'puzzle', enabled: false, name: 'Puzzle' },
 *   { id: 'proposal', enabled: true, name: '...' }
 * ]
 */
