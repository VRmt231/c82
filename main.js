var mouseevent="empty";
var last_positionofx;
var last_positionofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width_of_arc=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_arc=document.getElementById("width-of-arc").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouseX=e.clientX - canvas.offsetLeft;
    current_position_of_mouseY=e.clientY - canvas.offsetTop;   
    if(mouseevent=="mousedown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_of_line;
      console.log("Last Position of X and Y = ");
      console.log("X = " + last_positionofx+"Y = "+last_positionofy);
      ctx.moveTo(last_positionofx,last_positionofy);
      console.log("Current Position Of X & Y Co-ordinates =");
      console.log("X = " + current_position_of_mouseX +"Y = "+ current_position_of_mouseY);
      ctx.lineTo(current_position_of_mouseX,current_position_of_mouseY);
      ctx.stroke();
    } 
    last_positionofx=current_position_of_mouseX;
    last_positionofy=current_position_of_mouseY;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)};
