const menu = document.querySelector(".nav-menu-mobile");
const open = document.querySelector("#menu");
const link = document.querySelectorAll(".nav-link");

function openMenu(){
    menu.classList.toggle("active");
    open.classList.toggle("close");
}


open.onclick = openMenu;
link.forEach(link => link.onclick = openMenu);