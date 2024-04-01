let characters = [
    [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "_",
      "-",
      "+",
      "=",
      ":",
      ";",
      "<",
      ">",
      ",",
      ".",
      "?",
      "/",
      "`",
      "~",
    ],
  ],
  resetButtons = document.querySelectorAll(".regenerate"),
  removeButtons = document.querySelectorAll(".remove"),
  blockPageReset = document.querySelector(".blockPageReset"),
  blockPageRemove = document.querySelector(".blockPageRemove"),
  cancelConfirmReset = document.getElementById("c-m-d"),
  cancelConfirmRemove = document.getElementById("r-m-d"),
  confirmRemove = document.getElementById("r-m-c"),
  confirmReset = document.getElementById("c-m-c"),
  deletedElement,
  resetedElement;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makePassword() {
  pass = "";
  for (let i = 0; i < 20; i++) {
    let arr = getRandomInt(0, characters.length - 1);
    pass += characters[arr][getRandomInt(0, characters[arr].length - 1)];
  }
  return pass;
}

cancelConfirmReset.addEventListener("click", () => {
  blockPageReset.style.display = "none";
});

confirmReset.addEventListener("click", () => {
  resetedElement.textContent = "pass: " + makePassword();
  blockPageReset.style.display = "none";
});

for (let i = 0; i < resetButtons.length; i++) {
  resetButtons[i].addEventListener("click", () => {
    blockPageReset.style.display = "block";
    resetedElement = resetButtons[i].parentNode.parentNode.firstElementChild;
  });
}

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", () => {
    removedElement = removeButtons[i].parentNode.parentNode.parentNode;
    blockPageRemove.style.display = "block";
  });
}

cancelConfirmRemove.addEventListener("click", () => {
  blockPageRemove.style.display = "none";
});

confirmRemove.addEventListener("click", () => {
  removedElement.remove();
  blockPageRemove.style.display = "none";
});

//!Start of Menu that Adding Elements

let cancelButton = document.getElementById("cancelButton"),
  menuPageContainer = document.getElementById("menuPageContainer"),
  addPasswordButton = document.querySelector("#password-container img");

addPasswordButton.addEventListener("click", () => {
  menuPageContainer.style.display = "block";
});

cancelButton.addEventListener("click", () => {
  menuPageContainer.style.display = "none";
});
