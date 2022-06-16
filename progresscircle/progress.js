let a = 0;
let b = document.querySelector(".s");
let c = document.querySelector("#k");
let d = document.querySelector("#d");
d.addEventListener("click", () => {
    a++;
    c.innerHTML = `${a}%`;
    b.style.background = `conic-gradient(blue ${a}%,#fff ${a}%)`;
    if (a > 99) {
        a = 0;
    }
})