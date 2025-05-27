const certifications = [
    {
        id: 1,
        title: 'Certification Réseau',
        category: 'Réseau',
        imageUrl: 'certif/AWS Course Completion Certificate_page-0001.jpg',
        siteUrl: 'certif/certif-aws_aws_merged.pdf'
    },
    {
        id: 2,
        title: 'Certification en Cybersécurité',
        category: 'Cybersécurité',
        imageUrl: 'certif/certif neta_page-0001.jpg',
        siteUrl: 'certif/certif-neta-neta-merged.pdf'
    },
    {
        id: 3,
        title: 'Certification en Cybersécurité',
        category: 'Cybersécurité',
        imageUrl: 'certif/certif ainssi_page-0001.jpg',
        siteUrl: 'certif/certif-ainssi_merged.pdf'
    },
    {
        id: 4,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/certif_sql.jpg',
        siteUrl: 'certif/certif-sql_sql_merged.pdf'
    },
    {
        id: 5,
        title: 'Certification en Dev',
        category: 'Development',
        category: 'IA',
        imageUrl: 'certif/certif chat gpt_page-0001.jpg',
        siteUrl: 'certif/certif-chat-gpt_merged.pdf'
    },
     {
        id: 6,
        title: 'Certification Réseau',
        category: 'Réseau',
        imageUrl: 'certif/5061_7991609_page-0001.jpg',
        siteUrl: 'certif/certif-ccna_ccna_merged.pdf'
    },
     {
        id: 7,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/4496_7992265_page-0001.jpg',
        siteUrl: 'certif/certif-html_html_merged.pdf'
    },
    {
        id: 8,
        title: 'Certification en Réseau',
        category: 'Réseau',
        imageUrl: 'certif/8004221_79009071741256455443_page-0001.jpg',
        siteUrl: 'certif/certif-computer-networking-merged.pdf'
    },
    {
        id: 9,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/7993108_77529851741075837256_page-0001.jpg',
        siteUrl: 'certif/certif-css_css_merged.pdf'
    },
    {
        id: 10,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/8170700_85258631744281603593_page-0001(1).jpg',
        siteUrl: 'certif/8170700_85258631744281603593_page-0001(1).pdf'
    },
    {
        id: 11,
        title: 'Certification en IA',
        category: 'IA',
        imageUrl: 'certif/IntrotoModernAIUpdate20250410-29-k550vq_page-0001.jpg',
        siteUrl: 'certif/IntrotoModernAIUpdate20250410-29-k550vq.pdf'
    },
    {
        id: 12,
        title: 'Certification en Dev',
        category: 'Development',
        imageUrl: 'certif/certif php_page-0001.jpg',
        siteUrl: 'certif/certif php.pdf'
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
