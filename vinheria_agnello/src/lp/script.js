document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block"; // Exibe o modal quando a página carrega

  var span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", function() {
    modal.style.display = "none"; // Fecha o modal ao clicar no "x"
  });

  var submitBtn = document.getElementById("submit-age");
  submitBtn.addEventListener("click", function() {
    var ageInput = document.getElementById("age-input").value;
    var age = parseInt(ageInput, 10);

    if (!isNaN(age)) {
      if (age < 18) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Redirecionar se menor de 18
      } else {
        modal.style.display = "none"; // Fecha o modal se 18 ou mais
      }
    } else {
      alert("Por favor, insira uma idade válida."); // Aviso de input inválido
    }
  });

  // Restringe a entrada para apenas números e limita a três dígitos
  document.getElementById("age-input").addEventListener("input", function (event) {
    var value = event.target.value;
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');
    // Limita a três dígitos
    if (value.length > 3) {
      value = value.substring(0, 3);
    }
    event.target.value = value;
  });
});

function enviarFormulario() {
  alert("Mensagem enviada com sucesso!");
  document.getElementById("formContato").reset(); // Limpa o formulário após o envio
}

const getWineInfo = (id) => {
  window.location.href = '/vinheria_agnello/src/foods/foods.html';
  document.cookie = '';
  document.cookie = `wineData=${[id]}; path=/vinheria_agnello/src/foods/foods.html`;
};