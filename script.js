let loggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        loggedIn = true;
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".home-container").style.display = "block";
    } else {
        alert("Invalid username or password");
    }
}

function showConverter() {
    if (loggedIn) {
        document.querySelector(".home-container").style.display = "none";
        document.querySelector(".converter-container").style.display = "block";
    } else {
        alert("Please log in first.");
    }
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    const conversionRates = {
        GBP: 0.86,
        USD: 1.0,
        EUR: 0.91,
        BRL: 5.25,
        JPY: 110.0,
        TRY: 8.30,
    };

    if (!isNaN(amount)) {
        const result = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        alert("Please enter a valid amount.");
    }
}
