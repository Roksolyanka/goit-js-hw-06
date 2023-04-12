// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const nameInput = document.querySelector("#validation-input");
const dataLength = nameInput.getAttribute("data-length");
nameInput.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const value = event.target.value;
  if (value.length === parseInt(dataLength)) {
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  } else {
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
  }
}
