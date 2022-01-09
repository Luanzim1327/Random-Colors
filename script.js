const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = colors[getRandomNumber()];
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
  color.style.color = randomNumber;
});

function getRandomNumber(){
  return parseInt(Math.random() * colors.length)
}
