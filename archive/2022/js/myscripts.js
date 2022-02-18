// JavaScript Document

//Responsive Navbar

function responsiveNav() {
	var x = document.getElementById("myTopnav");
	var y =document.getElementById("myTopnavItems");
	if (x.className === "topnav" && y.className === "topnav-items") {
	  x.className += " responsive";
	  y.className += " responsive";
	  document.getElementById("nav-toggle").src="assets/icons/close-w.svg";
	} else {
	  x.className = "topnav";
	  y.className = "topnav-items";
	  document.getElementById("nav-toggle").src="assets/icons/hamburger-w.svg";
	}
}

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
