
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
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});



