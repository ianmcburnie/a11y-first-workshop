# A11Y-First : Web Accessibility Workshop

The idea of this project it to run a live-coding session starting with an empty HTML file. No web server is required. From that starting point the session instructor will progressively build up that page, and several others, introducing many common accessibility principles and techniques along the way.

* Start
* Part 1: Introduces Structure
* Part 2: Introduces Links
* Part 3: Introduces Form Controls
* Part 4: Introduces Form Validation
* Part 5: Introduces Buttons
* Part 6: Introduces ARIA Widgets
* Part 7: Introduces Data Tables

The following sections of this README act as a guide to the session instructor.

## Start

For a live-coding workshop, please prime your initial index.html file with the following content:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://ir.ebaystatic.com/cr/v/c1/skin/v2.10.1/css/skin.min.css"/>
        <link rel="stylesheet" href="https://ir.ebaystatic.com/cr/v/c1/skin/v2.10.1/css/grid-full.min.css"/>
        <link rel="stylesheet" href="app.css"/>
    </head>
    <body></body>
    <script src="app.js"></script>
</html>
```

If you get lost or lose your way, each step has a "one I made earlier" that you can copy-and-paste from into your file.

## Part 1: Introduces Structure

Part 1 builds a mock version of a typical eCommerce homepage.

Whenever I build a new page or component, I always start with the markup. I don't even think about the CSS and JavaScript until I am happy with the structure and semantics. In fact, I will go as far as to disable CSS and JavaScript in my browser to ensure that the raw markup is accessible and functional.

Some developers, on the other hand, like to start with the JavaScript first. Or the "bells and whistles" as I like to say. To me this is like a builder placing down all of the household electronics (television, microwave, internet router, etc) on the plot before the foundations have been laid and walls built. All of those electronics are just going to get in the way. Okay, maybe I need a better analogy ;-)

### Meta Data

The page content for this step is left intentionally blank.

1. Add `lang="en"` to the `html` tag
1. Add `<meta charset="utf-8" />` to head
1. Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to head
1. Test page with screen reader, notice nothing is announced
1. Add `<title>Meta - A11Y First Workshop</title>` to head
1. Test page with screen reader, notice title is now announced

We have introduced 3 key pieces of 'meta' data:

* Language attribute
    * Language attribute ensures correct pronunciation, amongst other things. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id">WCAG 3.1.1</a>
* Viewport Scale
    * Viewport meta must ensure pinch-to-zoom is **not** disabled. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale">WCAG 1.4.4</a> and <a href="https://ebay.gitbooks.io/mindpatterns/content/antipatterns/disabling_pinch-to-zoom.html">MIND Anti-Pattern: Disabling Pinch-to-Zoom</a>.
    * Valid use cases for disabling pinch to zoom are mapping applications and video games
* Title
    * Title ensures the user can orient themselves. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-title">WCAG 2.4.2</a>. Titles identify the current location without requiring users to read or interpret page content.

### Paragraphs

1. Add three paragraphs of content to the page:
    * `<p>eBay is where the world goes to shop, sell, and give. Our mission is to be the world’s favorite destination for discovering great value and unique selection.</p>`
    * `<p>For over 20 years, we've been working to create more economic opportunity for everyone. And we're just getting started.</p>`
    * `<p>Copyright © 1995-2017 eBay Inc. All Rights Reserved.</p>`
1. Ensure Voiceover web rotor settings include 'Static Text'.
1. Navigate voiceover to web area (show that voiceover can read desktop and other desktop applications too, not just web pages)
1. Open Voiceover rotor and explore what it can find on the page (hint: nothing much yet! only the static paragraph text).
1. We ignore Voiceover 'Web Spots' rotor as this is specific to Voiceover.

<img src="images/settings-web-rotor.png" alt="Screenshot of the Voiceover Web Rotor settings" />

### Unordered Lists

1. Add two unordered lists to the page (see markup below)
1. Ensure Voiceover web rotor settings include 'Lists'.
1. Explore lists with voiceover shortcuts and web rotor.
1. Demonstrate that voiceover stops on list element and announces number of items in each list
1. Demonstrate that voiceover announces 'bullet' before each list item contents
1. Discuss and demonstrate difference between unordered list and ordered list

```html
<ul>
    <li>Mix It Up - 17 items by statesidelife</li>
    <li>At the Hearth - 9 items by designassembly</li>
    <li>Give Thanks - 35 items by ebayhomeeditor</li>
    <li>Guests of Honour - 30 items by ebaydealseditor</li>
