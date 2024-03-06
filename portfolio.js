/* FILE NAME: portfolio.js
js file for Emma's portfolio
*/

/*clicking on the button will toggle btwn hiding/showing the  nav menu*/
function toggleNav() {
    document.getElementbyId("dropdownMenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('navButton')) {
        var dropdown = document.getElementById("dropdownMenu");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



/*MANUAL SLIDESHOW JS------------------------------------------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

//go back and forth 
function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


/*AUTOMATIC SLIDESHOW JS---------------------------------------------------------*/
let slideInd = 0;
automaticSlideshow();

function automaticSlideshow() {
    let i;
    let slides = document.getElementsByClassName("")
}

























