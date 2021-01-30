//Get a Year for a Footer
window.onload = function(){
    let current_date = new Date();
    let current_year = current_date.getFullYear();

    document.getElementById("current-year").innerHTML = current_year;
}

//Navbar change on scroll
$(document).ready(function () {

    window.onscroll = function () { navbarChange() };

    let navbar = document.getElementById("nav-main");
    let navLogo = document.getElementById("nav-logo");
    let navToggler = document.getElementById("nav-hamburger")

    let change = navbar.offsetTop;

    function navbarChange() {
        if (window.pageYOffset > change) {
            navbar.classList.add("navbar-white");
            navLogo.classList.remove("navbar-brand-logo-white");
            navToggler.classList.add("navbar-hamburger-green");

        } else {
            navbar.classList.remove("navbar-white");
            navLogo.classList.add("navbar-brand-logo-white");
            navToggler.classList.remove("navbar-hamburger-green");
        }
    }

});

//Navbar hamburger
$(document).ready(function(){
	$('#nav-hamburger').click(function(){
		$(this).toggleClass('open');
	});
});