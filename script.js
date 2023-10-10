//Change intro div to first question
function firstQuestion() {
    //     let content = document.getElementById('contentBox');
    //     let html = `
    //      <h4>First Question</h4>
    //         <p>What category of jewellery would you like to see?</p>
    //         <ul>
    //             <li>Bracelets</li>
    //             <li>Ring</li>
    //             <li>Anklets</li>
    //             <li>Keyrings</li>
    //             <li>Necklaces</li>
    //             <li>Earrings</li>
    //         </ul>
    //     <button onclick="start()">Next</button>    
    //     <button onclick="start()">Restart</button>
    //     `;
    //     content.innerHTML = html;
    // }


    //Change first question div to second question 
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    } 

  let formData = {
        category: form.querySelector(".question1.select").value,
        gender: form.querySelector(".question2.select").value,
        design: form.querySelector(".question3.select").value,
        quality: form.querySelector(".question4.select").value,
        occasion: form.querySelector(".question5.select").value,
    };

    filterIems(formData);
});

function filterItems(formData) {
    const filtered = jewelleryItems.filter("jewellery" Llangrannog 
        (v) => 
        v.category === FormData.category && 
        v.gender === formData.gender &&
        v.budget === formData.budget &&
        v.occasion === formData.occasion &&
        v.quality === formData.quality 
        ); 
    console.log(filtered);
} 

// Define an array of items with their properties
var jewelleryItems = [
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        hers: "Unisex",
        budget: "med",
        style: "Llangrannog",
    },
    {
        name: "Anchor and seaglass pendant",
        category: "Pendants",
        price: 25,
        hers: "Unisex",
        budget: "med",
        style: "Classic",
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        hers: "Unisex",
        budget: "med",
        style: "Llangrannog",
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        hers: "Unisex",
        budget: "med",
        style: "Llangrannog",
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        hers: "Unisex",
        budget: "med",
        style: "Llangrannog",
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        hers: "Unisex",
        budget: "med",
        style: "Llangrannog",
    },

];

// Function to ask a question and return the user's answer
function askQuestion(question) {
    return alert(question);
}

// Function to filter items based on user preferences
function filterjewelleryItems(preferences) {
    var filteredItems = [];
    for (var i = 0; i < jewelleryItems.length; i++) {
        var item = jewelleryItems[i];
        var match = true;
        for (var key in preferences) {
            if (preferences.hasOwnProperty(key) && item[key] !== preferences[key]) {
                match = false;
                break;
            }
        }
        if (match) {
            filteredItems.push(item);
        }
    }
    return filteredItems;
}

// Function to display recommended jewelry items
function displayRecommendedItems(items) {
    if (items.length === 0) {
        console.log("Sorry, we don't have any items matching your preferences.");
    } else {
        console.log("Here are some ideas:");
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].name + " - $" + items[i].price);
        }
    }
}

// Ask questions to determine user preferences
var preferences = {};
preferences.category = askQuestion("What category of jewellery do you want to see?");
preferences.hers = askQuestion("His, hers or both?");
preferences.style = askQuestion("What style do you prefer?");
preferences.budget = askQuestion("What is your budget?");
preferences.theme = askQuestion("Choose a theme");

// Filter items based on user preferences
var recommendedItems = filterjewelleryItems(preferences);

// Display recommended items
displayRecommendedItems(recommendedItems);
