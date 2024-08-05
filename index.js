
let number1;
let number2;
let operation = 0;
let selected = false;
let rez;
let calcscreen = document.getElementById("calcscreen");
let buttons = document.getElementsByClassName("button");
buttons[0].onclick = function()
{
    operation = 1;
    number1 = Number(calcscreen.value);
    calcscreen.textContent = "";
    selected = true;
}
buttons[1].onclick = function()
{

    number1 = Number(calcscreen.value);
    calcscreen.textContent = "";
    operation = 2;
    selected = true;
}
buttons[2].onclick = function()
{

    number1 = Number(calcscreen.value);
    calcscreen.textContent = "";
    operation = 3;
    selected = true;
}
buttons[3].onclick = function()
{

    number1 = Number(calcscreen.value);
    calcscreen.textContent = "";
    operation = 4;
    selected = true;
}
buttons[4].onclick = function()
{
    number2 = Number(calcscreen.value);
    if(operation == 1)
        rez = number1 + number2;
    if(operation == 2)
        rez = number1 - number2;
    if(operation == 3)
        rez = number1 * number2;
    if(operation == 4)
        rez = number1 / number2;
    if(operation== 0)
        rez = number2;

    calcscreen.textContent = rez;
    document.getElementById("history").textContent+=rez;
    document.getElementById("history").textContent +='\n';
}
buttons[5].onclick = function()
{
    calcscreen.textContent +="1";
}
buttons[6].onclick = function()
{
    calcscreen.textContent +="2";
}
buttons[7].onclick = function()
{
    calcscreen.textContent +="3";
}
buttons[8].onclick = function()
{
    calcscreen.textContent +="4";
}
buttons[9].onclick = function()
{
    calcscreen.textContent +="5";
}
buttons[10].onclick = function()
{
    calcscreen.textContent +="6";
}
buttons[11].onclick = function()
{
    calcscreen.textContent +="7";
}
buttons[12].onclick = function()
{
    calcscreen.textContent +="8";
}
buttons[13].onclick = function()
{
    calcscreen.textContent +="9";
}
buttons[14].onclick = function()
{
    calcscreen.textContent +="0";
}
buttons[15].onclick = function()
{
    calcscreen.textContent = "";
    number1 = number2 = 0;
}