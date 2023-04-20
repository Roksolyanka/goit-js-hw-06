// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//         у спані повинен відображатися рядок "Anonymous".
const refs = {
  input: document.querySelector("#name-input"),
  phrase: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  event.currentTarget.value.trim() !== ""
    ? (refs.phrase.textContent = event.currentTarget.value.trim())
    : (refs.phrase.textContent = "Anonymous");
  // if (event.currentTarget.value !== "") {
  //   refs.phrase.textContent = event.currentTarget.value.trim();
  // } else {
  //   refs.phrase.textContent = "Anonymous";
  // }
}
