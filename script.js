document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');

    // Burger animation
    const burgerLines = document.querySelectorAll('.burger-line');
    burgerLines[0].classList.toggle('toggle1');
    burgerLines[1].classList.toggle('toggle2');
    burgerLines[2].classList.toggle('toggle3');
});
//this is for FAQ
function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var isOpen = answer.style.height !== '0px';

    // Set height for transition
    answer.style.height = isOpen ? '0px' : `${answer.scrollHeight}px`;

    var toggleButton = element.querySelector('.toggle-button');
    toggleButton.classList.toggle('active', !isOpen);

    // Change button text based on state
    toggleButton.textContent = isOpen ? '+' : '-';
}
//Sign in / Sign Up
function showForm(formId) {
    var forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
        form.style.display = 'none';
        form.classList.remove('active');
    });

    var activeForm = document.getElementById(formId);
    activeForm.style.display = 'flex';
    activeForm.classList.add('active');
}

function showForm(formId) {
    var forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
        form.style.display = 'none';
        form.classList.remove('active');
    });

    var activeForm = document.getElementById(formId);
    activeForm.style.display = 'flex';
    activeForm.classList.add('active');
}
