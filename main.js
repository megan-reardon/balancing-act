// Function to make banner disappear
var banner = document.querySelector('.welcome');

var bannerButton = document.querySelector('.close-button');

bannerButton.addEventListener('click', closeBanner);

function closeBanner() {
  banner.style.display = 'none';
}

// function to change border and content when nav buttons are clicked
var clipboardButton = document.querySelector('.clipboard');

clipboardButton.addEventListener('click', populateDashboardContent);

var walletButton = document.querySelector('.wallet');

walletButton.addEventListener('click', populateTransactionContent);

var dashboardContent = document.querySelector('.dashboard-content');

var transactionContent = document.querySelector('.transaction-content');

function populateTransactionContent() {
  walletButton.classList.replace('white-border', 'teal-border');
  clipboardButton.classList.replace('teal-border', 'white-border');
  dashboardContent.classList.replace('display-visible', 'display-hidden');
  transactionContent.classList.replace('display-hidden', 'display-visible');
};

function populateDashboardContent() {
  clipboardButton.classList.replace('white-border', 'teal-border');
  walletButton.classList.replace('teal-border', 'white-border');
  dashboardContent.classList.replace('display-hidden', 'display-visible');
  transactionContent.classList.replace('display-visible', 'display-hidden');
};
