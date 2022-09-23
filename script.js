"use strict";

function getRandomInt(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const passwordGeneratorV2 = function (length, arrayOfArrays) {
  let password = "";
  while (password.length < length) {
    const randomArray =
      arrayOfArrays[Math.trunc(Math.random() * arrayOfArrays.length)];
    const randomNumber = getRandomInt(
      randomArray[0],
      randomArray[randomArray.length - 1]
    );
    const randomCharacter = String.fromCharCode(randomNumber);
    password += randomCharacter;
  }
  return password;
};

const characters = [33, 47];
const numbers = [48, 57];
const capitalLetters = [65, 90];
const smallLetters = [97, 122];

const userInput = [];

document.querySelector(".menu-two").addEventListener("change", () => {
  if (userInput.includes(smallLetters)) {
    const index = userInput.indexOf(smallLetters);
    userInput.splice(index, 1);
  } else {
    userInput.push(smallLetters);
  }
});

document.querySelector(".menu-three").addEventListener("change", () => {
  if (userInput.includes(capitalLetters)) {
    const index = userInput.indexOf(capitalLetters);
    userInput.splice(index, 1);
  } else {
    userInput.push(capitalLetters);
  }
});

document.querySelector(".menu-four").addEventListener("change", () => {
  if (userInput.includes(numbers)) {
    const index = userInput.indexOf(numbers);
    userInput.splice(index, 1);
  } else {
    userInput.push(numbers);
  }
});

document.querySelector(".menu-five").addEventListener("change", () => {
  if (userInput.includes(characters)) {
    const index = userInput.indexOf(characters);
    userInput.splice(index, 1);
  } else {
    userInput.push(characters);
  }
});

document.querySelector(".btn").addEventListener("click", () => {
  const length = document.querySelector(".password-length").value;
  if (length && userInput.length > 0) {
    document.querySelector(".password").textContent = passwordGeneratorV2(
      length,
      userInput
    );
  } else {
    document.querySelector(".password").textContent =
      "Choose length and characters";
  }
});
