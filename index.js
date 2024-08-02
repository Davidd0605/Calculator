
let number = Math.floor(Math.random() * 6) + 1;

const Button = document.getElementById("mybutton");
Button.onclick = function()
{
    number = Math.floor(Math.random() * 6) + 1;
    document.getElementById("mylabel").textContent = number;
}