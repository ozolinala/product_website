const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;
console.log(urlParams.get("brandname"));

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("#productsTemplate").content;

  //clone it
  const copy = template.cloneNode(true);

  //change content

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(
    ".type"
  ).textContent = `${product.brandname} ${product.usagetype} `;
  copy.querySelector(".price").textContent = `${product.price} DKK`;

  copy.querySelector("h2").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(".discounted p").textContent =
    Math.round(product.price - (product.discount / 100) * product.price) +
    " DKK";

  copy.querySelector(".discounted p:nth-of-type(2)").textContent = `${
    product.discount
  }  ${"%"}`;

  copy.querySelector("a").href += product.id;

  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(copy);
}