// Define an array of jewellery items with their properties
var jewelleryItems = [
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        gender: "Unisex",
        budget: "high",
        style: "Classic",
        theme: "Llangrannog",
    },
    {
        name: "Anchor and seaglass pendant",
        category: "Pendants",
        price: 25,
        gender: "Unisex",
        budget: "med",
        style: "Classic",
        theme: "Mermaid",
    },
    {
        name: "Silver Cariad (Love) Ring",
        category: "Rings",
        price: 35,
        gender: "Unisex",
        budget: "high",
        style: "Cariad",
        theme: "Cariad",
    },
    {
        name: "Seaglass Charm Anklet",
        category: "Anklets",
        price: 20,
        gender: "Unisex",
        budget: "med",
        style: "Delicate",
        theme: "Seaglass",
    },
    {
        name: "Charm Bracelet",
        category: "Bracelets",
        price: 15,
        gender: "Hers",
        budget: "med",
        style: "Chunky",
        theme: "Seaglass",
    },
    {
        name: "Shell & Sand Keyring",
        category: "Keyrings",
        price: 6.50,
        gender: "Unisex",
        budget: "low",
        style: "Quirky",
        theme: "Waves",
    },

];

//Set up an event listener for 'questionForm' and handle form submissions
function firstQuestion() {
    const form = document.querySelector('#questionForm');
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = {
            category: form.querySelector(".category.select").value,
            gender: form.querySelector(".gender.select").value,
            theme: form.querySelector(".theme.select").value,
            style: form.querySelector(".style.select").value,
            budget: form.querySelector(".budget.select").value,
        };
        filterItems(formData);
    });
}
//filter items from the form 
function filterItems(formData) {
    const filtered = jewelleryItems.filter((v) =>
        v.category === formData.category &&
        v.gender === formData.gender &&
        v.budget === formData.budget &&
        v.style === formData.style &&
        v.theme === formData.theme
    );
    console.log(filtered);
}

// Get the results element in index.html 
const resultsElement = document.getElementById("results");

//Clear any previous content 
resultsElement.innerHTML = "";

// Call the filterItems function with the formData
const filteredItems = filterItems(formData);

// Create an unordered list to display the results
const ul = document.createElement("ul");

// Iterate through the filtered items and create list items
filtered.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name; // customise this later
    ul.appendChild(li);
});

// Append the list to the results element
resultsElement.appendChild(ul);

// Run code only after page has loaded 
document.addEventListener("DOMContentLoaded", () => {
    firstQuestion(); // Initialize the form logic
});

// previous messes 
//Function to filter items based on user preferences
// function filterjewelleryItems(preferences) {
//     var filteredItems = [];
//     for (var i = 0; i < jewelleryItems.length; i++) {
//         var item = jewelleryItems[i];
//         var match = true;
//         for (var key in preferences) {
//             if (preferences.hasOwnProperty(key) && item[key] !== preferences[key]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) {
//             filteredItems.push(item);
//         }
//     }
//     return filteredItems;
// }

    // // Function to display recommended jewelry items
    // function displayRecommendedItems(items) {
    //     if (items.length === 0) {
    //         console.log("Sorry, we don't have any items matching your preferences.");
    //     } else {
    //         console.log("Here are some ideas:");
    //         for (var i = 0; i < items.length; i++) {
    //             console.log(items[i].name + " - £" + items[i].price);
    //         }
    //     }
    // }