import { sayHi, sayBye } from "./sayModule.js";

document.getElementById("sayHi").addEventListener("click", function () {
  sayHi("만두");
});

document.getElementById("sayBye").addEventListener("click", function () {
  sayBye("만두");
});
