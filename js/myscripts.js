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

function activateDropdown() {
    var x = document.getElementById("dropdownMenu");
    if (x.className === "dropdown-content") {
        x.className += " responsive";
    } else {
        x.className = "dropdown-content";
    }
}