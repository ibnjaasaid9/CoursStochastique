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

    // Boutons Objectifs et QCM
    document.querySelectorAll('.objectives-button').forEach(button => {
        button.addEventListener('click', function() {
            const chapterContent = this.parentElement;
            const objectivesList = chapterContent.querySelector('.objectives-list');
            objectivesList.classList.toggle('hidden');
        });
    });

    // Boutons QCM
    document.querySelectorAll('.qcm-button').forEach(button => {
        button.addEventListener('click', function() {
            alert('QCM pour ' + this.parentElement.parentElement.getAttribute('data-chapter'));
        });
    });

    // Initialisation du calendrier FullCalendar
    if (document.getElementById('calendar')) {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: 'fr',
            events: [
                {
                    title: 'Séance 1 : Chapitre 1',
                    start: '2024-09-01'
                },
                {
                    title: 'Séance 2 : Chapitre 2',
                    start: '2024-09-08'
                },
                {
                    title: 'Séance 3 : Chapitre 3',
                    start: '2024-09-15'
                },
                {
                    title: 'Séance 4 : TP1 et TP2',
                    start: '2024-09-22'
                },
                {
                    title: 'Séance 5 : Quelques exercices de TD',
                    start: '2024-09-29'
                },
                {
                    title: 'Séance 6 : Correction de DL',
                    start: '2024-10-06'
                },
                {
                    title: 'Examen mi-parcours',
                    start: '2024-10-20'
                },
                {
                    title: 'Remise du projet final',
                    start: '2024-11-10'
                },
                {
                    title: 'Examen final',
                    start: '2024-11-25'
                }
            ]
        });
        calendar.render();
    }
});
