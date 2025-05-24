const btn = document.getElementById("nav-content-btn");
const nav = document.getElementById("nav-content-menu");

btn.addEventListener("click", function () {
    if (nav.style.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
    
});