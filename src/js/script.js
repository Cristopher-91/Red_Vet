//Get a Year for a Footer
window.onload = function(){
    let current_date = new Date();
    let current_year = current_date.getFullYear();

    document.getElementById("current-year").innerHTML = current_year;
}

