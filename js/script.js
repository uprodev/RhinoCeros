jQuery(document).ready(function ($) {

  $(document).on('click', '.top-line .search-link a', function (e){
    e.preventDefault();
    $('.top-line .search-wrap').addClass('is-active')
  });

  $(document).on('click', '.close-search', function (e){
    e.preventDefault();
    $('.top-line .search-wrap').removeClass('is-active')
  });

  $(document).on('mouseenter', '.top-menu li.sub', function (e){
    $('.top-menu li.sub a').removeClass('is-active')
    $(this).children('a').addClass('is-active');
    $('.sub-menu-wrap').addClass('is-active');
    $('.sub-menu').removeClass('is-viz');
    if($(this).hasClass('sub-2')){
      $('.sub-menu-2').addClass('is-viz');
    }else{
      $('.sub-menu-1').addClass('is-viz');
    }
  });

  $(document).on('mouseleave', 'header', function (e){
    $('.top-menu li.sub a').removeClass('is-active');
    $('.sub-menu').removeClass('is-viz');
    $('.sub-menu-wrap').removeClass('is-active');
  });

  var swiper1 = new Swiper(".text-slider", {
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><i>' + " </i><div class=\"cont-time\"><svg width=\"50\" height=\"50\" viewBox=\"0 0 36 36\" role=\"img\" class=\"progressCircle-svg\"><circle cx=\"18\" cy=\"18\" r=\"16\" stroke-width=\"8\" fill=\"none\" class=\"progressCircle-bg\"></circle><circle cx=\"18\" cy=\"18\" r=\"16\" stroke-width=\"8\" fill=\"none\" transform=\"rotate(-90, 18, 18)\" stroke-dasharray=\"100\" stroke-dashoffset=\"100\" class=\"progressCircle-progress\" ></circle></svg></div></span>";
      },
    }
  });

  swiper1.on('slideChange', function () {
    $('.text-slider').find('.cont-time').remove();
    $('.text-slider').find('.swiper-pagination-bullet').append('<div class="cont-time"><svg width="50" height="50" viewBox="0 0 36 36" role="img" class="progressCircle-svg"><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" class="progressCircle-bg"></circle><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" transform="rotate(-90, 18, 18)" stroke-dasharray="100" stroke-dashoffset="100" class="progressCircle-progress" ></circle></svg></div>')
  });


  $(document).on('click', '.fix-block .cookie .content-width .btn-wrap a', function (e){
    e.preventDefault();
    $('.fix-block .cookie').hide();
  });

  $(document).on('click', '.close-event', function (e){
    e.preventDefault();
    $('.fix-block-new').slideUp();
  });


  $(document).on('click', '.btn-cookies', function (e){
    e.preventDefault();
    $('.fix-block-cookies').slideUp();
  });





  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
  });
  var menu = ['Архитектура', 'Ювелирный дизайн', 'Ландшафтный дизайн', 'Промышленный дизайн', 'Авиация и космонавтика', 'Машиностроение', 'Обувь и одежда', 'Арт объекты', 'Медицина', 'ЧПУ']
  var swiper2 = new Swiper('.areas-use-slider', {
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<i>' + (menu[index]) + '</i>' + '<div class="cont-time"><svg width="50" height="50" viewBox="0 0 36 36" role="img" class="progressCircle-svg"><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" class="progressCircle-bg"></circle><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" transform="rotate(-90, 18, 18)" stroke-dasharray="100" stroke-dashoffset="100" class="progressCircle-progress" ></circle></svg></div></span>';
      },
    },

  });

  swiper2.on('slideChange', function () {
    $('.areas-use-slider').find('.cont-time').remove();
    $('.areas-use-slider').find('.swiper-pagination-bullet').append('<div class="cont-time"><svg width="50" height="50" viewBox="0 0 36 36" role="img" class="progressCircle-svg"><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" class="progressCircle-bg"></circle><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" transform="rotate(-90, 18, 18)" stroke-dasharray="100" stroke-dashoffset="100" class="progressCircle-progress" ></circle></svg></div>')
  });

  var swiper3 = new Swiper(".clients-slider", {
    slidesPerView: "auto",
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
    breakpoints: {
      320: {
        spaceBetween: 24,
      },
      768: {
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 60,
      },
    },
  });






  $(window).load(function (e){
    if(window.innerWidth > 1024) {
      let text1 = new Cuttr('.courses .text-wrap p', {
        truncate: 'words',
        length: 29,
        ending: '[...]'
      });
    }else{
      let text1 = new Cuttr('.courses .text-wrap p', {
        truncate: 'words',
        length: 15,
        ending: '[...]'
      });
    }
  })



  let text2 =  new Cuttr('.home .news p.text', {
    truncate: 'words',
    length: 19,
    //ending: '[...]'
  });


  let text3 =  new Cuttr('.news-block .item p.text', {
    truncate: 'words',
    length: 27,
    //ending: '[...]'
  });
  let text4 =  new Cuttr('.news-block .item-big p.text', {
    truncate: 'words',
    length: 19,
    //ending: '[...]'
  });

  $('.input-wrap input').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active').closest('div').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active').closest('div').addClass('is-active');
    }
  });

  $('.input-wrap textarea').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('label').removeClass('is-active').closest('div').removeClass('is-active');
    } else {
      $(myInput).siblings('label').addClass('is-active').closest('div').addClass('is-active');
    }
  });
  $('.input-wrap input, .input-wrap textarea').focus(function (e) {
    $(this).siblings('label').addClass('is-focus').closest('div').addClass('is-focus');
  });
  $('.input-wrap input, .input-wrap textarea').blur(function (e) {
    $(this).siblings('label').removeClass('is-focus').closest('div').removeClass('is-focus');
  });

  $(document).on('click', '.menu-btn', function (e){
    e.preventDefault();
    if($(this).hasClass('is-active')){
      $.fancybox.close();
      $('header').removeClass('is-active');
      $(this).removeClass('is-active');
      $('html').addClass('is-menu');
    }else{
      $('header').addClass('is-active');
      $('html').addClass('is-menu');
      $(this).addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out'
      });
    }
  });
  $(document).on('click', 'ul.mob-menu li.sub > a', function (e){
    e.preventDefault();
    $(this).closest('li').toggleClass('is-active');
    if($('.sub-1').hasClass('is-active')){
      $('.sub-menu-1').slideDown();
    }else{
      $('.sub-menu-1').slideUp();
    }
    if($('.sub-2').hasClass('is-active')){
      $('.sub-menu-2').slideDown();
    }else{
      $('.sub-menu-2').slideUp();
    }
  });



  $(window).load(function (e){
    if(window.innerWidth < 992){
      $(document).on('click', 'footer .footer-nav ul li:first-child a', function (e){
        e.preventDefault();

        if($(this).closest('ul').hasClass('is-active')){
          $(this).closest('ul').removeClass('is-active').find('li').slideUp();
        }else{
          $(this).closest('ul').addClass('is-active').find('li').slideDown();
        }

      });

    }
  })

  $('select').niceSelect();

  $(document).on('click', '.nice-select .list', function (e) {
    $(this).closest('.nice-select').addClass('is-selected');
  });

