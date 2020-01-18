// JavaScript Document

//Responsive Navbar

function responsiveNav() {
	var x = document.getElementById("myTopnav");
	var y =document.getElementById("myTopnavItems");
	if (x.className === "topnav" && y.className === "topnav-items") {
	  x.className += " responsive";
	  y.className += " responsive";
	} else {
	  x.className = "topnav";
	  y.className = "topnav-items";
	}
}

// function navResponsive() {
//     var x = document.getElementById("topNav");
//     if (x.className === "navbar") {
//         x.className += " responsive";
//     } else {
//         x.className = "navbar";
//     }
// }

//Submenu

// function activateDropdown() {
// 	var width = document.documentElement.clientWidth;
// 	if(width < 600) {
// 		var x = document.getElementById("dropdownMenu");
// 		if (x.className === "dropdown-content") {
// 			x.className += " show";
// 		} else {
// 			x.className = "dropdown-content";
// 		}
// 	}
// }

//Illustrations Gallery Modals
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg");
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function() {
	modal.style.display = "block";
	var newSrc = this.src;
	modalImg.attr('src', newSrc);
	captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
