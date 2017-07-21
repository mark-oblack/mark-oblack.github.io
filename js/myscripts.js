// JavaScript Document

//Responsive Navbar

function navResponsive() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

//Clickable Dropdown

$(document).ready(function () {
	$(".dropdown").click(function () {
		$('li > ul').not($(this).children("ul")).hide();
		$(this).children("ul").slideToggle('slow');
	});
});

