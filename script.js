"use strict";

const getRandomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

const passwordGenerator = function (length, array) {
  let password = "";
  while (password.length < length) {
    const randomArray =
      array[Math.trunc(Math.random() * array.length)];
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
  array.includes(element) ? array.splice(array.indexOf(element), 1) : array.push(element);
};

const openWindow = function () {
  document.querySelector(".window").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};

const closeWindow = function () {
  document.querySelector(".window").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

const characters = [33, 47];
const numbers = [48, 57];
const capitalLetters = [65, 90];
const smallLetters = [97, 122];
const userInput = [];

const msg = document.querySelector(".msg");
const length = document.querySelector(".length");

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

document.querySelector('.overlay').addEventListener('click', closeWindow);

document.querySelector(".help").addEventListener('click', () => {
  msg.textContent = `- ! " # $ % & ' ( ) * + , - . /`;
  openWindow();
});