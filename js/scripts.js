/*
Arquivos de Scrpits 
Profeto Final Formação Front-End
Instituto Infnet
Professor: Marcelo Torres
*/
$(document).ready(function(){
    $('a[href^="#"]').on('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    jQuery(window).on("scroll", function() {
        if(jQuery(window).scrollTop() > 130) {
          jQuery(".sup").addClass("bg-vermelho");
        } else {
          jQuery(".sup").removeClass("bg-vermelho");
        }
      });
});