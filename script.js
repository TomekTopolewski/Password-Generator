"use strict";

const characters = [33, 47];
const numbers = [48, 57];
const capitalLetters = [65, 90];
const smallLetters = [97, 122];
const userInput = [];

const msg = document.querySelector(".msg");
const length = document.querySelector(".length");
const popup = document.querySelector(".window");
const overlay = document.querySelector(".overlay");

const getRandomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

const passwordGenerator = function (length, array) {
  let password = "";
  while (password.length < length) {
    const randomArray = array[Math.trunc(Math.random() * array.length)];
    const randomNumber = getRandomInt(
      randomArray[0],
      randomArray[randomArray.length - 1]
    );
    const randomCharacter = String.fromCharCode(randomNumber);
    password += randomCharacter;
  }
  return password;
};

const checkElementInArray = function (array, element) {
  array.includes(element)
    ? array.splice(array.indexOf(element), 1)
    : array.push(element);
};

const openWindow = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeWindow = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.getElementById("small-letters").addEventListener("change", () => {
  checkElementInArray(userInput, smallLetters);
});

document.getElementById("capital-letters").addEventListener("change", () => {
  checkElementInArray(userInput, capitalLetters);
});

document.getElementById("numbers").addEventListener("change", () => {
  checkElementInArray(userInput, numbers);
});

document.getElementById("characters").addEventListener("change", () => {
  checkElementInArray(userInput, characters);
});

document.getElementById("btn").addEventListener("click", () => {
  if (length.value && userInput.length) {
    msg.textContent = passwordGenerator(length.value, userInput);
    openWindow();
  } else {
    msg.textContent = "Choose length and characters";
    openWindow();
  }
});

overlay.addEventListener("click", closeWindow);

document.querySelector(".help").addEventListener("click", () => {
  msg.textContent = `- ! " # $ % & ' ( ) * + , - . /`;
  openWindow();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closeWindow();
  }
});
