# Validation and Testing

https://surfergrl.github.io/sgs-gift-guide/

## HTML run through W3C validator Errors on index.html:

![Validator](assets/images/validhtml.png)

- A rogue link in the meta tags was removed.
- Trailing slashes in void tags were being added by Prettier. This threw an 'info' in the validator: 'Trailing slash on void elements has no effect and interacts badly with unquoted attribute values'. I attempted configuring Prettier to stop this but was not successful as this affects other files badly e.g. Markdown files. It is a known issue with Prettier.

Validates with no warnings.

## CSS run through Jigsaw

Valid CSS

![Valid CSS](/assets/images/valid-css.png)

<p>
  <a href="http://jigsaw.w3.org/css-validator">
    <img
      style="border: 0; width: 88px; height: 31px"
      src="http://jigsaw.w3.org/css-validator/images/vcss"
      alt="Valid CSS!"
    />
  </a>
</p>

![Warnings](/assets/images/warn.png)

These warnings refer to external vendor CSS which is not in my control.
The CSS still validates.

## Wave Accessibility Tool

![Wave report](/assets/images/wave-valid.png)

- Select elements in my form did not have labels. Fixed.
- Low contrast on Submit and Reset buttons. Fixed by increasing font weight and darkening colour.
- Warning of a skipped header level. Only heading in the Footer is a H4; left as is.
- Alert for no page regions. There is header,footer and fieldset. The app is designed to run inside another page with all of this information so this works as expected here.

![Wave report 2](/assets/images/wave2.png)

## Tested on

- Chrome Version 131.0.6778.265 renders as expected
- Firefox 134.0.1 renders as expected
- Safari 17.6 renders as expected
- Microsoft Edge renders as expected
- Internet Explorer via Edge IE mode poor (as expected)

Works as expected on:

- MacBook Air 13"
- MacBook Pro 16"
- iPhone ProMax 12, Google and Safari
- iPhone 14

I used DevTools to check the appearance of the page for screen sizes 320px and above, and the media queries work as expected to create the intended layout.

### Testing against user stories

#### Site owner's goals:

- To capture the buyer who is not sure what they want
- To showcase products and entice buyers to purchase with confidence
- Have potential customers become familiar with the products on offer
- Provide a fun way of browsing through items
- To show that the brand is a polished, quality, reliable entity
- Increase revenue

| **Feature**                     | **Action**                                                                    | **Expected Result**                                     | **Actual Result**                                                       |
| ------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| Short intro • Welsh and English | Read short intro, click on 'Contact us' link. Read more detail on Events page | Find information about the club and its events          | Works as expected                                                       |
| Nav Bar - Events Link           | Click on home on nav, read more detail on About Us page                       | Find information about the club                         | Works as expected                                                       |
| Contact Us link                 | Click the link in the nav bar, fill in the form                               | Contact for more info                                   | Works as expected                                                       |
| Social media buttons            | Click buttons on footer, see more info                                        | Find information about the club/members                 | Works as expected                                                       |
| Events                          | Click on Events on nav bar, read more detail                                  | Find information about coach qualifications, costs etc. | Basic information only; more content as club develops constitution etc. |

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

| **Feature**               | **Action**                       | **Expected Result**         | **Actual Result** |
| ------------------------- | -------------------------------- | --------------------------- | ----------------- |
| Three event info sections | Read event information           | See event information       | Works as expected |
| Intro section             | Read intro to club on index page | See information bilingually | Works as expected |
| Contact form              | Contact the club                 | Contact the club            | Works as expected |
| Email button on footer    | Click to email                   | Blank email opens           | Works as expected |

#### Testing in the wild

Two people tested the app for me, on a MacBook Pro and an iPhone 14.

They were broadly positive about the gift guide itself.
Comments made mostly related to the main site once they were directed into that via a result from the form.
Comment re. 'see more' opening in the same page will be addressed when the gift guide is in its final home.

![User test 1](/assets/images/usertest1.png)

![User test 2](/assets/images/usertest2.png)

### Conclusion

The user stories are broadly matched by the functionality of the site, but some areas do not yet have enough information. As the club develops this information will be created and can be uploaded as relevant. A new page for policies and coach information would be the next step, as well as a gallery for more sponsor visibility and exposure of club members and successful events.

For now, the site is able to give the basic information users require, and allows them to contact the club with any further questions. Future developments will build on this foundation.

---

## Bugs and issues

#### Product combinations

The main issue with the application itself is that if there is no product available for the combination chosen, a 'catch-all' product appears. This means the results section is never empty, but also means that the user will be presented with a product that does not match the selections they made on the form.

With all the options available, there are over 500 possible combinations a user could pick. These cannot be coded in by hand. They would also require a lot more products to be available. This would be best done by linking to the full product catalogue in the WordPress/WooCommerce site which hosts the products. If there is no, or only one, suitable product, another 'bestseller' according to the database could be inserted. Linking to and querying this database is beyond the scope of this project.

#### Submit button issue

If the submit button was clicked more than once, the same results stacked up on top of each other. I went back and coded the button to clear the results area when it was clicked, before populating it with the latest results.

#### Clearing the form and results area

When the Submit button is clicked, the innerHTML for the results area loses its heading. The Reset button preserves the heading, but once Submit has been clicked, it's gone until there is a page refresh. I would look at this with more time.

#### Updating products

Because the product details are in an array, they would be hard to update, especially for someone working on the site who cannot amend JavaScript with confidence. Again, the product list should be drawn from the WooCommerce products in the main site. For now, the application is not as flexible as it could be – this would be a great next step.

Please see Future Deployment in the main [README file](README.md) for more information.

---
