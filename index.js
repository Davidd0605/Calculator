let counter = 0;

document.getElementById("counter").textContent = counter;

document.getElementById("inc").onclick = function() {
    counter ++;
    document.getElementById("counter").textContent = counter;
}
document.getElementById("dec").onclick = function() {
    counter --;
    document.getElementById("counter").textContent = counter;
}
document.getElementById("res").onclick = function() {
    counter = 0;
    document.getElementById("counter").textContent = counter;
}

