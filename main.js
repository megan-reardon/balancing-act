// Function to make welcome banner disappear

var banner = document.querySelector('.welcome');

var bannerButton = document.querySelector('.close-button');

bannerButton.addEventListener('click', closeBanner);

function closeBanner() {
  banner.classList.replace('display-visible', 'display-hidden');
}

// Functions to add left border when nav buttons are clicked

var clipboardButton = document.querySelector('.clipboard');

clipboardButton.addEventListener('click', addClipboardBorder);

var walletButton = document.querySelector('.wallet');

walletButton.addEventListener('click', addWalletBorder);

function addWalletBorder() {
  walletButton.classList.replace('white-border', 'teal-border');
  clipboardButton.classList.replace('teal-border', 'white-border');
};

function addClipboardBorder() {
  clipboardButton.classList.replace('white-border', 'teal-border');
  walletButton.classList.replace('teal-border', 'white-border');
};

// Function to replace dashboard content with transaction content when wallet icon is clicked

walletButton.addEventListener('click', addTransactionContent);

function addTransactionContent() {
  var dashboardContent = document.getElementById('dashboard-content');
  dashboardContent.innerHTML = " ";
  dashboardContent.innerHTML = `<div id="transaction-content">
    <div class="transactions-header">
      <h1>Transactions</h1>
    </div>
    <button class="all-transactions-button">ALL</button>
    <button class="inactive-buttons">INFLOW</button>
    <button class="inactive-buttons">OUTFLOW</button>
    <div class="transactions-summary">
      <table class="transactions-all">
        <tr>
          <th class="date-transactions">Date</th>
          <th class="account-transactions">Account</th>
          <th class="payee-transactions">Payee</th>
          <th class="inflow-transactions">Inflow</th>
          <th class="outflow-transactions">Outflow</th>
        </tr>
        <tr>
          <td>10-25-19</td>
          <td>Credit Card</td>
          <td>Target</td>
          <td>-</td>
          <td>$82.35</td>
        </tr>
        <tr>
          <td>10-24-19</td>
          <td>Credit Card</td>
          <td>Express</td>
          <td>-</td>
          <td>$212.24</td>
        </tr>
        <tr>
          <td>10-22-19</td>
          <td>Checking</td>
          <td>Paycheck</td>
          <td>$1319.12</td>
          <td>-</td>
        </tr>
        <tr>
          <td>10-21-19</td>
          <td>Credit Card</td>
          <td>Trader Joe's</td>
          <td>-</td>
          <td>$54.92</td>
        </tr>
        <tr>
          <td>10-20-19</td>
          <td>Credit Card</td>
          <td>Shell</td>
          <td>-</td>
          <td>$46.23</td>
        </tr>
        <tr>
          <td>10-19-19</td>
          <td>Savings</td>
          <td>Rent</td>
          <td>$800.00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>10-19-19</td>
          <td>Checking</td>
          <td>Hapa Sushi</td>
          <td>-</td>
          <td>$13.97</td>
        </tr>
        <tr>
          <td>10-18-19</td>
          <td>Credit Card</td>
          <td>Pig Train</td>
          <td>-</td>
          <td>$4.83</td>
        </tr>
        <tr>
          <td>10-18-19</td>
          <td>Checking</td>
          <td>RTD</td>
          <td>-</td>
          <td>$6.00</td>
        </tr>
        <tr>
          <td>10-24-19</td>
          <td>Checking</td>
          <td>Express</td>
          <td>-</td>
          <td>$212.24</td>
        </tr>
        <tr>
          <td>10-24-19</td>
          <td>Checking</td>
          <td>Express</td>
          <td>-</td>
          <td>$212.24</td>
        </tr>
      </table>
    </div>
    <div class="new-transactions-log">
      <h2 class="new-transaction-header">New Transaction</h2>
      <form>
        <p class="transaction-form">Type of Transaction:</p>
        <select class="dropdowns" name="type-of-transaction">
          <option value="expense">Expense</option>
        </select>
        <p class="transaction-form">Category:</p>
        <select class="dropdowns" name="category">
          <option value="category">-Select one-</option>
        </select>
        <p class="transaction-form">Account from:</p>
        <select class="dropdowns" name="account-from">
          <option value="account-from">-Select one-</option>
        </select>
        <p class="transaction-form">Payee:</p>
          <input class="input-form" type="text" name="payee" />
        <p class="transaction-form">Outflow:</p>
          <input class="input-form" type="text" name="outflow" />
        <p class="transaction-form">Inflow:</p>
          <input class="input-form" type="text" name="inflow" />
      </form>
      <button class="log-expense-button">Log Expense</button>
    </div>
  </div>`
};

