$(function(){
    //전체 메뉴 닫기
    $('.close_btn a').on('click',function(){
        $('.all_menu').css("display","none");
    })
    //전체 카테고리 열기
    $('.category_menu_wrap').on('click',function(){
        $('.all_menu').css("display","block");
    })
    $('#sub_menu_wrap').hide();

    // $('#menu .menu .main_menu ul a li:eq(0)').mouseenter(function(){
    //     $('#digital_print_sub').slideDown(1000);
    // });
    // $('#menu .menu .main_menu ul a li:eq(1)').mouseenter(function(){
    //     $('#high_print_sub').slideDown(1000);
    // });
    // $('#menu .menu .main_menu ul a li:eq(2)').mouseenter(function(){
    //     $('#commercial_print_sub').slideDown(1000);
    // });
    // $('#menu .menu .main_menu ul a li:eq(3)').mouseenter(function(){
    //     $('#mypage_sub').slideDown(1000);
    // });
    // $('#menu .menu .main_menu ul a li:eq(4)').mouseenter(function(){
    //     $('#help_sub').slideDown(1000);
    // });
    // $('#menu .menu .main_menu ul a li:eq(5)').mouseenter(function(){
    //     $('#event_sub').slideDown(1000);
    // });
    // // $('#menu .menu .main_menu ul a li:eq(0)').mouseleave(function(){
    // //     $('.sub_menu_wrap').css('display','none')
    // // });
    $('.sub_menu_wrap').mouseenter(function(){
    });
    $('.sub_menu_wrap #sub_menu_rest').mouseenter(function(){
        // $('#digital_print_sub').slideUp(1000);
        // $('#high_print_sub').slideUp(1000);
        // $('#commercial_print_sub').slideUp(1000);
        // $('#mypage_sub').slideUp(1000);
        // $('#help_sub').slideUp(1000);
        // $('#event_sub').slideUp(1000);
    });
})