</ul>

<ul>
    <li>Christmas Socks - $4.99</li>
    <li>MacBook Air - $799.99</li>
    <li>Xbox One 500GB - $169.99</li>
    <li>Playstation Pro 1TB - $419.99</li>
</ul>
```

### Headings

1. Add headings to page:
    * `<h1>eBay</h1>`
    * `<h2>Collections</h2>`
    * `<h2>Daily Deals</h2>`
    * `<h2>Legal</h2>`
1. Navigate headings with voiceover keyboard shortcuts and web rotor

### Clipped Text

1. Add `clipped` class to the 'Legal' header
1. Demo that legal header is now 'invisible'
1. Demo the legal header is still conveyed to screen reader
1. Show legal header in screen reader headings list

```css
.clipped {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
          clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
```

### Landmarks

1. Add the following landmark tags:
    * `<header>` around h1
    * `<main>` around lists
    * `<footer>` around legal content
1. Notice there is no *visual* difference to the page. This is intentional.
1. Display landmarks in screen reader landmarks lists. Notice that footer is not visible
1. Add the following landmark roles
    * `role="banner"` to header
    * `role="main"` to main
    * `role="contentinfo"` to footer
1. Display landmarks in screen reader landmarks lists. Notice that footer is now visible as contentinfo

```css
footer[role="contentinfo"] {
    background-color: white;
    border-top: 1px solid #ccc;
    margin-top: 32px;
    padding-bottom: 8px;
}
```

### Images

1. Replace `<h1>eBay</h1>` with `<h1><img src="images/ebay-hires.png" /></h1>` (lack of alt text intentional for now)
1. Demonstrate behaviour of missing alt text in screen reader (it reads image url/filename)
1. Add `alt="ebay"` to h1 content image
1. Demonstrate behaviour of alt text with screen reader (it now reads 'ebay' text)
1. Add image before each collection and deal title, and for the time being set alt="collection/deal title" (we will set this to blank in a later section)
1. Wrap title in paragraph tag
1. Demonstrate that voiceover no longer announces 'bullet' for each list item
1. Use spacebar, up arrow, down arrow, page up, page down, home and end keys to scroll page

Note that the image alt text is the same as the title. Technically speaking these images can be classed as presentational, because if the images were not displayed, we still have the same text below (the title text). We leave the alt text in place for now. Yes, it's a redundant/duplicate navigation for screen reader users, but not technically 'non-accessible'. When we convert the item to a tile, in an upcoming step, we will set this value to blank.

### Table Layout

Demonstrate the problems with using table tags for layout.

1. Replace the list of collections with a 4x4 table
1. Replace the list of deals with a 1x4 table
1. Demonstrate that screen reader announces rows & columns (voiceover also needs tbody and empty th to demo this)
1. Add role="presentation" to the two tables
1. Demonstrate that screen reader now no longer announces table dimensions

### Grid System

Demonstrates that in some cases, CSS can effect semantics.

1. Revert the table changes made in the previous step (i.e. back to a list)
1. Add div wrapper container inside of body (presentational step, see CSS below)
1. Add div wrapper container inside of footer (presentational step, see CSS below)
1. Add class `.grid` to the `.collections` and `.deals`
1. Add `grid__group grid__group--no-gutters grid__group--wrap` to the collections list
1. Add `grid__group grid__group--no-gutters` to the deals list
1. Wrap each collection list item in a `class="grid__cell grid__cell--one-half"`
1. Demonstrate that voiceover no longer announces list semantics
1. Add `role="list"` to the lists to restore list semantics
1. Add `display: block` and `max-width: 100%` to images (see CSS below) so they scale responsively (not strictly needed for a11y purposes).

Adding `list-type: none` (via grids css) to the lists means they are <a href="http://www.456bereastreet.com/archive/201109/screen_readers_list_items_and_list-stylenone/">no longer announced as a list in some screen readers</a>. We fix this issue by applying `role="list"` to each list.

```css
body > div,
footer[role="contentinfo"] > div {
    margin: 0 auto;
    max-width: 1280px;
}

.collections img,
.deals img {
    display: block;
    max-width: 100%;
}
```

### Cards

A purely presentation step where we convert each collection item into a card.

1. Wrap each collection item with `<div class="card"><div class="card__cell">...</div></div>`

## Part 2: Introduces Links

Part 2 continues to build upon our homepage, before moving onto a typical sign in page.

### Text Links

1. Add links around collection and daily deals titles
1. Temporarily add `a {text-decoration: none}`
1. Demonstrate the challenges of finding hyperlinks within paragraph text
1. Remove `a {text-decoration: none}`
1. With screen reader disabled, use TAB key to navigate focus through links
1. Demo different focus outline in Firefox
1. Notice that hand cursor shows for links
1. Notice that with focus on a link all of the page scroll keys still work.
1. With screen reader on notice that visited links will be announce as 'visited'.
1. Notice that it would be nice to have the image as a link to the item page too. We will address this in a later step.

#### Discussion

* Should the link/title be a heading? I would say it is not strictly necessary, but opinion would be divided here.

### Tiles

1. Move anchor tag from collection and deals titles and wrap it around the entire contents of list item
1. Show keyboard focus indicator
1. Set `display: block` on anchor to fix focus-indicator.
1. Show fixed focus indicator
1. Listen to anchor in screen reader and notice that link text is red twice
1. Set the image alt value to blank
1. Listen to anchor in screen reader and now link text is only read once
1. Demonstrate what happens if we try to make seller profile a nested link inside of the tile.
1. Notice that now all text in tile is blue. Can fix this with CSS.

```css
a.tile {
    display: block;
}
a.tile p:last-child {
    color: #555;
}
```

### Ambiguous Links

1. Add 'See all' link after collections and deals lists
1. Align link to center of grid
1. Demonstrate that we now have two 'ambiguous' links with same text that go to different places
1. Append clipped text to each link text
1. Demonstrate the difference if using aria-label

```html
<div class="see-all">
    <a href="http://www.ebay.com/cln">See all<span class="clipped"> - Collections</span></a>
</div>
...
<div class="see-all">
    <a href="http://deals.ebay.com">See all<span class="clipped"> - Deals</span></a>
</div>
```

```css
.see-all {
    text-align: center;
}
.see-all a {
    text-decoration: none;
}
```

### Fake Buttons

1. Add `class="btn"` to the two see all links
1. Notice that skin hasn't styled them. Something is wrong. Skin enforces accessibility. We don't allow btn class on a link unless developer signifies they know what they are doing.
1. Add `class="fake-btn"`
1. Link is now styled as a button
1. Demo that screen reader still reads them as links (which is correct)
1. Explain that this can cause issues for customer service (non-sighted user reports UI control as a link, while sighted customer service person sees a button)
1. The giveaway for mouse users is the hand cursor icon.
1. The giveaway for keyboard users is the underline on focus.

### New Window Link

Append the following link to the legal footer paragraph:

```html
<a href="http://pages.ebay.com/help/policies/user-agreement.html" target="_blank">User Agreement</a></p>
```

Demonstrate that links opens a new window, and screen reader users is not notified.

Then add clipped text:

```html
<a href="http://pages.ebay.com/help/policies/user-agreement.html" target="_blank">User Agreement<span class="clipped"> - opens in new window or tab</span></a></p>
```

This lets screen reader users know about link behaviour, but sighted users still do not know. Let's fix that with an icon:

```html
<a href="http://pages.ebay.com/help/policies/user-agreement.html" target="_blank">User Agreement <span class="icon icon--window" role="img" aria-label="Opens in new window or tab"></span></a>
```

### Navigation Landmark

This is an opportunity to recap, and build upon, headings, landmarks and links.

1. Add list of links (see HTML below) after banner tag
1. Wrap links with `<nav id="cat-nav" role="navigation">`
1. Add `<h2 class="clipped" id="cat-nav">Categories</h2>`
1. Demo new navigation landmark in screen reader.
1. Add `aria-labelledby="main-nav"` to nav tag
1. Demo labelled navigation landmark in screen reader

```html
<nav aria-labelledby="cat-nav-title" id="cat-nav" role="navigation">
    <h2 class="clipped" id="cat-nav-title">Categories</h2>
    <ul role="list">
        <li><a href="http://www.ebay.com/motors">Motors</a></li>
        <li><a href="http://www.ebay.com/motors">Fashion</a></li>
        <li><a href="http://www.ebay.com/motors">Electronics</a></li>
        <li><a href="http://www.ebay.com/motors">Collectibles &amp; Art</a></li>
        <li><a href="http://www.ebay.com/motors">Home &amp; Garden</a></li>
        <li><a href="http://www.ebay.com/motors">Sporting Goods</a></li>
        <li><a href="http://www.ebay.com/motors">Toys</a></li>
        <li><a href="http://www.ebay.com/motors">Business &amp; Industrial</a></li>
        <li><a href="http://www.ebay.com/motors">Music</a></li>
        <li><a href="http://www.ebay.com/motors">Holiday</a></li>
    </ul>
</nav>
```

```css
#cat-nav [role=list] {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 1em 0;
}
#cat-nav li {
    text-align: center;
    width: 128px;
}
#cat-nav a {
    font-size: 12px;
}
```

### Skip-To Link

1. Add `<span class="skipto"><a href="#mainContent">Skip to main content</a></a>`
1. Add `id="mainContent"` to main landmark
1. Demo keyboard behaviour
1. Add class `clipped clipped--stealth` to skip link
1. Demo that skip link now only appears on keyboard focus
1. Demo how screen reader focus does not get set
1. Add `tabindex="-1"` to main landmark
1. Demo how screen reader focus is now set
1. Demo that permanent tabindex on main element causes a focus outline when clicked with mouse or touch.

```html
<span class="skipto">
    <a href="#mainContent" class="clipped clipped--stealth">Skip to main content</a>
