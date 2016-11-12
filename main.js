$(function() {
    $('.searchform').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>0 results found</p>');
        $('main ul').empty();
    });
});
