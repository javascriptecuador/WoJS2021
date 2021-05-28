import '../scss/main.scss'
import Template from "./template.js";

!(function () {
    window;
    const e = document.documentElement;
    if (
        (e.classList.remove("no-js"),
        e.classList.add("js"),
        document.body.classList.contains("has-animations"))
    ) {
        (window.sr = ScrollReveal()).reveal(".reveal-on-scroll", {
            duration: 600,
            distance: "20px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "top",
            interval: 100,
        });
    }
})();


(function App() {
    const main = null || document.getElementById("main");
    main.innerHTML = Template();
})();
