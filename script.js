let main = document.querySelector("#main");
let crsr = document.querySelector("i");
let clickCrsr = document.querySelector(".onClick");
let clicked = false;

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    clickCrsr.style.left = dets.x+"px"
    clickCrsr.style.top = dets.y+"px"
})

main.addEventListener("click", () => {
    setTimeout(() => {
        clicked = !clicked;
    crsr.style.opacity = clicked ? 0 : 1;
    clickCrsr.style.opacity = clicked ? 1 : 0;
    }, 100);
})