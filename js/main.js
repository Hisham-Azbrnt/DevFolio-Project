$(function () {
  'use strict';

  // header height
  var windowHeight = $(window).height(),
      navHeight    = $('.navbar').innerHeight();

  $('.header').height( windowHeight + navHeight );

  // Change Navbar Background When Thwe Window Scroll
  $(window).on('scroll', function() {
    if( $(window).scrollTop() ) {
      $('nav').addClass('white');
    }else {
      $('nav').removeClass('white');
    }
  });

  //Scrolling To Top With The Arrow
  var scrollTop = $('.scroll-to-top');
  
  $(window).on('scroll', function () {
    if( $(window).scrollTop() >= 300 ){
      scrollTop.fadeIn(800);
    }else {
      scrollTop.fadeOut(800);
    }
  });

  //Click On Scroll To Top 
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop : 0
    }, 1000);
  });




});