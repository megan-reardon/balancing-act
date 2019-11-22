var banner = document.querySelector('.welcome');

var button = document.querySelector('.close-button');

button.addEventListener('click', closeBanner);

function closeBanner() {
  banner.style.display = 'none';
}
