var Expander = require('makeup-expander');

function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector, parentNode) {
    parentNode = parentNode || document;
    return nodeListToArray(parentNode.querySelectorAll(selector));
}

window.onload = function(e) {

    /* STEP: ENHANCED SKIP-TO LINK */
    querySelectorAllToArray('.skipto').forEach(function(el, i) {
        el.addEventListener('click', function() {
            var targetEl = document.querySelector(el.querySelector('a').getAttribute('href'));
            targetEl.setAttribute('tabindex', '-1');
            targetEl.focus();
        });
    });

    /* STEP: PAGE ERROR */
    var pageError = document.getElementById('page-error');
    if (pageError) {
        pageError.setAttribute('tabindex', '-1');
        pageError.focus();
    }

    /* STEP: DYNAMIC FIELD ERROR */
    querySelectorAllToArray('.field-validation input').forEach(function(item) {
        var statusText = document.querySelector('#' + item.getAttribute('aria-describedby') + ' span');
        item.addEventListener('blur', function(e) {
            if (this.value) {
                statusText.removeAttribute('hidden');
            } else {
                statusText.setAttribute('hidden', 'hidden');
            }
        })
    });

    /* STEP: DYNAMIC PAGE ERROR */
    var regForm = document.getElementById('reg-form');

    if (regForm) {
        var placeholderEl = document.getElementById('page-error-placeholder');
        var pageErrorTemplate = '' +
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
            placeholderEl.innerHTML = pageErrorTemplate;
            placeholderEl.focus();
        });
    }

    /* STEP: CRITICAL ICON */

    /* STEP: BUTTON FLYOUT */

    querySelectorAllToArray('.expander--click').forEach(function(el, i) {
        const widget = new Expander(el, {
            collapseOnClickOut: true,
            collapseOnFocusOut: true,
            expandedClass: 'expander--expanded',
            expandOnClick: true,
            focusManagement: 'interactive'
        });
    });

    /* STEP: LINK FLYOUT */

    querySelectorAllToArray('.expander--hover').forEach(function(el, i) {
        const widget = new Expander(el, {
            collapseOnMouseOut: true,
            expandedClass: 'expander--expanded',
            expandOnHover: true
        });
    });
}

/* jQuery Plugins
$(function() {
    /* SKIP TO ENHANCED
    $('.skipto').skipTo();

    /* BUTTON FLYOUT
    $('.flyout--click').clickFlyout({focusManagement:'first', closeOnEsc: true});

    /* CLICK FLYOUT + HOVER
    $('.flyout--hover').hoverFlyout();

    /* TOOLTIP
    $('.tooltip').tooltip();

    /* FAKE MENU
    $('.fake-menu').clickFlyout({focusManagement:'first', closeOnEsc: true});

    /* MENU
    $('.menu').menu().on('menuSelect', '[role=menuitem]', function(e, data) {
        alert($(this).text());
    });

    /*
    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ol').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });
});
*/