</span>
```

```css
.clipped--stealth:focus {
    -webkit-clip-path: unset;
    clip: unset;
    clip-path: auto;
    height: auto;
    width: auto;
    z-index: 1;
}

a[href='#mainContent'] {
    background-color: LightYellow;
    left: 0;
    padding: 0.25em;
    top: 0;
}

#mainContent:focus {
    outline: 0 none;
}
```

### IFrame

1. Add iframe between header and main (without a title attribute for now)
1. Demo that iframe is keyboard focusable in Firefox
1. Add image to iframe_content.html
1. Navigate inside iframe with screen reader
1. Demonstrate untitled iframe with screen reader
1. Add `title="Advert"` to iframe and demo with screen reader
    * This is the only recommended use of `title` attribute! (i.e. do not use it as a 'tooltip' on links)
1. Wrap image in link
1. Demonstrate iframe taborder with keyboard
1. Demonstrate focus indicator issue with iframe content when iframe body has zero margin
1. Create an advert that plenty of margin around hyperlink
1. Wrap iframe in `<aside role="complementary">`

```html
<aside role="complementary">
  `<iframe src="iframe_content.html" scrolling="no" title="Advert"></iframe>`
 </aside>
```

This is the content of the IFRAME:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body {
                margin: 0;
            }
            a {
                position: absolute;
                top: 20px;
                left: 20px;
            }
            a:focus {
                outline: 2px dashed white;
            }
        </style>
    </head>
    <body>
        <img src="images/gift-cards-for-home.jpg" alt="" />
        <a href="http://www.ebay.com/rpp/holidays/?&_trkparms=%26clkid%3D368520364132448429" target="_parent">
            <img src="images/advert-gift.jpg" alt="It's the gift they've been eyeing all year. Find it here." />
        </a>
    </body>
</html>
```

