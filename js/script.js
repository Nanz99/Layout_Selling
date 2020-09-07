$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
    })
    $('#clock').countdown('2021/2/1',function(event){
        var $this = $(this).html(event.strftime(''
        + '<div><span> %m </span><span> Months </span></div>'
        + '<div><span> %d </span><span> Days </span></div>'
        + '<div><span> %H </span><span> Hours </span></div>'
        + '<div><span> %M </span><span> Minutes </span></div>'
        + '<div><span> %S </span><span> Seconds </span></div>'
        ))
    })
    $('.nav-link').smoothScroll();
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#mainnav').addClass('selling-sticky');
        }
        else{
            $('#mainnav').removeClass('selling-sticky');
        }
      
    })
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
          $('.scroll-top').fadeIn(600);
        } else {
          $('.scroll-top').fadeOut(600);
        }
      });
    $('.scroll-top').on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Time loader
    $(document).ready(function () {
        setTimeout(function () {
          $('body').addClass('loaded');
        }, 1000);
    
      });
    //couterUp


   
    
});