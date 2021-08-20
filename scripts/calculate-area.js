var btn = document.querySelector(".btn");
var result = document.querySelector("#result");
var inputs = document.querySelectorAll("#side");

const onClickHandler = () => {
  var data = [];
  for (let x of inputs) {
    data.push(parseInt(x.value));
  }
  var [side1, side2, side3] = data;
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    var semip = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(
      semip * (semip - side1) * (semip - side2) * (semip - side3)
    ).toFixed(2);
    result.innerText = `The area of the triangle with the following sides is ${area}`;
    result.style.opacity = "100%";
  } else {
    result.innerText = "Input valid values for a triangle";
    result.style.opacity = "100%";
  }
};

btn.addEventListener("click", onClickHandler);
