# Validation and Testing

## HTML run through W3C validator

Errors on index.html:
![Validator](assets/images/readme/valid-index.png)

- Widths for the logo and main image had px specified when that was not needed. Deleted.
- Section for the logo was changed into a div element at the validator's suggestion.
- Span links were removed as not necessary.
- Added closing tags for links in the correct place (footer).
- The validator threw errors for the code copied from the CSS validator to display the 'Valid CSS' image. I deleted this altogether.
  Now validates.

Similar errors showed up on the Contact Us and Events page as Index was used as a template for the other pages.

### CSS run through Jigsaw

One error was found with text-wrap property given a pixels value; this was changed to 'wrap'.

<p>
    <a href="http://jigsaw.w3.org/css-validator">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

### JavaScript tested on

### Tested on

- Chrome Version 131.0.6778.265 renders as expected
- Firefox 134.0.1 renders as expected
- Safari 17.6 renders as expected
- Microsoft Edge renders as expected
- Internet Explorer via Edge IE mode poor (as expected)

### Testing against user stories

- **_New potential club member_** (any age/level) who wants to see what's on offer
  - Information on events and how to join
  - Background info e.g. who runs it, is it safe, qualifications
  - Membership costs
- Parents of kids who are members/want to be members - again to see what's on offer
  - As above

<details><summary>Screenshots of Home and Events pages</summary>
<img src="assets/images/readme/events-screenshot.png">
<img src="assets/images/readme/croeso-screenshot.png">
</details>

| **Feature**                     | **Action**                                                                    | **Expected Result**                                     | **Actual Result**                                                       |
| ------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| Short intro • Welsh and English | Read short intro, click on 'Contact us' link. Read more detail on Events page | Find information about the club and its events          | Works as expected                                                       |
| Nav Bar - Events Link           | Click on home on nav, read more detail on About Us page                       | Find information about the club                         | Works as expected                                                       |
| Contact Us link                 | Click the link in the nav bar, fill in the form                               | Contact for more info                                   | Works as expected                                                       |
| Social media buttons            | Click buttons on footer, see more info                                        | Find information about the club/members                 | Works as expected                                                       |
| Events                          | Click on Events on nav bar, read more detail                                  | Find information about coach qualifications, costs etc. | Basic information only; more content as club develops constitution etc. |

- **_Official bodies_** - governing bodies e.g. Welsh Surfing Federation or insurance company, funding organisations e.g. Council
  - In the future, information on policies, member qualifications to run events

This content is not yet available from the club; it will be supplied and loaded in the future.

- **_Sponsors_**
  - Space for their logo
  - Images of club events with logos/banners etc.

| **Feature**                     | **Action**                                    | **Expected Result**           | **Actual Result**   |
| ------------------------------- | --------------------------------------------- | ----------------------------- | ------------------- |
| Clickable logos                 | Click to open the sponsor's site in a new tab | See the sponsor's information | Works as expected   |
| More images - not yet available | See club images using sponsor logos           | See the sponsor's information | Not yet implemented |

<details><summary>Screenshot - Sponsors area</summary>
Appears on all pages above the footer. 
<img src="assets/images/readme/sponnos-screenshot.png">
</details>

- **_Current and potential volunteers/coaches_**
  - Info on dates and times of events
- Visitors who might not become a member but might book a lesson/kids' session/other event
  - Event information for visitors

<details><summary>Screenshot of Events page</summary>
<img src="assets/images/readme/events-screenshot.png">
</details>

| **Feature**               | **Action**             | **Expected Result**   | **Actual Result** |
| ------------------------- | ---------------------- | --------------------- | ----------------- |
| Three event info sections | Read event information | See event information | Works as expected |

- **_Current club members_**
  - Event information
  - How to get in touch
  - Background of club and members

<details><summary>Screenshots of events, welcome intro and contact form </summary>
<img src="assets/images/readme/events-screenshot.png">
<img src="assets/images/readme/croeso-screenshot.png">
<img src="assets/images/readme/contact-screenshot.png">
</details>

| **Feature**               | **Action**                       | **Expected Result**         | **Actual Result** |
| ------------------------- | -------------------------------- | --------------------------- | ----------------- |
| Three event info sections | Read event information           | See event information       | Works as expected |
| Intro section             | Read intro to club on index page | See information bilingually | Works as expected |
| Contact form              | Contact the club                 | Contact the club            | Works as expected |
| Email button on footer    | Click to email                   | Blank email opens           | Works as expected |

### Conclusion

The user stories are broadly matched by the functionality of the site, but some areas do not yet have enough information. As the club develops this information will be created and can be uploaded as relevant. A new page for policies and coach information would be the next step, as well as a gallery for more sponsor visibility and exposure of club members and successful events.

For now, the site is able to give the basic information users require, and allows them to contact the club with any further questions. Future developments will build on this foundation.
