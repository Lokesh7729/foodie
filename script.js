var mnu = document.querySelector(".ri-menu-3-line");
var close = document.querySelector(".ri-close-line");
var nav= document.querySelector(".resp-nav");

mnu.addEventListener("click",function(){
    nav.style.right="0%";
})

close.addEventListener("click",function(){
    nav.style.right="-100%";
})