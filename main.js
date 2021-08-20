var btn = document.querySelector(".btn");
var form = document.querySelector(".form-main");
var result = document.querySelector("#result");

var answers = [
  "90°",
  "1",
  "Isoceless",
  "None",
  "60°",
  "Square of third side",
  "2",
];

const onClickHandler = () => {
  var data = new FormData(form);
  let sum = 0,
    index = 0;
  for (let x of data.values()) {
    if (x == answers[index]) {
      sum = sum + 1;
    }
    index = index + 1;
  }
  result.innerText = `YAY! you scored ${sum}, that's good`;
  result.style.opacity = "100%";
};

btn.addEventListener("click", onClickHandler);
