/* =================================================================
   main.js — Lógica central de filtrado del plano
   -----------------------------------------------------------------
   Responsabilidad: leer las etiquetas que YA están en el plano,
   clasificarlas por categoría (usando data.js) y prenderlas/apagarlas
   con la clase .oculto cuando ui-controls.js lo pida.
   ================================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     clasificarEtiquetas()
     Recorre todas las .etiqueta del plano y, según su texto, les
     pone un atributo data-categoria. Se ejecuta una sola vez al cargar.
     ----------------------------------------------------------------- */
  function clasificarEtiquetas() {
    const etiquetas = document.querySelectorAll(".etiqueta");

    etiquetas.forEach(function (et) {
      const texto = et.textContent.toUpperCase();
      let categoriaAsignada = "otro"; // por defecto

      // Buscamos en cada categoría del diccionario de data.js
      for (const categoria in window.CATEGORIAS) {
        const palabras = window.CATEGORIAS[categoria];
        const coincide = palabras.some(function (palabra) {
          return texto.includes(palabra);
        });
        if (coincide) {
          categoriaAsignada = categoria;
          break;
        }
      }

      et.dataset.categoria = categoriaAsignada;
    });

    console.log("[main.js] Etiquetas clasificadas:", etiquetas.length);
  }

  /* -----------------------------------------------------------------
     filtrarPorCategoria(categoria)
     "todos" → muestra todas las etiquetas.
     Otra categoría → deja visibles SOLO las de esa categoría y
     oculta el resto usando la clase .oculto (definida en styles.css).
     ----------------------------------------------------------------- */
  function filtrarPorCategoria(categoria) {
    const etiquetas = document.querySelectorAll(".etiqueta");

    etiquetas.forEach(function (et) {
      if (categoria === "todos") {
        et.classList.remove("oculto");
        et.classList.remove("resaltada");
      } else if (et.dataset.categoria === categoria) {
        et.classList.remove("oculto");
        et.classList.add("resaltada"); // la resalta para que destaque
      } else {
        et.classList.add("oculto");
        et.classList.remove("resaltada");
      }
    });

    console.log("[main.js] Filtro aplicado:", categoria);
  }

  /* -----------------------------------------------------------------
     Inicialización al cargar la página
     ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    clasificarEtiquetas();
  });

  /* -----------------------------------------------------------------
     API pública — ui-controls.js (tu equipo) llama a esto.
     Ej. en el listener de un botón:  MapaUP.filtrarPorCategoria("bano");
     ----------------------------------------------------------------- */
  window.MapaUP = {
    filtrarPorCategoria: filtrarPorCategoria,
    clasificarEtiquetas: clasificarEtiquetas
  };

})();