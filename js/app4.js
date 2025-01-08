// Gestion du point mobile sur la timeline suivant la souris
document.addEventListener("mousemove", (event) => {
    const scrollPoint = document.querySelector(".scroll-point");
    const timeline = document.querySelector(".timeline");

    // Obtenir les dimensions de la timeline
    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top;
    const timelineBottom = timelineRect.bottom;

    // Vérifier si la souris est dans la zone verticale de la timeline
    if (event.clientY >= timelineTop && event.clientY <= timelineBottom) {
        // Calculer la position Y relative dans la timeline
        const positionY = event.clientY - timelineTop;

        // Déplacer le point
        scrollPoint.style.transform = `translate(-50%, ${positionY}px)`;
    }
});