### CHECKPOINT: Sign In &amp; Registration

We now move onto a new page. Actually, two pages, the signin and registration pages. They both have the following content to begin with:

```html
<div role="main">
    <h1 class="clipped">Sign In and Registration</h1>
    <!-- content goes here -->
</div>
```html

Create a new CSS file for each new page:

```css
[role="main"] {
    background-color: white;
    border: 1px solid #ccc;
    margin: 16px auto;
    padding: 16px;
    width: 400px;
}
```

### Fake Tabs

Links are sometimes presented visually as tabs, but retain their link behaviour. It is a common mistake amongst developers to assign the ARIA tab related roles to these links.

Add the following list of links inside the main landmark:

```html
<div>
    <ul>
        <li>
            <a href="fake-tabs.html">Sign In</a>
        </li>
        <li>
            <a href="../reg/fake-tabs.html">Register</a>
        </li>
    </ul>
    <div>
        <p>Sign-in form goes here</p>
    </div>
</div>
```

Demonstrate that everything we have already learnt about lists and links applies here. We could also use a navigation landmark.

Now add the following Skin classes to style the links as fake tabs:

```html
<div class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="#">Sign In</a>
        </li>
        <li class="fake-tabs__item">
            <a href="reg.html">Register</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <form>
            <p>Sign-in form goes here</p>
        </form>
    </div>
</div>
```

