document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.querySelector('.typing');  // Cible l'élément où le texte apparaîtra
    const text = "Administrateur Réseau";  // Le texte à afficher
    let index = 0;  // Compteur de caractères à afficher
    let isDeleting = false;  // Indicateur si l'on est en train d'effacer le texte
    const typingSpeed = 150;  // Vitesse de frappe
    const deletingSpeed = 100;  // Vitesse d'effacement
    const pauseBeforeDeleting = 2000;  // Pause avant l'effacement (en millisecondes)

    // Fonction qui gère l'animation de frappe et effacement
    function typeAndDelete() {
        if (isDeleting) {
            // Effacer le texte caractère par caractère
            targetElement.textContent = text.substring(0, index);
            index--;
            if (index < 0) {  // S'assurer que l'effacement est complet avant de recommencer
                isDeleting = false;  // Redémarrer l'écriture
                index = 0;  // Réinitialiser l'index à 0
            }
        } else {
            // Taper le texte caractère par caractère
            targetElement.textContent = text.substring(0, index + 1); // Ajout de "+ 1" pour inclure le caractère actuel
            index++;
            if (index === text.length) {
                // Lorsque le texte est entièrement écrit, attendre avant de commencer à effacer
                setTimeout(() => {
                    isDeleting = true;
                    typeAndDelete(); // Relance immédiatement après la pause
                }, pauseBeforeDeleting);
                return; // Arrêter la fonction ici pour éviter d'exécuter le prochain setTimeout
            }
        }

        // Appeler cette fonction après un délai pour simuler l'animation de frappe ou d'effacement
        setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Initialiser l'animation
    typeAndDelete();
});
