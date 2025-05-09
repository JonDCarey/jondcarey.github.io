// Define the speed (between 0 and 1; less than 1 means slower than normal scroll)
const speed = 0.75;

window.addEventListener('scroll', function() {

  // Get the current scroll position
  const scrollPosition = window.scrollY;

  document.querySelectorAll('.section-title').forEach(element => {
    // Offset the upward scroll movement, making it appear to move up slower
    element.style.transform = `translateY(${scrollPosition * (1 - speed)}px)`;
  });
});

// add scrolled class to elements below viewport
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with '.my-element' and the 'body' element
  const elements = document.querySelectorAll('.section-title, body');
  // Capture the initial viewport height
  const initialViewportHeight = window.innerHeight;

  // Add a scroll event listener
  window.addEventListener('scroll', function() {
    if (window.scrollY > initialViewportHeight) {
      // Add the class to all selected elements when scrolled past viewport height
      elements.forEach(el => el.classList.add('scrolled'));
    } else {
      // Remove the class when scrolled back above viewport height
      elements.forEach(el => el.classList.remove('scrolled'));
    }
  });
});