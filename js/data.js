/* =================================================================
   data.js — Diccionario de categorías (Mock Data)
   -----------------------------------------------------------------
   En vez de coordenadas, aquí definimos QUÉ palabras pertenecen a
   cada categoría. main.js lee el TEXTO de cada etiqueta del plano
   y, si contiene alguna de estas palabras, le asigna la categoría.
   Así NO hay que editar a mano las 73 etiquetas del HTML.
   ================================================================= */

const CATEGORIAS = {
  bano: ["BAÑO", "BAÑOS", "SANITARIO"],
  salon: ["SALÓN", "SALON", "SALONES"],
  aula: ["AULA", "AULAS"],
  lab: ["LAB", "LABS", "LABORATORIO", "CÓMPUTO", "COMPUTO"]
};

// Expuesto globalmente (Vanilla puro, sin imports)
window.CATEGORIAS = CATEGORIAS;

