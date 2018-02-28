$(document).ready(function() {

    var ancho = $(window).width();
    var enlaces = $('#enlaces');

    $('#btn-inicio').click(function(){
        $('html, body').animate({scrollTop: $('#Inicio').offset().top}, 2000)
        if(ancho <= 910){
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
            enlaces.slideToggle();
        }
    });
    $('#btn-mini-club').click(function(){
        $('html, body').animate({scrollTop: $('#MiniClub').offset().top}, 2000)
        if(ancho <= 910){
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
            enlaces.slideToggle();
        }
    });
    $('#btn-actividades').click(function(){
        
        $('html, body').animate({scrollTop: $('#Actividades').offset().top}, 2000)
        if(ancho <= 910){
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
            enlaces.slideToggle();
        }
    });
    $('#btn-adultos').click(function(){
        $('html, body').animate({scrollTop: $('#Adultos').offset().top}, 2000)
        if(ancho <= 910){
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
            enlaces.slideToggle();
        }
    });

    $('#form-contact').submit(function(e) {
        e.preventDefault();
        
        var values = $(this).serialize();
        
        ajaxRequest = $.ajax({
        url: "../envio-mail.php",
        type: "post",
        data: values });

        ajaxRequest.done(function (response, textStatus, jqXHR){          
          $('#alert-mail').removeClass('hidden');
        });            
    });
});