const windowEl = document.querySelector(".xp-window");
const title = document.querySelector(".titlebar");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

title.addEventListener("mousedown", e => {

    dragging = true;

    offsetX = e.clientX - windowEl.offsetLeft;
    offsetY = e.clientY - windowEl.offsetTop;

});

document.addEventListener("mousemove", e => {

    if(!dragging) return;

    windowEl.style.left = (e.clientX - offsetX) + "px";
    windowEl.style.top = (e.clientY - offsetY) + "px";

});

document.addEventListener("mouseup", ()=>{

    dragging = false;

});

let topZ = 1;

document.querySelectorAll(".xp-window").forEach(win=>{

    win.addEventListener("mousedown", ()=>{

        topZ++;
        win.style.zIndex = topZ;

    });

});

const start=document.getElementById("start");
const menu=document.getElementById("startMenu");

start.onclick=()=>{

    menu.style.display=
    menu.style.display==="block"
    ? "none"
    : "block";

}

Wallpaper           z-index:0

Desktop Icons       z-index:5

Windows             z-index:20+

Start Menu          z-index:1000

Notifications       z-index:1100

Taskbar             z-index:2000
