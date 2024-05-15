function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    var conversionRates = {
        USD: {
            EUR: 0.92,
            GBP: 0.79,
            INR: 83.50
        },
        EUR: {
            USD: 1.08,
            GBP: 0.86,
            INR: 90.41
        },
        GBP: {
            USD: 1.26,
            EUR: 1.16,
            INR: 105.19
        },
        INR: {
            USD: 0.013,
            EUR: 0.011,
            GBP: 0.0095
        }
    };

    var result = amount * conversionRates[fromCurrency][toCurrency];

    document.getElementById('result').value = result.toFixed(2);
}
