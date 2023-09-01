import nav, { foot } from "../components/nav.js";
document.getElementById("tatacliq").innerHTML = nav()
document.getElementById("footer").innerHTML = foot()

const toggle = document.querySelector(".toggle")
const navmenu = document.querySelector(".nav-menu")

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active")
    navmenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    toggle.classList.remove("active")
    navmenu.classList.remove("active")
}))