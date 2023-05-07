const productUrl = 'https://www.johanf.no/wp-json/wc/store/products/44';

fetch(productUrl)
  .then(response => response.json())
  .then(data => {
    const product = data;

    const productContainers = document.querySelectorAll('.product-container-details');
    productContainers.forEach(productContainer => {
      productContainer.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price_html}</p>
        <a href="/html/checkout.html" class="cta-btn-details">Buy Now</a>
      `;
    });
  })
  .catch(error => console.error(error));