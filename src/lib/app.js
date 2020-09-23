var headerContentTop = "#service1-header-top";
var headerContentBottom = "#service1-header-bottom";
console.log("funciona");

// Animacion de el header
totalFrames = 152;

for(var i = 1; i <= totalFrames; i++) {
    images[i] =  new Image();
    images[i].src = "./assets/apaf/service2"+pad(i, 3)+".jpg";
}

gsap.registerPlugin(ScrollTrigger);

$(document).ready(function() {
    gsap.to(headerContentTop, {
        scrollTrigger: {
            start: "100px top",
            end: "+=500 top",
            scrub: true,
            markers: true
        },
        y: -50,
        opacity: 0,
        ease: "none",
        duration: 5
    });
    
    gsap.to(headerContentBottom, {
        scrollTrigger: {
            start: "4000px top",
            end: "+=500 top",
            scrub: true,
            markers: true
        },
        y: -50,
        opacity: 1,
        ease: "none",
        duration: 5
    });
});