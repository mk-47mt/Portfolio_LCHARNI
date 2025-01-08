const certifications = [
    {
        id: 1,
        title: 'Certification Réseau',
        category: 'Réseau',
        imageUrl: 'certif/AWS Course Completion Certificate_page-0001.jpg',
        siteUrl: 'certif/AWS Course Completion Certificate.pdf'
    },
    {
        id: 2,
        title: 'Certification en Cybersécurité',
        category: 'Cybersécurité',
        imageUrl: 'certif/certif neta_page-0001.jpg',
        siteUrl: 'certif/certif neta.pdf'
    },
    {
        id: 3,
        title: 'Certification en Cybersécurité',
        category: 'Cybersécurité',
        imageUrl: 'certif/certif ainssi_page-0001.jpg',
        siteUrl: 'certif/certif ainssi.pdf'
    },
    {
        id: 4,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/certif_sql.jpg',
        siteUrl: 'certif/certif sql.pdf'
    },
    {
        id: 5,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/certif chat gpt_page-0001.jpg',
        siteUrl: 'certif/certif chat gpt.pdf'
    },
    // Ajoutez d'autres certifications ici
];

// Fonction pour afficher les certifications
function displayCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    container.innerHTML = '';

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('certification-card');

        const img = document.createElement('img');
        img.src = cert.imageUrl; // URL de l'image de la certification
        img.alt = cert.title;
        img.title = cert.title;

        // Redirection vers le site de la certification au clic
        img.onclick = () => {
            window.open(cert.siteUrl, '_blank'); // Ouvre le site dans un nouvel onglet
        };

        card.appendChild(img);
        container.appendChild(card);
    });
}

// Fonction de filtrage
function filterCertifications(category) {
    if (category === 'all') {
        displayCertifications(certifications);
    } else {
        const filteredCerts = certifications.filter(cert => cert.category === category);
        displayCertifications(filteredCerts);
    }
}

// Initialiser les certifications
displayCertifications(certifications);
