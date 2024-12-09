//1
// function updateProductCard(productName, price, imageUrl) {
//   const productCard = document.querySelector(".product-card");
//   productCard.querySelector(".product-name").textContent = productName;
//   productCard.querySelector(".product-price").textContent = `Price: ${price}`;
//   const imgElement = productCard.querySelector(".product-image");
//   imgElement.src = imageUrl;
//   imgElement.alt = productName;
// }
// updateProductCard(
//   "Phone",
//   "5000azn.",
//   "https://clipart-library.com/newhp/Mobile_Phone_Transparent_PNG_Clip_Art_Image.png"
// );

// function updateCommentMessage(author, message, timestamp) {
//   const comment = document.querySelector(".comment");
//   comment.querySelector(".comment-author").textContent = author;
//   comment.querySelector(".comment-message").textContent = message;
//   comment.querySelector(
//     ".comment-timestamp"
//   ).textContent = `Time: ${timestamp}`;
// }
// updateCommentMessage("Ismail", "super tovar!", "2024-12-06 10:30");

// function updateMenuItem(name, price, description) {
//   const menuItem = document.querySelector(".menu-item");
//   menuItem.querySelector(".menu-name").textContent = name;
//   menuItem.querySelector(".menu-price").textContent = `Price: ${price}`;
//   menuItem.querySelector(".menu-description").textContent = description;
// }

// updateMenuItem("Pizza", "800azn.", "Tradition Italian eat");

//2
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("successMessage");

    if (emailInput.value !== "") {
      successMessage.style.display = "block";
      emailInput.value = "";
    }
  });
