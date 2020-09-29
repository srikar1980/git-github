var stickySocialBar = $('#sticky-social-icon');
var coverHeight = $('#cover-image').height();
var dFlex = "d-flex";
var dNone = "d-none";
/* check on scroll */
$(window).scroll(function(){
    if ($(window).scrollTop() > coverHeight){
        stickySocialBar.removeClass(dNone);
        stickySocialBar.addClass(dFlex);
    }
    else{
        stickySocialBar.removeClass(dFlex);
        stickySocialBar.addClass(dNone);
    }
})

/*check on refresh */
$(window).scroll(function () {
    if ($(window).scrollTop() > coverHeight) {
        stickySocialBar.removeClass(dNone);
        stickySocialBar.addClass(dFlex);
    }
    else {
        stickySocialBar.removeClass(dFlex);
        stickySocialBar.addClass(dNone);
    }
})