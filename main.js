$(function() {

    if (window.innerWidth > 599) {
        $('body').addClass('skin-large');
    }

    $(window).on('resize', function(e) {
        if (this.innerWidth > 599) {
            $('body').addClass('skin-large');
        } else {
            $('body').removeClass('skin-large');
        }
    });

    $('.searchform').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>0 results found</p>');
        $('main ul').empty();
    });

    $('.flyout--click').clickFlyout({focusManagement:'first'});

    $('.flyout--hover').hoverFlyout();
});
