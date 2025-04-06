const imageDetails = [
    { 
        url: "img/debian.jpg", 
        description: "Projet Debian", 
        link: "https://debian.org",   // Lien vers le site du projet
        docLink: "projet/Compte_rendu_debian_reformulé.pdf"  // Lien vers la documentation PDF
    },
    { 
        url: "img/disney-plus-logo.png", 
        description: "Projet Disney Plus", 
        link: "https://github.com/mk-47mt/disney-plus-charni-louay",  // Lien vers le site du projet
        docLink: "projet/Cahier des charges Disney+.pdf"  // Lien vers la documentation PDF
    },
    { 
        url: "img/GLPI_Logo-color.png", 
        description: "Projet GLPI", 
        link: "https://glpi-project.org", 
        docLink: "projet/rapport_installation_glpi.pdf"
    },
    { 
        url: "img/jo2028.png", 
        description: "Projet JO 2028", 
        link: "https://jo-app-louay.kesug.com/index.php",  // Lien vers ton site
        docLink: "projet/Cahier des charges techniques JO2028 Louay_CHARNI.pdf"  // Lien vers la documentation PDF
    },
    { 
        url: "img/java.png", 
        description: "Projet Java", 
        link: "https://java.com", 
        docLink: "projet/Cahier_des_Charges_Propre.pdf"
    },
    { 
        url: "img/WS.png", 
        description: "Projet Windows Server", 
        link: "https://microsoft.com/windows-server", 
        docLink: "projet/Projet_Mallet_Installation_SI_Reformule_Complet.pdf"
    },
    { 
        url: "img/GNS3_logo.png", 
        description: "Projet GNS3", 
        link: "https://gns3.com", 
        docLink: "projet/Compte_rendu_TP_GNS3.pdf"
    },
    { 
        url: "img/PROXMOX.png", 
        description: "Projet Proxmox", 
        link: "https://www.proxmox.com", 
        docLink: "resources/proxmox.pdf"
    }
];

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;

// Écouteurs d'événements pour les boutons
prevEl.addEventListener("click", () => {
    x += 45;
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x -= 45;
    updateGallery();
});

// Fonction pour mettre à jour la galerie d'images
function updateGallery() {
    const imagesHTML = imageDetails
        .map((detail, index) => `
            <span style="--i: ${index}">
                <div class="image-wrapper">
                    <!-- Lien vers le projet -->
                    <a href="${detail.link}" target="_blank">
                        <img src="${detail.url}" alt="${detail.description}">
                    </a>
                    <div class="description">
                        ${detail.description} 
                        <!-- Emoji pour le lien vers la documentation -->
                        <a href="${detail.docLink}" target="_blank" class="doc-link">📄</a>
                    </div>
                </div>
            </span>
        `)
        .join("");

    imageContainerEl.innerHTML = imagesHTML;
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

// Initialisation de la galerie
updateGallery();
