// var log = "0"
// var log=document.getElementById("log")

// document.getElementById("1").onclick = function () {
//     var log=document.getElementById("log").value=1
//     // alert("ohayou")
// }

// document.getElementById("2").onclick = function () {
//     // log.textContent = "1";
//     // log += 2;
//     // document.getElementById("log").value = log;
//     var log=document.getElementById("log").value=2
//     // alert("2")
//     document.input.value += ch;
// }

// document.getElementById("+").onclick = function () {
//     // log.textContent = "1";
//     // var log = document.getElementById("log").value = +;
//     // var log = log.value.contact("+");
//     document.input.value += ch;
// }

var log = document.getElementById("log");
function edit(element) {
    log.value = log.value + element.value;
    console.log=(log.value)
}
function calc() {
    log.value = new Function("return " + log.value,);
}

