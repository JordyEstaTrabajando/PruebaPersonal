document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("nav-content-btn");
    const nav = document.getElementById("nav-content-menu");

    btn.addEventListener("click", function () {
        nav.classList.toggle("menu-visible");
    });
});
