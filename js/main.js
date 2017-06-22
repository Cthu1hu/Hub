
var fullpageInitStatus = false;

function fullPageMain () {

  // full page

  var fullpageOptions = {
   //Navigation
   // menu: '.header',
   navigation: true,
   navigationPosition: 'right',
   showActiveTooltip: true,
   slidesNavigation: true,
   scrollOverflow: true,
   touchSensitivity: 15,
   // use afterLoad instead afterSlideLoad
   afterLoad: function(anchorLink, index){
     if(index == 2 || index == 4 || index == 5){
       $('.header').addClass('dark-nav');
       $(' #fp-nav ').addClass('dark-nav');
       $('.prevFullSlide, .nextFullSlide').addClass('dark-nav');
     }
     else {
       $('.header').removeClass('dark-nav');
       $(' #fp-nav ').removeClass('dark-nav');
       $('.prevFullSlide, .nextFullSlide').removeClass('dark-nav');
     }
   },
   afterResize: function() {
     $.fn.fullpage.reBuild();
   }
 }


 function indexFullpageInit() {
   if($('.index-body-mirror').hasClass('index__body') && ($(window).width() <= 767) && $.fn.hasOwnProperty('fullpage') && fullpageInitStatus){
     $.fn.fullpage.destroy('all');
     fullpageInitStatus = false;
   } else if($('.index-body-mirror').hasClass('index__body') && $(window).width() > 767 && !(fullpageInitStatus)){
    $('#fullpage').fullpage(fullpageOptions);
    fullpageInitStatus = true;
  };
};

indexFullpageInit();

$(window).on('resize', indexFullpageInit);


$('.prevFullSlide').on('click', function () {
  $.fn.fullpage.moveSectionUp();
});

$('.nextFullSlide').on('click', function () {
  $.fn.fullpage.moveSectionDown();
});

var indexSection3b1Slider = $('.index__slide-3-background-slider').owlCarousel({
  items : 1,
  nav : false,
  animateIn: "fadeIn",
  animateOut: "fadeOut"
});

$('.index-wrapper .coworking__item').on('click', function (e) {
  indexSection3b1Slider.trigger('to.owl.carousel', $(this).index());
});

};









