"use strict";

const options = new Map([
  ["small-letters", [97, 122]],
  ["capital-letters", [65, 90]],
  ["numbers", [48, 57]],
  ["characters", [33, 47]],
]);

const currentOpt = new Map();

const msg = document.getElementById("msg");
const pass_length = document.getElementById("length");
const popup = document.getElementById("window");
const overlay = document.getElementById("overlay");

const getRandInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

const passwordGenerator = function (length, opt) {
  let password = "";
  while (password.length < length) {
    const randCharRange = opt[getRandInt(0, opt.length)];
    const randChar = String.fromCharCode(
      getRandInt(randCharRange.at(0), randCharRange.at(-1))
    );
    password += randChar;
  }
  return password;
};

const updateUI = function () {
  popup.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

document.querySelector("#options").addEventListener("change", function (e) {
  currentOpt.has(e.target.id)
    ? currentOpt.delete(e.target.id)
    : currentOpt.set(e.target.id, options.get(e.target.id));
});

document.querySelector("#btn-generate").addEventListener("click", () => {
  if (pass_length.value && currentOpt.size) {
    msg.textContent = passwordGenerator(pass_length.value, [
      ...currentOpt.values(),
    ]);
    updateUI();

    pass_length.value = "";

    currentOpt.clear();

    document.querySelectorAll("input").forEach(function (e) {
      if (e.type === "checkbox") {
        e.checked = false;
      }
    });
  } else {
    msg.textContent = "Choose length and characters";
    updateUI();
  }
});

document.querySelector("#btn-help").addEventListener("click", () => {
  msg.textContent = `Characters are - ! " # $ % & ' ( ) * + , - . /`;
  updateUI();
});

document.querySelector("#btn-dark").addEventListener("click", () => {
  [...document.getElementsByTagName("*")].forEach((e) => {
    e.id !== "overlay" ? e.classList.toggle("dark") : null;
  });
});

overlay.addEventListener("click", updateUI);

document.addEventListener("keydown", (e) => {
  e.key === "Escape" && !popup.classList.contains("hidden") && updateUI();
});
