$(function() {

  var $vidEl = $('#video1');

  $vidEl.on('click', function (e) {
    e.preventDefault();
    this.paused ? this.play() : this.pause();
  });

});
