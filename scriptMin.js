//Nav bar==============================
$(document).ready(function(){
    $(".nav_contaner .logo a").click(function(){
        $(".nav").show();
        $(".nav_contaner .logo a").hide();
    });
    });
   $(document).ready(function(){
    $(".po").click(function(){
        $(".nav").hide();
         $(".nav_contaner .logo a").show();
    });
    }); 


//owl Slider==============================
$('.single').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.work').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause: true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

