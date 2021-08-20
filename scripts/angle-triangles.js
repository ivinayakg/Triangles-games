var btn = document.querySelector(".btn");
var result = document.querySelector("#result");
var inputs = document.querySelectorAll("#angles");

const onClickHandler = () => {
  let sum = 0;
  for (let x of inputs) {
    sum = sum + parseInt(x.value);
  }
  if (sum === 180) {
    result.innerText = "YAY! It is a triangle.";
    result.style.opacity = "100%";
  } else {
    result.innerText = "NAY It is not a triangle.";
    result.style.opacity = "100%";
  }
};

btn.addEventListener("click", onClickHandler);
