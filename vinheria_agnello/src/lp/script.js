// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button to submit the age
var submitBtn = document.getElementById("submit-age");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user submits their age, check if they're under 18
submitBtn.addEventListener("click", function() {
  var ageInput = document.getElementById("age-input").value;
  var age = parseInt(ageInput, 10); // Ensure base 10 parsing

  if (!isNaN(age)) { // Check if it's a valid number
    if (age < 18) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Redirect to NEVER GONNA GIVE YOU UP if under 18
    } else {
      modal.style.display = "none"; // Close the modal if 18 or over
    }
  } else {
    alert("Por favor, insira uma idade válida."); // Inform user about invalid input
  }
});


// Display the modal when the document loads
document.addEventListener("DOMContentLoaded", function() {
  modal.style.display = "block"; // Show the modal when the page loads
});

function enviarFormulario() {
  // Exibe uma mensagem de confirmação ao enviar
  alert("Mensagem enviada com sucesso!");
  // Limpa o formulário após o envio
  document.getElementById("formContato").reset();
}