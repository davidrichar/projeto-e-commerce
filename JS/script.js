document.querySelector(".search-bar").addEventListener("input", function() {
    var searchText = this.value.toLowerCase(); // Obtém o texto digitado e converte para minúsculas
    var products = document.querySelectorAll("#products .product"); // Seleciona todos os produtos
    
    products.forEach(function(product) {
      var productName = product.querySelector("h2").innerText.toLowerCase(); // Obtém o nome do produto e converte para minúsculas
      if (productName.includes(searchText)) {
        product.classList.add("filtered"); // Adiciona a classe .filtered se o nome corresponder ao texto digitado
      } else {
        product.classList.remove("filtered"); // Remove a classe .filtered se o nome não corresponder ao texto digitado
      }
    });
  });
  