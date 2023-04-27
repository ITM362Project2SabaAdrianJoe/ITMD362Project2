// Slideshow
let slideIndex = 1;

window.onload = function() {
  showSlides(slideIndex);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) {
    slides[slideIndex-1].style.display = "block";
  }
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }

  setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 5000); // Change image every 5 seconds

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// form validation

function formValidation() {
  var confirmation = confirm("Are you sure you want to submit this form?");
  if (confirmation == true) {
    return true;
  } else {
    return false;
  }
}