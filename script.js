let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    nav.classList.remove("active");
} 
let nav=document.querySelector(".navbar");
document.querySelector("#menu-icon").onclick=()=>{
    nav.classList.toggle("active");
    search.classList.remove('active');
}
window.onscroll=()=>{
    nav.classList.remove("active");
    search.classList.remove('active');
}

let header =document.querySelector("header");
document.addEventListener("scroll" ,()=>{
    header.classList.toggle("shadow", window.scrollY>0)
});