// Define an array of jewellery items with their properties
// Properties in arrays of their own as most products have multiple properties
// This cuts down on amount of objects needed in array order to have most combos work
// Eventually this info will be pulled from the existing WooCommerce database
const jewelleryItems = [
  {
    name: "Carreg Bica Pendant",
    category: ["Pendants"],
    price: 36,
    gender: ["His", "Hers", "Unisex"],
    budget: ["High", "Medium"],
    style: ["Classic", "Quirky", "Delicate"],
    theme: ["Llangrannog", "Seaglass", "Waves"],
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
    theme: ["Llangrannog", "Seaglass", "Mermaid"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/green-swimg-300x300.jpg",
    link: "https://surfergrl.co.uk/product/green-seaglass-pendant",
  },
  {
    name: "Dolphin & Seaglass Pendant",
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
    style: ["Cariad", "Chunky", "Quirky", "Classic"],
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
    style: ["Quirky", "Chunky", "Classic", "Delicate"],
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
  {
    name: "Silver 925 Bag Charm",
    category: ["Keyrings"],
    price: 30,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Medium", "High"],
    style: ["Quirky", "Chunky", "Classic", "Delicate"],
    theme: ["Llangrannog", "Waves", "Seaglass", "Cariad"],
    image: "https://surfergrl.co.uk/wp-content/uploads/2021/01/keyring-3.jpeg",
    link: "https://surfergrl.co.uk/product/llangrannog-sand-keyring",
  },
  {
    name: "White Seaglass Earrings",
    category: ["Earrings"],
    price: 35,
    gender: ["Unisex", "His", "Hers"],
    budget: ["Low", "High", "Medium"],
    style: ["Quirky", "Chunky", "Classic", "Delicate"],
    theme: ["Seaglass", "Llangrannog", "Waves", "Cariad"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/huggies-600x600.jpg",
    link: "https://surfergrl.co.uk/product/silver-claw-earrings-with-white-seaglass",
  },
  {
    name: "Mermaid Dreams Bracelet",
    category: ["Bracelets"],
    price: 45,
    gender: ["Hers", "Unisex"],
    budget: ["High", "Medium"],
    style: ["Delicate", "Mermaid"],
    theme: ["Mermaid", "Seaglass", "Waves"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/starfish-charm-b-150x150.jpg",
    link: "https://surfergrl.co.uk/product/silver-plated-charm-bracelet-with-seaglass-25",
  },
  {
    name: "Chunky Seaglass Ring",
    category: ["Rings"],
    price: 48,
    gender: ["His", "Unisex"],
    budget: ["High"],
    style: ["Chunky", "Classic"],
    theme: ["Seaglass", "Waves"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2021/01/silver-stacker-ring-boxed.jpeg",
    link: "https://surfergrl.co.uk/product/silver-wave-ring",
  },
  {
    name: "Minimalist Seaglass Wave Pendant",
    category: ["Pendants"],
    price: 22,
    gender: ["His"],
    budget: ["Low"],
    style: ["Classic", "Delicate"],
    theme: ["Waves", "Seaglass"],
    image:
      "https://surfergrl.co.uk/wp-content/uploads/2020/12/green-swimg-300x300.jpg",
    link: "https://surfergrl.co.uk/product/green-seaglass-pendant",
  },
  {
    name: "Cariad Charm Pendant",
    category: ["Pendants"],
    price: 40,
    gender: ["Hers", "Unisex"],
    budget: ["Medium", "High"],
    style: ["Cariad", "Quirky", "Delicate"],
    theme: ["Cariad", "Llangrannog"],
    image: "https://surfergrl.co.uk/wp-content/uploads/2020/12/CB-green.jpg",
    link: "https://surfergrl.co.uk/carreg-bica-collection",
  },
];

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector("#questionForm");
  resultsElement = document.getElementById("results");
  resultsHeader = resultsElement.querySelector("h1");

  // Reset event
  form.addEventListener("reset", () => {
    // Remove dynamic content but leave the header
    const dynamicElements = resultsElement.querySelectorAll(".dynamic");
    dynamicElements.forEach((el) => el.remove());
    resultsHeader.style.display = "block"; // Show header on reset
  });

  // Submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Remove previously rendered dynamic elements.
    const dynamicElements = resultsElement.querySelectorAll(".dynamic");
    dynamicElements.forEach((el) => el.remove());

    // Hide the header when showing results.
    resultsHeader.style.display = "none";

    // Get the form data.
    const formData = {
      category: form.elements.category.value,
      gender: form.elements.gender.value,
      theme: form.elements.theme.value,
      style: form.elements.style.value,
      budget: form.elements.budget.value,
    };

    // Get the filtered items.
    const filteredItems = filterItems(formData);

    if (filteredItems.length === 0) {
      // Fallback if no matches found.
      const fallbackItems = jewelleryItems.filter((item) =>
        ["Seaglass Pendants", "Shell & Sand Keyring"].includes(item.name)
      );

      // Render fallback message.
      const fallbackMessage = document.createElement("p");
      fallbackMessage.textContent =
        "Sorry, nothing matched all your criteria — but here are some of our bestsellers!";
      fallbackMessage.classList.add("dynamic");
      resultsElement.appendChild(fallbackMessage);

      // Render fallback items.
      renderItems(fallbackItems);
    } else {
      // Render the filtered results.
      renderItems(filteredItems);
    }
  });
});

// Create elements to show items or fallback items
function renderItems(items) {
  // Create a UL to hold the product items.
  const ul = document.createElement("ul");
  ul.classList.add("dynamic");

  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("dynamic");

    const nameEl = document.createElement("strong");
    nameEl.textContent = item.name;
    nameEl.classList.add("product-name");

    const br1 = document.createElement("br");

    const priceEl = document.createElement("span");
    priceEl.textContent = `Price: £${item.price}`;
    priceEl.classList.add("product-price");

    const br2 = document.createElement("br");

    const linkEl = document.createElement("a");
    linkEl.href = item.link;
    linkEl.textContent = "See More";
    linkEl.target = "_blank";
    linkEl.classList.add("product-link");

    const imgEl = document.createElement("img");
    imgEl.src = item.image;
    imgEl.alt = item.name;
    imgEl.classList.add("product-image");

    const imgLinkEl = document.createElement("a");
    imgLinkEl.href = item.link;
    imgLinkEl.target = "_blank";
    imgLinkEl.appendChild(imgEl);

    const br3 = document.createElement("p");
    const hr = document.createElement("hr");

    li.appendChild(nameEl);
    li.appendChild(br1);
    li.appendChild(priceEl);
    li.appendChild(br2);
    li.appendChild(imgLinkEl);
    li.appendChild(linkEl);
    li.appendChild(br3);
    li.appendChild(hr);

    ul.appendChild(li);
  });

  resultsElement.appendChild(ul);
}

