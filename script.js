// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button to submit the age
var submitBtn = document.getElementById("submit-age");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user submits their age, check if they're under 18
submitBtn.onclick = function() {
  var ageInput = document.getElementById("age-input").value;
  var age = parseInt(ageInput);

  if (!isNaN(age)) { // Check if it's a valid number
    if (age < 18) {
      window.location.href = "https://www.google.com"; // Redirect to Google if under 18
    } else {
      modal.style.display = "none"; // Close the modal if 18 or over
    }
  }
}