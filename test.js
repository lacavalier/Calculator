const result1 = document.getElementById("result");
let wrapper = document.getElementById("wrapper");
let b1 = document.getElementById("1");
let b2 = document.getElementById("2");
let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");
let b6 = document.getElementById("6");
let b7 = document.getElementById("7");
let b8 = document.getElementById("8");
let b9 = document.getElementById("9");
let b0 = document.getElementById("0");
let dort = document.getElementById("..");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let devide = document.getElementById("devide");
let equal = document.getElementById("equal");
let CE = document.getElementById("CE");
let mult = document.getElementById("mult");

let pres = "0";

wrapper.addEventListener("click", (e) => {
  if (e.target.id == "CE") {
    result1.innerHTML = "";
  } else if (e.target.id !== "equal") {
    let k = e.target.innerHTML;
    result1.innerHTML = result1.innerHTML + k;
  } else if (e.target.id == "equal") {
    let pres = result1.innerText;
    let m = eval(pres);
    if (m % 1 == 0 ? (m = m) : (m = m.toFixed(2))) result1.innerHTML = m;
  }
});
