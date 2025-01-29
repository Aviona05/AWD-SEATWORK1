// Get stored balance or use starting balance
let balance = localStorage.getItem('currentBalance') ? 
    parseFloat(localStorage.getItem('currentBalance')) : 5000;

// Get stored history or start with empty array    
let history = JSON.parse(localStorage.getItem('transactionHistory')) || [];

// Initial updates
updateBalance();
updateHistoryDisplay();

function updateBalance() {
    document.getElementById('balance').textContent = balance + ' PHP';
    // Save current balance to localStorage
    localStorage.setItem('currentBalance', balance.toString());
}

function deposit() {
    const amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    balance += amount;
    updateBalance();
    addToHistory('Deposit', amount);
    document.getElementById('amount').value = '';
}

function withdraw() {
    const amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    if (amount > balance) {
        alert('Insufficient balance');
        return;
    }
    balance -= amount;
    updateBalance();
    addToHistory('Withdrawal', amount);
    document.getElementById('amount').value = '';
}

function addToHistory(type, amount) {
    const date = new Date().toLocaleString();
    history.unshift({ date, type, amount });
    // Save history to localStorage
    localStorage.setItem('transactionHistory', JSON.stringify(history));
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyTableBody = document.querySelector('.history-table tbody');
    historyTableBody.innerHTML = history.map(entry => `
        <tr>
            <td>${entry.date}</td>
            <td>${entry.type}</td>
            <td>${entry.amount} PHP</td>
        </tr>
    `).join('');
}

function toggleHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.style.display = 
        historyContainer.style.display === 'none' ? 'block' : 'none';
}

// Logout functionality
document.querySelector('.logout-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully');
        window.location.href = '/index.html';
    }
});

// Reset function (for testing)
function resetData() {
    localStorage.clear();
    balance = 5000;
    history = [];
    updateBalance();
    updateHistoryDisplay();
}
