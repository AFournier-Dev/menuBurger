console.log("test");
const spanMenu=document.getElementById("spanmenu");
const menuToggle=document.getElementById("menuToggle");
console.log(spanMenu);
spanMenu.addEventListener("click",function(e){
    e.preventDefault();
    console.log("j'ai cliqué sur le burger");
    menuToggle.classList.toggle("open");
});