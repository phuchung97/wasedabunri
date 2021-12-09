const navSlide = () => {
    const burger = document.querySelector(".icon-res");
    const nav = document.querySelector(".menu-res");

    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
    })
}
navSlide();

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("to-top-active");
    }else{
        toTop.classList.remove("to-top-active");
    }
});

/* Gakka Page Toggle -------------------------------------------------------------------------------------------*/
function toggleIT1(){
    let toggleIT1 = document.getElementById("gakka-it-college-toggle-1");
    if(toggleIT1.style.display == "none"){
        toggleIT1.style.display = "block";
    }else{
        toggleIT1.style.display = "none";
    }
}


function toggleIT2(){
    let toggleIT2 = document.getElementById("gakka-it-college-toggle-2");
    if(toggleIT2.style.display == "none"){
        toggleIT2.style.display = "block";
    }else{
        toggleIT2.style.display = "none";
    }
}
function toggleIT3(){
    let toggleIT3 = document.getElementById("gakka-it-college-toggle-3");
    if(toggleIT3.style.display == "none"){
        toggleIT3.style.display = "block";
    }else{
        toggleIT3.style.display = "none";
    }
}
function toggleIT4(){
    let toggleIT4 = document.getElementById("gakka-it-college-toggle-4");
    if(toggleIT4.style.display == "none"){
        toggleIT4.style.display = "block";
    }else{
        toggleIT4.style.display = "none";
    }
}

function toggleAd1(){
    let toggleAd1 = document.getElementById("gakka-admission-toggle-1");
    if(toggleAd1.style.display == "none"){
        toggleAd1.style.display = "block";
    }else{
        toggleAd1.style.display = "none";
    }
}
function toggleAd2(){
    let toggleAd2 = document.getElementById("gakka-admission-toggle-2");
    if(toggleAd2.style.display == "none"){
        toggleAd2.style.display = "block";
    }else{
        toggleAd2.style.display = "none";
    }
}
function toggleAd3(){
    let toggleAd3 = document.getElementById("gakka-admission-toggle-3");
    if(toggleAd3.style.display == "none"){
        toggleAd3.style.display = "block";
    }else{
        toggleAd3.style.display = "none";
    }
}
