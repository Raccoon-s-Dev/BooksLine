// Obtener el id del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Verificar si el id es válido
if (isNaN(productId)) {
    alert("Producto no válido.");
} else {
    // Buscar el producto en el array de productos
    const product = products.find(p => p.id === productId);

    if (product) {
        // Mostrar los datos del producto en la página
        document.getElementById('book-name').textContent = `${product.name}`;
        document.getElementById('book-price').textContent = `S/ ${product.price.toFixed(2)}`;
        document.getElementById('book-image').src = product.image;
        document.getElementById('book-author').textContent = product.author;
        document.getElementById('book-editorial').textContent = product.editorial;
        document.getElementById('book-year').textContent = product.year;
        document.getElementById('book-language').textContent = product.language;
        document.getElementById('book-pages').textContent = product.pages;
        document.getElementById('book-binding').textContent = product.binding;
        document.getElementById('book-synopsis').textContent = product.synopsis;
    } else {
        alert("Producto no encontrado.");
    }
}