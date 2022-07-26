$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });

    $('.top_btn').click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    })
})