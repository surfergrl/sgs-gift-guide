

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
    return filtered;
}

// Get the results element in index.html 
const resultsElement = document.getElementById("results");

// Select your form element and add an event listener to handle form submissions
const form = document.querySelector("#questionForm"); 
form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Get the form data
    let formData = {
        category: form.querySelector(".category.select").value,
        gender: form.querySelector(".gender.select").value,
        theme: form.querySelector(".theme.select").value,
        style: form.querySelector(".style.select").value,
        budget: form.querySelector(".budget.select").value,
    };

    // Call the filterItems function with the formData
    const filteredItems = filterItems(formData);

    // Clear any previous content
    resultsElement.innerHTML = "";

    // Create an unordered list to display the results
    const ul = document.createElement("ul");

    // Iterate through the filtered items and create list items
    filteredItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name; // customize this as needed
        ul.appendChild(li);
    });

    // Append the list to the results element
    resultsElement.appendChild(ul);
});


// Run code only after page has loaded 
document.addEventListener("DOMContentLoaded", () => {
    firstQuestion(); 
}); 