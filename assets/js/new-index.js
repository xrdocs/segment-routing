// Nav toggle 
$(document).ready(function(){
	$('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".nav-container").toggleClass('open');
    $(".hide-on-tablet").toggleClass('show');
    $(".hide-on-portrait").toggleClass('show');
    $(".hide-on-mobile").toggleClass('show');
	});
}); 

// Video popup
window.document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
var lightBoxVideo = document.getElementById("hero-video");
window.scrollTo(0, 0);
document.getElementById('light').style.display = 'block';
document.getElementById('fade').style.display = 'block';
lightBoxVideo.play();
}

function lightbox_close() {
var lightBoxVideo = document.getElementById("hero-video");
document.getElementById('light').style.display = 'none';
document.getElementById('fade').style.display = 'none';
lightBoxVideo.pause();
}

//Slider
var quoteSlideIndex = 0;
var bookSlideIndex = 0;
showSlides(quoteSlideIndex, "quote-slide");
showSlides(bookSlideIndex, "book-slide");

function plusSlides(n, slide) {
  if (slide == "book-slide") {
    showSlides(bookSlideIndex += n, slide);
  }
  if (slide == "quote-slide") {
    showSlides(quoteSlideIndex += n, slide);
  }
}

setInterval(function() {
  plusSlides(1, "book-slide");
  plusSlides(1, "quote-slide");
}, 5000);

function showSlides(slideIndex, slide=false) {
  var slides;
 
  if (slide == "book-slide") {
    bookSlideIndex = slideIndex;
    slides = document.getElementsByClassName("book-slide");
    if ((bookSlideIndex) >= slides.length) {bookSlideIndex = 0}
    if ((bookSlideIndex) < 0) {bookSlideIndex = slides.length - 1} 
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[bookSlideIndex].style.display = "block";
  }
  if (slide == "quote-slide") {
    quoteSlideIndex = slideIndex;
    slides = document.getElementsByClassName("quote-slide");
    if ((quoteSlideIndex) >= slides.length) {quoteSlideIndex = 0}
    if ((quoteSlideIndex) < 0) {quoteSlideIndex = slides.length - 1} 
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[quoteSlideIndex].style.display = "block";
  } 
}
