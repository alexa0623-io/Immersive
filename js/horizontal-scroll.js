gsap.registerPlugin(ScrollTrigger);

let sections = document.querySelectorAll(".scroll-panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=2000",
    }
});