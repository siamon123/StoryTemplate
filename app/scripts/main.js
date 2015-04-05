$("#mobile-menu").click(function() {
  $(this).toggleClass("on");
  $("#menu-wrap").slideToggle();
});
//Smooth Scrolling
//Reference url : https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('.navbar a[href*=#]:not([href=#])').click(function() {
  $(".active").removeClass("active");
  $(this).closest('li').addClass("active");
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function(e){
  var scroll = $(window).scrollTop();
  $('.parallax').css({
		'background-position' : '50% ' + (-scroll*2)+"px"
	});
});
