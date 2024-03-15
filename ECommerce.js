const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
    // Add more products as needed
  ];
  
  function displayProducts() {
    const productsSection = document.getElementById("products");
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsSection.appendChild(productCard);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // Add product to cart (implement your cart logic)
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.textContent = ${product.name} - $${product.price};
    cartItems.appendChild(cartItem);
  }
  
  function checkout() {
    // Implement checkout logic (e.g., redirect to checkout page)
    alert("Redirecting to checkout page...");
  }
  
  // Display products when the page loads
  displayProducts();