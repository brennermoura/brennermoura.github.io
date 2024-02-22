// const hamBurger = document.querySelector(".toggle-btn");

// hamBurger.addEventListener("click", function () {
//   document.querySelector("#sidebar").classList.toggle("expand");

//   // Se o sidebar tá abrindo, espera 0.5 segundos e mostra os spans
//   if (document.querySelector("#sidebar").classList.contains("expand")) {
//       setTimeout(function() {
//           document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
//               span.style.display = "inline-block";
//           });
//       }, 200); // 500 milissegundos = 0.5 segundos
//   } else {
//       // Se não, esconde de novo imediatamente
//       document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
//           span.style.display = "none";
//       });
//   }
// });

const hamBurger = document.querySelector(".toggle-btn");

// Primeiro, vamos fazer o menu começar aberto. Pra isso, adiciona a classe "expand" direto no HTML, na div do sidebar, sacou?

// Agora, o evento de click pra fechar quando clicar. 
hamBurger.addEventListener("click", function () {
  // Invertendo a lógica aqui, irmão. Se tá com a classe "expand", a gente remove. Se não, a gente adiciona.
  document.querySelector("#sidebar").classList.toggle("expand");

  // Agora, vamos inverter a parada dos spans. Se tá expandindo, a gente mostra. Se tá fechando, a gente esconde.
  if (document.querySelector("#sidebar").classList.contains("expand")) {
      setTimeout(function() {
          document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
              span.style.display = "inline-block"; // Mostra os spans se tá expandindo
          });
      }, 200);
  } else {
      document.querySelectorAll(".sidebar-link span, .sidebar-logo span").forEach(function(span) {
          span.style.display = "none"; // Esconde os spans se tá fechando
      });
  }
});


