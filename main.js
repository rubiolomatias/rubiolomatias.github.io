const nav = document.querySelector("#nav");

const onScroll = (event) => { //navbar
  const scrollPosition = event.target.scrollingElement.scrollTop;

  nav.classList.toggle("scrolled-down", scrollPosition > 56);
};

document.addEventListener("scroll", onScroll, { passive: true });


$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});