## Part 3: Introduces Form Controls

Part 3 continues on with our signin and registration pages.

### Textbox

Add textbox and label for email inside of form.

```html
<label for="email">Email</label>
<input id="email" name="email" type="text" />
```

1. Demo that textbox is focusable with TAB key
1. Demo how ARROW key behaviour on textbox is different than on link.
1. Talk about ARROW key behaviour and 'forms mode' of screen reader.
1. Demo that ENTER key does nothing... yet
1. Demo that screen reader announces value, label, type and state (in no particular order)
1. The `name` attribute is used by the server (key/value pair). The `id` attribute is used by the client (for link anchors, label targets, scripting)
1. Add `disabled` attribute to textbox and demonstrate screen reader behaviour
1. Remove `disabled` attribute
1. Add `autofocus` attribute to textbox and demonstrate behaviour on page load
1. Remove `autofocus` attribute

Also add textbox &amp; label for password, first name, last name and phone, adding [Skin Textbox Classes](https://ebay.github.io/skin/#textbox). For example:

```html
<div class="field">
    <label class="field__label field__label--stacked" for="email">Email</label>
    <div class="field__control textbox">
        <input class="textbox__control textbox__control--fluid" id="email" name="email" type="text" />
    </div>
</div>
```

### ARIA Labels

For this step we move back to our `signin.html` page (it should currently only consist of fake tabs and an empty form).

An unfortunate recent trend in web design is to use the `placeholder` attribute as an alternative to the label tag. **We strongly discourage this behaviour, especially for long forms, because of cognitive issues caused by the transient nature of placeholder text**.

If you must implement this pattern, at a very minimum every input must have an `aria-label` attribute that will act in place of the missing label tag for screen readers (another alternative is to use the previously mentioned `clipped` class on actual label tags). Inline icons should also be used to mitigate problems caused by the lack of permanent visual label.

```html
<div class="field">
    <div class="field__control textbox">
        <svg aria-hidden="true" class="textbox__icon" focusable="false">
            <use xlink:href="../icons.svg#svg-icon-mail"></use>
        </svg>
        <input aria-label="Email or username" class="textbox__control textbox__control--fluid" type="text" placeholder="Email or username" />
    </div>
</div>

<div class="field">
    <div class="field__control textbox">
        <svg aria-hidden="true" class="textbox__icon" focusable="false">
            <use xlink:href="../icons.svg#svg-icon-star"></use>
        </svg>
        <input aria-label="Password" class="textbox__control textbox__control--fluid" id="password" placeholder="Password" type="password" />
    </div>
</div>
```

*NOTE*: I currently don't have a better icon for password! It should ideally be a padlock or something.

Fortunately, we are now starting to see a shift away from this pattern towards floating labels, which counters the problems caused by transient placeholder text.

### Checkbox

Add a checkbox to the signin page.

```html
<div class="field">
    <input type="checkbox" name="stay" id="stay"/>
    <label for="stay">Stay signed in</label>
</div>
```

### Custom Checkbox

It is possible to replace the default checkbox style with SVG.

```html
<div class="field">
    <span class="field__control checkbox">
        <input class="checkbox__control" id="ssi" name="ssi" type="checkbox" />
        <span class="checkbox__icon" hidden>
            <svg aria-hidden="true" focusable="false">
                <use xlink:href="../icons.svg#svg-icon-checkbox"></use>
            </svg>
        </span>
    </span>
    <label class="field__label field__label--end" for="ssi">Stay signed in</label>
</div>
```

### Field Description

In addition to a short label, a field might also have longer descriptive text. For example, the eBay signin page has the text "Using a public or shared device? Uncheck to protect your account." next to the checkbox.

1. Add `<p id="ssi-description">Using a public or shared device? Uncheck to protect your account.</p>`
1. Add `aria-describedby="ssi-description"` to the checkbox
1. Demonstrate that voiceover reads the description after a short pause

### Radio

Radio buttons are our first introduction to using the ARROW keys. The TAB key moves keyboard focus into the radio group, the ARROW keys interact with the radio group buttons. Pressing the TAB key again moves keyboard focus off the radio group onto the next interactive element on the page.

1. Add the HTML to the fake tabs content panel
1. Demonstrate with screen reader that the radio button labels are announced

```html
<span class="field">
    <input class="field__control" id="paccount" name="account_type" type="radio" value="p" />
    <label class="field__label field__label--end" for="paccount">Personal Account</label>
</span>
<span class="field">
    <input class="field__control" id="baccount" name="account_type" type="radio" value="b" />
    <label class="field__label field__label--end" for="baccount">Business Account</label>
</span>
```

1. Next, add a fieldset and legend
1. Demonstrate with screen reader that each radio button now announces the legend

```html
<fieldset>
    <legend class="clipped">Account Type</legend>
    <span class="field">
        <input class="field__control" name="account_type" type="radio" value="p" />
        <label class="field__label field__label--end">Personal Account</label>
    </span>
    <span class="field">
        <input class="field__control" name="account_type" type="radio" value="b" />
        <label class="field__label field__label--end">Business Account</label>
    </span>
</fieldset>
```

### Custom Radio

Skin enhances the native radios with a custom SVG style, while maintaining the accessibility of the underlying form controls.

Anytime you need to ensure the user makes only single selection (e.g. [star rating](http://ianmcburnie.github.io/mindpatterns/input/starrating/)), radio buttons should be used, and their appearance can be customised using icon fonts or SVG.

```html
<span class="radio">
    <input class="field__control radio__control" name="account_type" type="radio" value="p" />
    <span class="radio__icon" hidden>
        <svg aria-hidden="true" focusable="false">
            <use xlink:href="../icons.svg#svg-icon-radio"></use>
        </svg>
    </span>
</span>
```

### Listbox

1. ENTER key does not submit form.
1. SPACE or ARROW key expands.
1. ARROW keys highlight options, ENTER or SPACE selects.
1. Screen reader announces control value, label, type
1. Add [Skin Listbox Classes](https://ebay.github.io/skin/#listbox)

### Submit

Every form requires a submit button, otherwise keyboard accessibility of form is broken (ENTER key will not work, see above).

1. Add `<button type="submit">Register</button>`
1. Notice that mouse hand cursor does not show for buttons.
1. Screen reader announces button value/label and type
1. Demo SPACEBAR and ENTER key behaviour
1. Demo that form submits an HTTP GET request by default. A submit button is the only button that should navigate to a new URL in this way.
1. Demo that keyboard navigation starts from top of new page
1. Add `action="form-validation.html"` to the form tag
1. Add skin classes to button `class="btn btn--primary"`


```html
<div class="field">
    <button class="btn btn--fluid btn--primary" type="submit">Register</button>
</div>
```

#### Reset

1. Add reset button after submit button and demo it's behaviour

## Part 4: Introduces Validation

In part 4 we continue with our sign and registration pages introducing server-side and client-side validation.

### CHECKPOINT: Registration Error Page

Duplicate your current `signin.html` and name it `form-validation.html`.

### Page Error

At the start of the form, add the following notice:

```html
<section aria-labelledby="error-status" class="page-notice page-notice--priority" role="region">
    <h2 aria-label="Error notice" class="page-notice__status" id="error-status">
        <svg aria-hidden="true" focusable="false">
            <use xlink:href="../icons.svg#svg-icon-priority"></use>
        </svg>
    </h2>
    <span class="page-notice__cell page-notice__cell--align-middle">
        <p>Something went wrong. Please try again.</p>
    </span>
</section>
```

If JavaScript is available we can enhance this experience by setting focus on the page notice. This is our first introduction to the concept of focus management, but bear in mind that **this is one of the very few scenarios we would consider setting focus after page load!**

1. Add `tabindex="-1"` to the page notice
1. Add the script below to set focus after page load.
1. Notice that the message cannot be re-focussed again after focus is lost. This is intentional,

```js
window.onload = function(e) {
    document.querySelector('.page-notice--priority').focus();
}
```

So, we know *something* went wrong, but not *what* went wrong. Let's make our error message more descriptive.

```html
<p>Please fix the following errors:</p>
<ul role="list">
    <li>First Name</li>
    <li>Last Name</li>
</ul>
````

```css
.page-notice--priority ul {
    list-style-type: none;
    padding: 0;
}
```

This may be a long form with many fields in the tab order. How can we make life easier for keyboard user to get directly to those invalids fields. The answer is skip links of course (remember we covered these earlier)

```html
<ul role="list">
    <li><a href="#fname">First NameM</a></li>
    <li><a href="#lname">Last Name</a></li>
</ul>
```

### Inline Errors

Let's add individual error descriptions next after the first and last name fields. For example:

```html
<div class="field__description field__description--error" id="email-error">
    <span>Please enter your first</span>
</div>
```

This is technically accessible, but playing 'hunt' the invalid field is not much fun for non-sighted users. Let's make a quick improvement, by adding `aria-invalid="true"` to the two textboxes:

### Inline Errors Enhanced

todo

### Page Errors Enhanced

todo

### Password Helper

todo

## Part 5: Introduces Buttons

For Part 5, we move back to our homepage.

### Skip-To Link Enhanced

Rather than adding permanent tabindex to main, it would be better to set a temporary tabindex using javascript. The tabindex can be set when the skipto link is clicked (we already know the target id), and the tabindex can be removed as soon as the target loses focus.

```js
$('.skipto--enhanced').skipTo();
```

### Click Flyout

The eBay shop by category button is a good example of a flyout that opens on click.

```css
.flyout {
    position: relative;
}
.flyout__overlay {
    background-color: LightYellow;
    display: none;
    padding: 1rem;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
}

.flyout--click .flyout__trigger[aria-expanded=true] + .flyout__overlay {
    display: block;
}
```

```js
$('.flyout--click').clickFlyout({focusManagement:'first'});
```

### Click Flyout + Hover

The profile button is a good example of a button that opens on click and hover.

### Hover Flyout

We show the problem of opening a flyout on hover on a link.

1. Add eyebrow div to start of header
    * `<div id="eyebrow"><div>...</div></div>`
1. todo
1. Add a my ebay link to eyebrow
1. Convert it to a hover flyout using jquery-hover-flyout
1. Demonstrate keyboard issue
1. Convert it to a focus flyout using jquery-focus-flyout
1. Demonstrate that keyboard user now has to tab through flyout.
1. Remove focus flyout behaviour
1. Add a hidden jquery-click-flyout that allows keyboard user to expand the flyout with ENTER or SPACE.

```html
<span id="myebay" class="flyout flyout--hover">
    <a class="flyout__trigger" href="http://www.ebay.com">My eBay</a>
    <span class="flyout flyout--click">
        <button class="flyout__trigger clipped clipped--stealth" type="button">Expand My eBay</button>
        <div class="flyout__overlay">
            <ul role="list">
                <li><a href="http://www.ebay.com">Summary</a></li>
                <li><a href="http://www.ebay.com">Bids/Offers</a></li>
                <li><a href="http://www.ebay.com">Watchlist</a></li>
            </ul>
        </div>
    </span>
</span>
```

```css
.flyout--hover .flyout__trigger[aria-expanded=true] + .flyout .flyout__overlay {
    display: block;
}

.flyout--hover .flyout--click {
    position: static;
}

.flyout--hover .flyout--click .flyout__trigger {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    display: block;
    padding: 0.1em;
}
```

```js
$('.flyout--hover').hoverFlyout();
```

### Critical Icon

1. Append link to eyebrow `<a class="icon-cart" href="http://cart.payments.ebay.com" id="cart" aria-label="cart"></a>`
1. Remember that hand cursor shows for links

```css
#cart::before {
    font-weight: 900;
}
```

### Non-Critical Icon

1. Append icon span to button `<span aria-hidden="true" class="icon icon--arrow-down"/>`
1. TODO: use inline SVG instead of font icon

### Access Key

1. Add attribute `accesskey="c"` to shopping cart link
1. Use [accesskey](https://www.w3schools.com/tags/att_global_accesskey.asp) (e.g. CTRL+ALT+C for Mac Safari) to activate shortcut
1. Voiceover will announce availability of access key
1. But how do keyboard users know about this accesskey. We need a tooltip.

### Tooltip

1. Wrap shopping cart link in tooltip markup
1. Tooltip text should be short.

```html
<span class="tooltip flyout">
    <a accesskey="c" aria-describedby="tooltip-cart" class="tooltip flyout__trigger icon-cart" href="http://cart.payments.ebay.com" id="cart" aria-label="cart"></a>
    <div class="flyout__overlay" id="tooltip-cart">Shopping Cart (Access Key: C)</div>
</span>
```

```css
.tooltip--expanded .flyout__overlay {
    background-color: LightYellow;
    display: block;
}
```

```js
$('.tooltip').hoverFlyout({expandedClass:'tooltip--expanded'}).focusFlyout({expandedClass:'tooltip--expanded'});
```

## Part 6: Introduces ARIA Widgets

In part 6 we move from our homepage example, to a search results page (SRP) example.

### CHECKPOINT: Search Results Page (SRP)

Create a new `srp.html` page.

### Fake Menu

todo

### Menu

todo

<!--

### Live Region

1. Add class `searchform` to form
1. Wrap the `10 results found` paragraph in a div
1. Add `<script src="app.js"></script>` below body
1. Update `main.js` to hijax form submission with client-side behaviour (see below)
1. Using screen reader demonstrate that page updates without notifying user
1. Add `aria-live="polite"` and `role="status"` to wrapper div
1. Using screen reader now demonstrate the screen reader can notify user of type of update (not the content that updated)

```js
$(function() {
    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ul').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });
});
```

-->

### Tabs

todo

### Combobox

We add combobox behaviour to search textbox.

### Dialog

todo

## Part 7: Introduces Data Tables

todo
