$(document).ready(function () {
    var link = document.createElement('a');
  	link.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link.setAttribute('href', 'https://ieeexplore.ieee.org/abstract/document/8320349');
    link.setAttribute('target', '_blank');
    link.innerHTML = "Why isn't voting online?";
  	document.getElementById("who").appendChild(link);
    var link2 = document.createElement('a');
  	link2.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link2.setAttribute('href', 'https://www.scientificamerican.com/article/follow-up-what-exactly-is/');
    link2.setAttribute('target', '_blank');
    link2.innerHTML = "Enigma of Wormholes";
  	document.getElementById("who").appendChild(link2);
    var link3 = document.createElement('a');
  	link3.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link3.setAttribute('href', 'https://www.youtube.com/watch?v=8cvhwquPqJ0');
    link3.setAttribute('target', '_blank');
    link3.innerHTML = "Conditioning the mind: Wim Hoff";
  	document.getElementById("who").appendChild(link3);
    var link4 = document.createElement('a');
    link4.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link4.setAttribute('href', 'https://www.youtube.com/playlist?list=PLxavoEPHsuiAEmgKVRc3X2MT07UPz0vb8');
    link4.setAttribute('target', '_blank');
    link4.innerHTML = "Trance of Tame Impala";
    document.getElementById("who").appendChild(link4);
    var link5 = document.createElement('a');
    link5.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link5.setAttribute('href', 'https://www.world-of-lucid-dreaming.com/10-dreams-that-changed-the-course-of-human-history.html');
    link5.setAttribute('target', '_blank');
    link5.innerHTML = "Dream-induced Inspiration";
    document.getElementById("who").appendChild(link5);
    var link6 = document.createElement('a');
    link6.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link6.setAttribute('href', 'https://trackly.com/blog/hacking-productivity-with-the-8020-paretos-principle');
    link6.setAttribute('target', '_blank');
    link6.innerHTML = "80/20 Principle";
    document.getElementById("who").appendChild(link6);
    var link7 = document.createElement('a');
    link7.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link7.setAttribute('href', 'http://freakonomics.com/podcast/creativity-2/');
    link7.setAttribute('target', '_blank');
    link7.innerHTML = "Where does creativity come from?";
    document.getElementById("who").appendChild(link7);
    var link8 = document.createElement('a');
    link8.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
    link8.setAttribute('href', 'https://www.parkwestgallery.com/browse-artwork/gallery/thomas-kinkade');
    link8.setAttribute('target', '_blank');
    link8.innerHTML = "Kinkade's Artistic Vision";
    document.getElementById("who").appendChild(link8);
    $('.bulb-light').click(function() {
      $('#main').toggleClass('night');
      if ($('#main').hasClass('night')) {
        $('.homepage').css({
          'font-family': 'Quicksand',
      		'background-color': '#333',
      		'height': '100%',
      		'-webkit-transition': '-webkit-background-color 0.6s ease-in-out',
          'transition': 'background-color 0.1s ease-in-out',
      		'text-align': 'center'
        });
        $('.text').css({
          'color': '#333',
      		'-webkit-transition': '-webkit-color 0.5s ease-in-out',
          'transition': 'color 0.5s ease-in-out'
        });
        $('.personimg').css({
          'visibility': 'hidden',
      		'-webkit-transition': '-webkit-visibility 0.1s ease-in-out',
          'transition': 'visibility 0.1s ease-in-out'
        });
        $('.color').css({
          'visibility': 'hidden',
          '-webkit-transition': '-webkit-visibility 0s ease-in-out',
          'transition': 'visibility 0s ease-in-out'
        });
        link.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link2.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link3.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link4.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link5.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link6.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link7.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        link8.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:visible;");
        var xy = getRandomPosition(link);
      	link.style.top = xy[1][0] + 'px';
      	link.style.left = xy[0][0] + 'px';
      	link2.style.top = xy[1][1] + 'px';
      	link2.style.left = xy[0][1] + 'px';
      	link3.style.top = xy[1][2] + 'px';
      	link3.style.left = xy[0][2] + 'px';
        link4.style.top = xy[1][3] + 'px';
        link4.style.left = xy[0][3] + 'px';
        link5.style.top = xy[1][4] + 'px';
        link5.style.left = xy[0][4] + 'px';
        link6.style.top = xy[1][5] + 'px';
        link6.style.left = xy[0][5] + 'px';
        link7.style.top = xy[1][6] + 'px';
        link7.style.left = xy[0][6] + 'px';
        link8.style.top = xy[1][7] + 'px';
        link8.style.left = xy[0][7] + 'px';
      } else {
        $('.homepage').css({
          'font-family': 'Quicksand',
          'background-color': 'white',
          'height': '100%',
          '-webkit-transition': '-webkit-background-color 0.6s ease-in-out',
          'transition': 'background-color 0.6s ease-in-out',
          'text-align': 'center'
        });
        $('.text').css({
          'color': '#9696fd',
      		'-webkit-transition': '-webkit-color 0.5s ease-in-out',
          'transition': 'color 0.5s ease-in-out'
        });
        $('.personimg').css({
          'visibility': 'visible',
      		'-webkit-transition': '-webkit-visibility 0.5s ease-in-out',
          'transition': 'visibility 0.5s ease-in-out'
        });
        $('.color').css({
          'visibility': 'visible',
      		'-webkit-transition': '-webkit-visibility 0.5s ease-in-out',
          'transition': 'visibility 0.5s ease-in-out'
        });
        link.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link2.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link3.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link4.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link5.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link6.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link7.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
        link8.setAttribute("style", "position:absolute;color:white;font-family:'Quicksand';font-size:16px;visibility:hidden;");
      }
    });
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

function getRandomPosition(element) {
  var nums = new Array();
  var nums2 = new Array();
  for(var i = 25; i <= $(window).width() - element.clientWidth - 20; i += 15){
    if (!(i > $(window).width()/2 - 75 - element.clientWidth && i < $(window).width()/2 + 75))
      nums.push(i);
  }
  for(var i = 15; i <= $(window).height() - element.clientHeight - 20; i += 30){
      nums2.push(i + 750);
  }
  nums = shuffle(nums);
  nums2 = shuffle(nums2);
	return [nums, nums2];
}

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
