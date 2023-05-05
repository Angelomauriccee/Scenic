// PRELOADER

const preloader = document.querySelector(".preloader");
window.addEventListener ("load", () => {
    preloader.classList.add("remove")
});

// PRELOADER


// IMG DRAGGABLE
// const img = document.querySelector(".image-undrag");

// img.ondragstart = () => {
//     return false;
//   };

//IMG DRAGGABLE
//Video slider
const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".glass_container")
const texts = document.querySelectorAll(".sk")
const headers = document.querySelectorAll(".banner__header")
var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    })
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    contents.forEach((content) => {
        content.classList.remove("active");
    })
    texts.forEach((text) => {
        text.classList.remove("active");
    })
    headers.forEach((header) => {
        header.classList.remove("active");
    })

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
    texts[manual].classList.add("active");
    headers[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
}); 
//video slider

// HAMBURGER NAVIGATION

const openNavs = document.querySelectorAll(".open_nav");
const closeNavs = document.querySelectorAll(".close_nav");
const navs = document.querySelectorAll(".nav_menu");

var closeNavBar = function(manual) {
    navs.forEach((nav) => {
        nav.classList.remove("active")
    });
    closeNavs.forEach((closeNav) => {
        closeNav.classList.remove("active")
    });

    closeNavs[manual].classList.add("active");
}

closeNavs.forEach((closeNav, i) => {
    closeNav.addEventListener("click", () => {
        closeNavBar(i);
    })
});
var navBar = function(manual) {
    navs.forEach((nav) => {
        nav.classList.remove("active")
    });
    openNavs.forEach((openNav) => {
        openNav.classList.remove("active")
    });


    navs[manual].classList.add("active");
    openNavs[manual].classList.add("active");
}

openNavs.forEach((openNav, i) => {
    openNav.addEventListener("click", () => {
        navBar(i);
    });

});

