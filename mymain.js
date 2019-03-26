function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

function querySelectorAllToArray(selector, parentNode) {
    parentNode = parentNode || document;
    return nodeListToArray(parentNode.querySelectorAll(selector));
}

window.onload = function(e) {

    console.log('my app loaded');

    /* STEP: ENHANCED SKIP-TO LINK */

    /* STEP: CRITICAL ICON */

    /* STEP: BUTTON FLYOUT */

    /* STEP: LINK FLYOUT */

    /* STEP: PAGE ERROR */

    /* STEP: DYNAMIC FIELD ERROR */

    /* STEP: DYNAMIC PAGE ERROR */
}
