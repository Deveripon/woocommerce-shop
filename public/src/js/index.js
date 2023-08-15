const woocommerceItem = document.querySelectorAll(".woocommerce-item")

// shoe view option
function showViewOption() {
  woocommerceItem.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      let viewBox = e.target.querySelector(".product-view");
      let viewIcon = viewBox.querySelector(".view-icon")
      viewBox.classList.add("active")
      viewIcon.classList.add("active")
    })
  });

}

// close view button
function closeViewOption() {
  woocommerceItem.forEach((item) => {
    item.addEventListener("mouseleave", function (e) {
      let viewBox = e.target.querySelector(".product-view");
      let viewIcon = viewBox.querySelector(".view-icon")
      viewBox.classList.remove("active")
      viewIcon.classList.remove("active")
    })
  })
}
showViewOption();
closeViewOption();

// single product modal show and close
function singleProductModalShowClose() {
  document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelectorAll(".openModalBtn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    openModalBtn.forEach((item) => {
      item.addEventListener("click", function () {
        modal.style.display = "block";
      });
    });

    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}
singleProductModalShowClose();