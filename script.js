// Reference the elements in the HTML file
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Create an array to store the questions in objects
const quizQuestions = [
    {
        question: "What type of jewellery does this person wear?",
        options: {
            a: "Bracelets",
            b: "Rings",
            c: "Keyrings",
            d: "Necklaces"
            e: "Earrings"
        },
        correctAnswer: "a"
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

