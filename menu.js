document.addEventListener('DOMContentLoaded', function() {
    // Botão do menu mobile
    document.getElementById('mobile-btn').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('active');
        const icon = document.querySelector('#mobile-btn i');
        icon.classList.toggle('fa-x');
    });

    const nightModeToggle = document.getElementById('night-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');

    function toggleNightMode() {
        const isNightMode = document.body.classList.toggle('night-mode');
        // Atualizar o ícone com base no estado do modo
        if (isNightMode) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        }
        localStorage.setItem('night-mode', isNightMode);
    }

    nightModeToggle.addEventListener('click', toggleNightMode);

    // Definir o estado do modo noturno com base no armazenamento local
    if (localStorage.getItem('night-mode') === 'true') {
        document.body.classList.add('night-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }

    // Rolagem suave ao clicar nos links do menu
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetOffset = targetElement.offsetTop;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    }

    const navLinks = document.querySelectorAll('#nav-list a, #mobile-nav-list a');
    navLinks.forEach(link => link.addEventListener('click', smoothScroll));
});