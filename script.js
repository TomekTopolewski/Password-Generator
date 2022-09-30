"use strict";

const characters = [33, 47];
const numbers = [48, 57];
const capitalLetters = [65, 90];
const smallLetters = [97, 122];
const options = [];

const msg = document.getElementById("msg");
const length = document.getElementById("length");
const popup = document.getElementById("window");
const overlay = document.getElementById("overlay");
const btnDark = document.getElementById("btn-dark");
const btnHelp = document.getElementById("btn-help");
const btnGenerate = document.getElementById("btn-generate");

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
  checkElementInArray(options, smallLetters);
});

document.getElementById("capital-letters").addEventListener("change", () => {
  checkElementInArray(options, capitalLetters);
});

document.getElementById("numbers").addEventListener("change", () => {
  checkElementInArray(options, numbers);
});

document.getElementById("characters").addEventListener("change", () => {
  checkElementInArray(options, characters);
});

btnGenerate.addEventListener("click", () => {
  if (length.value && options.length) {
    msg.textContent = passwordGenerator(length.value, options);
    openWindow();
  } else {
    msg.textContent = "Choose length and characters";
    openWindow();
  }
});

btnHelp.addEventListener("click", () => {
  msg.textContent = `Characters are - ! " # $ % & ' ( ) * + , - . /`;
  openWindow();
});

btnDark.addEventListener("click", () => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].id === "overlay") {
      continue;
    }
    allElements[i].classList.toggle("dark");
  }
});

overlay.addEventListener("click", closeWindow);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !popup.classList.contains("hidden")) {
    closeWindow();
  }
});
