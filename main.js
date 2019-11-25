var banner = document.querySelector('.welcome');

var bannerButton = document.querySelector('.close-button');

bannerButton.addEventListener('click', closeBanner);

function closeBanner() {
  banner.style.display = 'none';
}

// function to change border for nav buttons
var clipboardButton = document.querySelector('.clipboard');

var walletButton = document.querySelector('.wallet');

walletButton.addEventListener('click', addWalletBorder);

clipboardButton.addEventListener('click', addClipboardBorder);

function addWalletBorder() {
  walletButton.classList.remove('white-border');
  walletButton.classList.add('teal-border');
  clipboardButton.classList.remove('teal-border');
  clipboardButton.classList.add('white-border');
};

function addClipboardBorder() {
  clipboardButton.classList.add('teal-border');
  walletButton.classList.remove('teal-border');
  walletButton.classList.add('white-border');
};
