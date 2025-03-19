// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.body.childNodes[1]);
// console.log(document.body.children[0]);
// console.log(document.body.firstElementChild);
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector("div"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelector("[name='js']"));
// console.log(document.getElementsByName("js")[0]);
// console.log(document.all["elzero"]);

//let result = document.querySelector(".result");

// function seeResult(e) {
//   document
//     .querySelector(`[name="dollar"]`)
//     .addEventListener("input", function (e) {
//       result.textContent = `${e.target.value} USD Dollar = ${(
//         e.target.value * 9000
//       ).toLocaleString()} Syrian pound `;
//     });
// }

// seeResult();

let exchangeRate = 9000;

function convertToUSD() {
  let syr = document.querySelector(".SYR").value;

  document.querySelector(".dollar").value = syr / exchangeRate;
}

function convertToSYR() {
  let usd = document.querySelector(".dollar").value;

  document.querySelector(".SYR").value = usd * exchangeRate;
}
