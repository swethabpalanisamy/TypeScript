const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
function add(num1: number, num2: number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    console.log("yes, it is a number");
    return num1 + num2;
  } else {
    console.log("not a numer");
    return +num1 + +num2;
  }
}
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