/*  $(document).on('click', '.popup-download .label-inner .input-wrap-submit .btn-border', function (e) {
    $.fancybox.close();
    $.fancybox.open( $('#download-ok'), {
      touch: false
    });
  });*/

/*  $(document).on('click', '.popup-download-ok .btn-wrap a', function (e) {
    $.fancybox.close();
    $.fancybox.open( $('#download-error'), {
      touch: false
    });
  });

  $(document).on('click', '.popup-download-error .btn-wrap a', function (e) {
    $.fancybox.close();
    $.fancybox.open( $('#download-warning'), {
      touch: false
    });
  });*/

  $(document).on('click', '.popup-site .btn-wrap a', function (e) {
    $.fancybox.close();

  });

  $(document).on('click', '.fancybox-ok', function (e) {
    $.fancybox.open( $('#send-ok'), {
      touch: false
    });
  });


  $(document).on('click', '.card-block .tabs-menu li', function (e){


  });

  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tab-content").children("div").hide();
          $(tabs).find(".tab-content").children("div").eq(i).show();
          $(tabs).find(".tabs-menu").find("li").removeClass("is-active");
          $(tabs).find(".tabs-menu").find("li").eq(i).addClass("is-active");
        }

        showPage(0);

        $(tabs).find(".tabs-menu").find("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).find(".tabs-menu").find("li").click(function(){

          if(!$(this).hasClass('is-active')){
            $('.card-block .tab-content').find('input').val('');
            $('.card-block .tab-content').find('textarea').val('');
            $('.card-block .tab-content').find('label').removeClass('is-active');

          }
          showPage(parseInt($(this).attr("data-page")));


        });
      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".tabs").lightTabs();





  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(".accordion > .accordion-item .accordion-thumb").click(function() {
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
  });


  $(document).on('click', '.scroll, .info-rhino-v2 .item-link ul li a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });





  let scrollItem = $(".price-block .scroll-block").niceScroll({
    cursorcolor: "#516174",
    cursoropacitymin: 1,
    cursoropacitymax: 1,
    cursorwidth: "4px",
    cursorborderradius: "5px",
  });
  $(document).on('click', '.price-block .filter-list > li.sub a', function (e) {
    e.preventDefault();
    let item =  $(this).closest('li');
    item.toggleClass('is-active');

    if(item.hasClass('is-active')){
      item.find('.sub-filter-list').slideDown();

    }else{
      item.find('.sub-filter-list').slideUp();
    };

    setTimeout(function() {
      $('.price-block .scroll-block').getNiceScroll().resize();

    }, 500);

  });
  $(document).on('click', '.price-block .filter-line .btn-wrap a', function (e) {
    e.preventDefault();
   $('.price-block .filter-line .btn-wrap a').removeClass('is-active');
   $(this).addClass('is-active');

   if($('.price-block .filter-line .btn-wrap a:first-child').hasClass('is-active')){
     $('.price-block').addClass('is-grid');
   }else{
     $('.price-block').removeClass('is-grid');
   }
  });


  $(document).on('click', '.price-block .mob-btn a', function (e) {
    e.preventDefault();
    if($(this).closest('.price-block').hasClass('is-open')){
      $('.price-block .filter-wrap-mob').slideUp();
      $('.price-block').removeClass('is-open');
      $(this).removeClass('is-hide');
    }else{
      $('.price-block .filter-wrap-mob').slideDown();
      $('.price-block').addClass('is-open');
      $(this).addClass('is-hide');
    }
  });

  $(document).on('click', '.instructional-video .mob-btn a', function (e) {
    e.preventDefault();
    if($(this).closest('.instructional-video').hasClass('is-open')){
      $('.instructional-video .list-video').slideUp();
      $('.instructional-video').removeClass('is-open');
      $(this).removeClass('is-hide');
    }else{
      $('.instructional-video .list-video').slideDown();
      $('.instructional-video').addClass('is-open');
      $(this).addClass('is-hide');
    }
  });

  $(document).on('click', '.btn-count-plus', function () {
    var e = $(this).parent().find("input");
    return e.val(parseInt(e.val()) + 1), e.change(), !1
  });
  $(document).on('click', '.btn-count-minus', function () {
    var e = $(this).parent().find("input"), t = parseInt(e.val()) - 1;
    return t = t < 1 ? 1 : t, e.val(t), e.change(), !1
  });

  $(document).on('click', '.delete-line', function (e) {
    e.preventDefault();
    $(this).closest('.table-line').hide();
  });

  $(document).on('click', '.card-block .promo a', function (e) {
    e.preventDefault();
    $('.input-wrap-promo').toggleClass('is-open');
    if($('.input-wrap-promo').hasClass('is-open')){
      $('.input-wrap-promo').slideDown();

    }else{
      $('.input-wrap-promo').slideUp();

    }
  });

  $('input[name=file_upload1]').change(function(){
    $this = $(this);
    $name = $(this).val().replace('C:\\fakepath\\', '');
    $this.closest('.label-file').addClass('is-add-file');
    $this.closest('.label-file').find('.label-text').text($name);
  });

  $(document).on('click', '.btn-delete', function (e) {
    e.preventDefault();
    $this = $(this);
    $this.closest('.label-file').removeClass('is-add-file');
    $this.closest('.label-file').find('input:file').val('');
    $this.closest('.input-wrap-file').find('.label-text').text('Прикрепить файл');
  });


  $(document).on('click', '.card-block .tabs-menu li', function (e) {
    if($('.card-block .tabs-menu li:first-child').hasClass('is-active')){
      $('.card-block').removeClass('is-tab-2');
    }else{
      $('.card-block').addClass('is-tab-2');
    }
  });



  simplyCountdown('.simply-countdown', {
    year: 2024, // required
    month: 11, // required
    day: 28, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
      days: { singular: ' дня', plural: 'дней' },
      hours: { singular: 'часа', plural: 'часов' },
      minutes: { singular: 'минут', plural: 'минут' },
      seconds: { singular: 'second', plural: 'seconds' }
    },
  });

  $(document).on('click', '.list-video > li a', function (e) {
    e.preventDefault();
    if($(this).closest('li').hasClass('is-active')){
      $(this).closest('li').removeClass('is-active').find('.sub-tabs-menu').slideUp();
    }else{
      $('.list-video > li').removeClass('is-active').find('.sub-tabs-menu').slideUp();
      $(this).closest('li').addClass('is-active').find('.sub-tabs-menu').slideDown();
    }
  });


  (function($){
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).find(".tabs-sub-content").children("div").hide();
          $(tabs).find(".tabs-sub-content").children("div").eq(i).show();
          $(tabs).find(".list-video .sub-tabs-menu").find("li").removeClass("is-active");
          $(tabs).find(".list-video .sub-tabs-menu").find("li").eq(i).addClass("is-active");
        }

        showPage(0);
        $(tabs).find(".list-video .sub-tabs-menu").each(function(index, element){
          $(element).find('li').each(function(index, element){
            $(element).attr("data-page", i);
            i++;
          })

        });


        $(tabs).find(".list-video .sub-tabs-menu").find("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });



      };
      return this.each(createTabs);
    };
  })(jQuery);
  $(".instructional-video").lightTabs();

  let scrollItem2 = $(".sub-tabs-menu").niceScroll({
    cursorcolor: "#516174",
    cursoropacitymin: 1,
    cursoropacitymax: 1,
    cursorwidth: "4px",
    cursorborderradius: "5px",
  });

  $("header").sticky({
    topSpacing:0
  });

  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
