var headerContentTop = "#service1-header-top";
var headerContentBottom = "#service1-header-bottom";
console.log("funciona");

// Animacion de el header
totalFrames = 152;

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