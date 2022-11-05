$(document).ready(function(){
    // Funcion que se ejecuta al hacer click sobre una imagen
    $(".imgzoom").click(function(){
        //Ajustamos el contenedor de la imagen al 80% del alto de la ventana si es pc
        // y al 90% del ancho si es telefono
        if ($(window).width() >= $(window).height()) {
            $('#preview').height($(window).height() * 0.8);
            $('#preview').width('auto');
            // Cargamos la imagen en la capa grande
            $('#content').html("<img src='"+$(this).attr("src")+"' height='100%'>");
        } else {
            $('#preview').width($(window).width() * 0.8);
            $('#preview').height('auto');
            // Cargamos la imagen en la capa grande
            $('#content').html("<img src='"+$(this).attr("src")+"' width='100%'>");
        }        
        
        // Posicionamos las capas
        $('#background').css('height',$(document).height());
        $('#preview').css('top',(($(window).height()/2) - ($('#preview').height()/2) + $(document).scrollTop()));
        $('#preview').css('left', ($(document).width()/2) - ($('#preview').width()/2));
        
        // Mostramos las capas
        $('#preview').fadeIn();
        $('#background').fadeIn();
    });
    
    // Cerramos las capas al pulsar sobre el fondo
    $("#background").click(function(){
        $('#background').fadeOut();
        $('#preview').fadeOut();
    });
    // Cerramos las capas al pulsar sobre la cruz
    $("#close").click(function(){
        $('#background').fadeOut();
        $('#preview').fadeOut();
    });
});