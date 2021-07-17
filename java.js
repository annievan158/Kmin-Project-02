

let dropdown = document.getElementsByClassName("our-product-info");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Slide show 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let banner = document.getElementsByClassName("body4-banner-desktop");
    let slideshow = document.getElementsByClassName("slideshow");
    let box = document.getElementsByClassName('banner-box-js');


    if (n > banner.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slideshow.length}
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";  
    }
    for (i = 0; i < box.length; i++) {
        box[i].style.display = "none";  
    }
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].className = slideshow[i].className.replace(" active", "");
    }  
    banner[slideIndex-1].style.display = "block";  
    box[slideIndex-1].style.display = "block";  
    slideshow[slideIndex-1].className += " active";
}

// Collapsed Sidepanel
function openNav() {
  document.getElementById("mySidepanel").style.display = "block";
  document.getElementById("mySidepanel").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.display = "none";
  document.getElementById("mySidepanel").style.width = "0px";
}

function openNavLeft() {
  document.getElementById("mySidepanelLeft").style.width = "250px";
}

function closeNavLeft() {
  document.getElementById("mySidepanelLeft").style.width = "0";
}


