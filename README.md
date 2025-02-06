# Surfergirl's Seaglass Gift Guide

By Kat Dawes

<img src="assets/images/mockup.png">

---

![GitHub commit activity](https://img.shields.io/github/commit-activity/t/surfergrl/sgs-gift-guide)
![GitHub last commit](https://img.shields.io/github/last-commit/surfergrl/sgs-gift-guide)
![GitHub language count](https://img.shields.io/github/languages/count/surfergrl/sgs-gift-guide)
![GitHub top language](https://img.shields.io/github/languages/top/surfergrl/sgs-gift-guide?color=red)

This is the documentation for my web application **Surfergirl's Seaglass Jewellery Gift Guide**.

The deployed application can be found here: https://surfergrl.github.io/sgs-gift-guide/

This application is designed to live inside a WordPress page. Its final home is on the surfergrl.co.uk site here: https://surfergrl.co.uk/gift-guide

The Gift Guide application has been built using HTML5, CSS3, JavaScript and WordPress and is my second project for Code Institute’s Diploma in Web Application Development.

## Table of Contents

- [Project Development & Planning](#project-development-and-planning)
  - [Background](#background)
  - [Project Goals](#project-goals)
- [Research](#research)
  - [Market Review](#market-review)
  - [Market Research Conclusions](#market-research-conclusions)
  - [User Stories](#user-stories)
- [Design & Layout](#design--layout)
  - [Current Website](#current-website)
  - [Desired Features](#desired-features---rated-1-5-in-order-of-importance)
  - [Future developments](#future-developments)
  - [Content](#content---elements-to-include)
  - [Colours](#colours)
  - [Typography](#typography)
  - [Wireframes](#wireframes)
- [Structure](#structure)
  - [JavaScript functionality](#javascript-functionality)
  - [Page Structure](#page-structure)
- [Technologies Used](#technologies-used)
- [Validation & Testing](#validation-and-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Thanks](#thanks-to)

---

## Project Development and Planning

### Background

The Surfergirl's Seaglass website sells silver and seaglass jewellery. It is built with WordPress and WooCommerce.

The purpose of the Gift Guide application is to provide a quiz-type interface to guide the customer to choosing the perfect piece of jewellery.

### Project Goals

- External user's goal: To gather suggestions for jewellery for themselves or a gift for someone else.

- Site owner's goals:
  - To capture the buyer who is not sure what they want
  - To showcase products and entice buyers to purchase with confidence
  - Have potential customers become familiar with the products on offer
  - Provide a fun way of browsing through items
  - To show that the brand is a polished, quality, reliable entity
  - Increase revenue

---

## Research

[Top](#table-of-contents)

### Market Review

I looked at various jewellery sites to see how they use interactivity to encourage browers to buy. I was interested in how the options were presented, the user journey through them and the choices available to save/download/share results. I looked at the overall design in terms of ease of use and attractiveness.

<details><summary>Pandora</summary>

![pandora.png](/assets/images/pandora.png)

Has [The Perfect Gift Finder](https://uk.pandora.net/en/gifts/featured-gifting/the-perfect-gift-finder-landing/#navigation) which looks to be an interactive tool, but at the time of testing it did not work.

It also has [GiftMe - Customised by Me](https://uk.pandora.net/en/discover/stories/pandora-me-for-every-me/build-me/?useParentCtaStyle=true&defaultButtonStyle=ci-button-text-black-pink-underlined&customClass=ci-m52-explore-module-btn&customSize=small&trackingData=icid=e:pme:plp:explore:BUILDME&parentCtaStyle=ci-button-filled-white#icid=e:pme:plp:explore:BUILDME) which allows customer to build the ideal gift for a BFF. I found this had very limited functionality; a user chooses from earrings/bracelets/rings and it takes you to the section on the page where they are. I planned something much more interactive and personalised.

</details>

<details><summary>Cartier</summary>

![cartier.png](/assets/images/cartier.png)

Offers a [Gifts](https://www.cartier.com/en-gb/collections/gifts) page with links to category pages:

- The Most Iconic Cartier Gifts
- Gifts for Her, Gifts for Him
- Little Luxuries
- Pesonalised

As an immeditely recognisable luxury brand, they provide easy ways to get to the most iconic items such as the Love bracelet and the bestselling fragrance set.

I liked the idea of offering a cheaper option (here £100+) as well as the main items (£7,000 bracelets etc.) and have used this in my design.

</details>

<details><summary>Clogau Gold</summary>

![clog.png](/assets/images/clog.png)

![clog2.png](/assets/images/clog2.png)

Clogau Gold is made with rare Welsh gold and is the choice for royal wedding rings.The [Compose](https://www.clogau.co.uk/pages/compose) page allows a prospective bride/groom to move through various options to build their perfect ring.

_Notes:_

- Classy interface
- Choose your metal, style, diamond clarity, diamond size, ring size.
- Provides a code to save.
- Option to be reminded later (a simple contact web form).
- Option to view the finished design.
- No way to move backwards through the choices.

</details>

<details><summary>Tiffany</summary>

![thomas-sabo.png](/assets/images/tiffany.png)

https://www.tiffany.co.uk/gifts/shop/gifts-for-her/

Doesn't offer anything interactive.
Offers categories to explore such as those shown above in the 'Gifts for Her' section.

</details>

<details><summary>Thomas Sabo</summary>

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

I particularly liked the insertion of a random product or two to showcase something the user might not have considered looking at on their own.

</details>

### Market Research Conclusions

- Gift Guides were often just pages of products in no particular order
- Often little or no guidance to help customers
- Luxury brands often used video
- Multiple pictures were used to convey attractive aspects of the products
- Those that offered choices had about 3 or 4 questions before presenting options.
- Thomas Sabo and Pandora Me both offered visually appealing landing pages with a title, subtitle and a couple of lines to entice a user in.

In conclusion, I could not find a jewellery website which did what I planned to do, but there are some elements that I was able to use to plan my functionality.

_Specifically, I wanted:_

- Attractive interface and landing page to entice users (title, subtitle, image, explanation of purpose)
- Clear purpose to the tool
- Four or five questions - ease of use, speed
- Options to save/download/share - these have not been implemented and are for future development
- Ability to move backwards and forwards to change choices - reset the form and try again

I also looked at interactive gift guides for other products: https://blog.dot.vu/holiday-gift-guide-examples/
'A digital tool that guides your audience toward the products that would make a perfect gift will increase orders.'

---

### User Stories

[Top](#table-of-contents)

The user stories are based on previous market research in the field – meeting customers at local stockists and craft markets, and contact via email/social media accounts of the business.

#### Customer profiles:

- Spouse/partner with no idea what their partner would like
- Previous visitor to shop or online presence, now at the website and curious
- Bride searching for bridesmaid gifts
- Christmas shopper in a hurry with limited idea of what someone might want
- Undecided purchaser who has seen items but isn't sure what they want

#### Customer goals:

- Be led to suitable product/s for the giftee (or themselves)
- Select according to their budget
- Get a better idea of what the brand is about
- Be confident that they have selected something suitable
- Be able to backtrack if they want to see something else
- Achieve their goal quickly and easily if required
- Browse products in a unique, interesting way
- Be confident that the website is genuine and sells quality products
- Be able to see more details then buy quickly and easily

---

## Design & Layout

### Current Website

[Top](#table-of-contents)

The site for Surfergirl's Seaglass already exists at [www.surfergrl.co.uk](http://www.surfergrl.co.uk) and sells silver and seaglass jewellery on the themes of the ocean and seashore. (Seaglass is pieces of glass tumbled smooth and opaque by the ocean.)

The site is built on WordPress with WooCommerce.

It uses the [Sydney]("https://en-gb.wordpress.org/themes/sydney/") theme.

The site includes:

- About information - brand story
- A personal blog on aspects of jewellery, surfing, ocean-side living, beauty and more.
- Contact page - social media links and email address
- Shop page - categories, featured products, image gallery, basic Ts&Cs
- Item pages - images, price, description, Add to Cart button, reviews section

The shop offers products in categories - bracelets, earrings, necklaces/pendants, rings, keyrings and anklets; and collections such as the 'Cariad' and 'Carreg Bica' collections. A customer who comes to the site with little or no knowledge of the brand might struggle to choose something, particularly if they are looking for a gift. The gift guide aims to present compelling options to suit a wide range of customers.

---

### Desired Features - rated 1-5 in order of importance

- Move through a short series of questions about preferences, based on the jewellery available on the site. 1
- Provide a range of options - category, style, budget, gender and theme. 1
- Allow the user to move back and change the answer to a question, then carry on. 2
- Allow the user to start over at any point. 2
- Provide results in a manner that is visually appealing and user-friendly. 1
- Results can be instantly added to the basket. 3

The finished application allows all of these except the final one.

---

### Future Developments

- Options for how to size a ring or choose length of necklace. 4
- Results can be emailed/downloaded/saved to a wish list. 4
- Although the app will present an ideal option, I don't want this to stop people seeing other items, so I could add an 'other ideas' section below the main result with some add-on options or alternatives. 4
- I would like to design a similar tool in the future to allow people to choose their options for personalised items e.g. stamped inscriptions, engraving and specific charms and colours of seaglass. For now if they end up with this option, it will send them to a contact form on the site so they can enquire personally. 5
- A 'customers also bought' strip below the guide's results, with some more ideas. 5
- 'Not sure' option, e.g. if the user doesn't know what style a giftee might prefer. The app will then present an option from any of the styles. 2
- Some animation fade in and out of images. 5

---

[Top](#table-of-contents)

### Content - elements to include

**Banner**
On the GitHub Pages deployment, I have added a top banner. This is not necessary for the final deployment as the main Surfergrl site will deal with navigation, shop links etc., but is required here to provide context, for aesthetics and to match the main site.

**Headline** - Surfergirl's Seaglass Gift Guide

**Tag-line** - This is a short explanation of what the app does: 'Find the perfect piece of silver and seaglass jewellery for you or a loved one.'

**Categories**
To reflect the products on the SGS site (but not match, as they are not fixed).

![shop-menu.png](/assets/images/shop-menu.png)

### Colours

The Surfergrl site uses black and white for the main content (white space and black text).
The sunset-themed header is mostly orange.
The colours reflect the ocean and beach theme.
The site uses a lot of photographs of the Welsh coastline, so blues, greys and greens feature heavily.

I chose colours to complement the header, which shows the beach at Llangrannog at sunset.
I kept the colour-scheme minimal, so if there is a main site redesign, the gift guide will still fit in with minimal changes.

#### Header

![Surfergrl header](/assets/images/SGS-header.jpeg)

#### Surfergrl.co.uk current colours

![Colours used at surfergrl.co.uk](/assets/images/global-cols.png)

---

#### Gift Guide colours

- Antique White for the form background. Reflects the header colours but still allows good contrast.
- Alice Blue for the page background. This will change on the main site, but for now complements the other colours and looks better than stark white space. Gives a gentle, sunny-days beach effect.

![Gift guide colours](/assets/images/colours.png)

---

### Typography

[Top](#table-of-contents)

#### Legibility, accessibility, contrast

I wanted to ensure readability and consistency throughout the app, maintaining a balance between style and readability. I also wanted to ensure that the fonts complement the beach theme of the main site effectively.

- I used Great Vibes for the main heading.
- I used Cormorant Garamond for lesser headings and within the form/results areas, as it is easier to read but still reflects the laid-back, beachy yet classy vibe.
- I varied the font weights to emphasise the questions and the product name in the results.
- There is no body text within the application.

![Typography](/assets/images/typography.png)

#### Buttons (on the main site)

![Buttons](/assets/images/buttons.png)

I used a button design from CSS Scan which I felt matched the gift guide better than the standard one provided by the WordPress theme.

I wanted something a little more whimsical.

Submit button shown in hover state; Reset button default state:

![Gift Guide buttons](/assets/images/buttons-gg.png)

---

### Wireframes

[Top](#table-of-contents)

I first sketched (on paper) the basic layout for the HTML page with landing page, questions page and results page. In the end I decided to have these all on one pages and use divs to show the relevant part of the guide.

I kept the guide small and simple, so it can be deployed into pages with other content. This means it can be flexible with the changing needs of the site and any redesigns, and can also be adapted for use on other sites if required.

Keeping the design clean and simple was also a priority both for UX and responsiveness.

![Mobile First Design](/assets/images/SGS-gift-guide-mob.png)

![Desktop Desgin - columns](/assets/images/SGS-gift-guide-desktop.png)

## Structure

[Top](#table-of-contents)

The app is contained on one page. It is designed to be deployed to a WordPress page ['Gift Guide']("https://surfergrl.co.uk/gift-guide") which handles all the navigation and page elements for the main site.

### JavaScript functionality

- Data Definition: Defined an array of jewellery items with various properties.
- DOMContentLoaded Event: Ensures that the code only runs after the page has fully loaded.
- Form Submission Handling: Set up an event listener for the Submit button on the form with the ID 'questionForm' to handle form submissions. This listener captures form data and calls the filterItems function.
- Filtering Function: The filterItems function filters the items based on the form data and returns the filtered items as an array of objects.
- Result Display: Creates an ul element and adds elements for each list item to it based on the filtered items.
- Reset: Allows the form and results area to reset to original format.

---

### Page structure

#### Banner and logo

For GitHub Pages deployment; removed on WordPress page. Does not contain any navigation options for this reason.

#### Title and tagline in H1

#### Questions

The guide will consist of five questions with several answer options based on available products:

1. What type of jewellery does this person wear? Bracelets, rings, anklets, keyrings, necklaces, earrings.
2. What is the budget? Lower £5-20 Medium £20-35 Higher £35+
3. What theme appeals? - Llangrannog/Wales, Cariad/Love, waves, seaglass
4. What style might appeal to them? Quirky, classic, delicate, chunky
5. His, hers or both?

Note that size is not relevant here as most products are one-size or adjustable. Items which need sizing will show options on the main item page. To avoid complicating the tool asking for sizes, customisations etc., I will let the main pages take care of this aspect.

#### Submit button - Clear any previous results. Submit chosen options.

#### Reset button - clear the chosen options back to defaults

#### Footer

- Links to Home page of surfergrl.co.uk.
- This has been removed from the HTML which sits within the final WordPress page, as the page already contains navigation elements.

#### Results:

_For each result:_

- Product name
- Price
- Image (clickable)
- Link to main product page - 'See more'
- Share/save button - not implemented; future development
- Reset button to reset all choices to default
- Horizonal rule to separate products

#### Results Options:

Standard products - many of the items on the SGS store are one-off pieces due to the unique nature of seaglass. I have therefore chosen to only present established pieces from the main collections in the results.

I added ten products to the JavaScript array to show the tool working. More products would give better results, however keeping the guide updated by directly using the products in the WooCommerce database would be a far more efficient and useful way to do this. This is beyond the scope of this project.

---

## Technologies Used

[Top](#table-of-contents)

- [HTML](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [WordPress](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-t4XAqtyAAxUxXEEAHbhkBBQQFnoECBwQAQ&url=https%3A%2F%2Fen-gb.wordpress.org%2F&usg=AOvVaw3_Yh8Jp55SAR0s1nidR2lh&opi=89978449)
- [WP Code plugin](https://wpcode.com)

---

## Validation and Testing

## Bugs

[Top](#table-of-contents)

Please see the [Validation and Testing file](testing.md)

---

## Deployment

[Top](#table-of-contents)

The application is deployed at https://surfergrl.github.io/sgs-gift-guide/

### GitHub Pages Deployment

The site was first deployed to GitHub pages. The steps to deploy are as follows:

1. In the GitHub repository, navigate to the Settings tab
2. From the left hand menu select 'Pages'
3. From the source select Branch: main
4. Click 'Save'
5. A live link will be displayed when published successfully.

#### Forking the GitHub Repository

You can fork the repository by following these steps:

1. Go to the GitHub repository
1. Click on Fork button in upper right hand corner

#### Cloning the GitHub Repository

You can clone the repository to use locally by following these steps:

1. Navigate to the GitHub Repository you want to clone
2. Click on the code drop down button
3. Click on HTTPS
4. Copy the repository link to the clipboard
5. Open your IDE of choice (git must be installed for the next steps)
6. Type git clone copied-git-url into the IDE terminal

The project will now be cloned locally for you to use.

### Deployment to a WordPress page

The gift guide's final home is the [Surfergrl.co.uk](http://surfergrl.co.uk) website on a dedicated page https://surfergrl.co.uk/gift-guide

![Gift Guide](/assets/images/wp-final.png)

Within the main (Surfergrl) site I looked at presenting the Guide

- On a whole new page within an iFrame
- As a pop-up overlaid onto the shop Home page
- As a pop-up available from any page
- Using a WordPress plugin [WP Code plugin](https://wpcode.com) and an HTML code block

I wanted this final deployment to be

- Easy for me
- Easily accessible for other website admin
- Easy to update when necessary
- Fitted in with WordPress without too much extra code or workarounds which might compromise UX

I decided to use the final option with code snippets, as recommended by [WordPress documentation]("https://wordpress.com/go/website-building/how-to-properly-add-javascript-to-wordpress-3-top-methods/"). The Guide has been successfully deployed using this method.

#### To use the Gift Guide on any WordPress site page, follow these steps.

1. Log in to your WordPress installation and create a new Page
2. Give the page a title etc. as normal
3. Insert a Custom HTML block
   ![Custom HTML](/assets/images/wp-html.png)
4. Cut and paste the html from [index.html]("https://github.com/surfergrl/sgs-gift-guide/blob/main/index.html") in the Guift Guide repo
5. Remove meta, header, logo and footer code as required; your WordPress template should provide most of this
6. Change the headers, questions, answers and results area to suit your end use
7. Save and check the page
8. Install the ['WP Code']("https://wordpress.com/plugins/insert-headers-and-footers") plugin via the Plugins menu on your WordPress dashboard
   ![Custom HTML](/assets/images/wpcode.png)
9. Add a new Custom Code snippet; choose Code Type CSS Snippet
10. Cut and paste the CSS from the [Gift Guide repo]("https://github.com/surfergrl/sgs-gift-guide/blob/main/assets/css/styles.css")
11. Edit the CSS as required to fit your page/form aesthetics
12. Activate and save the snippet (Don't forget to activate!)
    ![Custom HTML](/assets/images/wp-activate.png)
13. Select Insert Method > Shortcode. Update the snippet (i.e. save it again)
    ![Custom HTML](/assets/images/wp-insert.png)
14. Copy the shortcode
15. Back on the WordPress page, insert a shortcode block
    ![Shortcode block](/assets/images/wp-shortcode.png)
16. Paste the shortcode into the shorcode block and save the page
17. Repeat creating a code snippet (Steps 9-16) for the [JavaScript file]("https://github.com/surfergrl/sgs-gift-guide/blob/main/script.js")
18. Save and view the page
19. Adjust the array in the JavaScript file to reflect your own products.
20. Adjust CSS as required via the Code Snippets editing panel.

---

## Credits

[Top](#table-of-contents)

- [CSS Scan]("https://getcssscan.com/css-buttons-examples") - CSS Scan for stylised buttons
- GoogleFonts
- [Techsini Mockup](https://techsini.com/multi-mockup/) - Creating the mockup images for the README
- [Vecteezy](https://www.vecteezy.com) - Yin Yang symbol for favicon from Vecteezy.com
- [Favicon.io](https://favicon.io/favicon-converter/) - Used to create and add the favicon to the browser tab
- [WP Code plugin](https://wpcode.com) - Create code snippets to use custom CSS and JS on a WordPress page

## Thanks to

Mentor: [Richard Wells](https://github.com/D0nni387)

CI tutors Oisin and Gemma

Kera Cudmore's [ReadMe resources](https://github.com/kera-cudmore/readme-examples)

Testers Paul and Paddy

---

![seaglass](/assets/images/seaglass-finds.jpeg)

Seaglass Finds

[Top](#table-of-contents)

---
