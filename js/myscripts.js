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

//Submenu

function activateDropdown() {
	var width = document.documentElement.clientWidth;
	if(width < 600) {
		var x = document.getElementById("dropdownMenu");
		if (x.className === "dropdown-content") {
			x.className += " show";
		} else {
			x.className = "dropdown-content";
		}
	}
}
