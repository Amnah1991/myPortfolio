//Time line 

$('ul#time-line li').each(function(){			
			var stop = $(window).scrollTop() + $(window).height()/1.2;
			var litop = $(this).offset().top;
			if (stop > litop){
				$(this).addClass('visibility');
			}			
		});
		$(window).scroll(function(){	
			$('ul#time-line li').each(function(){			
				var stop = $(window).scrollTop() + $(window).height()/1.2;
				var litop = $(this).offset().top;
				if (stop > litop){
					$(this).addClass('visibility');
				} else{
					$(this).removeClass('visibility');
				};
				console.log(litop+' - '+stop);
			});
		});

 
//skills


$(document).ready(function () {
    function animateSkills() {
        if ($('.skill').length > 0) {
            var counter = 1;
            $('.skill').each(function () {
                var el = $(this);
                var level = el.find('.level').attr('data-level');
                el.find('.level').delay(counter * 400).animate({
                    width: level + "%"
                }, 500, "easeOutBack");
                counter++;
            });
        }
    }
    
    animateSkills();
    
});


//nav 

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})

