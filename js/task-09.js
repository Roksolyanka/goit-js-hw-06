function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const titleColor = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");
const area = document.querySelector("body");
btn.addEventListener("click", changeColor);
function changeColor() {
  const color = getRandomHexColor();
  area.style.backgroundColor = color;
  titleColor.textContent = color;
}
