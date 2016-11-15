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

    $('.skipto').skipTo();

    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ul').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });

    $('.flyout--click').clickFlyout({focusManagement:'first'});

    $('.flyout--hover').hoverFlyout();

    $('.tooltip').hoverFlyout({expandedClass:'tooltip--expanded'}).focusFlyout({expandedClass:'tooltip--expanded'});
});
