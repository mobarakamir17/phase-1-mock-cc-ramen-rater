// Fetch the ramen data from the server
fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(data => {
    // Display the ramen menu
    data.forEach(ramen => makeRamenImage(ramen));

    // Display details for the first ramen by default
    showRamenDetails(data[0]);
  });

// Function to create a new ramen
function createNewRamen(event) {
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById("new-name").value;
  const restaurant = document.getElementById("new-restaurant").value;
  const image = document.getElementById("new-image").value;
  const rating = parseInt(document.getElementById("new-rating").value);
  const comment = document.getElementById("new-comment").value;

  // Create the new ramen object
  const newRamen = {
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment
  };

  // Display the new ramen in the menu
  makeRamenImage(newRamen);

  // Reset the form fields
  event.target.reset();
}

// Function to display the ramen image in the menu
function makeRamenImage(ramen) {
  const ramenMenu = document.getElementById("ramen-menu");
  const ramenImg = document.createElement("img");
  ramenImg.src = ramen.image;
  ramenImg.addEventListener("click", () => showRamenDetails(ramen));
  ramenMenu.appendChild(ramenImg);
}

// Function to display the ramen details
function showRamenDetails(ramen) {
  const ramenDetail = document.getElementById("ramen-detail");
  const detailImage = ramenDetail.querySelector(".detail-image");
  const nameElement = ramenDetail.querySelector(".name");
  const restaurantElement = ramenDetail.querySelector(".restaurant");
  const ratingElement = document.getElementById("rating-display");
  const commentElement = document.getElementById("comment-display");

  detailImage.src = ramen.image;
  nameElement.textContent = ramen.name;
  restaurantElement.textContent = ramen.restaurant;
  ratingElement.textContent = ramen.rating;
  commentElement.textContent = ramen.comment;
}

// Add event listener to the new ramen form
const newRamenForm = document.getElementById("new-ramen");
newRamenForm.addEventListener("submit", createNewRamen);
