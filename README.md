# A11Y-First : An Accessibility Workshop

The idea of this project it to run a live-coding session starting with an empty HTML file. From that starting point we will progressively build up a working page, and introduce many common accessibility principles and techniques along the way.

The following sections of this README act as a guide to the live-coding session instructor.

## Meta Data

The meta.html page is left intentionally blank. We introduce 4 key pieces of 'meta' data:

* Language attribute
    * Language attribute ensures correct pronunciation, amongst other things. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id">WCAG 3.1.1</a>
* Charset
    * Not strictly WCAG related (or maybe it is?), but to display an HTML page correctly, a web browser must know which character set (character encoding) to use.
* Viewport Scale
    * Viewport meta must ensure pinch-to-zoom is **not** disabled. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale">WCAG 1.4.4</a> and <a href="https://ebay.gitbooks.io/mindpatterns/content/antipatterns/disabling_pinch-to-zoom.html">MIND Anti-Pattern: Disabling Pinch-to-Zoom</a>.
* Title
    * Title ensures the user can orient themselves. See <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-title">WCAG 2.4.2</a>. Titles identify the current location without requiring users to read or interpret page content.

Try removing the title and experiencing the page with a screen reader.

## Static Text

Next we move onto introducing the concept of static text.

### Paragraphs

We have now added several paragraphs of static text to the page.

Ensure Voiceover web rotor settings include 'Static Text'.

<img src="images/settings-web-rotor.png" alt="Screenshot of the Voiceover Web Rotor settings" />

Open Voiceover rotor and explore what it can find on the page (hint: nothing much yet! only the static paragraph text).

### Lists

Next we have added two lists to the page. The purpose here is to explore them with the screen reader.

### Headings

Adds the following headings:

* eBay (h1)
* Collections (h2)
* Daily Deals (h2)
* Legal (h2)

Use VO+CMD+H to navigate through headings.

Show list of headings in web rotor.

### Landmarks

Adds the following landmarks:

* banner (header)
* main
* contentinfo (footer)

Notice there is no *visual* difference to the page.

### Images

Added the following images:

* eBay logo inside h1
* collection image before each collection title
* daily deal image before each deal title

We have also started introducing some basic style to the page. We see that adding `list-type: none` to the lists means they are <a href="http://www.456bereastreet.com/archive/201109/screen_readers_list_items_and_list-stylenone/">no longer announced as a list in some screen readers</a>. We fix this issue by applying `role=list` to each list.

In eCommerce sites, the image typically precedes the title.

Note that the image alt text is the same as the title.

Note that images are inline by default. We must set the collection images and daily deals images to `display: block`

We make the Daily Deals a card (i.e. full white background).

## Interactive Controls

Now we move away from static text and structure, to interactive controls

### Links

Added links to:

* collection h3 headings
* daily deals h3 headings

Notice that it would be nice to have image as a link too.

Notice that additional text was added under each link. Does this link now become a heading? I would say it is not strictly necessary, but opinion would be divided here.

### Tiles

We want the collection and deals images to be a link too.

Rather than create a second link, which would be redundant for keyboard and screen reader users, we can wrap the title and image together in a single anchor.

Notice that we remove the value of the alt attribute on the image to prevent a duplicate link text announcement in screen readers.

Anchor tags are inline-level elements in CSS by default. This causes some issues with the focus outline. We set `display: block` to fix this.

### Forms

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

* Search

### Menus

### Dialogs

## Other

We will wrap up with some other concepts that were not applicable in the demo page.

### Tables
