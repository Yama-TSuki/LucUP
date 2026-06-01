/* =================================================================
   ui-controls.js — Listeners de los botones (Responsabilidad: tu equipo)
   -----------------------------------------------------------------
   Esta es una versión MÍNIMA funcional para que el plano filtre HOY
   aunque tu equipo no haya terminado. Cuando ellos entreguen su
   versión, simplemente reemplazan este archivo. La única regla:
   los botones deben llamar a  MapaUP.filtrarPorCategoria(...)
   ================================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".btn-filtro");

    botones.forEach(function (boton) {
      boton.addEventListener("click", function () {
        // 1. Marca visualmente cuál botón está activo
        botones.forEach(function (b) { b.classList.remove("activo"); });
        boton.classList.add("activo");

        // 2. Pide a main.js que filtre según el data-filtro del botón
        const categoria = boton.dataset.filtro;
        window.MapaUP.filtrarPorCategoria(categoria);
      });
    });

    console.log("[ui-controls.js] Listeners de filtros conectados.");
  });

})();