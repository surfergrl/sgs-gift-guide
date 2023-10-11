// Define an array of jewellery items with their properties
var jewelleryItems = [
    {
        name: "Carreg Bica pendant",
        category: "Pendants",
        price: 35,
        gender: "Unisex",
        budget: "high",
        style: "Llangrannog",
    },
    {
        name: "Anchor and seaglass pendant",
        category: "Pendants",
        price: 25,
        gender: "Unisex",
        budget: "med",
        style: "Classic",
    },
    {
        name: "Silver Cariad (Love) Ring",
        category: "Rings",
        price: 35,
        gender: "Unisex",
        budget: "high",
        style: "Cariad",
    },
    {
        name: "Seaglass Charm Anklet",
        category: "Anklets",
        price: 20,
        gender: "Unisex",
        budget: "med",
        style: "Delicate",
    },
    {
        name: "Charm Bracelet",
        category: "Bracelets",
        price: 15,
        gender: "Hers",
        budget: "med",
        style: "Chunky",
    },
    {
        name: "Shell & Sand Keyring",
        category: "Keyrings",
        price: 6.50,
        gender: "Unisex",
        budget: "low",
        style: "Quirky",
    },

];

//form logic 
function firstQuestion() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = {
            category: form.querySelector(".category.select").value,
            gender: form.querySelector(".budget.select").value,
            design: form.querySelector(".theme.select").value,
            quality: form.querySelector(".style.select").value,
            occasion: form.querySelector(".gender.select").value,
        };
        filterItems(formData);
    });
};

function filterItems(formData) {
    const filtered = jewelleryItems.filter((v) =>
        v.category === formData.category &&
        v.gender === formData.gender &&
        v.budget === formData.budget &&
        v.occasion === formData.occasion &&
        v.quality === formData.quality
    );
    console.log(filtered);
}

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
    // Get the results element in index.html 
    const resultsElement = document.getElementById("results");

    // Clear any previous content (just in case)
    resultsElement.innerHTML = "";

    // Create an unordered list to display the results
    const ul = document.createElement("ul");

    // Iterate through the filtered items and create list items
    filtered.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name; // customise this later to display imgs
        ul.appendChild(li);
    });

    // Append the list to the results element
    resultsElement.appendChild(ul);

// Function to filter items based on user preferences
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