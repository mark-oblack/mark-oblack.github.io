// JavaScript Document

//Fixed Navbar

/*var stickyNavTop = $('.navbar').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyNavTop) {
        $('.navbar').addClass('fixed');
    }
    else {
        $('.navbar').removeClass('fixed');
    }  
});*/

//Responsive Navbar

function navResponsive() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}