// to Top
function ScrollTopFunc(){

  //$(window).scroll(function() {
    //
    //   if($(this).scrollTop() != 0) {
      //
      //     $('#toTop').fadeIn();
      //
      //   } else {
        //
        //     $('#toTop').fadeOut();
        //
        //   }
        //
        // });

        $('#toTop').on('click', function() {
          $('body,html').animate({scrollTop:0},800);

           if($('.index-body-mirror').hasClass('index__body')){
            $.fn.fullpage.moveTo(1);
                console.log('test');
           };
        });

      };



      // sliders

      function indexSliders(){

        // owlSliderSimplePrev
        function owlSSP(sliderVar) {
          e.preventDefault();
          sliderVar.trigger('prev.owl.carousel');
        };

        // owlSliderSimpleNext
        function owlSSN(sliderVar) {
          e.preventDefault();
          sliderVar.trigger('prev.owl.carousel');
        };

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
          // autoHeight: true,
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


      };






      function googleMapFunc(){


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


      };




      // burger menu

      function burgerMenuFunc(){

        $('.navigation__link').on('click', function () {
          if ($(window).width() < 1200) {
            $('body').css({overflow:'auto'});
          }
        });

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

              $('body').css({
                'overflow': 'hidden'
              });
            }
            else {
              showOpenBurger();
              $('.navigation').fadeOut('fast', function() {
                $('.navigation').removeClass('active');
              });
              $('body').css({
                'overflow': 'initial'
              });
            }
          }

        });

        $burger.hover( burgerOver, burgerOut );

      };





      function indexConferenceFunc() {

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

        });

      };



      // innovations
      function innovationSliderFunc () {
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

      };







      // new innovation

      function innovationPageSliders() {

        var newInnovationGallerySlider = $('#new__innovation__slider').owlCarousel({
          items : 3,
          nav : true,
          navText: ['', ''],
          loop: true,
          smartSpeed: 2000,
          responsive : {
            0 : {
              items : 1
            },
            768 : {
              items : 3

            },
            1199 : {
              items : 3
            }
          }
        });
        $('.new__innovation__slider__controls-prev').click(function(e) {
          e.preventDefault();
          newInnovationGallerySlider.trigger('prev.owl.carousel');
        });


        $('.new__innovation__slider__controls-next').click(function(e) {
          e.preventDefault();
          newInnovationGallerySlider.trigger('next.owl.carousel');
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

      };





      function freespaceSliderFunc () {
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

     };



     // $(function() {
      //   // acordeon

      //   $('.freespace__icon__pic').on('click', function () {
        //     // body...
        //     var _this = $(this),
        //         reqHeightText = reqText .outerHeight();

        //   });

        // });



        function newsSliderFunc() {
         // news slider

         var newsSlider = $('#news__slider').owlCarousel({
          items : 1,
          nav : true,
          navText: ['', ''],
          loop: true,
          autoHeight: true,
          mouseDrag: false,
          touchDrag:false

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


       };





       // conference double slider
       function conferenceWasteFunc() {
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

      };




      function conferenceSlidersFunc() {

       // conference   sliders

       // main slider

       var conferenceMainSlider = $('#conference__main__slider').owlCarousel({
        items : 1,
        nav : false,
        navText: ['', ''],
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        center: true,
        animateIn: "fadeInUp",
        animateOut: "fadeOutDown",
        autoHeight: true

      });

      var query = window.location.search.substring(1);
      var vars = query.split("&");
      var namesCo = ['evolution', 'intelligence', 'education', 'auditorium', 'room1', 'room2', 'terrasa'];

      if (vars[0]) {
        $('.main__nav__coworking__container__item').removeClass('active');
        switch(vars[0]) {
          case 'evolution': conferenceMainSlider.trigger('to.owl.carousel', 0);
          $('.main__nav__coworking__container__item[data-num="1"]').addClass('active');
          break;
          case 'intelligence': conferenceMainSlider.trigger('to.owl.carousel', 1);
          $('.main__nav__coworking__container__item[data-num="2"]').addClass('active');
          console.log('inta');
          break;
          case 'education': conferenceMainSlider.trigger('to.owl.carousel', 2);
          $('.main__nav__coworking__container__item[data-num="3"]').addClass('active');
          break;
          case 'auditorium': conferenceMainSlider.trigger('to.owl.carousel', 3);
          $('.main__nav__coworking__container__item[data-num="4"]').addClass('active');
          break;
          case 'room1': conferenceMainSlider.trigger('to.owl.carousel', 4);
          $('.main__nav__coworking__container__item[data-num="5"]').addClass('active');
          break;
          case 'room2': conferenceMainSlider.trigger('to.owl.carousel', 5);
          $('.main__nav__coworking__container__item[data-num="6"]').addClass('active');
          break;
          case 'terrasa': conferenceMainSlider.trigger('to.owl.carousel', 6);
          $('.main__nav__coworking__container__item[data-num="7"]').addClass('active');
          break;
          default:
          console.log('noAnchor');
          break;
        }

        setTimeout(function () {
          $('body,html').animate({
            scrollTop: $('#conference__main__slider').offset().top
          }, 1000);
        }, 700);
      }


       $('.conference__main__slider__wrapper .main__nav__coworking__container__list').on('click', function (e) {

        if($(e.target).hasClass('main__nav__coworking__container__item') && !($(e.target).hasClass('active'))) {
          var curNumNav = $(e.target).attr('data-num') - 1;
          $('.main__nav__coworking__container__item.active').removeClass('active');
          $(e.target).addClass('active');
          conferenceMainSlider.trigger('to.owl.carousel', curNumNav);

          window.history.pushState('conference', '', '/conference?' + namesCo[curNumNav]);

          $('body,html').animate({
            scrollTop : $('.coworking__main__content').parent().offset().top
          });

        }


      });


       // end main slider



       // top sliders

       var topSlidersOptions = {
        items : 1,
        nav : true,
        navText: ['', ''],
        loop: true
      };

      var bottomSliderOptions = {
       items : 2,
       nav : true,
       navText: ['', ''],
       loop: true,
       responsive : {
         0 : {
           items : 1
         },
         768 : {
           items : 1,
           margin: 0
         },
         1169 : {
           margin: 150
         },
         1280 : {
           margin: 260
         }
       }

     };

     var evolutionTopSlider = $('#evolution__top__slider').owlCarousel(topSlidersOptions);
     var intelligenceTopSlider = $('#intelligence__top__slider').owlCarousel(topSlidersOptions);
     var EDUCATIONTopSlider = $('#EDUCATION__top__slider').owlCarousel(topSlidersOptions);
     var AuditoriumTopSlider = $('#Auditorium__top__slider').owlCarousel(topSlidersOptions);
     var room1TopSlider = $('#room1__top__slider').owlCarousel(topSlidersOptions);
     var room2TopSlider = $('#room2__top__slider').owlCarousel(topSlidersOptions);
     var terassaTopSlider = $('#terassa__top__slider').owlCarousel(topSlidersOptions);


     // bottom slider

     var evolutionBottomSlider = $('#evolution__bottom__slider').owlCarousel(bottomSliderOptions);
     var intelligenceBottomSlider = $('#intelligence__bottom__slider').owlCarousel(bottomSliderOptions);
     var EDUCATIONBottomSlider = $('#EDUCATION__bottom__slider').owlCarousel(bottomSliderOptions);
     var AuditoriumBottomSlider = $('#Auditorium__bottom__slider').owlCarousel(bottomSliderOptions);
     var room1BottomSlider = $('#room1__bottom__slider').owlCarousel(bottomSliderOptions);
     var room2BottomSlider = $('#room2__bottom__slider').owlCarousel(bottomSliderOptions);
     var terassaBottomSlider = $('#terassa__bottom__slider').owlCarousel(bottomSliderOptions);


     // hide show navigation

     $('.need__location').on('click', function () {
      $('.main__nav__coworking__container').toggleClass('active');
    });

     $('.main__nav__coworking__container__item').on('click', function () {
      $('.main__nav__coworking__container').removeClass('active');
    });

     $('.main__nav__coworking__container__close').on('click', function () {
      $('.main__nav__coworking__container').removeClass('active');
    });


   };










   function imageFillFunc() {

    $('.news__slider__item__pic').imagefill();
    $('.all__news__item__pic').imagefill();
    $('.page-conference__item__slider__large__item').imagefill();
    $('.page-conference__item__slider__small__item').imagefill();
    $('.coworking__main__slider__item__bottom__slider__item__pic').imagefill();
    $('.freespace__slider__pic').imagefill();
  };




  // coworking

  function coworkingSlidersFunc() {

    // main slider
    var coworkingMainSlider = $('#coworking__main__slider').owlCarousel({
      items : 1,
      nav : false,
      navText: ['', ''],
      loop: false,
      mouseDrag: false,
      touchDrag: false,
      center: true,
      autoHeight:true,
      animateIn: "fadeInUp",
      animateOut: "fadeOutDown"
    });

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    if (vars[0]) {
      coworkingMainSlider.trigger('to.owl.carousel', (vars[0] - 1));
      $('.main__nav__coworking__container__item').removeClass('active');
      $('.main__nav__coworking__container__item[data-num="' + (vars[0] - 1) + '"]').addClass('active');
      setTimeout(function () {
        $('body,html').animate({
          scrollTop: $('.coworking__main__content').offset().top
        }, 1000);
      }, 700);
    }


    $('.coworking__main__slider__wrap .main__nav__coworking__container__list').on('click', function (e) {

      if($(e.target).hasClass('main__nav__coworking__container__item') && !($(e.target).hasClass('active'))) {
        var curNumNav = $(e.target).attr('data-num') - 1;
        $('.main__nav__coworking__container__item.active').removeClass('active');
        $(e.target).addClass('active');
        coworkingMainSlider.trigger('to.owl.carousel', curNumNav);
        window.history.pushState('coworking', '', '/coworking?' + (curNumNav + 1));

      }


    });





    var coworkingSliderOptions = {
      items: 1,
      nav: true,
      navText: ['', ''],
      loop: false,
      onInitialized: coworkinkAllSlidesCountOnInit,
      onTranslate: coworkingSliderCurrentCounter
    }

    var coworking1Slider = $('#coworking1__top__slider').owlCarousel(coworkingSliderOptions);
    var coworking2Slider = $('#coworking2__top__slider').owlCarousel(coworkingSliderOptions);
    var coworking3Slider = $('#coworking3__top__slider').owlCarousel(coworkingSliderOptions);
    var coworking4Slider = $('#coworking4__top__slider').owlCarousel(coworkingSliderOptions);


    function coworkinkAllSlidesCountOnInit(e) {
      $(e.target).parent().find('.coworking__slide__nav__total').html(e.item.count);
    }

    function coworkingSliderCurrentCounter(e) {
      $(e.target).parent().find('.coworking__slide__nav__current').html(e.item.index + 1);
    }



  };

  function showAttrImgOnClick() {
  $('.attr-img-btn').on('click', function () {
      BigPicture({
        el: this,
        imgSrc: $(this).attr('data-certificate-url')
      });
  });


};








  // Animation

  function animationFunc () {

    var scrollNow;

    $('#secondScrollLayout').css({
      transition : 'all 0.3s ease-out'
    });

    $(window).on('scroll', function () {
     if ($(window).height() > ($(this).scrollTop() * 3)) { scrollNow = $(this).scrollTop()};
       $('#secondScrollLayout').css({
        'margin-top' : -scrollNow
      });


     });

  };




  // smooth scroll
  function smoothScrollFunc() {

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            };
          });
        }
      }
    });


  };





  // opened-innovations
  // $(function () {

    //   $('.opened__innovations__author__btn').on('click', function() {
      //     $('.all-innovations__popup__wrap').scrollTop(0);
      //     $('.all-innovations__popup__wrap').addClass('active');
      //     setTimeout(function () {
        //       $('body').css({'overflow': 'hidden' });
        //       $('.all-innovations__popup__wrap').css({'overflow-y': 'scroll'});
        //     }, 300);

        //   });

        //   $('.close-popup').on('click', function() {
          //     $('body').css({'overflow': 'initial'});
          //     $('.all-innovations__popup__wrap').css({'overflow-y': 'hidden'});
          //     $('.all-innovations__popup__wrap').removeClass('active');
          //   });


          // });


          // about


          function aboutSlidersFunc() {
            // topslider
            var aboutTopBgSlider = $('#about__top__bg__slider').owlCarousel({
              items : 1,
              nav : false,
              navText: ['', ''],
              loop: true
            });

            $('.about__top__bg__slider__btn-next').click(function(e) {
              e.preventDefault();
              aboutTopBgSlider.trigger('next.owl.carousel');
            });


            // mission  slider
            var aboutMissionSlider = $('#about__mission__slider').owlCarousel({
              items : 1,
              nav : false,
              navText: ['', ''],
              loop: true,
              autoHeight:true
            });

            var rotateDeg = 0;

            $('.about__mission__slider__item__btn-next').click(function(e) {
              e.preventDefault();
              rotateDeg += 360;
              $('.about__mission__pic').css({
                'transform' : 'rotate(' + rotateDeg + 'deg)'
              });
              aboutMissionSlider.trigger('next.owl.carousel');
            });


            // partners  slider
            var aboutPartnersSlider = $('#about__partners__slider').owlCarousel({
              items : 4,
              nav : false,
              navText: ['', ''],
              loop: true,
              autoWidth:true,
              // autoplay:true,
              // autoplayTimeout: 1000,
              smartSpeed:3500,
              margin: 70,
              slideTransition: 'linear',
              responsive : {
                0 : {
                  items : 1,
                  center:true
                },
                767 : {
                  items : 2
                },
                1023 : {
                  items : 4
                }

              }
            });

            function aboutPartnersSliderNext() {
              aboutPartnersSlider.trigger('next.owl.carousel');
            }

            aboutPartnersSliderNext();

            var aboutPartnersSliderInterval = setInterval(aboutPartnersSliderNext, 3500);

          };





          // for  mobile

          function forMobileFunc() {

            if($(document).width() <= 767){
             $('.header-index').removeClass('header_fixed')
             $('.header-index').addClass('header_absolute')
           } else if( $(document).width() > 767){
            $('.header-index').removeClass('header_absolute')
            $('.header-index').addClass('header_fixed')
          }

          $(window).on('resize', function() {
            if($(document).width() <= 767){

             $('.header-index').removeClass('header_fixed')
             $('.header-index').addClass('header_absolute')
           } else if( $(document).width() > 767){
            $('.header-index').removeClass('header_absolute')
            $('.header-index').addClass('header_fixed')
          }
        });

        };



        function conferencePopupFunc() {
         var conferencePopupSlider = $('#conference__popup__slider').owlCarousel({
          items : 3,
          nav : false,
          navText: ['', ''],
          navContainer: $('.conference__popup__controls'),
          loop: true,
          responsive : {
            0 : {
              items : 2,
            },
            767 : {
              items : 3
            }
          }
        });


         $('.conference__popup__btn-prev').click(function(e) {
          e.preventDefault();
          conferencePopupSlider.trigger('prev.owl.carousel');
        });


         $('.conference__popup__btn-next').click(function(e) {
          e.preventDefault();
          conferencePopupSlider.trigger('next.owl.carousel');
        });



       };

       function coworkingPopupsMain() {




          // DATEPICKER

          var datepickerOptions = {
            language: 'ru'
          };

          // при открытии попапа убрал возможность скролла страницы


          // var disableDatePicker = false;
          // function test () {

          //   if(!disableDatePicker) {
          //     $(window).on('scroll', function () {
          //       $( ".datepickers-container" ).datepicker( "hide" );
          //     });
          //   }
          //   disableDatePicker = true;

          // }


          // $(".cow__form__wrap.active").scroll(function(){
          //  $("#datepickers-container").hide();
          // });




          $('#cow-popup-date').datepicker(datepickerOptions);

          $.fn.datepicker.language['en'] = {
              days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
              months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
              monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              today: 'Today',
              clear: 'Clear',
              dateFormat: 'mm/dd/yyyy',
              timeFormat: 'hh:ii aa',
              firstDay: 0
          };

          $.fn.datepicker.language['ua'] = {
              days: ['неділя', 'понеділок', 'вівторок', 'среда', 'четвер', 'п\'ятница', 'субота'],
              daysShort: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
              daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
              months: ['Січень','Лютий','Березень','Квітень','Травень','Червень', 'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
              monthsShort: ['Лют', 'Січ', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'],
              today: 'Сьогодні',
              clear: 'Видалити',
              dateFormat: 'mm/dd/yyyy',
              timeFormat: 'hh:ii aa',
              firstDay: 1
          };


          // TIMEPICKER
          var timepickerShowStatus = false;
          var timepickerOptions = {
            now: '10:00',
            twentyFour: true,
            timeSeparator: ':',
            minutesInterval: 30,
            title: '',
            show: timepickerShow
          };

          function timepickerShow () {
            if (!(timepickerShowStatus)){
              $(window).on('scroll', function () {
                $('.wickedpicker__close').click();
              });
            }
             timepickerShowStatus = true;
          }

          $('.cow__form.cow__form-large input').on('focus', function () {
            $('.wickedpicker__close').click();
          });


          $('#cow-popup-start-time').wickedpicker(timepickerOptions);
          $('#cow-popup-end-time').wickedpicker(timepickerOptions);



          // POPUP LOGIC

          function coPopupOpen() {
            $('.cow__form__wrap').addClass('active');
            $('.cow__form_tr-bg').addClass('active');
            $('body').css({overflow:'hidden'});
          }

          function coPopupClose() {
            $('.cow__form__wrap').removeClass('active');
            $('.cow__form_tr-bg').removeClass('active');
            $('body').css({overflow:'initial'});
          }

          // COWORKING popup


          $('.cow-book-btn-to-popup').on('click', coPopupOpen);
          $('.conference__popup__close-cow-popup').on('click', coPopupClose);
          $('.cow__form_tr-bg').on('click', coPopupClose);

          // CONFERENCE SERVICE popup

          $('.btn-to-service-popup').on('click', function () {
            $('body').css({overflow:'hidden'});
            $('#service-popup').addClass('active');
            $('#service-popup').find('.conference__popup__close').one('click', function() {
              $('#service-popup').removeClass('active');
              $('body').css({overflow:'auto'});
            })
          })

       }

       function activeLanguage() {
          $('.lang-' + $('#lang').html()).addClass('active');
       };




       // Preloader animation


       function preloaderFirstStep() {
        $('.transition-container').addClass('active');
      };

      function preloaderSecondStep() {
        $('.transition-container').addClass('sec-step');
        document.body.scrollTop = 0;
        setTimeout(function (){
          $('.transition-container').removeClass('active');
          $('.transition-container').removeClass('sec-step');
        }, 600)
      }


      // SUB send

      function subSend() {
        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
        var mail = $('.contacts__form__input__mail');
        var btn = $('.contacts__form__btn');

        mail.focus(function () {
            btn.attr('disabled', false);
        });

        mail.blur(function(){
          if(mail.val() != ''){
              if(mail.val().search(pattern) == 0){
                mail.removeClass('error');
                btn.attr('disabled', false);
              }else{
                mail.addClass('error');
                btn.attr('disabled', true);
              }
            }else{
              mail.addClass('error');
              btn.attr('disabled', true);
            }
        });

        btn.on('click', function (e) {
          e.preventDefault();
          $.ajax({
            url: '../sub/add_subscription.php',
            type: 'POST',
            data: mail.val()
          })
          .done(function() {
            console.log("success");
            mail.val('');
            $('.sub-popup').fadeIn('slow', function () {
                $('.sub-popup').find('button').one('click', function () {
                    $(this).parent().fadeOut('slow');
                })
            })
          })
          .fail(function() {
            console.log("error");
          })
        })
      }

      // BARBA

      function barbaFunc() {
        Barba.Pjax.start();

        var HideShowTransition = Barba.BaseTransition.extend({
          start: function() {

            preloaderFirstStep();
            Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
          },
          fadeOut: function () {
            return $(this.oldContainer).animate({ opacity: 0.95 }, 1500).promise();
          },
          fadeIn: function() {

            var _this = this;
            var $el = $(this.newContainer);

            if($.fn.hasOwnProperty('fullpage') && !($el.has('.index__body').length) && fullpageInitStatus) {
              $.fn.fullpage.destroy('all');
              fullpageInitStatus = false;
            };

            $(this.oldContainer).hide();

            // $el.css({
            //   visibility : 'visible',
            //   opacity : 0.95
            // });

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

            if (location.href.indexOf('#') > -1) {
              $('body, html').animate({
                scrollTop: $(location.hash).offset().top
              });
            }

            preloaderSecondStep();
            setTimeout(ScrollTopFunc, 2000);
            _this.done();
            // $el.animate({ opacity: 1 }, 1000, function() {
            //   _this.done();
            // });


          },

          finish: function() {
            document.body.scrollTop = 0;
            preloaderSecondStep();
            this.done();      }
          });

        Barba.Pjax.getTransition = function() {
          return HideShowTransition;
        };

        Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {


          fullPageMain();
          ScrollTopFunc();
          indexSliders();
          googleMapFunc();
          burgerMenuFunc();
          indexConferenceFunc();
          innovationSliderFunc();
          innovationPageSliders();
          freespaceSliderFunc();
          newsSliderFunc();
          conferenceWasteFunc();
          conferenceSlidersFunc();
          imageFillFunc();
          coworkingSlidersFunc();
          animationFunc ();
          smoothScrollFunc();
          aboutSlidersFunc();
          forMobileFunc();
          conferencePopupFunc();
          coworkingPopupsMain();
          showAttrImgOnClick();
          activeLanguage();

          subSend();

          // preloaderFirstStep();
          // preloaderSecondStep();
          // preloaderFunc();

        });
      };




      // Preloader

      function preloaderFunc() {
        setTimeout(preloaderSecondStep,500);
      };





      // call all function

      fullPageMain();
      ScrollTopFunc();
      indexSliders();
      googleMapFunc();
      burgerMenuFunc();
      indexConferenceFunc();
      innovationSliderFunc();
      innovationPageSliders();
      freespaceSliderFunc();
      newsSliderFunc();
      conferenceWasteFunc();
      conferenceSlidersFunc();
      imageFillFunc();
      coworkingSlidersFunc();
      animationFunc ();
      smoothScrollFunc();
      aboutSlidersFunc();
      forMobileFunc();
      conferencePopupFunc();
      coworkingPopupsMain();
      showAttrImgOnClick();

      preloaderFirstStep();
      preloaderSecondStep();
      preloaderFunc();

      activeLanguage();
      subSend();


      barbaFunc();
