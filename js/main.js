
// sliders

$(function(){

  // conference slider
  var conferenceSlider = $('.conference__slider').owlCarousel({
      items : 2,
      nav : false,
      loop: false,
      responsive : {
        0 : {
          items : 1
        },
        1199 : {
          items : 2
        }
      }
  });


 // little slider
  var innovationGallerySlider = $('.innovationGallery__slider').owlCarousel({
	  	items : 1,
			nav : true,
			navContainer: $('.innovationGallery__slider__controls'),
			navText: ['', ''],
			loop: true,
      animateIn: "fadeInRight",
      animateOut: "fadeOutLeft"
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
    scrollOverflow: true,
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


   // for google map

   // Disable scroll zooming and bind back the click event
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.footer__map').on('click', onMapClickHandler);


});


// burger menu

  $(function(){

  var $burger = $('.burger');
  var $bars = $('.burger-svg__bars');
  var $bar = $('.burger-svg__bar');
  var $bar1 = $('.burger-svg__bar-1');
  var $bar2 = $('.burger-svg__bar-2');
  var $bar3 = $('.burger-svg__bar-3');
  var isChangingState = false;
  var isOpen = false;
  var burgerTL = new TimelineMax();

  function burgerOver() {

    if(!isChangingState) {
      burgerTL.clear();
      if(!isOpen) {
        burgerTL.to($bar1, 0.5, { y: -2, ease: Elastic.easeOut })
            .to($bar2, 0.5, { scaleX: 0.6, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
            .to($bar3, 0.5, { y: 2, ease: Elastic.easeOut }, "-=0.5");
      }
      else {
        burgerTL.to($bar1, 0.5, { scaleX: 1.2, ease: Elastic.easeOut })
            .to($bar3, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }, "-=0.5");
      }
    }
  }

  function burgerOut() {
    if(!isChangingState) {
      burgerTL.clear();
      if(!isOpen) {
        burgerTL.to($bar1, 0.5, { y: 0, ease: Elastic.easeOut })
            .to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
            .to($bar3, 0.5, { y: 0, ease: Elastic.easeOut }, "-=0.5");
      }
      else {
        burgerTL.to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut })
            .to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.5");
      }
    }
  }

  function showCloseBurger() {
    burgerTL.clear();
    burgerTL.to($bar1, 0.3, { y: 6, ease: Power4.easeIn })
        .to($bar2, 0.3, { scaleX: 1, ease: Power4.easeIn }, "-=0.3")
        .to($bar3, 0.3, { y: -6, ease: Power4.easeIn }, "-=0.3")
        .to($bar1, 0.5, { rotation: 45, ease: Elastic.easeOut, transformOrigin: "50% 50%" })
        .set($bar2, { opacity: 0, immediateRender: false }, "-=0.5")
        .to($bar3, 0.5, { rotation: -45, ease: Elastic.easeOut, transformOrigin: "50% 50%", onComplete: function() { isChangingState = false; isOpen = true; } }, "-=0.5");
  }

  function showOpenBurger() {
    burgerTL.clear();
    burgerTL.to($bar1, 0.3, { scaleX: 0, ease: Back.easeIn })
        .to($bar3, 0.3, { scaleX: 0, ease: Back.easeIn }, "-=0.3")
        .set($bar1, { rotation: 0, y: 0 })
        .set($bar2, { scaleX: 0, opacity: 1 })
        .set($bar3, { rotation: 0, y: 0 })
        .to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut })
        .to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.4")
        .to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut, onComplete: function() { isChangingState = false; isOpen = false; } }, "-=0.5");
  }

  $burger.on('click', function(e) {

    if(!isChangingState) {
      isChangingState = true;

      if(!isOpen) {
        showCloseBurger();
        $('.navigation').fadeIn('fast', function() {
          $('.navigation').addClass('active');
        });
      }
      else {
        showOpenBurger();
        $('.navigation').fadeOut('fast', function() {
          $('.navigation').removeClass('active');
        });
      }
    }

  });

  $burger.hover( burgerOver, burgerOut );

});



$(function () {

  $('.coworking__item__title').on('click', function () {

    var dataAttr = $(this).attr('data-cow-id');


    if (!($(this).parent().hasClass('active'))) {
      $('.coworking__item.active').removeClass('active');
      $(this).parent().addClass('active');
      $('.coworking__info__item.active').fadeOut('fast', function () {
        $('.coworking__info__item.active').removeClass('active');
        $('#' + dataAttr).addClass('active');
        $('#' + dataAttr).fadeIn('fast');
      })
    }

  })

});



// new innovation

$(function () {

    var newInnovationGallerySlider = $('.newInnovationGallery__slider').owlCarousel({
      items : 3,
      nav : true,
      navText: ['', ''],
      loop: true,
      responsive : {
        0 : {
          items : 1
        },
        1199 : {
          items : 3
        }
      }
  });



  // popup slider

  var popupGallerySlider = $('.all-innovations__author__gallery').owlCarousel({
      items : 3,
      nav : true,
      navContainer: $('.all-innovations__author__gallery__controls'),
      navText: ['', ''],
      loop: true,
      responsive : {
        0 : {
          items : 1
        },
        768 : {
          items : 2
        },
        1280 : {
          items : 3
        }
      }
  });

    $('.all-innovations__author__gallery__btn-prev').click(function(e) {
      e.preventDefault();
    popupGallerySlider.trigger('prev.owl.carousel');
   });


  $('.all-innovations__author__gallery__btn-next').click(function(e) {
    e.preventDefault();
    popupGallerySlider.trigger('next.owl.carousel');
   });



});


$(function () {
   // freespace slider

  var freespaceSlider = $('.freespace__slider').owlCarousel({
      items : 1,
      nav : true,
      navContainer: $('.freespace__gallery__controls'),
      navText: ['', ''],
      loop: true
     
  });

    $('.freespace__gallery__btn-prev').click(function(e) {
      e.preventDefault();
    freespaceSlider.trigger('prev.owl.carousel');
   });


  $('.freespace__gallery__btn-next').click(function(e) {
    e.preventDefault();
    freespaceSlider.trigger('next.owl.carousel');
   });


});
 