// Price filtering by number avoids products from incorrect price categories being shown
function filterItems(formData) {
  const budgetRanges = {
    "Lower (5-15)": { min: 5, max: 15 },
    "Medium (15-30)": { min: 15, max: 30 },
    "High (30+)": { min: 30, max: Infinity },
  };

  const selectedRange = budgetRanges[formData.budget];

  // Filter the items based on the criteria.
  return jewelleryItems.filter((item) => {
    return (
      item.category.includes(formData.category) &&
      item.gender.includes(formData.gender) &&
      item.style.includes(formData.style) &&
      item.theme.includes(formData.theme) &&
      item.price >= selectedRange.min &&
      item.price <= selectedRange.max
    );
  });
}

// Function to return fallback items if no products match selections
if (results.length === 0) {
  const fallbackItems = jewelleryItems.filter((item) =>
    ["Seaglass Pendants", "Shell & Sand Keyring"].includes(item.name)
  );

  // Display a message
  const fallbackMessage = document.createElement("p");
  fallbackMessage.textContent =
    "Sorry, nothing matched all your criteria — but here are some of our bestsellers";
  fallbackMessage.classList.add("dynamic");
  resultsElement.appendChild(fallbackMessage);

  // const ul = document.createElement("ul");
  // ul.classList.add("dynamic");
}
