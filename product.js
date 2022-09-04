const url = `https://kea-alt-del.dk/t7/api/products/${query}`;
console.log(url);

//fetch the data
fetch(url)
.then((res)=> res.json())
.then((data)=> showProduct(data));

//populate the page 

function showProduct(product){
    console.log(product);
    document.querySelector(".puchase.brand").textContent = product.productdisplayname;
    document.querySelector(".purchase.productimage").src = "https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp";
//                <img class="productimage" src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp" alt="Grey Solid Round Neck T-Shirt">
document.querySelector(".productimage").alt = product.productdisplayname;
}

document.querySelector(
    ".productText h4"
  ).textContent = `${product.price} DKK`;