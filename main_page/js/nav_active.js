function main_nav_active(e) {
    console.log(e.target);
    let main_nav = document.querySelectorAll('.main_nav_disable');

    main_nav.forEach(function (e, i) {
        document.querySelectorAll('.main_nav_disable')[i].classList.remove('main_nav_active');
        $('.main_nav_disable img.disable_nav').eq(i).css('display', '');
        $('.main_nav_disable img.active_nav').eq(i).css('display', '');
    })
    e.currentTarget.classList.add('main_nav_active');
    e.currentTarget.querySelector('.disable_nav').style.display = 'none';
    e.currentTarget.querySelector('.active_nav').style.display = 'block';
};