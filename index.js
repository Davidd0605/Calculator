
let nr1 = document.getElementById("first").value;
let nr2 = document.getElementById("second").value;
let rez;
let opperation;
document.getElementById("insert").onclick = function ()
{
    nr1 = document.getElementById("first").value;
    nr2 = document.getElementById("second").value;
    nr1 = Number(nr1);
    nr2 = Number (nr2);
    window.alert("PIULA");
}
document.getElementById("+").onclick = function()
{
    window.alert(nr1 + nr2);
    rez = nr1+nr2;
    document.getElementById("rezultat").textContent += rez;
}
document.getElementById("-").onclick = function()
{
    window.alert(nr1 - nr2);
}
document.getElementById("*").onclick = function()
{
    window.alert(nr1 * nr2);
}
document.getElementById("/").onclick = function()
{
    window.alert(nr1 / nr2);
}