document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.querySelector(".header").classList.remove("open")
    }
});

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector(".header").classList.remove("open")
});


document.addEventListener("DOMContentLoaded", () => {
    const goTopBtn = document.getElementById("arrow-up");
    goTopBtn.addEventListener("click", goTop);
    function goTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -75);
            setTimeout(goTop, 10);
        }
    };
});

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

