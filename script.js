// Define an array of items with their properties
var jewelleryItems = [
    {
        name: "Carreg Bica pendant",
        category: "Pendants"
        price: 35,
        hers: "Unisex",
        budget: "med"
        style: "Llangrannog"
    },
    {
        name: "Anchor and seaglass pendant",
        category: "Pendants"
        price: 25,
        hers: "Unisex",
        budget: "med"
        style: "Classic"
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants"
        price: 35,
        hers: "Unisex",
        budget: "med"
        style: "Llangrannog"
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants"
        price: 35,
        hers: "Unisex",
        budget: "med"
        style: "Llangrannog"
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants"
        price: 35,
        hers: "Unisex",
        budget: "med"
        style: "Llangrannog"
    },
    {
        name: "Carreg Bica pendant",
        category: "Pendants"
        price: 35,
        hers: "Unisex",
        budget: "med"
        style: "Llangrannog"
    },

];

// Function to ask a question and return the user's answer
function askQuestion(question) {
    return prompt(question);
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