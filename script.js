const form = document.getElementById("paymentForm");
const alertBox = document.getElementById("alert");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    alertBox.classList.remove("d-none");
  } else {
    alertBox.classList.add("d-none");
  }
});
