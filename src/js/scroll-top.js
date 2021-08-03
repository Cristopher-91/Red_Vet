
$( document ).ready(function() {
let button = $("#scroll-top-button");


$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        button.addClass('show');
    }else{
        button.removeClass('show');
    }
});

button.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '50');
  });
});

/*
button = document.getElementById("scroll-top-button");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    if(pageYOffset >= 500){
        //button.style.display = "block";
        button.classList.add("show");

    }else{
        //button.style.display = "none";
        button.classList.remove("show");
    }
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
*/