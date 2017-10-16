$(function() {

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    // Menu Responsive
    // Calculamos el ancho de la pagina
    var ancho = $(window).width();
    var enlaces = $('#enlaces');
    var btnMenu = $('#btn-menu');
    var icono = $('#btn-menu .icono');

    if(ancho < 700) {
        enlaces.hide();
        icono.addClass('fa-bars');
    }    

    btnMenu.on('click', function(e) {
        icono.toggleClass('fa-bars');
        icono.toggleClass('fa-times');
        enlaces.slideToggle();
    });

    $(window).on('resize', function() {
        if($(this).width() > 700) {
            enlaces.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            enlaces.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
        }
    });
;});