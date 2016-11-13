$(function() {

    $(window).on('resize', function(e) {
        if (this.innerWidth > 600) {
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

    $('#profile').clickFlyout({focusManagement:'first'});
});
