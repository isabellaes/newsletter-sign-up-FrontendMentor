const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");
const successBox = document.getElementById("success-box");
const span = document.getElementsByTagName("span");

const input = document.getElementById("input");

input.addEventListener("invalid", () => {
  const error = document.querySelector(".error");
  error.style.color = "red";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  span.item(0).innerHTML = input;
  form.reset();
  successBox.style.visibility = "visible";
});

dismissButton.addEventListener("click", () => {
  successBox.style.visibility = "hidden";
});
