
// sliders

$(function(){

  // conference slider
  var conferenceSlider = $('#index__conference__slider').owlCarousel({
    items : 2,
    nav : false,
    loop: true,
    responsive : {
      0 : {
        items : 1
      },
      1199 : {
        items : 2
      }
    }
  });


  // little  indexs slider
  var innovationGallerySlider = $('#innovation__index__slider').owlCarousel({
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
      $('.header').addClass('dark-nav');
      $(' #fp-nav ').addClass('dark-nav');
      $('.prevFullSlide, .nextFullSlide').addClass('dark-nav');
    } else {
      $('.header').removeClass('dark-nav');
      $(' #fp-nav ').removeClass('dark-nav');
      $('.prevFullSlide, .nextFullSlide').removeClass('dark-nav');
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

// innovations


  var innovationGallerySlider = $('#innovation__slider').owlCarousel({
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






// new innovation

$(function () {

  var newInnovationGallerySlider = $('#new__innovation__slider').owlCarousel({
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

 var freespaceSlider = $('#freespace__slider').owlCarousel({
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

$(function () {
 // news slider

 var newsSlider = $('#news__slider').owlCarousel({
  items : 1,
  nav : true,
  navText: ['', ''],
  loop: true
  
});

 $('.news__slider__btn-next').click(function(e) {
  e.preventDefault();
  newsSlider.trigger('next.owl.carousel');
});

 // single page news

 var singleNewsSlider = $('#single__news__slider').owlCarousel({
  items : 1,
  nav : true,
  navText: ['', ''],
  loop: true
  
});
 $('.single__news__slider__btn-prev').click(function(e) {
  e.preventDefault();
  singleNewsSlider.trigger('prev.owl.carousel');
});

 $('.single__news__slider__btn-next').click(function(e) {
  e.preventDefault();
  singleNewsSlider.trigger('next.owl.carousel');
});


});


// conference double slider
$(function () {
  // large slider
  var conferenceLargeSlider = $('#large__conference__slider').owlCarousel({
    items : 1,
    nav : true,
    navText: ['', ''],
    loop: true
    
  });
  $('.page-conference__item__slider__large__btn-prev').click(function(e) {
    e.preventDefault();
    conferenceLargeSlider.trigger('next.owl.carousel');
  });

  $('.page-conference__item__slider__large__btn-next').click(function(e) {
    e.preventDefault();
    conferenceLargeSlider.trigger('prev.owl.carousel');
  });

  // dsmallslider
  var conferenceSmallSlider = $('#small__conference__slider').owlCarousel({
    items : 3,
    nav : true,
    navText: ['', ''],
    loop: true
    
  });

  $('.page-conference__item__slider__small__btn-prev').click(function(e) {
    e.preventDefault();
    conferenceSmallSlider.trigger('next.owl.carousel');
  });
  $('.page-conference__item__slider__small__btn-next').click(function(e) {
    e.preventDefault();
    conferenceSmallSlider.trigger('prev.owl.carousel');
  });

  conferenceSmallSlider.on('click', '.owl-item', function(){
    n = $(this).index();
    console.log($(this));

    conferenceLargeSlider.trigger('to.owl.carousel', n);
  });

});



$(function () {

 // coworking   sliders

 // main slider

 var coworkingMainSlider = $('#coworking__main__slider').owlCarousel({
  items : 1,
  nav : false,
  navText: ['', ''],
  loop: false,
  mouseDrag: false
  
});

 $('.main__nav__coworking__container__list').on('click', function (e) {

  if($(e.target).hasClass('main__nav__coworking__container__item') && !($(e.target).hasClass('active'))) {
    var curNumNav = $(e.target).attr('data-num') - 1;
    $('.main__nav__coworking__container__item.active').removeClass('active');
    $(e.target).addClass('active');
    coworkingMainSlider.trigger('to.owl.carousel', curNumNav);
 
  }


});


 // end main slider



 // top sliders

// top evolution
 var evolutionTopSlider = $('#evolution__top__slider').owlCarousel({
  items : 1,
  nav : true,
  navText: ['', ''],
  loop: true
  
});


 // top intelligence
  var intelligenceTopSlider = $('#intelligence__top__slider').owlCarousel({
  items : 1,
  nav : true,
  navText: ['', ''],
  loop: true
  
});


 // bottom slider

 // bottom evolution
 var evolutionBottomSlider = $('#evolution__bottom__slider').owlCarousel({
  items : 2,
  nav : true,
  navText: ['', ''],
  loop: true,
  margin: 280
  
});

  // bottom inteligence
 var intelligenceBottomSlider = $('#intelligence__bottom__slider').owlCarousel({
  items : 2,
  nav : true,
  navText: ['', ''],
  loop: true,
  margin: 280
  
});







});



$(function () {

  $('.news__slider__item__pic').imagefill(); 
  $('.all__news__item__pic').imagefill(); 
  $('.page-conference__item__slider__large__item').imagefill(); 
  $('.page-conference__item__slider__small__item').imagefill(); 
  $('.coworking__main__slider__item__bottom__slider__item__pic').imagefill(); 

})



$(function () {
  
  var arrayNavItem = function () {
    mainNavItem = $('.main__nav__coworking__container__item');
   
   var arrayNav = [];
   for(i=0; mainNavItem.length; i++){
    arrayNav = arrayNav.push[i];
   }
   console.log(arrayNav);
  }
});