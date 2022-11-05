$(document).ready(function() {
    /* SLIDER */
    /*
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        dotsClass: 'slide-dots',
        speed: 400
    });
    */
    $('.carousel').carousel();
    
    /* NAVBAR */
    document.body.onscroll = function () {
        let headerHeight = document.querySelector('.navbar-brand').offsetHeight;
        if (document.documentElement.scrollTop > headerHeight || document.body.scrollTop > headerHeight) {
            document.querySelector('.navbar-brand').classList.add("navScroll");
        } else {
            document.querySelector('.navbar-brand').classList.remove("navScroll");
        }
        
        /* BOTON SUBIR */
        scroll();
    }
    
    /* InfoSlider */
    if(document.querySelector('.infoSlider1')) {
        document.querySelector('.infoSlider1').style.marginLeft = "0px";
    }
    
    if(document.querySelector('.banner-capacitacion .figura')) {
        document.querySelector('.banner-capacitacion .figura').style.marginLeft = "0px";
    }
    
    /* SCROLL REVEAL */
    window.sr = ScrollReveal({ reset: true });
    //general
    if(document.querySelector('.banner')) { 
        sr.reveal('.banner');
    }
    if(document.querySelector('.subtit')) { 
        sr.reveal('.subtit');
    }
    //index
    if(document.querySelector('.titCont')) {
        sr.reveal('.titCont');
    }
    if(document.querySelector('.servicios')) {
        sr.reveal('.servicios');
    }
    if(document.querySelector('.divCert>div>div')) { 
        sr.reveal('.divCert>div>div');
    }
    if(document.querySelector('.listaSocios')) { 
        sr.reveal('.listaSocios');
    }
    //Nosotros
    if(document.querySelector('.divimgnosotros')) { 
        sr.reveal('.divimgnosotros');
    }
    if(document.querySelector('.divcontnosotros')) { 
        sr.reveal('.divcontnosotros');
    }
    //Servicios
    if(document.querySelector('.contenidoServicios h1')) { 
        sr.reveal('.contenidoServicios h1');
    }
    if(document.querySelector('.divimgservicios1')) { 
        sr.reveal('.divimgservicios1');
    }
    if(document.querySelector('.divcontservicios')) { 
        sr.reveal('.divcontservicios');
    }
    if(document.querySelector('.divimgservicios2')) { 
        sr.reveal('.divimgservicios2');
    }
    if(document.querySelector('.divimginventor')) { 
        sr.reveal('.divimginventor');
    }
    if(document.querySelector('.divimginventor2')) { 
        sr.reveal('.divimginventor2');
    }
    if(document.querySelector('.serving>div')) { 
        sr.reveal('.serving>div');
    }
    if(document.querySelector('.eco')) { 
        sr.reveal('.eco');
    }
    //Certificados
    if(document.querySelector('.divimgcertificados')) { 
        sr.reveal('.divimgcertificados');
    }
    if(document.querySelector('.divcontcertificados>div')) { 
        sr.reveal('.divcontcertificados>div');
    }
    //Contacto
    if(document.querySelector('.headContacto')) { 
        sr.reveal('.headContacto');
    }
    if(document.querySelector('.panelcont')) { 
        sr.reveal('.panelcont');
    }
    if(document.querySelector('.divmapa')) { 
        sr.reveal('.divmapa');
    }
});
    
function scroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".subir").id = "subirjs";
    }else{
        document.querySelector(".subir").removeAttribute('id');
    }
}