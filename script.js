"use strict";

const options = new Map();

const msg = document.getElementById("msg");
const pass_length = document.getElementById("length");
const popup = document.getElementById("window");
const overlay = document.getElementById("overlay");
const btnDark = document.getElementById("btn-dark");
const btnHelp = document.getElementById("btn-help");
const btnGenerate = document.getElementById("btn-generate");

const capitalLetters = document.getElementById("capital-letters");
const numbers = document.getElementById("numbers");
const characters = document.getElementById("characters");
const smallLetters = document.getElementById("small-letters");

const getRandInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

const passwordGenerator = function (length, options) {
  let password = "";
  while (password.length < length) {
    const randCharRange = options[getRandInt(0, options.length)];
    const randChar = String.fromCharCode(
      getRandInt(randCharRange.at(0), randCharRange.at(-1))
    );
    password += randChar;
  }
  return password;
};

const openWindow = function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeWindow = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
};

smallLetters.addEventListener("change", function () {
  options.has(this.id)
    ? options.delete(this.id)
    : options.set(this.id, [97, 122]);
});

capitalLetters.addEventListener("change", function () {
  options.has(this.id)
    ? options.delete(this.id)
    : options.set(this.id, [65, 90]);
});

numbers.addEventListener("change", function () {
  options.has(this.id)
    ? options.delete(this.id)
    : options.set(this.id, [48, 57]);
});

characters.addEventListener("change", function () {
  options.has(this.id)
    ? options.delete(this.id)
    : options.set(this.id, [33, 47]);
});

btnGenerate.addEventListener("click", () => {
  if (pass_length.value && options.size) {
    msg.textContent = passwordGenerator(pass_length.value, [
      ...options.values(),
    ]);
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
  const elements = document.getElementsByTagName("*");
  for (const element of elements) {
    if (element.id === "overlay") continue;
    element.classList.toggle("dark");
  }
});

overlay.addEventListener("click", closeWindow);

document.addEventListener("keydown", (event) => {
  event.key === "Escape" &&
    !popup.classList.contains("hidden") &&
    closeWindow();
});
