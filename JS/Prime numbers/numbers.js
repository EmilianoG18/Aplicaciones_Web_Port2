
function checkPrime() {
    var number = parseInt(document.getElementById("num").value);
    var maxNum = 1299827;
    if (number < maxNum && !isNaN(number)) {
        for (var i = number + 1; i < maxNum; i++) {
            if (isPrime(i)) {
                document.getElementById("result").textContent = "Next Prime Number: " + i;
                break;
            }
        }
    } else {
        window.alert("Please Enter Number Below 1299827 or Enter A Valid Integer");
    }
}

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1 && num !== 0;
}

