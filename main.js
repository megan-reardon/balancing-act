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

function addWalletBorder() {
  clipboardButton.style.borderLeft = '4px solid white';
  walletButton.style.borderLeft = '4px solid #1CA3BA';
}

clipboardButton.addEventListener('click', addClipboardBorder);

function addClipboardBorder() {
  walletButton.style.borderLeft = '4px solid white';
  clipboardButton.style.borderLeft = '4px solid #1CA3BA';
}
