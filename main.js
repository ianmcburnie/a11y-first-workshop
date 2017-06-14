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
            '<section aria-labelledby="error-status" class="page-notice page-notice--priority" id="page-error" role="region">' +
                '<h2 aria-label="Error notice" class="page-notice__status" id="error-status">' +
                    '<svg aria-hidden="true" focusable="false">' +
                        '<use xlink:href="../icons.svg#svg-icon-priority"></use>' +
                    '</svg>' +
                '</h2>' +
                '<span class="page-notice__cell page-notice__cell--align-middle">' +
                    '<p>Please fix the following errors:</p>' +
                    '<ul role="list">' +
                        '<li><a href="#fname">First Name: please enter your first name</a></li>' +
                        '<li><a href="#lname">Last Name: please enter your last name</a></li>' +
                    '</ul>' +
                '</span>' +
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
