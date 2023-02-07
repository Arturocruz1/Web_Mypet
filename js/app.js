$(document).ready(function(){

    var activo = true;

    $('.btn-menu').on('click', function(){

    $('.btn-menu i').toggleClass('fa-times');
    
    if(activo){
        $('.list-container').animate({
            left: '0px'
        }, 500);

        activo = false;

    }else{
        activo=true;

        $('.list-container').animate({
            left: '-100%'
        }, 500);

        activo = true;
    }

    });

    var enlaces = document.querySelectorAll('.lists li a');

    enlaces.forEach( (element) =>{

        element.addEventListener('click', (event) =>{
            enlaces.forEach((link) => {
                link.classList.remove('activo');
            });

            event.target.classList.add('activo');

        });
    });

    var prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;

        if(prevScrollPos > currentScrollPos){

            $('.menu').css("top", "0px");
            $('.menu').css("transition", "0.5s");

        }else{
            $('.menu').css("top", "-60px");
            $('.menu').css("transition", "0.5s");
        }
    prevScrollPos = currentScrollPos;    
    

    var posicion = window.pageYOffset;

    if(posicion <= 600){

        $('.menu').css("borderBottom", "none");

        $('.go-top').css("right", "-100%");

    }else{
        $('.menu').css("borderBottom", "3px solid #ff2e63");

        
        $('.go-top').css("right", "0");
        $('.go-top').css("transition", "500ms");
    }
    }

    $('.go-top').on('click', function(){
        $('body, html').animate({
            scrollTop: '0'
        }, 500);
    });

    $('#abajo').on('click', function(){
        $('body, html').animate({
            scrollTop: '600px'
        }, 500);
    });

});

$(".sub-lists").click(function(){
    $(this).children("ul").slideToggle();

})