/*    if (st > lastScrollTop){
      $('header').addClass('is-up');
    } else {
      $('header').removeClass('is-up');
    }*/
    lastScrollTop = st;
  });

  //25.03.24
  //mask
  $('.tel-mask').mask("(000) 000 00 00", {placeholder: "(000) 000 00 00"});

  //code tel
  if($('.input-wrap-tel input').length > 0){
    var inputAbout = document.querySelector(".input-wrap-tel input");
    window.intlTelInput(inputAbout, {
          separateDialCode: true,
      autoPlaceholder: 'aggressive',
      excludeCountries: ["ru"],
      preferredCountries: ['us', 'ua'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.2/js/utils.js'
    });
  }



  $(window).on('load', function(){
    $(".nice-select .list").wrap('<div class="wrap-list"></div>')
    $(".wrap-list").niceScroll(".nice-select .list",{
      cursorcolor: "rgb(214, 218, 226)",
      cursoropacitymin: 1,
      cursoropacitymax: 1,
      cursorwidth: "4px",
      cursorborderradius: "5px",
      zindex: 999,
      railpadding: { top: 5, right: 4, left: 0, bottom: 5 },
    });
  });


  //FOCUS UNFOCUS

  $(".input-wrap-tel input").focus(function (){
    $('.input-wrap-tel').addClass("is-focus");
  });

  $(".input-wrap-tel input").blur(function (){
    $('.input-wrap-tel').removeClass("is-focus");
  });

  $('.input-wrap-tel input').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).closest('.input-wrap-tel').removeClass('is-active');
    } else {
      $(myInput).closest('.input-wrap-tel').addClass('is-active');
    }
  });


  if(window.innerWidth > 1440){
    $('.tabs-info .tabs-menu').fixTo('.tabs-info .tabs',{
      top: 120,
    });

  }else if(window.innerWidth > 575 && window.innerWidth < 1441){
    $('.tabs-info .tabs-menu').fixTo('.tabs-info .tabs',{
      top: 90,
    });
  }else{
    $('.tabs-info .tabs-menu').fixTo('.tabs-info .tabs',{
      top: 60,
    });
  }






  $(".fancybox-download").fancybox({
    touch:false,
    autoFocus:false,
    afterShow: function (e){
      var swiperDownload = new Swiper(".download-slider", {
        autoHeight: true,
        spaceBetween: 10,
        freeMode: true,
        preventClicks :true,
        a11y: false,
        touchRatio: 1,
        allowTouchMove:false,
        noSwiping: false,

      });
      $(document).on('click', '.btn-send', function (e){
        e.preventDefault();

        //як шо все добре
        swiperDownload.slideTo(2);

        //увага
        //swiperDownload.slideTo(3);

        //помилка
        //swiperDownload.slideTo(4);
      })
    }
  });

  $(".fancybox-right").fancybox({
    touch: false,
    autoFocus: false,
    animationDuration : 600,
    animationEffect   : 'slide-in-out',
    beforeShow: function (e){
      $('html').addClass('is-menu-right');
    },
    afterClose: function (e){
      $('html').removeClass('is-menu-right');
    }
  });


  /* mob-menu*/
  $(document).on('click', '.fancybox-right', function (e){
    e.preventDefault();

    $.fancybox.open( $('#variant'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('html').addClass('is-menu');
    }, 100);

  });

  /*close mob menu*/
  $(document).on('click', '.close-variant a', function (e){
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu');
  });


  var swiper4 = new Swiper(".work-slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 20,
      },
      1280: {

        spaceBetween: 35,
      },
      1441: {
        spaceBetween: 60,
      },
    },
    pagination: {
      el: ".swiper-pagination-3",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"><i>' + " </i><div class=\"cont-time\"><svg width=\"50\" height=\"50\" viewBox=\"0 0 36 36\" role=\"img\" class=\"progressCircle-svg\"><circle cx=\"18\" cy=\"18\" r=\"16\" stroke-width=\"8\" fill=\"none\" class=\"progressCircle-bg\"></circle><circle cx=\"18\" cy=\"18\" r=\"16\" stroke-width=\"8\" fill=\"none\" transform=\"rotate(-90, 18, 18)\" stroke-dasharray=\"100\" stroke-dashoffset=\"100\" class=\"progressCircle-progress\" ></circle></svg></div></span>";
      },
    }
  });

  swiper4.on('slideChange', function () {
    $('.work-slider').find('.cont-time').remove();
    $('.work-slider').find('.swiper-pagination-bullet').append('<div class="cont-time"><svg width="50" height="50" viewBox="0 0 36 36" role="img" class="progressCircle-svg"><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" class="progressCircle-bg"></circle><circle cx="18" cy="18" r="16" stroke-width="8" fill="none" transform="rotate(-90, 18, 18)" stroke-dasharray="100" stroke-dashoffset="100" class="progressCircle-progress" ></circle></svg></div>')
  });

  var swiper5 = new Swiper(".testimonials-slider", {
    slidesPerView: "auto",
    //loop: true,
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
    },
    breakpoints: {
      320: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 30,
      },
      1280: {

        spaceBetween: 60,
      },
      1441: {
        spaceBetween: 60,
      },
    },

  });


  var swiper4n = new Swiper(".slider-4n", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".next-4n",
      prevEl: ".prev-4n",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 36,
      },
      1279: {
        slidesPerView: 4,
        spaceBetween: 36,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
    },
  });





  /*close mob menu*/
  $(document).on('click', '.delete-item', function (e){
    e.preventDefault();
    $(this).closest('.table-line').find('.delete-line-full').slideDown();
  });

  $(document).on('click', '.back-item', function (e){
    e.preventDefault();
    $(this).closest('.table-line').find('.delete-line-full').slideUp();
  });

  $(document).on('click', '.delete-item-full', function (e){
    e.preventDefault();
    $(this).closest('.table-line').slideUp();
  });

  if($('.input-wrap-tel-2 input').length > 0){
    var inputAbout = document.querySelector(".input-wrap-tel-2 input");
    window.intlTelInput(inputAbout, {
      separateDialCode: true,
      autoPlaceholder: 'aggressive',
      excludeCountries: ["ru"],
      preferredCountries: ['us', 'ua'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.2/js/utils.js'
    });
  }
});

