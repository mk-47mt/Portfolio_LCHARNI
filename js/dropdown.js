// Gestion de l'ouverture et fermeture du menu déroulant avec animation de la flèche
document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("open");

        // Fermer les autres menus ouverts
        document.querySelectorAll(".dropdown").forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");
            }
        });
    });
});

// Fermer le menu déroulant si l'utilisateur clique en dehors
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
            dropdown.classList.remove("open");
        });
    }
});
