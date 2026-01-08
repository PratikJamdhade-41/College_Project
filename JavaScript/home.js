/* -----------------------------------------
           NAVBAR SCROLL LOGIC
           ----------------------------------------- */
window.onscroll = function () {
    var nav = document.getElementById('navbar');
    // When user scrolls more than 50px, add the 'scrolled' class
    if (window.pageYOffset > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};

/* -----------------------------------------
   PARTICLES BACKGROUND CONFIGURATION
   ----------------------------------------- */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#2196f3" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#2196f3",
            "opacity": 0.3,
            "width": 1
        },
        "move": { "enable": true, "speed": 2.5, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" } // Lines connect to mouse
        }
    },
    "retina_detect": true
});