var lastPos_x, lastPos_y;
canvas = document.getElementById("mCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthLine = 2;

new_width = screen.width - 70;
new_height = screen.height - 300;

if (screen.width < 992) {
    document.getElementById("mCanvas").width = new_width;
    document.getElementById("mCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", My_touchstart);

function My_touchstart(e) {
    console.log("My_touchstart");
    color = document.getElementById("colorName").value;
    console.log(color);
    widthLine = document.getElementById("widthOf").value;
    lastPos_x = e.touches[0].clientX - canvas.offsetLeft;
    lastPos_y = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove", My_touchmove);

function My_touchmove(e) {
    currentPos_x = e.touches[0].clientX - canvas.offsetLeft;
    currentPos_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    console.log("last position of x and y coordinates = ");
    console.log("x = " + lastPos_x + " y = " + lastPos_y);
    ctx.moveTo(lastPos_x, lastPos_y);
    console.log("current position of x and y coordinates = ");
    console.log("x = " + currentPos_x + " y = " + currentPos_y);
    ctx.lineTo(currentPos_x, currentPos_y);
    ctx.stroke();

    lastPos_x = currentPos_x;
    lastPos_y = currentPos_y;
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}