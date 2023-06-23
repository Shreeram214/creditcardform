document.addEventListener("DOMContentLoaded", function () {
  const cvvInput = document.getElementById("cvv");
  const cardBack = document.querySelector(".Cre-card");
  const cardInner = document.querySelector(".Cre-card-inner");

  cvvInput.addEventListener("focus", function () {
    //cardBack.classList.add('flipped');
    cardInner.classList.add("flipped");
  });

  cvvInput.addEventListener("blur", function () {
    cardBack.classList.remove("flipped");
    cardInner.classList.remove("flipped");
  });
});
function updateLabel(labelId, inputValue) {
  const label = document.getElementById(labelId);
  label.textContent = inputValue;
}
function formatCardNumber(input) {
  // Remove non-numeric characters from the input value
  const numericValue = input.value.replace(/\D/g, "");

  // Format the input value by adding a space after every four digits
  const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");

  // Update the input value with the formatted value
  input.value = formattedValue;
  const label = document.getElementById("cardnumber");
  label.textContent = formattedValue;
}
function changedate(ele) {
    const label = document.getElementById('expiry');
    const dateString = ele.value;
    const parts = dateString.split('-');
    const convertedDate = parts[1] + '/' + parts[0].slice(2);
    label.textContent = convertedDate;
  }
