function responsiveNav() {
	var x = document.getElementById("myTopnav");
	var y =document.getElementById("myTopnavItems");
	if (x.className === "topnav" && y.className === "topnav-items") {
	  x.className += " responsive";
	  y.className += " responsive";
	  document.getElementById("nav-toggle").src="assets/images/close-w.svg";
	} else {
	  x.className = "topnav";
	  y.className = "topnav-items";
	  document.getElementById("nav-toggle").src="assets/images/hamburger-w.svg";
	}
}