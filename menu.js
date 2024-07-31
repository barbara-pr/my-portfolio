$(document).ready(function(){
    $('#mobile-btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    $('#night-mode-toggle').on('click', function() {
        $('body').toggleClass('night-mode');
        var isNightMode = $('body').hasClass('night-mode');
        localStorage.setItem('night-mode', isNightMode);
    });

    if (localStorage.getItem('night-mode') === 'true') {
        $('body').addClass('night-mode');
    }
});

// Rolagem suave ao clicar nos links do menu
$('#nav-list a, #mobile-nav-list a').on('click', function(event) {
    event.preventDefault(); 

    var targetId = $(this).attr('href'); // Obter o ID da seção de destino
    var targetOffset = $(targetId).offset().top; // Obter a posição vertical da seção de destino

    $('html, body').animate({
        scrollTop: targetOffset
    }, 800); // Duração da animação em milissegundos
});