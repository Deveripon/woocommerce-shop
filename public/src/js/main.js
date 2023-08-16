//Get DOM elements
const productList = document.getElementById("productList");

/**
 * Get Product data from API by Fetch
 * PRODUCT API : http://localhost:5050/products
 * function getProduct();
 * parameters{apilink}
 */

async function getProduct(apilink) {
  let errors;
  await fetch(apilink)
    .then((res) => res.json())
    .then((res) => {
      let products = "";
      res.map((item) => {
        products += `
      <div
      class="woocommerce-item rounded-lg overflow-x-hidden w-72 relative shadow-lg hover:shadow-2xl transform duration-300">
      <div class="item-tag absolute left-2 mt-2 flex justify-start flex-col gap-y-3">
      ${item.discountPercentage?` <span class="text-white rounded-full w-fit font-medium px-2 py-1 bg-red-500">${item.discountPercentage}% Discount </span>`:""}
       
      </div>
      <div class="product-view absolute">
        <button class="view-icon openModalBtn" onclick="singleProductModalShowClose(${
          item.id
        })" > <i
            class="ri-eye-line transform duration-300 hover:bg-blue-700 hover:text-white bg-gray-400 p-3 rounded-full text-2xl"></i>
        </button>
      </div>
      <div class="product-images h-70  border-dashed border-b-2 border-gray-300 ">
        <img class=""
          src="${item.featuredImageUrl}"
          alt="${item.name}">
      </div>
      <div class="product-info mt-4 p-7 ">
        <a class="product-name text-xl font-medium text-gray-800" href="#">${
          item.name
        }</a>
        <a class="product-category text-sm text-gray-500" href="#">All Category</a>
        <div class="stock flex justify-start gap-x-5">
          <i class="ri-check-line text-blue-700"></i>
          <p class="text-blue-700">${
            item.instockStatus ? `In Stock` : `Stock Finished`
          }</p>
        </div>
        <div class="price my-2 flex justify-between mr-20">
          <p class="reguler-price"><span class="currency">$</span><span ${
            res.discountPrice ? `style="text-decoration: line-through;"` : ""
          }
              class="amount">${item.regulerPrice}</span>
          </p>
         ${
           item.discountPrice
             ? ` <p class="sell-price"><span class="currency">$</span><span class="amount">${item.discountPrice}</span></p>`
             : ""
         }
        </div>
        <button
          class="add-to-cart py-2 w-full rounded-md  bg-blue-700  hover:bg-blue-900 transform duration-300 text-white font-medium text-sm">Add
          To
          Cart</button>
        <p class="sku my-2 text-gray-400"><span>SKU</span>: <span>${
          item.sku
        }</span></p>
      </div>
    </div>
      `;
        productList.innerHTML = products;
      });
    })
    .catch((error) => console.log((errors = error.message)));
}

getProduct("http://localhost:5050/products");