// Loading Screen 

// $(window).on('load', function() {

//     "use strict";

//     $('.loading .load').fadeOut(1000, function() {

//         $(this).parent().fadeOut(1000, function() {

//             $(this).remove();

//         });

//     });

// });
$(window).on("load", function() {



    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function() {
        $(".loader").fadeOut("fast");
    }, 400);

});


$(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), $(".nav-item a").on("click", function(t) {
    var o = $(this);
    $("html, body").stop().animate({ scrollTop: $(o.attr("href")).offset().top - 50 }, 1500, "easeInOutExpo"), t.preventDefault()
}), $(document).on("click", ".navbar-collapse.show", function(t) { $(t.target).is("a") && $(this).collapse("hide") }), $("#navbarCollapse").scrollspy({ offset: 70 }), $(".img-zoom").magnificPopup({ type: "image", closeOnContentClick: !0, mainClass: "mfp-fade", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] } }), $(window).on("load", function() {
    var t = $(".work-filter"),
        o = $("#menu-filter");
    t.isotope({ filter: "*", layoutMode: "masonry", animationOptions: { duration: 750, easing: "linear" } }), o.find("a").on("click", function() { var e = $(this).attr("data-filter"); return o.find("a").removeClass("active"), $(this).addClass("active"), t.isotope({ filter: e, animationOptions: { animationDuration: 750, easing: "linear", queue: !1 } }), !1 })
}), $("#owl-demo").owlCarousel({ autoPlay: 1e4, items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [979, 3] });

var a = 0;

$(".video_about , .video_home , .video_blog").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }), $(window).on("scroll", function() { $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut() }), $(".back_top").on("click", function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), $(".text-typed").each(function() {
    var t = $(this);
    t.typed({ strings: t.attr("data-elements").split(","), typeSpeed: 100, backDelay: 3e3 })
});
/*==========================================================
       modal-video
    ============================================================*/
window.document.onkeydown = function(e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}
/*==========================================================
       modal-img
    ============================================================*/
$(function() {
    "use strict";

    $(".serv1").click(function() {
        var $src = $(".serv1 img").attr("src");
        $(".modal-img").fadeIn();
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function() {
        $(".modal-img").fadeOut();
    });

});
// Projects Carousel
if ($('.projects-carousel').length) {
    $('.projects-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        navText: ['<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 2
            },
            1100: {
                items: 2
            },
            1200: {
                items: 2
            },
            1600: {
                items: 2
            }
        }
    });
}
