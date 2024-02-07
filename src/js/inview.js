(function($) {
    $.fn.inView = function() {
        var $window = $(window);
        var obj = this;
        $window.on('scroll', function() {
            var windowTop = $window.scrollTop();
            var windowBottom = windowTop + $window.height();
            var objTop = obj.offset().top;
            var objBottom = objTop + obj.height();

            if (windowBottom > objTop && windowTop < objBottom) {
                obj.trigger('inview');
            }
        });

        return this;
    };
})(jQuery);