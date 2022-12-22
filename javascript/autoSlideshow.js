/*AUTOMATIC SLIDESHOW JS---------------------------------------------------------*/
let slideInd = 0;
automaticSlideshow();

function automaticSlideshow() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideInd++;
    if (slideInd > slides.length) {slideInd = 1;}
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideInd-1].style.display = "block";
    dots[slideInd-1].className += " active";
    setTimeout(automaticSlideshow, 4000);
}
