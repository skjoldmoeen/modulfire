var slideIndex = 1; 
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var animation = document.getElementsByClassName("myHouse")
  if (n > animation.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = animation.length
  }
  for (i = 0; i < animation.length; i++) {
    animation[i],style.display = "none"
  }
  animation[slideIndex-1].style.display = "block";
}
