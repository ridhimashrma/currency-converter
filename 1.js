function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Sample conversion rates
    var conversionRates = {
        USD: {
            EUR: 0.84,
            GBP: 0.72,
            INR: 74.97
        },
        EUR: {
            USD: 1.19,
            GBP: 0.86,
            INR: 88.98
        },
        GBP: {
            USD: 1.38,
            EUR: 1.16,
            INR: 103.34
        },
        INR: {
            USD: 0.013,
            EUR: 0.011,
            GBP: 0.0097
        }
        // Add more conversion rates here
    };

    var result = amount * conversionRates[fromCurrency][toCurrency];

    document.getElementById('result').value = result.toFixed(2);
}
