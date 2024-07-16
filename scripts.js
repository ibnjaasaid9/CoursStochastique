document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre
    const title = document.querySelector('.header-left h1');
    title.style.animation = 'slideIn 2s ease-in-out';

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

    // FullCalendar initialization for calendar with predefined events
    if (document.getElementById('calendar')) {
        var calendarEl = document.getElementById('calendar');
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

    // Event listeners for chapter buttons
    const chapterButtons = document.querySelectorAll('.chapter-button');
    chapterButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You clicked: ' + this.textContent);
        });
    });

    // Event listeners for quiz buttons
const quizButtons = document.querySelectorAll('.quiz-button');
quizButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Starting quiz for: ' + this.textContent);
    });
});


    // No more quiz buttons events here as they have been removed from the HTML
});
