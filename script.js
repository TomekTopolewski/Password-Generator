"use strict";

function getRandomInt(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

// const passwordGenerator = function (length) {
//   let password = "";
//   while (password.length < length) {
//     password += String.fromCharCode(getRandomInt(33, 127));
//   }
//   return password;
// };

// document.querySelector(".btn").addEventListener("click", () => {
//   const length = document.querySelector(".password-length").value;
//   if (length) {
//     document.querySelector(".password").textContent = passwordGenerator(length);
//   } else {
//     document.querySelector(".password").textContent = "Choose length";
//   }
// });

const passwordGeneratorV2 = function (length, arrayOfArrays) {
  let password = "";
  while (password.length < length) {
    const randomArray =
      arrayOfArrays[Math.trunc(Math.random() * arrayOfArrays.length)];
    const randomNumber = getRandomInt(randomArray[0], randomArray[1]);
    const randomCharacter = String.fromCharCode(randomNumber);
    password += randomCharacter;
  }
  return password;
};

const charactersSetOne = [33, 47];
const numbers = [48, 57];
const charactersSetTwo = [58, 64];
const capitalLetters = [65, 90];
const charactersSetThree = [91, 96];
const smallLetters = [97, 122];
const charactersSetFour = [123, 126];

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
  if (userInput.includes(charactersSetOne)) {
    const index = userInput.indexOf(charactersSetOne);
    userInput.splice(index, 1);
  } else {
    userInput.push(charactersSetOne);
  }
});

document.querySelector(".menu-six").addEventListener("change", () => {
  if (userInput.includes(charactersSetTwo)) {
    const index = userInput.indexOf(charactersSetTwo);
    userInput.splice(index, 1);
  } else {
    userInput.push(charactersSetTwo);
  }
});

document.querySelector(".menu-seven").addEventListener("change", () => {
  if (userInput.includes(charactersSetThree)) {
    const index = userInput.indexOf(charactersSetThree);
    userInput.splice(index, 1);
  } else {
    userInput.push(charactersSetThree);
  }
});

document.querySelector(".menu-eight").addEventListener("change", () => {
  if (userInput.includes(charactersSetFour)) {
    const index = userInput.indexOf(charactersSetFour);
    userInput.splice(index, 1);
  } else {
    userInput.push(charactersSetFour);
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
