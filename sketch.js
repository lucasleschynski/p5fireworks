function setup() {
    createCanvas(640, 480);
    draw()
}

function draw() {
    if (mouseIsPressed) {
        drawRectangle(mouseX, mouseY)
    } else {
        fill(255);
    }
}

function drawRectangle(x, y) {
    rect(x,y,50,50)
}
