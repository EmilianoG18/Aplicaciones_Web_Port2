function getPrimeFactors() {
    var num = parseInt(document.getElementById("num").value);
    var factors = [];
    if (!isNaN(num) && num > 1) {
        for (var i = 2; i <= num; i++) {
            while (num % i === 0) {
                factors.push(i);
                num /= i;
            }
        }
        document.getElementById("pf").textContent = "Prime Factors: " + factors.join(", ");
    } else {
        document.getElementById("pf").textContent = "Please enter a valid number greater than 1.";
    }
}
