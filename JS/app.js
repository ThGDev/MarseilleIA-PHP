// Je créé une constante "sr" pour éviter de retaper "ScrollReveal({})" à chaque fois 
const sr = ScrollReveal({
    duration: 2000,
    reset: true
});
// POUR H1
sr.reveal('h1', {
    origin: 'top',
    distance: '30px',
});

/* =========== index.php ========== */
//POUR H2
sr.reveal('.h2index', {
    origin: 'top',
    distance: '30px',
    delay: 1000
});
sr.reveal('.resume', {
    delay: 2000
});
sr.reveal('.buton');

// Pour les 5 éléments du bas de page index.php
sr.reveal('.ItemsHome', {
    delay: 500,
    interval: 500
});

/* =========== autres pages ========== */
sr.reveal('.logo', {
    origin: 'top',
    distance: '30px',
});
sr.reveal('.h2pages');
sr.reveal('.ContenuPages', {
    delay: 500
});
sr.reveal('.ImgIllust');
sr.reveal('.ButtonForm');

/* =========== formulaire ========== */
sr.reveal('.h4pages');
sr.reveal('form');