###Structure and logic

The gift guide structure will be quiz-style. It asks questions then gives a suggestion suitable gift/s to buy.

- HTML file for basic user interface
- CSS file for appearance, matching main site
- JS file for interactive functionality

Questions will have multiple choice answers
Users pick one choice (for simplicity at this stage; future versions would allow multiple choices)
That choice narrows down the products to display
Next choice narrows it further
And so on for 5 questions
Until one product is shown when the Results button is clicked

If a question is not answered, the guide will still return a product.
They can re-choose anytime and will get another product (will it work this way by default?)
If they click the Results button again, another product will be shown that matches the criteria - probs future dev.
In the future, the array will populate from the WooCommerce product catalogue, maintained in the main WordPress site.

User path:
Click Gift Guide link to navigate to page
Read title and introduction
Read first question; pick an option
Repeat for all five questions
Click Results button
View results
Click an option to be taken to that product page in the shop pages

Or click Clear button to restart the quiz - future dev
I would like an option to email the results to them with a discount code - future dev!

Code structure

Declare variables to reference the HTML elements - form, results, submit button
Array of objects with question, answers and answer weights
Show the quiz questions on the HTML page
