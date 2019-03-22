window.onload = function(e) {

    /* ALL PAGES */
    if (document.body.clientWidth > 600) {
        document.body.classList.add('skin-large');
    }

    /* ERROR NOTICE */
    var pageError = document.getElementById('page-error');
    if (pageError) {
        pageError.focus();
    }

    /* INLINE ERROR CLIENT */
    document.querySelectorAll('.field-validation input').forEach(function(item) {
        var statusText = document.querySelector('#' + item.getAttribute('aria-describedby') + ' span');
        item.addEventListener('blur', function(e) {
            if (this.value) {
                statusText.removeAttribute('hidden');
            } else {
                statusText.setAttribute('hidden', 'hidden');
            }
        })
    });

    /* PAGE ERROR CLIENT */
    var regForm = document.getElementById('reg-form');

    if (regForm) {
        var placeholderEl = regForm.querySelector('.page-error-placeholder');
        var template = '' +
        '<section aria-labelledby="attention-status" class="page-notice page-notice--attention" id="page-error" role="region" tabindex="-1">' +
            '<h2 class="page-notice__status" id="attention-status">' +
                '<span aria-label="Attention" role="img"></span>' +
            '</h2>' +
            '<div class="page-notice__content">' +
                '<p>Please fix the following errors:</p>' +
                '<ul role="list">' +
                    '<li><a href="#fname">First Name: please enter your first name</a></li>' +
                    '<li><a href="#lname">Last Name: please enter your last name</a></li>' +
                '</ul>' +
            '</div>' +
        '</section>';

        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            placeholderEl.innerHTML = template;
            placeholderEl.focus();
        });
    }
}

/* jQuery Plugins */
$(function() {
    /* SKIP TO ENHANCED */
    $('.skipto').skipTo();

    /* CLICK FLYOUT */
    $('.flyout--click').clickFlyout({focusManagement:'first', closeOnEsc: true});

    /* CLICK FLYOUT + HOVER  */
    $('.flyout--hover').hoverFlyout();

    /* TOOLTIP */
    $('.tooltip').tooltip();

    /* FAKE MENU */
    $('.fake-menu').clickFlyout({focusManagement:'first', closeOnEsc: true});

    /* MENU */
    $('.menu').menu().on('menuSelect', '[role=menuitem]', function(e, data) {
        alert($(this).text());
    });

    /*
    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ol').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });
    */
});
