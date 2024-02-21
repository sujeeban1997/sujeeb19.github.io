// Navbar Add class function 
$(window).scroll(function(){
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else {
              $('.scroll-up-btn').removeClass("show");
  
          }
      });

//side up script
$('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
      });
  

 //typing animation scrippts 

 var typed = new Typed(".mybio", {
    strings: ["Youtuber" , "Developer" , "Designer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});


// Owl carousel for testimonial section 
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          autoplayTimeout: 5000,
          smartSpeed:1000,
          autoplay: false,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });