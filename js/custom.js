$(document).ready(function () {
    $('.scrollup').fadeOut();
    $('.box').siblings().find('.bottom').slideUp();
    $('.skillbar').each(function(){
  		$(this).find('.skillbar-bar').animate({
			     width:$(this).attr('data-percent')
		  },3000);
	  });
    $('.deg0').on("click", function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg0').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg02').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg45').on("click", function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg45').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg452').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg135').on("click", function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg135').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg1352').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg180').on("click", function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg180').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg1802').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg225').on("click", function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg225').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg2252').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg315').on('click', function(){
      $('.pic').removeAttr('style');
      $('.post-content').removeAttr('style');
      $('.deg315').css({
        filter: 'none',
      	'-webkit-filter': 'grayscale(0%)',
        'z-index': 20,
        'border-radius': '5%'
      });
      $('.deg3152').css({
        'z-index': 23,
        'border-radius': '5%'
      });
    });
    $('.deg02').on("click", function(){
      $('.deg0').removeAttr('style');
      $('.deg02').removeAttr('style');
      $('.deg0').blur();
      $('.deg02').blur();
    });
    $('.deg452').on("click", function(){
      $('.deg45').removeAttr('style');
      $('.deg452').removeAttr('style')
      $('.deg45').blur();
      $('.deg452').blur();
    });
    $('.deg1352').on("click", function(){
      $('.deg135').removeAttr('style');
      $('.deg1352').removeAttr('style');
      $('.deg135').blur();
      $('.deg1352').blur();
    });
    $('.deg1802').on("click", function(){
      $('.deg180').removeAttr('style');
      $('.deg1802').removeAttr('style');
      $('.deg180').blur();
      $('.deg1802').blur();
    });
    $('.deg2252').on("click", function(){
      $('.deg225').removeAttr('style');
      $('.deg2252').removeAttr('style');
      $('.deg225').blur();
      $('.deg2252').blur();
    });
    $('.deg3152').on("click", function(){
      $('.deg315').removeAttr('style');
      $('.deg3152').removeAttr('style');
      $('.deg315').blur();
      $('.deg3152').blur();
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    jQuery.fn.rotate = function(degrees) {
        $(this).css({
            '-webkit-transform' : 'rotate('+ degrees +'deg)',
            '-moz-transform' : 'rotate('+ degrees +'deg)',
            '-ms-transform' : 'rotate('+ degrees +'deg)',
            'transform' : 'rotate('+ degrees +'deg)'
        });
    };
    $('.top').on('click', function() {
    	$parent_box = $(this).closest('.box');
    	$parent_box.siblings().find('.bottom').slideUp();
    	$parent_box.find('.bottom').slideToggle(500, 'swing', function() {
        $('.box').each(function(i, obj) {
            if($(this).children(".bottom").is( ":visible" )) {
              $(this).find(".top > .full").text($(this).children(".bottom").children(".long").text());
              $(this).children(".bottom").children(".long").text('');
              $(this).children(".top").children(".pic").animate({
                width : "27%"
              }, 300 );
              if($(document).width()<=455){
                $(this).children(".top").children("p").animate({
                  width : "100%"
                }, 300 );
              }
              else{
                $(this).children(".top").children("p").animate({
                  width : "64%"
                }, 300 );
              }
              $(this).animate({
                width : "100%"
              }, 300 )
              $(this).children(".top").children(".arrow").rotate(90);
            }
            else {
              if($(this).find(".top > .full").text().length>0){
                $(this).children(".bottom").children(".long").text($(this).find(".top > .full").text());
                $(this).find(".top > .full").text('');
              }
              $(this).children(".top").children(".pic").animate({
                width : "16%"
              }, 300 );
              $(this).children(".top").children("p").animate({
                width : "66%"
              }, 300 );
              if($(document).width()<=455) {
                $(this).animate({
                  width : "75%"
                }, 500 );
              }
              else {
                $(this).animate({
                  width : "60%"
                }, 500 );
              }
              $(this).children(".top").children(".arrow").rotate(0);
            }
        });
      });
    });
});
