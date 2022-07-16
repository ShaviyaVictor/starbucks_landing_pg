// function or the pre-loader functionality
var loader = document.querySelector('#preloader');

window.addEventListener('load', function() {
  loader.style.display = 'none'
});
// end of preloader function

// function for changing the image on click
function imgSlider(anything) {
  document.querySelector('.starbucks').src = anything
};

// function for changing the color of the circular background
function changeCircleBgColor(color) {
  // document.querySelector('.circle').style.background = color

  // an alternative that uses const to avoid the long line of code
  var circle = document.querySelector('.circle');
  circle.style.background = color;
};

// function for displaying the menuToggle button
function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}