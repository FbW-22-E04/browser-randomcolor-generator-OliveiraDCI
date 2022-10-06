"use strict";

const input = document.querySelector("#number");
const button = document.querySelector("button");
const section = document.querySelector("section");
const span = document.querySelectorAll("span");

window.onload = function init() {
  input.value = "3";
  button.click();
  input.value = "";
};

button.addEventListener("click", function () {
  if (Number(isNaN(input.value)) || !input.value)
    return alert("please enter a number.");

  function randomColor() {
    let randomColor = "";
    let chars = "abcdef0123456789";
    for (let i = 0; i < 6; i++) {
      randomColor += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `#${randomColor}`;
  }

  for (let i = 0; i < parseInt(input.value); i++) {
    let color = randomColor();

    section.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="background-color: ${color}; text-shadow: 2px 2px 10px #fff" >${color}<span>x</span></div>`
    );
  }
  input.value = "";
});

section.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.style.display = "none";
  }
});
