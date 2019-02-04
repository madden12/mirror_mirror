// // show text input in real time

// pull HTML elements to DOM
let fieldEl = document.getElementById("message");

let outputEl = document.getElementById("first-article");
    console.log(outputEl);

let outputE2 = document.getElementById("second-article");
// need to pull text input from "message" and mirror it in "first-article" && "second-article"

fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value;
    outputE2.innerHTML = event.target.value; })

