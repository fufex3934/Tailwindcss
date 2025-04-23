let html = document.getElementById("html");
let change_btn = document.getElementById("change_btn");
let change_img = document.getElementById("change_img");

change_btn.addEventListener("click",function(){
  html.classList.toggle("dark");
  if(change_img.src.includes('img/moon.svg')){
    change_img.src = "img/sun.svg"

  }else{
    change_img.src = "img/moon.svg"
  }
});


let change_btn2 = document.getElementById("change_btn2");
let change_img2 = document.getElementById("change_img2");

change_btn2.addEventListener("click",function(){
  html.classList.toggle("dark");
  if(change_img2.src.includes('img/moon.svg')){
    change_img2.src = "img/sun.svg"

  }else{
    change_img2.src = "img/moon.svg"
  }
});

//mobile menu
let main_menu = document.getElementById('main_menu');
let mobile_btn = document.getElementById('mobile_btn');

mobile_btn.addEventListener("click",function(){
  main_menu.classList.toggle("hidden");
  
});

//footer
const year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;