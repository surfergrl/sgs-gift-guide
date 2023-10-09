# Surfergirl's Seaglass Gift Guide

image with project on all screen sizes

By Kat Dawes

---

This is the documentation for my web application **Surfergirl's Seaglass Jewellery Gift Guide**.

It has been built using HTML5, CSS3 & JavaScript and is my second project for Code Institute’s Diploma in Web Application Development.

#### Table of Contents

- Project Development & Planning
- Project Goals
- Research
- User Stories
- Content
- Design, Layout & Structure
- Colours
- Technologies Used
- Features
- Current Website
- JavaScript Functionality
- Testing & Bugs
- Deployment
- Credits

#### Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [WordPress](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-t4XAqtyAAxUxXEEAHbhkBBQQFnoECBwQAQ&url=https%3A%2F%2Fen-gb.wordpress.org%2F&usg=AOvVaw3_Yh8Jp55SAR0s1nidR2lh&opi=89978449) (which allows for embedding web apps using i-frames)
  
___

## Project Development and Planning

---

### Project Details & Goals

- Title: Surfergirl's Seaglass Jewellery Gift Guide.
- Purpose: To provide a quiz-type interface to guide the customer to the perfect piece of jewellery.
- External user's goal: To gather suggestions for jewellery for themselves or a gift for someone else.
- Site owner's goals:
  - To capture the buyer who is not sure what they want
  - To showcase products and entice buyers to purchase with confidence
  - Have potential customers become familiar with the products on offer
  - Provide a fun way of browsing through items
  - To show that the brand is a polished, quality, reliable entity
  - Increase revenue
- Required skills: JavaScript, HTML, CSS. Other skills: image manipulation, WordPress, GitHub.

---

### User journey:

flow chart

---

### User Stories

The user stories are based on previous market research in the field. People who came to the Gallery shop locally or to craft markets and were not sure what to buy were often one of these type of customer:

- Husband/partner with no idea
- Previous visitor to shop or online presence, now at the website and curious
- Bride searching for bridesmaid gifts
- Christmas shopper in a hurry with limited idea of what someone might want
- Undecided purchaser who has seen items but isn't sure what they want
---

## Research

### Market Review

I looked at various jewellery sites to see how they use interactivity to encourage browers to buy. I was interested in how the options were presented, the user journey through them and the choices available to save/download/share results. I looked at the overall design in terms of ease of use and attractiveness.

### Pandora
![pandora.png](/assets/images/pandora.png)

