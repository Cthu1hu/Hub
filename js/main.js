
// sliders

$(function(){

  // conference slider
  var innovationGallerySlider = $('.conference__slider').owlCarousel({
      items : 2,
      nav : false,
      loop: true
  });
 

 // little slider
  var innovationGallerySlider = $('.innovationGallery__slider').owlCarousel({
	  	items : 1,
			nav : true,
			navContainer: $('.innovationGallery__slider__controls'),
			navText: ['', ''],
			loop: true
  });


  $('.innovationGallery__btn-prev').click(function(e) {
  		e.preventDefault();
    innovationGallerySlider.trigger('prev.owl.carousel');
	 });


  $('.innovationGallery__btn-next').click(function(e) {
  	e.preventDefault();
    innovationGallerySlider.trigger('next.owl.carousel');
	 });


});


// full page
$(function(){

 $('#fullpage').fullpage({
    //Navigation
    menu: '.header',
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    slidesNavigation: true,
      // use afterLoad instead afterSlideLoad
    afterLoad: function(anchorLink, index){
        if(index == 2 || index == 4 || index == 5){
          $('body').addClass('dark-nav');
        } else {
          $('body').removeClass('dark-nav');
        }
      },
 
  });

  $('.prevFullSlide').on('click', function () {
    $.fn.fullpage.moveSectionUp();
  });

   $('.nextFullSlide').on('click', function () {
    $.fn.fullpage.moveSectionDown();
  });

});


