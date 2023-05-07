async function getProducts() {
    const response = await fetch('http://johanf.no/wp-json/wc/store/products/');
    const data = await response.json();
    
    const productsContainers = document.querySelectorAll('.products');
    
    productsContainers.forEach(container => {
      data.forEach(product => {
        const productName = product.name;
        const productImage = product.images[0].src;
        const productLink = product.permalink;
  
        const productHTML = `
          <div class="product">
            <img src="${productImage}" alt="${productName}">
            <h3>${productName}</h3>
            <a href="${productLink}" class="cta">Buy now</a>
          </div>
        `;
  
        container.insertAdjacentHTML('beforeend', productHTML);
      });
    });
  }
  
  getProducts();