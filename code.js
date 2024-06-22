$(document).ready(function(){

    $('.shadow2').mouseenter(function(){
        $(this).css({'background-color':'rgba(164, 217, 85, 0.623)'});
        $(this).css({'border':"7px solid green"})
    });

    $('.shadow2').mouseleave(function(){
        $(this).css({'background-color':'rgb(7, 21, 11)'});
        $(this).css({'border':"none"})
    });

    $('.shadow1').mouseenter(function(){
        $(this).css({'background-color':'rgba(164, 217, 85, 0.623)'});
        $(this).css({'border':"7px solid green"})
    });

    $('.shadow1').mouseleave(function(){
        $(this).css({'background-color':'transparent'});
        $(this).css({'border':"none"})
    });

    $('.crd2').mouseenter(function(){
        $(this).css({'background-color':'rgba(11, 112, 11, 0.858)'});
        $(this).css({'border':"7px solid green"})
    });

    $('.crd2').mouseleave(function(){
        $(this).css({'background-color':'rgb(192, 239, 123)'});
        $(this).css({'border':"none"})
    });

    $('.insta').mouseenter(function(){
        $(this).css({'color':'blue'});
    });

    $('.insta').mouseleave(function(){
        $(this).css({'color':'white'});
    });

    $('.ig1').mouseenter(function(){
        $(this).css({'width': '110px'});
        $(this).css({'border-radius': '20px'});
        $(this).css({'box-shadow': 'rgba(14, 153, 9, 0.4) 5px 5px, rgba(14, 153, 9, 0.4) 10px 10px, rgba(14, 153, 9, 0.4) 15px 15px, rgba(14, 153, 9, 0.4) 20px 20px, rgba(14, 153, 9, 0.4) 25px 25px'})
    });

    $('.ig1').mouseleave(function(){
        $(this).css({'width': '80px'});
        $(this).css({'border-radius': '30px'});
        $(this).css({'box-shadow': 'none'})
    });
    
});