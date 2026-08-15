import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js/+esm";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#layer1", {
    y: -150,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=1000",
        scrub: true,
        markers: true
    }
});
gsap.to("#layer2", {
    y: -300,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=1000",
        scrub: true,
        markers: true
    }
});
gsap.to("#layer3", {
    y: -500,

    scrollTrigger: {
        trigger: "#MainContainer",
        start: "top top",
        end: "+=1000",
        scrub: true,
        markers: true
    }
});