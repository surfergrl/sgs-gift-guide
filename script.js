// Reference the elements in the HTML file
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Create an array to store the questions in objects along with their weighting 
const quizQuestions = [
        {
          question: "What type of jewellery does this person wear?",
          options: {
            a: { text: "Bracelets", weight: 1 },
            b: { text: "Rings", weight: 2 },
            c: { text: "Keyrings", weight: 3 },
            d: { text: "Necklaces", weight: 4 },
            e: { text: "Earrings", weight: 5 }
          }
        }

    {
        question: "What price range are you interested in?",
        options: {
            a: "£5-20",
            b: "£20-35",
            c: "£35+"
        },
        correctAnswer: "a"
    }

    {
        question: "What theme appeals to you/them?",
        options: {
            a: "Llangrannog & Wales",
            b: "Cariad - Love",
            c: "Waves",
            d: "Seaglass"
        },
        correctAnswer: "a"
    }

    {
        question: "What type of jewellery does this person wear?",
        options: {
            a: "Quirky",
            b: "Classic",
            c: "Delicate",
            d: "Chunky"
        },
        correctAnswer: "a"
    }

    {
        question: "Are you looking for his, hers or both?",
        options: {
            a: "His",
            b: "Hers",
            c: "Both",
        },
        correctAnswer: "a"
    }
]

// Code to show each quiz question on the page 
function buildQuiz(){
    // Store the output in here:
    const output = [];

    // For each question (loop over)... 
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //Variable to store the list of poss options 
            const options = [];

            //For each option, denoted by letter a b c d or e 
            for(letter in currentQuestion.options) {
            //Add an html radio button 
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.options[letter]}
              </label>`
            }

            // Add this question and its answers to the output
            output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${options.join('')} </div>`
            );
        }
        // Combine  output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    
    );
}

