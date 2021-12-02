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