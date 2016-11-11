# A11Y-First : An Accessibility Workshop

The idea of this project it to run a live-coding session starting with an empty HTML file. From that starting point we will progressively build up a working page, and introduce many common accessibility principles and techniques along the way.

The following sections of this README act as a guide to the live-coding session instructor.

## Meta Data

The meta.html page content is left intentionally blank.

1. Add `<html lang="en">`
1. Add `<meta charset="utf-8" />` to head
1. Add `<meta name="viewport" content="width=device-width, initial-scale=1">` to head
1. Test page with screen reader, notice nothing is announced
1. Add `<title>Meta - A11Y First Workshop</title>` to head
1. Test page with screen reader, notice title is now announces

We have introduced 4 key pieces of 'meta' data:

* Language attribute
    * Language attribute ensures correct pronunciation, amongst other things. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id">WCAG 3.1.1</a>
* Charset
    * Not strictly WCAG related (or maybe it is?), but to display an HTML page correctly, a web browser must know which character set (character encoding) to use.
* Viewport Scale
    * Viewport meta must ensure pinch-to-zoom is **not** disabled. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale">WCAG 1.4.4</a> and <a href="https://ebay.gitbooks.io/mindpatterns/content/antipatterns/disabling_pinch-to-zoom.html">MIND Anti-Pattern: Disabling Pinch-to-Zoom</a>.
* Title
    * Title ensures the user can orient themselves. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-title">WCAG 2.4.2</a>. Titles identify the current location without requiring users to read or interpret page content.

## Static Text

Next we move onto introducing the concept of static text.

### Paragraphs

Add three paragraphs of content to the page:

* `<p>eBay is where the world goes to shop, sell, and give. Our mission is to be the world’s favorite destination for discovering great value and unique selection.</p>`
* `<p>For over 20 years, we've been working to create more economic opportunity for everyone. And we're just getting started.</p>`
* `<p>Copyright © 1995-2016 eBay Inc. All Rights Reserved.</p>`

Ensure Voiceover web rotor settings include 'Static Text'.

<img src="images/settings-web-rotor.png" alt="Screenshot of the Voiceover Web Rotor settings" />

Open Voiceover rotor and explore what it can find on the page (hint: nothing much yet! only the static paragraph text).

### Lists

Add two lists to the page.

The purpose here is to explore them with the screen reader.

Ensure Voiceover web rotor settings include 'Lists'.

### Headings

Adds the following headings:

* `<h1>eBay</h1>`
* `<h2>Collections</h2>`
* `<h2>Daily Deals</h2>``
* `<h2>Legal</h2>``

Use VO+CMD+H to navigate through headings.

Show list of headings in web rotor.

Convert the 'Legal' heading to a screen reader only heading:

