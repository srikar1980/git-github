var nav = $('.navbar.navbar-dark');
var fixedTop = 'fixed-top';
var headerHeight = $('#header').height() + 50;

$(window).scroll(function(){
    if ($(window).scrollTop() > headerHeight)
       nav.addClass(fixedTop);
    else
        nav.removeClass(fixedTop);
})

/* Check on refresh */
$(window).scroll(function () {
    if ($(window).scrollTop() > headerHeight)
        nav.addClass(fixedTop);
    else
        nav.removeClass(fixedTop);
})