(function ($) {
  "use strict";
  ///=============  Background Image  =============\\\
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
  ///=============  Search Icon  =============\\\
  $(".header__area-menubar-right-box-search-icon.open").on(
    "click",
    function () {
      $(".header__area-menubar-right-box-search-box")
        .fadeIn()
        .addClass("active");
    }
  );
  $(".header__area-menubar-right-box-search-box-icon").on("click", function () {
    $(this).fadeIn().removeClass("active");
  });
  $(".header__area-menubar-right-box-search-box-icon i").on(
    "click",
    function () {
      $(".header__area-menubar-right-box-search-box")
        .fadeOut()
        .removeClass("active");
    }
  );
  $(".header__area-menubar-right-box-search-box form").on(
    "click",
    function (e) {
      e.stopPropagation();
    }
  );
  ///=============  Sidebar Popup  =============\\\
  $(".header__area-menubar-right-sidebar-popup-icon").on("click", function () {
    $(".header__area-menubar-right-sidebar-popup").addClass("active");
  });
  $(".header__area-menubar-right-sidebar-popup .sidebar-close-btn").on(
    "click",
    function () {
      $(".header__area-menubar-right-sidebar-popup").removeClass("active");
    }
  );
  $(".header__area-menubar-right-sidebar-popup-icon").on("click", function () {
    $(".sidebar-overlay").addClass("show");
  });
  $(".header__area-menubar-right-sidebar-popup .sidebar-close-btn").on(
    "click",
    function () {
      $(".sidebar-overlay").removeClass("show");
    }
  );
  ///=============  Responsive Menu  =============\\\
  $(".menu-responsive").meanmenu({
    meanMenuContainer: ".responsive-menu",
    meanScreenWidth: "991",
    meanMenuOpen: "<span></span><span></span><span></span>",
    meanMenuClose: '<i class="fal fa-times"></i>',
  });
  ///=============  Header Sticky  =============\\\
  $(window).on("scroll", function () {
    var scrollDown = $(window).scrollTop();
    if (scrollDown < 135) {
      $(".header__sticky").removeClass("header__sticky-sticky-menu");
    } else {
      $(".header__sticky").addClass("header__sticky-sticky-menu");
    }
  });
  ///=============  CounterUp  =============\\\
  var counter = $(".counter");
  counter.counterUp({
    time: 2500,
    delay: 100,
  });
  ///=============  Theme Loader  =============\\\
  $(window).on("load", function () {
    $(".theme-loader").fadeOut(500);
  });
  ///============= Scroll To Top =============\\\
  var scrollPath = document.querySelector(".scroll-up path");
  var pathLength = scrollPath.getTotalLength();
  scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
  scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
  scrollPath.style.strokeDashoffset = pathLength;
  scrollPath.getBoundingClientRect();
  scrollPath.style.transition = scrollPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updatescroll = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var scroll = pathLength - (scroll * pathLength) / height;
    scrollPath.style.strokeDashoffset = scroll;
  };
  updatescroll();
  $(window).scroll(updatescroll);
  var offset = 50;
  var duration = 950;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".scroll-up").addClass("active-scroll");
    } else {
      jQuery(".scroll-up").removeClass("active-scroll");
    }
  });
  jQuery(".scroll-up").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate(
      {
        scrollTop: 0,
      },
      duration
    );
    return false;
  });
  ///=============  Isotope  =============\\\
  $(window).on("load", function () {
    var $grid = $(".conbix__filter-active").isotope();
    $(".conbix__filter-button").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({
        filter: filterValue,
      });
    });
    $(".conbix__filter-button").on("click", "button", function () {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
    });
  });
})(jQuery);
