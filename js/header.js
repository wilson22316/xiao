jQuery(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll)
    if (scroll > 120) {
      $('.submenu__item--member,.submenu__item--cart').addClass('shorter')
      if (scroll >= 300) {
        $(".sidebar").addClass("sidebar--fixed");
      }
    }
    else {
      $(".sidebar").removeClass("sidebar--fixed");
      $('.submenu__item--member,.submenu__item--cart').removeClass('shorter')
    }
  });
});

$(document).ready(function () {
  jQuery(function ($) {
    /* 手機選單開合 */
    $(".header__mobileBtn").click(function () {
      console.log('1')
      $(".header__mobileMenu").addClass("open");
    });
    $(".searchBar__cancel").click(function () {
      $(".header__mobileMenu").removeClass("open");
    });

    /* 手機二級選單展開 */
    $(".menu--have-sub").click(function () {
      $(this).toggleClass("open");
      $('.menu--have-sub + .menu--sub').toggleClass("open");
    });

  });
});