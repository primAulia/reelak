(function () {
  'use strict'

  var vpw = $(window).width()
  var vph = $(window).height()
  var $window = $(window)
  var $menuOpener = $('.menu-opener')
  var $serviceTabs = $('.service-tabs')
  var $servicePanelSection = $('.service-panels-container')
  var $serviceFormChoice = $('.service-form-choice')

  $menuOpener.on('click', function () {
    var $navAbsolute = $(this).parents('header').find('.nav-absolute')
    var $allAs = $(this).parents('.nav-pointer').find('a')

    $.each($allAs, function (index, elem) {
      $(elem).toggleClass('changecolor')
    })

    $(this).toggleClass('opened')
    $navAbsolute.toggleClass('popdown')
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

    // hide navi if scroll to anchor happened
    $menuOpener.trigger('click')
  })

  // hide nav is scrolling happened
  $window.on('scroll', function () {
    if ($menuOpener.hasClass('opened')) {
      $menuOpener.trigger('click')
    }
  })

  // service tabs switching
  $serviceTabs.on('click', function (e) {
    e.preventDefault()

    $servicePanelSection.addClass('opened')

    var chosenTab = parseInt($(this).data('tab'))
    var $allPanels = $servicePanelSection.find('.service-panels')
    // data-tab is 1-indexed, array is 0-indexed
    var chosenPanel = $servicePanelSection.find('.service-panels')[chosenTab - 1]

    $.each($allPanels, function (index, elem) {
      $(elem).removeClass('displayed')
    })

    $(chosenPanel).toggleClass('displayed')

    $('.service-form-choice :nth-child(' + chosenTab + ')').prop('selected', true);
  })

  // UNUSED NOW
  // $('.reelak-ig').slick({
  //   dots: false,
  //   infinite: true,
  //   fade: true,
  //   cssEase: 'linear',
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   lazyLoad: 'ondemand'
  // })
}($))
