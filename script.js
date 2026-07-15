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
