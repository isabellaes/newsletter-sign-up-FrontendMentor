const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");
const successBox = document.getElementById("success-box");
const span = document.getElementsByTagName("span");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("input").value;
  span.item(0).innerHTML = input;
  successBox.style.visibility = "visible";
});

dismissButton.addEventListener("click", () => {
  successBox.style.visibility = "hidden";
});
