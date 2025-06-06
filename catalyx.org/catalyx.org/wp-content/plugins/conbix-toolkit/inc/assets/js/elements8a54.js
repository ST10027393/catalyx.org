(function ($) {
    "use strict";

    var BannerSlider = function () {
	///=============  Banner Slider  =============\\\
	let sliderActive1 = '.banner-slider';
	let sliderInit1 = new Swiper(sliderActive1, {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.conbix-button-next',
			prevEl: '.conbix-button-prev',
		},		
		pagination: {
			el: ".banner-pagination",
			clickable: true,
		},
	});
	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function() {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');
				$(this).removeClass('anim' + anim).addClass(anim + ' animated').css({
					webkitAnimationDelay: delay,
					animationDelay: delay,
					webkitAnimationDuration: duration,
					animationDuration: duration
				}).one('animationend', function() {
					$(this).removeClass(anim + ' animated');
				});
			});
		};
		animated();
		init.on('slideChange', function() {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}
	animated_swiper(sliderActive1, sliderInit1);
	///=============  Banner Three Slider  =============\\\
	var swiper = new Swiper(".banner__three__slider", {
		loop: true,	
		slidesPerView: 2,
		spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
        },
      });	
      
    }


    var TestimonialSlider = function () {
       	///=============  Testimonial  =============\\\
	var swiper = new Swiper(".testimonial__area-slider", {
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.conbix-button-next',
			prevEl: '.conbix-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});

    }


    var ProjectSlider = function ($scope) {
	///=============  Portfolio One  =============\\\
	var swiper = new Swiper(".portfolio__area-slider", {
		loop: true,
		speed: 2000,
		spaceBetween: 30,
		autoplay: {
			delay: 4500,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			750: {
				spaceBetween: 30,
				slidesPerView: 2
			},
			1138: {
				slidesPerView: 3
			},
			1600: {
				slidesPerView: 4
			},
		}
	});	

  	///=============  Portfolio Active Hover  =============\\\
	const portfolioItems = document.querySelectorAll(".portfolio-item");
	portfolioItems.forEach((portfolioItem) => {
		portfolioItem.addEventListener("mouseenter", () => {
			removeActiveClasses();
			portfolioItem.classList.add("active");
		});
	});
	function removeActiveClasses() {
		portfolioItems.forEach((portfolioItem) => {
			portfolioItem.classList.remove("active");
		});
	}

  	///=============  Isotope  =============\\\

		var $grid = $('.conbix__filter-active').isotope();
		$('.conbix__filter-button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		$('.conbix__filter-button').on('click', 'button', function () {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});

    }
    var ServiceSlider = function () {
	///=============  Services Two  =============\\\
	var swiper = new Swiper(".services__two-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.conbix-button-next',
			prevEl: '.conbix-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});
	///=============  Services Three  =============\\\
	var swiper = new Swiper(".services__three-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.conbix-button-next',
			prevEl: '.conbix-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
			},
		}
	});
	}

	var whyUs = function ($scope) {
	///=============  Experience Skill Bar  =============\\\
	if($('.experience__area-right-skill-item-bar').length) {
		$('.experience__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	}

	var SkillBar = function ($scope) {
			///=============  Team Details Skill Bar  =============\\\
	   if($('.team__details-skills-item-bar').length) {
		$('.team__details-skills-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};

	}

	var Features = function ($scope) { 

			///=============  Features Active Hover  =============\\\
	$(".features-area-item").hover(function() {
		$(".features-area-item").removeClass("features-area-item-hover");
		$(this).addClass("features-area-item-hover");
	});

	}

    var BlogGrid = function ($scope, $) {
	///=============  Blog Active Hover  =============\\\
	$(".blog__three-item").hover(function() {
		$(".blog__three-item").removeClass("blog__three-item-hover");
		$(this).addClass("blog__three-item-hover");
	});	

	}
    var customSearch = function ($scope, $) { 
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
	}
    var customMenu = function ($scope, $) { 
		///=============  Responsive Menu  =============\\\

	$('.menu_bar').click(function() {
		$(this).toggleClass('clicked');
		$('.menu_bar-popup').toggleClass('show');
	});	  
	$('.menu_bar-popup-close').click(function() {
		$('.menu_bar').removeClass('clicked');
		$('.menu_bar-popup').removeClass('show');
	});	
	///=============  Responsive Menu  =============\\\
	$('.menu-responsive-elementor').meanmenu({
		meanMenuContainer: '.responsive-menu-elementor',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});

	}
	
    var OurFaq = function ($scope, $) {

	///=============  FAQ One =============\\\
	$(".faq-collapse-item-card-header").click(function() {
		if ($(this).next(".faq-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq-collapse-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});

	}
    var WidgetDefault = function ($scope, $) {

	///=============  Video Popup  =============\\\
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	///=============  Image Popup  =============\\\
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
    }


    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/conbix-slider.default', BannerSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonials.default', TestimonialSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/service.default', ServiceSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/portfolio.default', ProjectSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/why-us.default', whyUs);
        elementorFrontend.hooks.addAction('frontend/element_ready/skill-bar.default', SkillBar);
        elementorFrontend.hooks.addAction('frontend/element_ready/our-faq.default', OurFaq);
        elementorFrontend.hooks.addAction('frontend/element_ready/features.default', Features);
        elementorFrontend.hooks.addAction('frontend/element_ready/blog_grid.default', BlogGrid);
        elementorFrontend.hooks.addAction('frontend/element_ready/conbix-menu.default', customMenu);
        elementorFrontend.hooks.addAction('frontend/element_ready/search-conbix.default', customSearch);
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', WidgetDefault);
    });


})(jQuery);