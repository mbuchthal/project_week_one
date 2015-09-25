// $(window).scroll(function() {
//   if ($(this).scrollTop() > 0) {
//     $('img').delay(200)
//     .css('background', 'tomato');
//     .animate({
//       opacity:1,
//       left:0},'slow');
//     });
//   }
// );

$('.lg-eclipse-border').on('click', function(e) {
  e.preventDefault();
  $(this).addClass('jiggle-effect');
});

