

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

// Get the results element in index.html 
const resultsElement = document.getElementById("results");

// Select the form element and add an event listener to handle form submissions
const form = document.querySelector("#questionForm");

// prevent page refresh 
document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the form data
        let formData = {
            name: form.elements.name.value,
            category: form.elements.category.value,
            price: form.elements.price.value,
            gender: form.elements.gender.value,
            theme: form.elements.theme.value,
            style: form.elements.style.value,
            budget: form.elements.budget.value,
        };
        console.log(form.elements.name); // Check if the name element is found

        // Call the filterItems function with the formData
        const filteredItems = filterItems(formData);

        // Add results header below fieldset 
        resultsElement.innerHTML = "Here are some suggestions";

        // Create an unordered list to display the results
        const ul = document.createElement("ul");

        // Iterate through the filtered items and create list items
        filteredItems.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name; // customise this 
            ul.appendChild(li);
        });

        // Append the list to the results element
        resultsElement.appendChild(ul);
    });
});

//filter items from the form 
function filterItems(formData) {
    const filtered = jewelleryItems.filter((v) =>
        v.name === formData.name &&
        v.category === formData.category &&
        v.price === formData.price &&
        v.gender === formData.gender &&
        v.budget === formData.budget &&
        v.style === formData.style &&
        v.theme === formData.theme
    );
    console.log(filtered);
    return filtered;
}

