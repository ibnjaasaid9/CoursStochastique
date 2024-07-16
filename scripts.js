document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre
    const title = document.querySelector('.header-left h1');
    if (title) {
        title.style.animation = 'slideIn 2s ease-in-out';
    }

    // Animation des images de livres
    const books = document.querySelectorAll('.book-references .book img');
    books.forEach(book => {
        book.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        book.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Initialisation du calendrier FullCalendar avec des événements prédéfinis
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'fr',
            events: [
                { title: 'Séance 1 : Chapitre 1', start: '2024-09-01' },
                { title: 'Séance 2 : Chapitre 2', start: '2024-09-08' },
                { title: 'Séance 3 : Chapitre 3', start: '2024-09-15' },
                { title: 'Séance 4 : TP1 et TP2', start: '2024-09-22' },
                { title: 'Séance 5 : Quelques exercices de TD', start: '2024-09-29' },
                { title: 'Séance 6 : Correction de DL', start: '2024-10-06' },
                { title: 'Examen mi-parcours', start: '2024-10-20' },
                { title: 'Remise du projet final', start: '2024-11-10' },
                { title: 'Examen final', start: '2024-11-25' }
            ]
        });
        calendar.render();
    }

    // Ajout d'écouteurs d'événements pour les boutons des chapitres
    const chapterButtons = document.querySelectorAll('.chapter-button');
    chapterButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Vous avez cliqué sur : ' + this.textContent);
        });
    });

    const menuButton = document.querySelector('.menu-button');
    const navigation = document.querySelector('.navigation ul');
    if (menuButton && navigation) {
        menuButton.addEventListener('click', function() {
            navigation.classList.toggle('is-active');
        });
    }

    // Ajout d'écouteurs d'événements pour les boutons de téléchargement
    const downloadButtons = document.querySelectorAll('.download-button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            downloadFile(this.getAttribute('data-file'));
        });
    });
});

// Fonction pour gérer les téléchargements de fichiers
function downloadFile(filePath) {
    console.log("Création du lien de téléchargement pour :", filePath);
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop(); // Télécharge le fichier avec son nom original
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Lien de téléchargement cliqué pour :", filePath);
}
