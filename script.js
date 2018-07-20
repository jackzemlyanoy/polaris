$(".tab1").on("click", function () {
    $('.cont-text1').hide();
    $(".cont-text2").show();
    $('.tab1').addClass("active").css("color", "black");
    $('.tab2').removeClass("active").css("color", "#999999");
})
$(".tab2").on("click", function () {
    $('.cont-text2').hide();
    $(".cont-text1").show();
    $('.tab2').addClass("active").css("color", "black");
    $('.tab1').removeClass("active").css("color", "#999999");
})


$('.nav').removeClass('default');
$(window).scroll(function () {
    if($(this).scrollTop() > 110 && $(window).width() >= '1110'){
        $('.nav').addClass("default").fadeIn(1000);
    }else{
        $('.nav').removeClass("default").fadeIn(1000);
    }
});
$('#pre').on('click', function (e) {
    e.preventDefault();
    var arrowD = $('.tittle-text').offset().top;
    $('body, html').animate({scrollTop:arrowD}, 1000);
});
var item = $('.slid-wrap').find(".act");
var arr = [];
for(var i = 0; i<item.length;i++){
   arr.push(item[i])
}

console.log(item);









