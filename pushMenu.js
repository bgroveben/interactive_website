var main = function() {
  /* Push the body and nav over by 285px */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
    $('body').animate({
      left: "285px"
    }, 200);
  });
  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);
    $('body').animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);
