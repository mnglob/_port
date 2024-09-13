(function($) {
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 0)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery);