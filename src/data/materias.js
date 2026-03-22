// Licenciatura en Ciencias Biológicas - Plan de Estudios
// Estados: 'sin_cursar' | 'regularizada' | 'aprobada'

export const MATERIAS = [
  // ── AÑO 1 ──────────────────────────────────────────────────────────────────
  {
    id: "EXAG-121",
    nombre: "Matemática",
    anio: 1,
    cuatrimestre: 1,
    correlativasCursar: [],   // sin requisitos
    correlativasAprobar: [],
  },
  {
    id: "EXAG-63",
    nombre: "Química General",
    anio: 1,
    cuatrimestre: 1,
    correlativasCursar: [],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-123",
    nombre: "Introducción a la Biología",
    anio: 1,
    cuatrimestre: 1,
    correlativasCursar: [],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-124",
    nombre: "Física General y Biológica",
    anio: 1,
    cuatrimestre: 2,
    // Para cursar: Matemática regularizada
    correlativasCursar: [{ id: "EXAG-121", condicion: "regularizada" }],
    // Para aprobar (libre): Matemática aprobada
    correlativasAprobar: [{ id: "EXAG-121", condicion: "aprobada" }],
  },
  {
    id: "EXAG-141",
    nombre: "Química Biológica",
    anio: 1,
    cuatrimestre: 2,
    correlativasCursar: [{ id: "EXAG-63", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-63", condicion: "aprobada" }],
  },
  {
    id: "EXAG-125",
    nombre: "Geología",
    anio: 1,
    cuatrimestre: 2,
    correlativasCursar: [{ id: "EXAG-63", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-63", condicion: "aprobada" }],
  },

  // ── AÑO 2 ──────────────────────────────────────────────────────────────────
  {
    id: "EXAG-126",
    nombre: "Biología Celular y Molecular",
    anio: 2,
    cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-124", condicion: "regularizada" },
      { id: "EXAG-63",  condicion: "aprobada" },
    ],
    correlativasAprobar: [{ id: "EXAG-124", condicion: "aprobada" }],
  },
  {
    id: "EXAG-142",
    nombre: "Bioestadística",
    anio: 2,
    cuatrimestre: 1,
    correlativasCursar: [{ id: "EXAG-121", condicion: "aprobada" }],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-128",
    nombre: "Biología de los Invertebrados",
    anio: 2,
    cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "regularizada" },
    ],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-129",
    nombre: "Morfología Vegetal",
    anio: 2,
    cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-123", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "regularizada" },
    ],
    correlativasAprobar: [{ id: "EXAG-126", condicion: "aprobada" }],
  },

  // ── AÑO 3 ──────────────────────────────────────────────────────────────────
  {
    id: "EXAG-132",
    nombre: "Genética",
    anio: 3,
    cuatrimestre: 1,
    correlativasCursar: [{ id: "EXAG-126", condicion: "aprobada" }],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-614",
    nombre: "Fisiología Vegetal",
    anio: 3,
    cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-124", condicion: "aprobada" },
      { id: "EXAG-126", condicion: "aprobada" },
      { id: "EXAG-129", condicion: "regularizada" },
    ],
    correlativasAprobar: [{ id: "EXAG-129", condicion: "aprobada" }],
  },
  {
    id: "EXAG-621",
    nombre: "Fisiología Animal",
    anio: 3,
    cuatrimestre: 1,
    correlativasCursar: [{ id: "EXAG-128", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-128", condicion: "aprobada" }],
  },
  {
    id: "EXAG-139",
    nombre: "Ecología",
    anio: 3,
    cuatrimestre: 2,
    correlativasCursar: [{ id: "EXAG-128", condicion: "aprobada" }],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-135",
    nombre: "Diversidad Vegetal",
    anio: 3,
    cuatrimestre: 2,
    correlativasCursar: [{ id: "EXAG-129", condicion: "aprobada" }],
    correlativasAprobar: [],
  },
  {
    id: "EXAG-134",
    nombre: "Biología de los Cordados",
    anio: 3,
    cuatrimestre: 2,
    correlativasCursar: [{ id: "EXAG-128", condicion: "regularizada" }],
    correlativasAprobar: [{ id: "EXAG-128", condicion: "aprobada" }],
  },

  // ── AÑO 4 ──────────────────────────────────────────────────────────────────
  {
    id: "EXAG-137",
    nombre: "Paleontología",
    anio: 4,
    cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-125", condicion: "aprobada" },
      { id: "EXAG-134", condicion: "regularizada" },
      { id: "EXAG-135", condicion: "regularizada" },
    ],
    correlativasAprobar: [
      { id: "EXAG-134", condicion: "aprobada" },
      { id: "EXAG-135", condicion: "aprobada" },
    ],
  },
  {
    id: "EXAG-620",
    nombre: "Citogenética",
    anio: 4,
    cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-132",  condicion: "regularizada" },
      { id: "EXAG-143",  condicion: "aprobada" },  // Prueba de Idioma
    ],
    correlativasAprobar: [
      { id: "EXAG-132",  condicion: "aprobada" },
      { id: "EXAG-143",  condicion: "aprobada" },
    ],
  },
  {
    id: "EXAG-102",
    nombre: "Epistemología y Metodología de la Investigación",
    anio: 4,
    cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-134", condicion: "regularizada" },
      { id: "EXAG-135", condicion: "regularizada" },
      { id: "EXAG-132", condicion: "regularizada" },
    ],
    correlativasAprobar: [
      { id: "EXAG-134", condicion: "regularizada" },
      { id: "EXAG-135", condicion: "regularizada" },
      { id: "EXAG-132", condicion: "regularizada" },
    ],
  },

  // ── AÑO 5 ──────────────────────────────────────────────────────────────────
  {
    id: "EXAG-622",
    nombre: "Genética Molecular",
    anio: 5,
    cuatrimestre: 1,
    correlativasCursar: [
      { id: "EXAG-143", condicion: "aprobada" },  // Prueba de Idioma
      { id: "EXAG-620", condicion: "regularizada" },
    ],
    correlativasAprobar: [
      { id: "EXAG-143", condicion: "aprobada" },
      { id: "EXAG-620", condicion: "aprobada" },
    ],
  },
  {
    id: "EXAG-623",
    nombre: "Genética de Poblaciones",
    anio: 5,
    cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-132", condicion: "aprobada" },
      { id: "EXAG-139", condicion: "aprobada" },
      { id: "EXAG-143", condicion: "aprobada" },
    ],
    correlativasAprobar: [{ id: "EXAG-143", condicion: "aprobada" }],
  },
  {
    id: "EXAG-624",
    nombre: "Genética Evolutiva",
    anio: 5,
    cuatrimestre: 2,
    correlativasCursar: [
      { id: "EXAG-620", condicion: "regularizada" },
      { id: "EXAG-143", condicion: "aprobada" },
    ],
    correlativasAprobar: [
      { id: "EXAG-143", condicion: "aprobada" },
      { id: "EXAG-620", condicion: "aprobada" },
    ],
  },

  // ── ESPECIAL: Prueba de Idioma (requisito para varias materias de 4º/5º) ──
  {
    id: "EXAG-143",
    nombre: "Prueba de Idioma",
    anio: 4,
    cuatrimestre: 0,  // sin cuatrimestre fijo – se rinde en cualquier momento
    correlativasCursar: [],
    correlativasAprobar: [],
    esEspecial: true,
  },
];

export const ANIOS = [1, 2, 3, 4, 5];