// Function to populate dashboard content when clipboard is clicked

clipboardButton.addEventListener('click', addDashboardContent);

function addDashboardContent() {
  var transactionContent = document.getElementById('transaction-content');
  transactionContent.innerHTML = " ";
  transactionContent.innerHTML = `<div id="dashboard-content">
    <header>
      <h1>Balancing Act</h1>
    </header>
    <div class="left-summary">
      <div class="overview">
        <section class="cards">
          <h5>INCOME</h5>
          <p>$2,119.12</p>
        </section>
        <section class="cards">
          <h5>EXPENSES</h5>
          <p>$420.54</p>
        </section>
        <section class="cards">
          <h5>CREDIT SCORE</h5>
          <p>673</p>
        </section>
      </div>
      <section>
        <div class="heading-container">
        <h2>Accounts</h2>
        </div>
        <button class="blue-buttons">MANAGE ACCOUNTS</button>
        <table class="account-cards">
          <tr>
            <td class="account-icons"><img src="./assets/Balancing-Act/checking.svg" alt="Checkbook with pen" title="Checkbook with pen" class="small" /></td>
            <td class="account-name">Wells Fargo</td>
            <td class="account-type">Checking</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td class="account-icons"><img src="./assets/Balancing-Act/savings.svg" alt="Piggy bank with a coin" title="Piggy bank" class="small" /></td>
            <td class="account-name">Wells Fargo</td>
            <td class="account-type">Savings</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td class="account-icons"><img src="./assets/Balancing-Act/credit-card.svg" alt="Two credit cards" title="Credit cards" class="small" /></td>
            <td id="Amazon">Amazon Credit</td>
            <td class="account-type">Credit Card</td>
          </tr>
        </table>
        <table class="account-cards">
          <tr>
            <td class="account-icons"><img src="./assets/Balancing-Act/credit-card.svg" alt="Two credit cards" title="Credit cards" class="small" /></td>
            <td id="Southwest">Southwest Credit</td>
            <td class="account-type">Credit Card</td>
          </tr>
        </table>
        </section>
      </div>
      <div class="recent-transactions">
        <div class="transaction-heading-container">
          <h2>Recent Transactions</h2>
        </div>
        <button class="blue-buttons">NEW TRANSACTION</button>
        <table class="transactions">
          <tr>
            <th class="date">Date</th>
            <th class="payee">Payee</th>
            <th class="inflow">Inflow</th>
            <th class="outflow">Outflow</th>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Target</td>
            <td>-</td>
            <td>$82.35</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 22, 2019</td>
            <td>Paycheck</td>
            <td>$1,319.12</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 21, 2019</td>
            <td>Trader Joe's</td>
            <td>-</td>
            <td>$54.92</td>
          </tr>
          <tr>
            <td>Oct 20, 2019</td>
            <td>Shell</td>
            <td>-</td>
            <td>$46.23</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Rent</td>
            <td>$800.00</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Hapa Sushi</td>
            <td>-</td>
            <td>$13.97</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>Pig Train</td>
            <td>-</td>
            <td>$4.83</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>RTD</td>
            <td>-</td>
            <td>$6.00</td>
          </tr>
        </table>
    </div>
  </div>`
};
