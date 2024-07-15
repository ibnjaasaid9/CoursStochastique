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
});
