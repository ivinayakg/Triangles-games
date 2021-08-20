var btn = document.querySelector(".btn");
var result = document.querySelector("#result");
var height = document.querySelector("#height");
var breadth = document.querySelector("#breadth");

const onClickHandler = () => {
  var hyp = parseInt(height.value) ** 2 + parseInt(breadth.value) ** 2;
  var ans = Math.sqrt(hyp.toFixed(3));
  result.innerHTML = `The Hypotenuse of the triangle is ${ans}`;
  result.style.opacity = "100%";
};

btn.addEventListener("click", onClickHandler);
