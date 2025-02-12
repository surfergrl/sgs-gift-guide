// Define an array of jewellery items with their properties
// Properties in arrays of their own as most products have multiple properties
// This cuts down on amount of objects needed in array order to have most combos work
// Eventually this info will be pulled from the existing WooCommerce database
// This array wants to go in its own script file to keep things tidy and not so long
var jewelleryItems = [
  {
    name: "Carreg Bica Pendant",
    category: ["Pendants"],
    price: 36,
    gender: ["His", "Hers", "Unisex"],
    budget: ["High", "Medium"],
    style: ["Classic", "Quirky", "Delicate"],
    theme: ["Llangrannog", "Seaglass"],
    image: "https://surfergrl.co.uk/wp-content/uploads/2020/12/CB-green.jpg",
    link: "https://surfergrl.co.uk/carreg-bica-collection",
  },
  {
    name: "Cariad (Love) Cuff Bangle",
    category: ["Bracelets"],
    price: 50,
    gender: ["Unisex", "Hers"],
    budget: ["High", "Medium"],
    style: ["Cariad", "Delicate", "Chunky"],
    theme: ["Llangrannog", "Cariad", "Seaglass", "Mermaid", "Waves"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2021/01/cariad-cuff-white.jpeg",
    link: "https://surfergrl.co.uk/product/silver-cariad-hammered-cuff-bangle-68",
  },
  {
    name: "Seaglass Pendants",
    category: ["Pendants"],
    price: 25,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low", "Medium"],
    style: ["Delicate", "Classic", "Quirky"],
    theme: ["Llangrannog", "Seaglass"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/green-swimg-300x300.jpg",
    link: "https://surfergrl.co.uk/product/green-seaglass-pendant",
  },
  {
    name: "Dolphin & Seaglass pendant",
    category: ["Pendants"],
    price: 26,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low", "Medium"],
    style: ["Classic", "Delicate"],
    theme: ["Llangrannog", "Mermaid", "Waves", "Seaglass"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/baby-dolph-swing-300x300.jpg",
    link: "https://surfergrl.co.uk/product/green-seaglass-and-silver-dolphin-pendan",
  },
  {
    name: "Silver Cariad (Love) Ring",
    category: ["Rings"],
    price: 35,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Medium", "High"],
    style: ["Cariad", "Chunky", "Quirky"],
    theme: ["Llangrannog", "Cariad"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/cariad-ring-2-300x300.jpg",
    link: "https://surfergrl.co.uk/product/small-silver-cariad-cuff-ring",
  },
  {
    name: "Silver Wave Ring",
    category: ["Rings"],
    price: 20,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low", "Medium"],
    style: ["Delicate", "Classic", "Quirky"],
    theme: ["Llangrannog", "Waves", "Mermaid"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2021/01/silver-stacker-ring-boxed.jpeg",
    link: "https://surfergrl.co.uk/product/silver-wave-ring",
  },
  {
    name: "Charm Bracelet",
    category: ["Bracelets"],
    price: 25,
    gender: ["Hers"],
    budget: ["Medium"],
    style: ["Chunky", "Quirky"],
    theme: ["Llangrannog", "Seaglass", "Mermaid"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/starfish-charm-b-150x150.jpg",
    link: "https://surfergrl.co.uk/product/silver-plated-charm-bracelet-with-seaglass-25",
  },
  {
    name: "Shell & Sand Keyring",
    category: ["Keyrings"],
    price: 7,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low"],
    style: ["Quirky", "Classic"],
    theme: ["Llangrannog", "Waves", "Seaglass"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2021/01/mermaid-keyring-1.jpeg",
    link: "https://surfergrl.co.uk/product/llangrannog-sand-keyring",
  },
  {
    name: "Seaglass Keyring",
    category: ["Keyrings"],
    price: 7,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low"],
    style: ["Quirky", "Classic"],
    theme: ["Llangrannog", "Waves", "Seaglass"],
    image: "https://surfergrl.co.uk/wp-content/uploads/2021/01/keyring-3.jpeg",
    link: "https://surfergrl.co.uk/product/llangrannog-sand-keyring",
  },
  // Catch-all product for if the chosen combo does not return a result
  // This would be better done via an if statement to pick 2 random products
  {
    name: "White Seaglass Earrings",
    category: ["Keyrings", "Bracelets", "Rings", "Pendants"],
    price: 35,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low", "High", "Medium"],
    style: ["Quirky", "Chunky", "Classic", "Delicate"],
    theme: ["Seaglass", "Llangrannog", "Waves", "Cariad"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/huggies-600x600.jpg",
    link: "https://surfergrl.co.uk/product/silver-claw-earrings-with-white-seaglass",
  },
];

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Now that the DOM is loaded, these elements will be available
  const resultsElement = document.getElementById("results");
  const form = document.querySelector("#questionForm");

  // Clear the list in the results area if the Reset button is clicked
  form.addEventListener("reset", () => {
    // Find the existing <ul> inside #results and remove it, but keep the heading
    const ul = resultsElement.querySelector("ul");
    if (ul) {
      ul.remove();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Clear anything that is already in the results area
    // This also clears the area's heading - see Bugs
    resultsElement.innerHTML = "";

    // Get the form data
    let formData = {
      category: form.elements.category.value,
      gender: form.elements.gender.value,
      theme: form.elements.theme.value,
      style: form.elements.style.value,
      budget: form.elements.budget.value,
    };

    // Call the filterItems function with the formData
    const filteredItems = filterItems(formData);

    // Create an unordered list to display the results
    const ul = document.createElement("ul");

    // Create elements for the list so they can be styled individually
    filteredItems.forEach((item) => {
      // Create the list item container
      const li = document.createElement("li");

      // Create and configure a strong element for the product name
      const nameEl = document.createElement("strong");
      nameEl.textContent = item.name;
      nameEl.classList.add("product-name"); // Add a class for styling

      // Create a line break element
      const br1 = document.createElement("br");

      // Create a span element for the price
      const priceEl = document.createElement("span");
      priceEl.textContent = `Price: £${item.price}`;
      priceEl.classList.add("product-price");

      // Create a line break element
      const br2 = document.createElement("br");

      // Create link element for text link
      const linkEl = document.createElement("a");
      linkEl.href = item.link;
      linkEl.textContent = "See More";
      linkEl.target = "_blank";
      linkEl.classList.add("product-link");

      // Create the image element
      const imgEl = document.createElement("img");
      imgEl.src = item.image;
      imgEl.alt = item.name;
      imgEl.classList.add("product-image");

      // Wrap the image inside a clickable link
      const imgLinkEl = document.createElement("a");
      imgLinkEl.href = item.link;
      imgLinkEl.target = "_blank";
      imgLinkEl.appendChild(imgEl);

      // Create a p element
      const br3 = document.createElement("p");

      // Create a horizontal line element
      const hr = document.createElement("hr");

      // Append all the elements to the list item
      li.appendChild(nameEl);
      li.appendChild(br1);
      li.appendChild(priceEl);
      li.appendChild(br2);
      li.appendChild(imgLinkEl);
      li.appendChild(linkEl);
      li.appendChild(br3);
      li.appendChild(hr);

      // Append the list item to the unordered list
      ul.appendChild(li);

      // Append the unordered list to the results element
      resultsElement.appendChild(ul);
    });
  });
});

// Filter items from the form (hoisting means this declaration is okay here)
function filterItems(formData) {
  const filtered = jewelleryItems.filter(
    // Using .includes for v.category and formData.category instead of strict equality ensures accurate filtering
    (v) =>
      v.category.includes(formData.category) &&
      v.gender.includes(formData.gender) &&
      v.budget.includes(formData.budget) &&
      v.style.includes(formData.style) &&
      v.theme.includes(formData.theme)
  );
  return filtered;
}
