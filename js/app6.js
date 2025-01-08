document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Ajouter la classe active au bouton cliqué
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            // Filtrer les projets
            projectCards.forEach((card) => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
