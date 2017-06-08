(function () {
  'use strict'

  var vpw = $(window).width()
  var vph = $(window).height()
  // alert(vpw)

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
    autoplaySpeed: 2000
  })
}($))
