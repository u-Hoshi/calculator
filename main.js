var log = document.getElementById("log");
function edit(element) {
    log.value = log.value + element.value;
}
function calc() {
    log.value = new Function("return " + log.value,)();
}

function reset() {
    document.getElementById("log").value=''
    console.log("おけ")
}