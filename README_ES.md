# 💝 Aplicación de San Valentín

Una aplicación romántica e interactiva para hacer una propuesta especial de San Valentín con gamificación, galería de recuerdos y efectos visuales hermosos.

## 🎨 Características

- **Pantalla de Bienvenida** - Introducción romántica con animaciones
- **Galería de Recuerdos** - Muestra fotos/videos de momentos especiales
- **Quiz de Amor** - Preguntas personalizadas sobre la relación
- **Puzzle Interactivo** - Rompecabezas con una imagen especial
- **Propuesta Final** - Pregunta especial con efectos de confeti

## 🚀 Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador la URL que aparece (generalmente http://localhost:5173)

## 📸 Personalización

### Fotos y Videos

Coloca tus archivos en `src/assets/`:
- `photo1.jpg`, `photo2.jpg`, `photo3.jpg` - Para la galería de recuerdos
- `puzzle-image.jpg` - Para el juego de puzzle
- (Opcional) `celebration.mp3` - Música de celebración

### Preguntas del Quiz

Edita el archivo `src/components/QuizGame.tsx` y personaliza las preguntas en el array `questions`.

### Mensajes

Puedes personalizar todos los mensajes en cada componente:
- `Welcome.tsx` - Mensaje de bienvenida
- `MemoryGallery.tsx` - Descripciones de cada recuerdo
- `FinalProposal.tsx` - Pregunta final y mensajes

## 🎯 Flujo de la Aplicación

1. **Welcome** → Pantalla de bienvenida
2. **Memory Gallery** → Galería de recuerdos con navegación
3. **Quiz Game** → Preguntas sobre la relación
4. **Puzzle Game** → Armar un rompecabezas
5. **Final Proposal** → La pregunta especial de San Valentín

## 🛠️ Tecnologías

- **React** + **TypeScript** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **Framer Motion** - Animaciones fluidas
- **React Icons** - Iconos
- **React Confetti** - Efectos de confeti

## 💡 Tips

- Las imágenes deben estar en formato `.jpg`, `.png` o `.webp`
- Para mejores resultados, usa imágenes de alta calidad
- Puedes agregar más preguntas o recuerdos fácilmente
- La aplicación es completamente responsive (funciona en móvil y desktop)

## 🎨 Colores del Tema

- Valentine Pink: `#FF6B9D`
- Valentine Light: `#FFC2D4`
- Valentine Red: `#FF1744`

## 📝 Notas

- El botón "No" en la propuesta final es juguetón - se mueve cuando intentas hacer clic
- Los corazones flotantes aparecen cuando das "like" a los recuerdos
- El confeti aparece cuando acepta ser tu San Valentín

¡Disfruta creando momentos especiales! ❤️