* `<h2 class="clipped">Legal</h2>``

Clipped text makes the text invisible to sighted users.

### Landmarks

Adds the following landmarks:

* `<header role="banner">` around h1
* `<main role="main">` around lists
* `<footer role="contentinfo">` around legal content

Notice there is no *visual* difference to the page.

### Images

Added the following images (without alt text for now):

1. Add following image to banner `<h1><img src="images/ebay-hires.png" /></h1>` (lack of alt text intentional for now)
1. Demonstrate behaviour of missing alt text in screen reader
1. Add alt="ebay" to banner image
1. Demonstrate behaviour of alt text with screen reader
1. Add class `card` to daily deals div
1. Add collection image before each collection title, alt="collection title"
1. Add daily deal image before each deal title, alt="deal title"
1. Add `list-type: none` to the lists and demo screen reader impact
1. Add `list-type: none` to the lists to restore list semantics
1. Add `display: block` to collection and daily deal images

Now that we have some below the fold content, we can take our first look at some keyboard accessibility basics. Spacebar, up arrow, down arrow, page up, page down, home and end keys will all scroll the page.

Note that the image alt text is the same as the title. Technically speaking these images can be classed as presentational, because if the images were not displayed, we still have the same text below (the title text). We leave the alt text in place for now. Yes, it's a redundant/duplicate navigation for screen reader users, but not technically 'non-accessible'. When we convert the item to a tile, in an upcoming step, we will set this value to blank.

Adding `list-type: none` to the lists means they are <a href="http://www.456bereastreet.com/archive/201109/screen_readers_list_items_and_list-stylenone/">no longer announced as a list in some screen readers</a>. We fix this issue by applying `role=list` to each list.

Note that images are inline by default. We must set the collection images and daily deals images to `display: block` so that title text is displayed on it's own line.

New CSS:

```css
.card {
    background-color: white;
}
.collections ul[role=list],
.card ul[role=list] {
    list-style: none;
}
.collections img,
.card img {
    display: block;
}
```

## Interactive Controls

Now we move away from static text and structure, to interactive controls

### Links

Added following links:

* around collection titles
* around daily deals titles

With screen reader on notice that visited links will be announce as 'visited'.

Notice that with focus on a link all of the page scroll keys still work.

Added the static text under each collection and daily deal title.

We have also started introducing some basic style to the page. One extra virtual cursor navigation for screen reader users.

Notice that it would be nice to have image as a link too.

Discussion: Should the title be a heading? I would say it is not strictly necessary, but opinion would be divided here.

### Tiles

We want the collection and deals images to link to the item too.

Rather than create a second link, which would be redundant for keyboard and screen reader users, we can wrap the title and image together in a single anchor.

Notice that we remove the value of the alt attribute on the image to prevent a duplicate link text announcement in screen readers.

Anchor tags are inline-level elements in CSS by default. This causes some issues with the focus outline. We set `display: inline-block` to fix this.

```css
.tile {
    display: inline-block;
}
```

Q: What happens if we want to make the seller profile a link too? A: It can no longer be a tile.

### Iframes

1. Add iframe between header and main (without a title attribute for now)
    * `<iframe src="iframe_content.html" scrolling="no"></iframe>`
1. Add image link to iframe_content.html
    * `<a href="http://www.ebay.com/rpp/holidays/?&_trkparms=%26clkid%3D368520364132448429" target="_parent"><img src="images/advert-gift.jpg" alt="It's the gift they've been eyeing all year. Find it here." /></a>`
1. Demonstrate iframe with keyboard
    * Iframe body margin can cause a problem with focus indicator
1. Demonstrate iframe with screen reader
    * No idea what the iframe contains or is about
1. Add `title="Advert"` to iframe and demo with screen reader
    * This is the only recommended use of `title` attribute! (i.e. do not use it as a 'tooltip' on links)

### Complementary landmark

1. Wrap iframe in `<aside role="Complementary">`

### Navigation Landmark

We have added a navigation landmark in the banner.

This is an opportunity to recap, and build upon, three previous topics:

* Headings
    * A clipped heading
* Landmarks
    * nav tag and navigation role
* Links

```css
[role=banner] ul {
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 1em 0;
}
[role=banner] li {
    text-align: center;
    width: 128px;
}
[role=banner] a {
    font-size: 12px;
}
```

### Skipto Links

1. Add `<a href="#mainContent">Skip to main content</a>` after body tag
1. Add `id="mainContent"` to main landmark
1. Demo keyboard behaviour
1. Demo how screen reader focus is not set
1. Add `tabindex="-1"` to main landmark
1. Demo how scree reader focus now moves also
1. Add class `clipped clipped--stealth` to skip link
1. Demo that skip link now only appears on keyboard focus

### Textbox

Steps:

1. Add form tag to banner
1. Add textbox to form
1. Add placeholder text of 'search' to textbox
1. Demo placeholder with screen reader
1. Add label to textbox. Change placeholder text to ('iPhone 7')
1. Demo textbox and label
1. Replace label with an aria-label
    * `<input aria-label="search" type="text" id="_nkw" name="_nkw"/>`
1. Demo textbox and aria-label
1. Demo how arrow key behaviour on textbox is different than on link. Talk about 'forms mode' of screen reader.
1. Enter search term and press ENTER. ENTER key should always submit form (even with no submit button).
1. Demo that form is a get request by default. A submit button is the only button that should navigate to a new URL in this way.

Add some margin to form:

```css
[role=banner] form {
    margin: 1em 0;
}
```

### Listbox

Do not call a listbox a 'dropdown'! The term 'dropdown' is too ambiguous. The term 'dropdown' only describes the visual appearance of the control, and could be confused with a menu or any other kind of overlay. Use the correct term which describes the actual *purpose* of the control, which is listbox (or select). The purpose of a listbox (or select) is to select a value that will be sent to the server via form submit.

1. Add listbox and aria-label after textbox
1. ENTER key does not submit form.
1. SPACE or ARROW key expands.
1. ARROW keys highlight options, ENTER or SPACE selects.

### Submit Button

1. Add submit button after Listbox
1. Add reset button after submit button

### Search Landmark

1. Add `role=search` to form

### Buttons

### Faux Buttons

### Flyouts

* Notifications
* Shop By Category

### Faux Menus

* Profile
* my Ebay

## ARIA Widgets

Next we move onto controls that cannot be created with HTML alone. These controls require ARIA, CSS and JavaScript.

### Tabs

### Comboboxes

We add combobox behaviour to search textbox.

### Menus

Do not call a menu a 'dropdown'! The term 'dropdown' is too ambiguous. The term 'dropdown' only describes the visual appearance of the control, and could be confused with a menu or any other kind of overlay. Use the correct term which describes the actual *purpose* of the control, which is menu (or popup menu). The purpose of a menu (or popup menu) is to select a value that will trigger some client-side event.

### Dialogs

Do not call a dialog an 'overlay'! The term 'overlay' is too ambiguous. The term 'overlay' only describes the visual appearance of the control, and could be confused with a tooltip or any other kind of overlay. Use the correct term which describes the actual *purpose* of the control, which is dialog (or modal). The purpose of a dialog (or modal) child window is to collect data to pass back to the parent window.

## Other

We will wrap up with some other concepts that were not applicable in the demo page.

### Tables
