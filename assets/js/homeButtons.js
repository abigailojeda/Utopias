const digitalBtn = document.querySelector(".designs");
const digitals = document.querySelector(".digital");
const textsBtn = document.querySelector(".texts-btn");
const texts = document.querySelector(".texts");

digitalBtn.addEventListener("click", () => {
  digitals.style.display = "flex";
  texts.style.display = "none";
});

textsBtn.addEventListener("click", () => {
  digitals.style.display = "none";
  texts.style.display = "flex";
});
