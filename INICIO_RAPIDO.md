# 🚀 Guía Rápida de Inicio

## ✅ Estado del Proyecto

**¡TODO ESTÁ LISTO!** ✨

- ✅ Tailwind CSS instalado y configurado
- ✅ Todos los componentes convertidos
- ✅ Build de producción funcionando
- ✅ Sin errores de TypeScript
- ✅ Aplicación lista para ejecutar

## 🎯 Ejecutar la Aplicación

### Opción 1: Modo Desarrollo (Recomendado para personalizar)

```bash
npm run dev
```

Abre tu navegador en: **http://localhost:5174** (o el puerto que te indique la terminal)

### Opción 2: Build de Producción

```bash
# Crear build de producción
npm run build

# Previsualizar el build
npm run preview
```

## 📸 Personalizar ANTES de Mostrarle

### 1. Agregar Tus Fotos

Coloca tus fotos en `src/assets/`:
- `photo1.jpg`, `photo2.jpg`, `photo3.jpg` - Para la galería
- `puzzle-image.jpg` - Para el puzzle

Luego actualiza las rutas en:

**src/components/MemoryGallery.tsx** (líneas 17-35):
```typescript
const memories: Memory[] = [
  {
    id: 1,
    image: '/src/assets/photo1.jpg', // ← Cambiar aquí
    description: 'Tu mensaje personalizado aquí',
    date: 'Enero 2025'
  },
  // ...más recuerdos
];
```

**src/components/PuzzleGame.tsx** (línea 74):
```typescript
backgroundImage: 'url(/src/assets/puzzle-image.jpg)', // ← Cambiar aquí
```

### 2. Personalizar Preguntas del Quiz

**src/components/QuizGame.tsx** (líneas 16-34):
```typescript
const questions: QuizQuestion[] = [
  {
    question: "¿Dónde nos conocimos?", // ← Tu pregunta
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    correctAnswer: 0, // ← Índice de la respuesta correcta (0-3)
    hint: "Tu pista aquí"
  },
  // ...más preguntas
];
```

### 3. Personalizar Mensajes

**src/components/Welcome.tsx**:
- Línea 34: Título de bienvenida
- Línea 43: Subtítulo

**src/components/FinalProposal.tsx**:
- Línea 77: Pregunta principal
- Líneas 86-90: Mensaje romántico
- Líneas 173-174: Mensaje de aceptación

## 🎨 Colores y Estilos

Los colores están configurados en `tailwind.config.js`:
- `valentine-pink`: #FF6B9D
- `valentine-light`: #FFC2D4  
- `valentine-red`: #FF1744

Puedes cambiarlos editando ese archivo.

## 📱 Flujo de la Aplicación

1. **Welcome** - Pantalla de bienvenida
2. **Memory Gallery** - Recuerdos especiales (3 fotos por defecto, puedes agregar más)
3. **Quiz Game** - 3 preguntas (puedes agregar más)
4. **Puzzle Game** - Puzzle 3x3
5. **Final Proposal** - ¡La pregunta especial!

## 💾 Compartir la Aplicación

### Opción A: En tu computadora
```bash
npm run dev
```
Comparte la URL local si están en la misma red WiFi.

### Opción B: Desplegar en Internet (Gratis)

#### Netlify (Recomendado):
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
npm run build
netlify deploy --prod --dir=dist
```

#### Vercel:
```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
```

## 🎁 Tips Pro

1. **Música de Fondo**: Puedes agregar un `<audio>` tag en FinalProposal.tsx
2. **Más Recuerdos**: Simplemente agrega más objetos al array `memories`
3. **Más Preguntas**: Agrega más objetos al array `questions`
4. **Videos**: En lugar de `image`, usa `video` en los recuerdos
5. **Modo Oscuro**: Agrega `darkMode: 'class'` en tailwind.config.js

## 🐛 Solución de Problemas

### El servidor no inicia:
```bash
rm -rf node_modules
npm install
npm run dev
```

### Las imágenes no se ven:
- Verifica que las rutas sean correctas
- Las rutas deben empezar con `/src/assets/`
- Las imágenes placeholder de Unsplash solo funcionan con internet

### Error de Tailwind:
Verifica que `postcss.config.js` tenga:
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## ✨ ¡Listo para Usar!

La aplicación está **100% funcional** con Tailwind CSS. Solo necesitas:

1. Agregar tus fotos personales (o usa las placeholder mientras)
2. Personalizar los mensajes
3. Ejecutar `npm run dev`
4. ¡Compartirla con tu novia!

**¡Buena suerte con tu propuesta de San Valentín! 💝**

---

📚 **Documentación adicional:**
- `README_ES.md` - Guía completa del proyecto
- `CAMBIOS_TAILWIND.md` - Detalle de todos los cambios realizados

