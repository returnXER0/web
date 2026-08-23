import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js/+esm";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#layer1", {
    y: -200,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=2000",
        scrub: true,
    }
});
gsap.to("#layer2", {
    y: -350,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=2000",
        scrub: true,
    }
});
gsap.to("#layer3", {
    y: -550,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=2000",
        scrub: true,
    }
});