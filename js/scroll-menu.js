$(document).ready(function() {
    $('#btn-inicio').click(function(){
        $('html, body').animate({scrollTop: $('#Inicio').offset().top}, 2000)
    });
    $('#btn-mini-club').click(function(){
        $('html, body').animate({scrollTop: $('#MiniClub').offset().top}, 2000)
    });
    $('#btn-actividades').click(function(){
        $('html, body').animate({scrollTop: $('#Actividades').offset().top}, 2000)
    });
    $('#btn-adultos').click(function(){
        $('html, body').animate({scrollTop: $('#Adultos').offset().top}, 2000)
    });
    $('#btn-contacto').click(function(){
        $('html, body').animate({scrollTop: $('#Contacto').offset().top}, 2000)
    });

    $('#form-contact').submit(function(e) {
        e.preventDefault();
        
        var values = $(this).serialize();
        
        ajaxRequest = $.ajax({
        url: "envio-mail.php",
        type: "post",
        data: values });

        ajaxRequest.done(function (response, textStatus, jqXHR){          
          $('#alert-mail').removeClass('hidden');
        });            
    });
});