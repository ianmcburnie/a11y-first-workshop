window.onload = function(e) {

    /* ALL PAGES */
    if (document.body.clientWidth > 600) {
        document.body.classList.add('skin-large');
    }

    /* PAGE NOTICE */
    document.querySelector('.page-notice').focus();
}


/* jQuery Plugins */
$(function() {
    $('.skipto--enhanced').skipTo();

    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ol').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });

    $('.flyout--click').clickFlyout({focusManagement:'first', closeOnEsc: true});

    $('.flyout--hover').hoverFlyout();

    //$('.tooltip').hoverFlyout({expandedClass:'tooltip--expanded'}).focusFlyout({expandedClass:'tooltip--expanded'});

    $('.tooltip').tooltip();

    $('.fake-menu').clickFlyout({focusManagement:'first', closeOnEsc: true});

    $('.menu:not(.menu--faux)').menu().on('menuSelect', '[role=menuitem]', function(e, data) {
        alert($(this).text());
    });
});
