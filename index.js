let certificate = document.getElementById('certificate');
let row = certificate.getElementsByClassName('row');
Array.from(row).forEach(element => {
    element.classList.add('pb-2');
    element.classList.add('mb-2');
    element.classList.add('mt-2');
});
ScrollReveal().reveal('.reveal-0',{ delay: 200 });
ScrollReveal().reveal('.reveal',{ delay: 300 });
ScrollReveal().reveal('.reveal-2',{ delay: 500 });
ScrollReveal().reveal('.reveal-3',{ delay: 600 });
ScrollReveal({ reset: true });


