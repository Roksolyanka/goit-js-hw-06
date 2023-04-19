function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

//  Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const controls = document.querySelector("#controls");
const btnCreate = controls.querySelector("[data-create]");
const btnDestroy = controls.querySelector("[data-destroy]");
const input = controls.querySelector("#controls input");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  // const area = document.createDocumentFragment();
  let div = "";
  let proportions = 30;
  for (let i = 0; i < amount; i += 1) {
    div += `<div style="width: ${proportions}px; height: ${proportions}px; background-color: ${getRandomHexColor()};"></div>`;
    // const div = document.createElement("div");
    // div.style.width = `${proportions}px`;
    // div.style.height = `${proportions}px`;
    // div.style.backgroundColor = getRandomHexColor();
    proportions += 10;
    // area.appendChild(div);
  }
  // boxes.appendChild(area);
  boxes.innerHTML = div;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

btnCreate.addEventListener("click", btnCreateClick);
function btnCreateClick() {
  const amount = Number(input.value);
  if (amount >= input.min && amount <= input.max) {
    createBoxes(amount);
  } else {
    alert(`Будь ласка введіть число від ${input.min} до ${input.max}`);
  }
  // createBoxes(amount);
}

btnDestroy.addEventListener("click", btnDestroyClick);
function btnDestroyClick() {
  destroyBoxes();
}
