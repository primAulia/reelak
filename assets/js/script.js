(function () {
  'use strict'

  var vpw = $(window).width()
  var vph = $(window).height()
  var $menuOpener = $('.menu-opener')

  $menuOpener.on('click', function () {
    var $navAbsolute = $(this).parents('header').find('.nav-absolute')
    var $allAs = $(this).parents('.nav-pointer').find('a')

    $.each($allAs, function (index, elem) {
      $(elem).toggleClass('changecolor')
    })

    $navAbsolute.toggleClass('popdown')
  })

  $('.reelak-ig').slick({
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand'
  })

  // Animate all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target)
          $target.focus()
          if ($target.is(':focus')) { // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
            $target.focus() // Set focus again
          }
        })
      }
    }

    $menuOpener.trigger('click')
  })
}($))