Has [The Perfect Gift Finder](https://uk.pandora.net/en/gifts/featured-gifting/the-perfect-gift-finder-landing/#navigation) which looks to be an interactive tool, but at the time of testing it did not work.

It also has [GiftMe - Customised by Me](https://uk.pandora.net/en/discover/stories/pandora-me-for-every-me/build-me/?useParentCtaStyle=true&defaultButtonStyle=ci-button-text-black-pink-underlined&customClass=ci-m52-explore-module-btn&customSize=small&trackingData=icid=e:pme:plp:explore:BUILDME&parentCtaStyle=ci-button-filled-white#icid=e:pme:plp:explore:BUILDME) which allows customer to build the ideal gift for a BFF. I found this had very limited functionality; a user chooses from earrings/bracelets/rings and it takes you to the section on the page where they are. I would like something much more interactive and personalised.

### Cartier:
![cartier.png](/assets/images/cartier.png)
Offers a [Gifts](https://www.cartier.com/en-gb/collections/gifts) page with links to category pages:

- The Most Iconic Cartier Gifts
- Gifts for Her, Gifts for Him
- Little Luxuries
- Pesonalised

As an immeditely recognisable luxury brand, they provide easy ways to get to the most iconic items such as the Love bracelet and the bestselling fragrance set.

I like the idea of offering a cheaper option (here £100+) as well as the main items (£7,000 bracelets etc.) and will use this in my design.

### Clogau Gold

![clog.png](/assets/images/clog.png)

![clog2.png](/assets/images/clog2.png)

Clogau Gold is made with rare Welsh gold and is the choice for royal wedding rings.The [Compose](https://www.clogau.co.uk/pages/compose) page  allows a prospective bride/groom to move through various options to build their perfect ring. 

*Notes:*

- Classy interface
- Choose your metal, style, diamond clarity, diamond size, ring size.
- Provides a code to save.
- Option to be reminded later (a simple contact web form).
- Option to view the finished design.
- No way to move backwards through the choices.

### Tiffany
Doesn't offer anything interactive.
Offers categories to explore:

- Her
- Him
- Baby
- Home
- Couple
- Personalised
- Graduates

### Thomas Sabo 
![thomas-sabo.png](/assets/images/thomas-sabo.png)
 https://www.thomassabo.com/GB/en_GB/charms-creator
**Charm Club**
- Attractive interface
- Clear about its purpose
- Choose a Style
- Choose a length
- Option to zoom in and out on images
- 'Try your luck' button chooses six random charms to start the user off
- Option to share/download creation
- Choose charms - includes filter options:

![sabo-charmchoice.png](/assets/images/sabo-charmchoice.png)
(Target group = choice of For Him or For Her.)

### Market research general notes:

- Gift Guides were often just pages of products in no particular order
- Often little or no guidance to help customers
- Luxury brands often used video
- Multiple pictures were used to convey attractive aspects of the products
- Those that offered choices had about 3 or 4 questions before presenting options.
- Thomas Sabo and Pandora Me both offered visually appealing landing pages with a title, subtitle and a couple of lines to entice a user in.

In conclusion, I cannot find a jewellery website which does what I am planning to do, but there are some elements that I can use to plan my functionality.

*Specifically, I want:*

- Attractive interface and landing page to entice users (title, subtitle, image, explanation of purpose)
- Clear purpose to the tool
- Three or four questions
- Options to save/download/share
- Ability to move backwards and forwards to change choices

I also looked at interactive gift guides for other products.

https://blog.dot.vu/holiday-gift-guide-examples/ A digital tool that guides your audience toward the products that  would make a perfect gift will increase orders and, thus, sales.

Nonetheless, the success of your gift guide depends on its features,  design, responsiveness, and, of course, product suggestions. The more  accurate and user-friendly you make your holiday gift guide, the more  revenue you generate.

---

## Deployment

The gift guide will be live on the [Surfergrl.co.uk](http://Surfergrl.co.uk) website

Within the main site I looked at presenting the Guide

- On a whole new page within an iFrame
- As a pop-up overlaid onto the shop Home page.
- As a pop-up available from any page.

I want deployment to be

- Easy for me
- Easily accessible for the user
- Easy to update when necessary
- Fits in with WordPress without too much extra code or workarounds which might compromise UX
  
---

## Current Website 

The site for Surfergirl's Seaglass already exists at [www.surfergrl.co.uk](http://www.surfergrl.co.uk) and sells silver and seaglass jewellery on the themes of the ocean and seashore. (Seaglass is pieces of glass tumbled smooth and opaque by the ocean.) The site is built on WordPress with WooCommerce.

The site is basic at present and includes:

- About information - brand story
- A personal blog on aspects of jewellery, surfing, ocean-side living, beauty and more.
- Contact page - social media links and email address
- Shop page - categories, featured products, image gallery, basic Ts&Cs
- Item pages - images, price, description, Add to Cart button, reviews section

The shop offers products in broad categories - bracelets, earrings, necklaces/pendants, rings, keyrings and anklets. A customer who comes to the site with little or no knowledge of the brand might struggle to choose something, particularly if they are looking for a gift. The gift guide aims to present compelling options to suit a wide range of customers.

---

### Desired Features - rated 1-5 in order of importance

- Move through a short series of questions about preferences, based on the jewellery available on the site. 1
- Provide a range of options to suit different styles, budgets, size and theme/charm choice. 1
- Allow the user to move back and change the answer to a question, then carry on. 3
- Allow the user to start over at any point. 3
- Option to skip a question if you don't know e.g. ring size. 2
- Provide results in a manner that is visually appealing and user friendly. 1
- Results can be instantly added to the basket. 1
- Results can be emailed/downloaded/saved to wish list (if WooCommerce provides this option?). 4
- Option provided to request more information or bespoke pieces. 2
  
---

### Further Developments 

- Options for how to size a ring or what length of necklace do I want. 48
- Although the app will present an ideal option, I don't want this to stop people seeing other items, so I want an 'other ideas' section below the main result with some add-on options or alternatives. 4
- I would like to design a similar tool in the future to allow people to cchoose their options for personalised items e.g. stamped inscriptions, engraving and specific charms and colours of seaglass. For now if they end up with this option, it will send them to a contact form on the site so they can enquire personally. 5
- A 'customers also bought' strip below the guide's results, with some more ideas. 5

These options need to conform to the principles of UX in all five different planes.

![Usability](/assets/images/princip-UX.png)

---

## Design, layout, colours

### Content - elements to include

**Headline** - Surfergirl's Seaglass Gift Guide

**Tag-line** - This is a short explanation of what the app does: 'Find the perfect piece of silver and seaglass jewellery for you or a loved one.'

**Categories**

to match the products on the SGS site.

![shop-menu.png](/assets/images/shop-menu.png)

Categories:

- Bracelets
- Rings
- Earrings
- Keyrings
- Pendants
- Anklets

---

### Wireframes

I first sketched the basic layout for the landing page, questions screens and results page in Evernote's Sketch feature.

I then used [Figma](https://www.figma.com/) to develop the structure, skeleton, layout, style and feel of the site. This was I could decide on all the colours, fonts and layouts before beginning to write the code. I began with a design to work on mobile devices including the new Galaxy Z Flip phone, then scaled up for tablets and desktop. Keeping the design clean and simple was a priority both for UX and responsiveness.

### Structure

The app is contained on one page. This page will have the main site navigation as usual for the site.

Seven divs appear depending on where you are in the guide (one for each of five questions, one intro page and one results page).

---

#### Welcome

Landing page with title, image and tagline and 'Start gift guide' button.

Background image: 

Start gift guide: button

Logo

![SGS logo](/assets/images/SGS-logo.png)

---

#### Questions - Five questions with between 3-5 options each. A back button to allow changes.

Questions - Five questions with between 3-5 options each.

Start again button - starfish
Back button - beach shack sign
Next button - beach shack sign style

I think it will be important to give a 'not sure' option, e.g. if the user doesn't know what style a giftee might prefer. The app will then discount this section, i.e. in this case it would present an option from any of the styles.

The quiz will consist of five questions:

- What category of jewellery do you want to see? (Bracelets, rings, anklets, keyrings, necklaces, earrings.)
- What is your budget? Lower £5-15 Medium £15-20 Higher £25+
- Theme - Llangrannog, Cariad, waves, mermaids, seaglass
- What style would you like to see? Quirky, classic, delicate, chunky
- His, hers or both?

Note that size is not relevant here as all are one-size or adjustable. Items which need sizing will show options on the main item page. To avoid complicating the tool asking for sizes, I will let the main pages take care of this aspect.

---

#### Results:

Two products are shown with an 'add to cart' button and links to the main item page for more info.
Results - Two products are shown with an 'add to cart' button and links to the main item page for more info.

#### Results Options:

I will present two options in the results. I am not including enough product variety to offer more, and some categories only have two options.

Standard products - many of the items on the SGS store are one-off pieces due to the unique nature of seaglass. I have therefore chosen to only present established pieces from the main collections in the results.

*Pendants:*

- Carreg Bica pendant $$$ £30
- Anchor and seaglass pendant $$ £25
- Wire-wrapped seafoam pendant $$ £20-25
- Simple green bail pendant $$ £2-25
- Cariad bar $$$ £45
- Half & Half necklace $$$ £35?

*Bracelets:*

- Cariad bracelet $$$ £45
- Silver-plated Charm bracelet with seashore charms (contact for bespoke) $ £15
- Silver Charm bracelet $$ £25
- Silver tone seashore charms bracelet £10 $
- Cuff copper Carreg Bica coordinates (bespoke option) $ £10

Earrings

- Threader $$ £15
- Wire-wrapped seaglass drops $ £15
- Spiral hoops $ £15

Rings

- Wrap silver $$
- Cuff silver Cariad $$
- Aluminium stamped with waves £ £5-7
- Silver wave ring $ £20

Anklets

- Silver charm $$ £20
- Silver tone bead charm $ £10

Keyrings

- Mermaid $ £6.50
- 'Shell in your pocket' slogan $ £6.50

For each result:

- Two product suggestions
- Price
- Picture
- Short description
- Link to main item page (how then do they get back to their results?)
- Add to Cart button - an option to quickly add to cart without seeing full item info page e.g.:

![julz-addtocart.png](/assets/images/julz-addtocart.png)

- Share/save button
- Start again button (starfish)

404 error page

'Start over' link to begin again.

---

### Colours

The Surfergirl's Seaglass brand uses ocean-themed colours - whites, blues, greens plus sunset and sandy colours feature heavily. The app will reflect this.

---

Bubblegum Blue and Mermaid Lagoon palettes

Surface plane

Colours needed for:

- Titles
- subtitles
- Body text - black
- Backgrounds

Colours needed for gift guide specifically: same colours but add in some contrasting and highlighting.

![bubblegum-blue.png](/assets/images/bubblegum-blue.png)

![mermaid-lagoon-palette.png](/assets/images/mermaid-lagoon-palette.png)

---

### Fonts

#### Legibility, accessibility, contrast

- Tools
- Github
- Figma
- Balsamiq
- GoogleFonts
- FontAwesome?
- [ezGIF](https://ezgif.com/) - Creating GIFs for the README
- [Techsini Mockup](https://techsini.com/multi-mockup/) - Creating the mockup images for the README
- [Favicon.io](https://favicon.io/favicon-converter/) - Used to create and add the favicon to the browser tab

From [canva.com/colours](http://canva.com/colours)

1. [Six Hands Rough](https://www.onlinewebfonts.com/download/f6db36f5c636e2adf912702a4ad751ec) font for headings

2. **Roboto Slab:** To provide a contrast to the script font and give a modern and lcean look, I'll use this for subheadings.

3. **Montserrat:** Montserrat is clean and easy to read. I will use this for body text e.g. product description.

4. **Dancing Script:** Dancing Script is another script font, but it's a bit more formal than Pacifico. It can work well for adding an elegant touch to your beach-themed site.

5. **Nunito:** Nunito is a rounded sans-serif font that can be a good choice for body text. It's friendly and easy on the eyes.

6. **Playfair Display:** If you want to add a touch of sophistication to your headings, Playfair Display is an elegant serif font that can work well in combination with script or sans-serif fonts.

Remember that while selecting fonts, it's essential to ensure readability and consistency throughout your website. You can pair a script font for headings with a clean sans-serif or serif font for body text to maintain a balance between style and readability. Also, consider the overall design and color scheme of your website to ensure that the fonts complement the beach theme effectively.

---
## Credits
 https://github.com/emmahewson/mp2_travel_quiz ReadMe guidance

---