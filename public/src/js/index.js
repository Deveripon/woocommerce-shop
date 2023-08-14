const woocommerceItem = document.querySelectorAll(".woocommerce-item");
const productView = document.querySelector(".product-view");
woocommerceItem.map((item) => {
  item.addEventListener("mouseenter", () => {

    productView.style.top = "25%";


  });
});
// woocommerceItem.map((item) => {
//   item.addEventListener("mouseleave", () => {
//     productView.map((viewButton) => {
//       viewButton.style.top = "25%";
//     });

//   });
// });

woocommerceItem.addEventListener("mouseenter", () => {
  productView.style.top = "25%";
});
woocommerceItem.addEventListener("mouseleave", () => {
  productView.style.top = "-25%";
});