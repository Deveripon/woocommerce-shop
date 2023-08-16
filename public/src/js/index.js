const woocommerceItem = document.querySelectorAll(".woocommerce-item");
const productListContainer = document.getElementById("productList");
// console.log(productListContainer);
// console.log(woocommerceItem);
// shoe view option
function showViewOption() {
  woocommerceItem.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      let viewBox = e.target.querySelector(".product-view");
      let viewIcon = viewBox.querySelector(".view-icon");
      viewBox.classList.add("active");
      viewIcon.classList.add("active");
    });
  });
}

// close view button
function closeViewOption() {
  woocommerceItem.forEach((item) => {
    item.addEventListener("mouseleave", function (e) {
      let viewBox = e.target.querySelector(".product-view");
      let viewIcon = viewBox.querySelector(".view-icon");
      viewBox.classList.remove("active");
      viewIcon.classList.remove("active");
    });
  });
}
// showViewOption();
// closeViewOption();

// single product modal show and close
function singleProductModalShowClose(id) {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  async function showSingleProduct() {
    await fetch(`http://localhost:5050/products/${id}`).then(res => res.json()).then(res => {
      modal.innerHTML = `
    <div class="modal-content relative h-fit overflow-scroll lg:overflow-visible">
    <span id="closeModalBtn" class="close">&times;</span>
    <div class="product-details w-full flex justify-between items-center flex-wrap flex-shrink">
      <div class="left-side lg:flex-1">
        <div class="item-tag absolute left-2 flex justify-start flex-col gap-y-3">
        ${res.discountPercentage?` <span class="text-white rounded-full w-fit font-medium px-2 py-1 bg-red-500">${res.discountPercentage}% Discount </span>`:""}
        </div>
        <img class="w-full"
          src="${res.featuredImageUrl}"
          alt="">
      </div>
      <div class="right-side lg:flex-1">
        <div class="right-top">
          <div class="name-details">
            <div class="product-info mt-4 p-7 ">
              <div class="name-category">
                <a class="product-name text-xl w-full block font-medium text-gray-800" href="#">${res.name}</a>
                <a class="product-category text-sm w-full block text-gray-500" href="#">Default Category</a>
              </div>
              <div class="stock flex justify-start gap-x-5">
                <i class="ri-check-line text-blue-700"></i>
                <p class="text-blue-700">${res.instockStatus?`In Stock`: `Out Of Stock`}</p>
              </div>
              <div class="price my-2 flex justify-between mr-20">
                <p class="reguler-price"><span class="currency">$</span><span ${res.discountPrice?`style="text-decoration: line-through;"`:``}
                    class="amount">${res.regulerPrice}</span>
                </p>
                ${res.discountPrice?` <p class="sell-price text-blue-600 text-4xl"><span class="currency">$</span><span
                class="amount">${res.discountPrice}</span></p>`:``}
      
              </div>
              <p class="sku my-2 text-gray-400"><span>SKU</span>: <span>${res.sku}</span></p>
    
              <div class="buying-option flex justify-between gap-4 items-center flex-wrap">
                <button
                  class="add-to-cart py-2 rounded-md px-6  bg-blue-700  hover:bg-blue-900 transform duration-300 text-white font-medium text-sm">Add
                  To
                  Cart</button>
                <button
                  class="add-to-cart py-2  px-6 rounded-md  bg-orange-700  hover:bg-orange-900 transform duration-300 text-white font-medium text-sm">Buy
                  Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-description">
        <h3 class="text-2xl text-gray-700 my-8">Product Description</h3>
        <p class="text-gray-600">${res.description}</p>
      </div>
    </div>
    </div>
    `;

      const closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });

      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    }).catch(error => {
      console.log(error.message);
    });


  }
  showSingleProduct();


}
// singleProductModalShowClose();