function display(num) {
  document.getElementById("text").value += num;
  equal();
}
function clr() {
  document.getElementById("text").value = "";
  document.getElementById("text02").value = "";
}
function equal() {
  var eq = document.getElementById("text").value;
  let ans = eval(eq);
  document.getElementById("text02").value = ans;
}

function del() {
  let eq = document.getElementById("text").value;
  let str = eq.split("");
  str.pop();
  let fin = str.join("");
  document.getElementById("text").value = fin;
  equal();
}

function equalbtn() {
  let ans = document.getElementById("text02").value;
  document.getElementById("text").value = ans;
  document.getElementById("text02").value = "";
}
