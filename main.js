$(function() {

    /* BEGIN skin adaptive breakpoints */
    if (window.innerWidth > 600) {
        $('body').addClass('skin-large');
    }

    $(window).on('resize', function(e) {
        if (this.innerWidth > 600) {
            $('body').addClass('skin-large');
        } else {
            $('body').removeClass('skin-large');
        }
    });
    /* END skin adaptive breakpoints */

    $('.skipto--enahanced').skipTo();

    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ol').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });

    $('.flyout--click').clickFlyout({focusManagement:'first'});

    $('.flyout--hover').hoverFlyout();

    //$('.tooltip').hoverFlyout({expandedClass:'tooltip--expanded'}).focusFlyout({expandedClass:'tooltip--expanded'});

    $('.tooltip').tooltip();

    $('.menu--faux').clickFlyout({focusManagement:'first'});

    $('.menu:not(.menu--faux)').menu().on('menuSelect', '[role=menuitem]', function(e, data) {
        alert($(this).text());
    });
});
