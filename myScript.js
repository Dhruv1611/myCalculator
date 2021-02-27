var screen = document.getElementById("output")
var holder = document.getElementById("placeholder")
var count=0;
var result=0;
var num;
var clickedStored;
//=================== EVENT LISTNERS ==================================
document.getElementById("0").addEventListener("click",num0)
document.getElementById("1").addEventListener("click",num1)
document.getElementById("2").addEventListener("click",num2)
document.getElementById("3").addEventListener("click",num3)
document.getElementById("4").addEventListener("click",num4)
document.getElementById("5").addEventListener("click",num5)
document.getElementById("6").addEventListener("click",num6)
document.getElementById("7").addEventListener("click",num7)
document.getElementById("8").addEventListener("click",num8)
document.getElementById("9").addEventListener("click",num9)
document.getElementById("STOP").addEventListener("click",close)
document.getElementById("START").addEventListener("click",open)
document.getElementById("CE").addEventListener("click",clear)
document.getElementById("+").addEventListener("click",add)
document.getElementById("-").addEventListener("click",subtract)
document.getElementById("*").addEventListener("click",multiply)
document.getElementById("/").addEventListener("click",divide)
document.getElementById("=").addEventListener("click",equalTo)
//=============++++++++KEYBOARD+++++++++=======================//

document.addEventListener("keydown",function(event){

    if(event.key == '0')
        num0()
    if(event.key == '1')
        num1()
    if(event.key == '2')
        num2()
    if(event.key == '3')
        num3()
    if(event.key == '4')
        num4()
    if(event.key == '5')
        num5()
    if(event.key == '6')
        num6()
    if(event.key == '7')
        num7()
    if(event.key == '8')
        num8()
    if(event.key == '9')
        num9()
    if(event.key == '=' || event.key == "Enter")
        equalTo()
    if(event.key == "Escape" || event.key == "Backspace")
        clear()
    if(event.key == '+')
        add()
    if(event.key == '-')
        subtract()
    if(event.key == '*')
        multiply()
    if(event.key == '/')
        divide()

})







//====================FUNCTIONS==========================================
    //================Keys=====================//
    function  num0(){clickedStored =0;refresh();}
    function  num1(){clickedStored =1;refresh();}
    function  num2(){clickedStored =2;refresh();}
    function  num3(){clickedStored =3;refresh();}
    function  num4(){clickedStored =4;refresh();}
    function  num5(){clickedStored =5;refresh();}
    function  num6(){clickedStored =6;refresh();}
    function  num7(){clickedStored =7;refresh();}
    function  num8(){clickedStored =8;refresh();}
    function  num9(){clickedStored =9;refresh();}
    function close(){document.getElementById("mainCalc").style.display="none";document.getElementById("STOP").style.display="none";document.getElementById("START").style.display="block"}
    function open(){document.getElementById("mainCalc").style.display="block";document.getElementById("STOP").style.display="block";document.getElementById("START").style.display="none"}
//==================OPERATORS===&====HELPERS===================//

function refresh(){
    screen.innerHTML+=clickedStored;
}
function clear(){
    screen.innerHTML = "";
    holder.innerHTML ="";
    num=[];
    operators=[];
}

function operate(o){
    count++;
    holder.innerHTML+=screen.innerHTML;
    if(count>1)
        result+=calculate(num,parseInt(screen.innerHTML),oper)
    oper = o
    num=Number(screen.innerHTML)
    screen.innerHTML="";
}

function add(){
    operate("+");
    holder.innerHTML +=" + "
}

function subtract(){
    operate("-");
    holder.innerHTML +=" - "
}

function multiply(){
    operate("*");
    holder.innerHTML +=" * "
}

function divide(){
    operate("/");
    holder.innerHTML +=" / "
}

function equalTo(){
    result += calculate(num,Number(screen.innerHTML),holder.innerHTML.charAt(holder.innerHTML.length-2))
    screen.innerHTML = result;
    holder.innerHTML ="";
    count=0;
    result=0;
    num=0;
}

function calculate(a,b,o){
    switch(o){
        case("+"):
                    return a+b;
                    break;
        case("-"):
                    return a-b;
                    break;
        case("*"):
                    return a*b;
                    break;
        case("/"):
                    return a/b;
                    break;

    }
}
