$(function(){
    //전체 메뉴 닫기
    $('.close_btn a').on('click',function(){
        $('.all_menu').css("display","none");
    })
    //전체 카테고리 열기
    $('.category_menu_wrap').on('click',function(){
        $('.all_menu').css("display","block");
    })
    let menu_height = $('#menu').outerHeight();
    $('.sub_menu_wrapper').css('top', '102px');
    $('.bg_dark').css('top', '102px');
    console.log('index')
})