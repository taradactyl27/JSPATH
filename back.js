var button = document.getElementById("clear");
var button2 = document.getElementById("toggle");
var canvas = document.getElementById("work");
var ctx = canvas.getContext("2d");
var lastEvent = null;
var clear = function(){
    ctx.clearRect(0,0,500,500);
    lastEvent = null;
}

var draw = function(e){
    ctx.beginPath();
    ctx.arc(e.offsetX,e.offsetY,20,0,2 * Math.PI);
    ctx.fillStyle = "LightSalmon";
    ctx.fill();
    if (lastEvent == null){
	lastEvent = e;
    }
    else {
	ctx.moveTo(e.offsetX, e.offsetY);
	ctx.lineTo(lastEvent.offsetX, lastEvent.offsetY);
	lastEvent = e;
    }
    ctx.stroke();
}

canvas.addEventListener("click", draw);
button.addEventListener("click", clear);
