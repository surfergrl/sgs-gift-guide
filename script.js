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
    price: 6.5,
    gender: "Unisex",
    budget: "low",
    style: "Quirky",
    theme: "Waves",
  },
];

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    // prevent page refresh
    event.preventDefault();

  // Check required elements are available - debugging step 
  const resultsElement = document.getElementById("results");
  const form = document.querySelector("#questionForm");

  // Check if form is found
  if (!form) {
    console.error("Form with id 'questionForm' not found!");
    return;
  }

  // Reset button sets results area back to original message 
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

    // Check what form is returning - for debugging
    console.log(form);
    console.log(form.elements.category.value);

    // Call the filteredItems function with the formData
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

//filter items from the form (placement in script is okay as JS hoists)
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
  return filtered; //return the filtered array
}

// next sort the results of the choices so that a product is picked and displayed in the Results div.

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
