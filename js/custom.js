$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $("header").toggleClass('toggle');


        $(window).on('scroll load', function () {
            $('#menu').removeClass('fa-times');
            $("header").removeClass('toggle');


            if($(window).scrollTop() > 0) {
                $('.top, .btn').show();
            }
            else {
                $('.top , .btn').hide();
            }
        })


    })
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('body,html').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            "linear")
    })
})