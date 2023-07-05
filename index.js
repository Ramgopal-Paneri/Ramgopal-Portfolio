let certificate = document.getElementById('certificate');
let row = certificate.getElementsByClassName('row');
Array.from(row).forEach(element => {
    element.classList.add('pb-2');
    element.classList.add('mb-2');
    element.classList.add('mt-2');
});