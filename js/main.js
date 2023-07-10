$(document).ready(function () {

    // Bootstrap main carousel
    $('.carousel').carousel({
        interval: 2000
    })

    // Bootstrap partner carousel
    $('#myCarousel').carousel({
        interval: 1000,
        pause: "hover"
    })
    $('#myCarousel').on('slid.bs.carousel', function () {});

    // Menu scrolling
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 250) {
            $("header").addClass("smaller");
        } else {
            $("header").removeClass("smaller");
        }
    });

    // Go down slowly to About Us section
    $("#look-down").click(function () {
        $('html,body').animate({
            scrollTop: $(".carousel").height() - 75
        }, 'slow');
    });

    // Hamburger menu icon animated
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });

    // SideNav menu
    $("#nav-icon span").click(function () {
        $(".sidenav").toggleClass('width300');
    });

    // fancybox gallery
    if (window.innerWidth > 480 && window.innerHeight > 480) {
        $('.fancybox').fancybox();
    }

    // load more button
    $(function () {
        $(".img-gallery").slice(0, 6).show();
        $(".video-gallery").slice(0, 4).show();
        $(".show-more-btn").on('click', function (e) {
            e.preventDefault();
            $(".img-gallery:hidden").slice(0, 4).slideDown();
            $(".video-gallery:hidden").slice(0, 2).slideDown();
            if ($(".img-gallery").length == 0 && $(".video-gallery").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    });

    $('a[href=#top]').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1050) {
            $('.totop a').fadeIn();
        } else {
            $('.totop a').fadeOut();
        }
    });
    
    // Active class change    
    //    $('.navbar-menu ul li').click(function (e) {
    //        e.preventDefault();
    //        $('.navbar-menu ul li').removeClass('active');
    //        $(this).addClass('active');
    //    });

    // contact form validation

});