$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    //活動辦法彈跳視窗
    $(".anniversary_2").hide();
    $('.anniversary_1').click(function (e) {
        e.preventDefault();
        $(".anniversary_2").toggle();;
    });
    $('.anniversary_2').click(function (e) {
        e.preventDefault();
        $(".anniversary_2").hide();
    });
});
