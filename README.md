# 🧬 Correlativas – Lic. en Ciencias Biológicas

Mapa interactivo de materias correlativas para la Licenciatura en Ciencias Biológicas.

## Funcionalidades

- **Ver estado** de cada materia: Sin cursar / Regularizada / Aprobada
- **Marcar materias** haciendo click sobre cada tarjeta
- **Candado** que indica si podés cursar la materia según tus correlativas
- **Filtrar** por: Todas / Disponibles para cursar / Aprobadas
- **Barra de progreso** de la carrera en el header
- **Estadísticas** en el footer (total, aprobadas, regularizadas, disponibles)
- **Persistencia** en localStorage (se guarda automáticamente)
- **Prueba de Idioma** como requisito especial para 4º y 5º año

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Build para producción
npm run build
```

## Materias incluidas

### Año 1
- 1° C: Matemática, Química General, Introducción a la Biología
- 2° C: Física General y Biológica, Química Biológica, Geología

### Año 2
- 1° C: Biología Celular y Molecular, Bioestadística
- 2° C: Biología de los Invertebrados, Morfología Vegetal

### Año 3
- 1° C: Genética, Fisiología Vegetal, Fisiología Animal
- 2° C: Ecología, Diversidad Vegetal, Biología de los Cordados

### Año 4
- 1° C: Paleontología, Citogenética
- 2° C: Epistemología y Metodología de la Investigación

### Año 5
- 1° C: Genética Molecular
- 2° C: Genética de Poblaciones, Genética Evolutiva

### Especial
- Prueba de Idioma (EXAG-143) – requerida para materias de 4° y 5° año

## Stack

- React 18
- Vite
- Tailwind CSS 3
