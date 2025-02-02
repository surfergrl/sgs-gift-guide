// Define an array of jewellery items with their properties
// Properties in arrays of their own as most products have multiple properties
// This cuts down on amount of items needed in order to have most combos work
var jewelleryItems = [
  {
    name: "Carreg Bica Pendant",
    category: ["Pendants"],
    price: 35,
    gender: ["His", "Hers", "Unisex"],
    budget: ["High", "Medium"],
    style: ["Classic", "Quirky", "Delicate", "Chunky"],
    theme: ["Llangrannog", "Seaglass"],
    image: "assets/images/CB-green.jpg",
    link: "https://surfergrl.co.uk/product/silver-carreg-bica-and-green-llangrannog-seaglass-pendant-36",
  },
  {
    name: "Cariad (Love) Cuff Bangle",
    category: "Bracelets",
    price: 65,
    gender: "Unisex",
    budget: "High",
    style: "Cariad",
    theme: "Cariad",
  },
  {
    name: "Seaglass Pendant",
    category: "Pendants",
    price: 35,
    gender: "Unisex",
    budget: "Medium",
    style: "Delicate",
    theme: "Seaglass",
  },
  {
    name: "Anchor and seaglass pendant",
    category: "Pendants",
    price: 25,
    gender: "Unisex",
    budget: "Medium",
    style: "Classic",
    theme: "Mermaid",
  },
  {
    name: "Silver Cariad (Love) Ring",
    category: "Rings",
    price: 35,
    gender: "Unisex",
    budget: "High",
    style: "Cariad",
    theme: "Cariad",
  },
  {
    name: "Wave Ring",
    category: "Rings",
    price: 20,
    gender: "Unisex",
    budget: "Medium",
    style: "Delicate",
    theme: "Waves",
  },
  {
    name: "Charm Bracelet",
    category: "Bracelets",
    price: 15,
    gender: "Hers",
    budget: "Medium",
    style: "Chunky",
    theme: "Seaglass",
  },
  {
    name: "Shell & Sand Keyring",
    category: "Keyrings",
    price: 6.5,
    gender: "Unisex",
    budget: "Low",
    style: "Quirky",
    theme: "Waves",
  },
  {
    name: "Seaglass Keyring",
    category: "Keyrings",
    price: 6.5,
    gender: "Unisex",
    budget: "Low",
    style: "Quirky",
    theme: "Seaglass",
  },
];

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Now that the DOM is loaded, these elements should be available
  const resultsElement = document.getElementById("results");
  const form = document.querySelector("#questionForm");

  // Reset button clears results area (if needed later)
  function resetAnswer() {
    resultsElement.innerHTML = "Your result will show up here!";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the form data
    let formData = {
      category: form.elements.category.value,
      gender: form.elements.gender.value,
      theme: form.elements.theme.value,
      style: form.elements.style.value,
      budget: form.elements.budget.value,
    };

    // // Debugging logs
    // console.log(form);
    // console.log(form.elements.category.value);
    // console.log("Jewellery Items:", jewelleryItems);

    // Call the filterItems function with the formData
    const filteredItems = filterItems(formData);

    // Update results in the DOM
    resultsElement.innerHTML = "Here are some suggestions";

    // Create an unordered list to display the results
    const ul = document.createElement("ul");

    filteredItems.forEach((item) => {
      const li = document.createElement("li");
      (li.textContent = item.name), item.price;
      ul.appendChild(li);
    });

    resultsElement.appendChild(ul);
  });
});

// filter items from the form (hoisting means this declaration is okay here)
function filterItems(formData) {
  const filtered = jewelleryItems.filter(
    (v) =>
      v.category === formData.category &&
      v.gender === formData.gender &&
      v.budget === formData.budget &&
      v.style === formData.style &&
      v.theme === formData.theme
  );
  console.log(filtered);
  return filtered;
}

// If there are no items matching the results, display a message

// Then pick two products at random to show

// Define another array with the proper names, prices, images and add to cart link of each possible result.

// let jewelleryItemsDetails = [
//     {
//         name: "Carreg Bica pendant",
//         price: 35,
//         link: link
//         image: URL
//     },
//     {
//         name: "Anchor and seaglass pendant",
//         price: 25,
//         link: link
//         image: URL
//     },
//     //and so on
// ];

// //
// let result1 = "carregbica";
// let result2 = "anchor"
// let noresult = "Sorry, nothing matches."
// // and so on

// if {
//     category === "Pendants" && gender === "Unisex" && budget === "high" && style === "Classic" && theme === "Llangrannog";
//     console.log(carregbica);
// } else if {
//     //and so on for all the options. There is a more efficient way to do this. With a function.
// } else {
//     console.log(noresult);
// };
