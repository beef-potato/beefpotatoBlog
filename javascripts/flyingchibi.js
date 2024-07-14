
const canvas = document.getElementById("ccanvas");
const chibiContainer = document.querySelector(".chibi-container")
const chibi = document.querySelector(".chibi");
const FPS = 60;
let entranceDuration = 1000;
let entranceFrames = entranceDuration / (1000 / FPS);
let entranceFrame = 0;
let x = -3 * entranceFrames;
let y = -3 * entranceFrames;
let xspeed = 3;
let yspeed = 3;
const chibiWidth = 130;
const chibiHeight = 134;

let loop = 0;
//initial draw
chibiContainer.style.marginLeft = x + "px";
chibiContainer.style.marginTop = y + "px";

function update() {

    if (entranceFrame < entranceFrames) {
        x += xspeed;
        y += yspeed;
        entranceFrame++;
    } else {
        x += xspeed;
        y += yspeed;

        const isCollidingWithRightSide = (x + chibiWidth >= canvas.width);
        if (isCollidingWithRightSide) {
            x = canvas.width - chibiWidth;
            xspeed = -xspeed;
            // spriteContainer.style.transform = xspeed > 0 ? "scaleX(1)" : 'scaleX(-1)';
            chibiContainer.style.transform = 'scaleX(-1)';

        }
        const isCollidingWithLeftSide = (x <= 0);
        if (isCollidingWithLeftSide) {
            x = 0;
            xspeed = -xspeed;
            // spriteContainer.style.transform = xspeed > 0 ? "scaleX(1)" : 'scaleX(-1)';
            chibiContainer.style.transform = 'scaleX(1)';
        }
        const isCollidingWithBottomSide = (y + chibiHeight >= canvas.height);
        if (isCollidingWithBottomSide) {
            y = canvas.height  - chibiHeight;
            yspeed = -yspeed;
        }
        const isCollidingWithUpSide = (y <= 0);
        if (isCollidingWithUpSide) {
            y = 0;
            yspeed = -yspeed;
        }
        console.log(`x: ${x}, y: ${y}, xspeed: ${xspeed}, yspeed: ${yspeed}`);
    }
    //update the position of sprite-container
    chibiContainer.style.marginLeft = x + "px";
    chibiContainer.style.marginTop = y + "px";
}

function animate() {
    update();
}

setTimeout(() => {
    window.setInterval(animate, 1000 / FPS);

}, 1000); //duration of enter animation

