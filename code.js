$(document).ready(function(){

    $('.shadow2').mouseenter(function(){
  
        $(this).css({'border':"7px solid green"})
    });

    $('.shadow2').mouseleave(function(){
  
        $(this).css({'border':"none"})
    });

    $('.shadow1').mouseenter(function(){
        $(this).css({'border':"7px solid green"})
    });

    $('.shadow1').mouseleave(function(){
        $(this).css({'border':"none"})
    });

    $('.crd2').mouseenter(function(){
        $(this).css({'border':"7px solid green"})
    });

    $('.crd2').mouseleave(function(){
        $(this).css({'border':"none"})
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

    $('backgroun').onclick(function(){
        $('.bg').css({"background-image":"url(/img/bg\ light.png)"});
    })

    $('background1').onclick(function(){
        $('.bg').css({"background-image":"url(/img/bg\ dark\ 2.jpg)"});
    })
   
});

