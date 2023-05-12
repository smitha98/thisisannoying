const merchButton = document.getElementById("merchflip");
const showsButton = document.getElementById("showsflip");
const card = document.querySelector(".card");
const backOfCard = document.getElementById('back-of-card');

let timerId;
let isFlipped = false; // flag variable to check if card is flipped

merchButton.addEventListener("click", function() {
  card.classList.toggle("flipped");
  backOfCard.innerHTML = "<div id='merch-image-container'><img id='merch-image' src='michael.jpg' alt='Merch image'></div> <h1>DM us to purchase</h1>";
  clearInterval(timerId);
  isFlipped = true; // set flag variable to true when card is flipped
});

showsButton.addEventListener("click", function() {
  card.classList.toggle("flipped");
  backOfCard.innerHTML = "<p id='backtext'> We currently don't have any shows right now but want some!</p>";
  isFlipped = true; // set flag variable to true when card is flipped
});

backOfCard.addEventListener('click', function() {
  card.classList.toggle('flipped');
  isFlipped = false; // set flag variable to false when card is flipped back to the front
});

const images = ['michael.jpg', 'starwars.jpg'];
let index = 0;

function changeMerchImage() {
  const merchImage = document.getElementById('merch-image');
  if (merchImage && isFlipped) { // check flag variable to ensure card is currently flipped
    merchImage.src = images[index];
    index = (index + 1) % images.length;
    timerId = setTimeout(changeMerchImage, 3000);
  }
}

if (document.getElementById('merchflip')) {
  changeMerchImage();
}

card.addEventListener('click', function() {
  if (card.classList.contains('flipped')) {
    index = 0;
    changeMerchImage();
    isFlipped = true; // set flag variable to true when card is flipped
  } else {
    isFlipped = false; // set flag variable to false when card is flipped back to the front
  }
});
