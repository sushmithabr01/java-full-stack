let greetings=["Good morning","Good Afternoon","Good Night"];
let num=0;
function greet_afternoon()
{
    let text = document.getElementById("greet")
    text.innerText =greetings[num];
    num+=1;
    if(num>2){num=0}
}
function turn_on(){
    let color1 = document.getElementById("on");
    color1.src="/files/light_on.jpeg";
}
function turn_off(){
  let color2 = document.getElementById("on");
    color2.src="/files/light_off.jpeg";
}
function Change_color()
{
   let color = document.getElementById("cap");
    color.style.backgroundColor="black";
    let txt1 = document.getElementById("Data");
    txt1.style.backgroundColor="white";
    txt1.style.width="fit-content";
    let txt2 = document.getElementById("greet");
    txt2.style.backgroundColor="orange"; 
}