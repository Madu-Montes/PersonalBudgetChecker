function financialBalance() {
    let monthlyIncome = Number(document.getElementById("monthlyIncome").value);
    let expenses = Number(document.getElementById("expense").value);

    let balance = monthlyIncome - expenses;

    let status = document.getElementById("status");

    if (balance > 0) {
        status.innerText = "Your balance is positive. Remaining: $" + balance;
        status.className = "green"; 
    } else if (balance === 0) {
        status.innerText = "Attention: your balance is zero.";
    } else {
        status.innerText = "Warning: negative balance! Debt: $" + Math.abs(balance);
        status.className = "red"; 
    }

    status.style.visibility = "visible";

    

}
