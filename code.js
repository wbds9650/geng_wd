$(document).ready(function(){

    $('.shadow2').mouseenter(function(){
        $(this).css({'background-color':'rgba(164, 217, 85, 0.623)'});
    });

    $('.shadow2').mouseleave(function(){
        $(this).css({'background-color':'rgb(7, 21, 11)'});
    });

    $('.shadow1').mouseenter(function(){
        $(this).css({'background-color':'rgba(164, 217, 85, 0.623)'});
    });

    $('.shadow1').mouseleave(function(){
        $(this).css({'background-color':'transparent'});
    });

    $('.crd2').mouseenter(function(){
        $(this).css({'background-color':'rgba(11, 112, 11, 0.858)'});
    });

    $('.crd2').mouseleave(function(){
        $(this).css({'background-color':'rgb(192, 239, 123)'});
    });
});