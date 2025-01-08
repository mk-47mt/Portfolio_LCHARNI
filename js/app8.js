// Gestion des cartes : retourner la carte deux fois, une pour voir la description + débouchés, et une autre pour revenir à l'état initial
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        const cardInner = card.querySelector(".card-inner");
        
        // Si la carte est déjà retournée, on la remet dans sa position initiale
        if (card.classList.contains("clicked")) {
            card.classList.remove("clicked");  // Retour à l'état initial
        } else {
            card.classList.add("clicked");  // Retourner la carte pour afficher la description
        }
    });
});

// Faire suivre le point à la souris sur la timeline
document.addEventListener("mousemove", (event) => {
    const scrollPoint = document.querySelector(".scroll-point");
    const timeline = document.querySelector(".timeline");

    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top + window.scrollY;
    const timelineHeight = timelineRect.height;

    const mouseY = event.clientY + window.scrollY - timelineTop;

    // Vérifier si la souris est dans la zone de la timeline
    if (mouseY >= 0 && mouseY <= timelineHeight) {
        scrollPoint.style.top = `${mouseY}px`;
    }
});

// Gestion du point mobile sur la timeline avec le scroll
document.addEventListener("scroll", () => {
    const scrollPoint = document.querySelector(".scroll-point");
    const timeline = document.querySelector(".timeline");

    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top + window.scrollY;

    const scrollY = window.scrollY - timelineTop;
    const maxScroll = timelineRect.height;

    // Assurer que le point reste dans la zone de la timeline
    if (scrollY >= 0 && scrollY <= maxScroll) {
        scrollPoint.style.transform = `translateX(-50%) translateY(${scrollY}px)`;
    }
});
