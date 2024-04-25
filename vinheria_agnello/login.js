// LOGIN SCREEN
let button = document.querySelector("#submit")

function validateLogin() {
  let username = document.querySelector("#username")
  let password = document.querySelector("#password")

  if (username.value === "1234" && password.value === "1234") {
    window.location.replace("index.html")
  }
  else {
    alert("Nome de usuário ou senha incorretos.")
  }
}

button.addEventListener("click", validateLogin)