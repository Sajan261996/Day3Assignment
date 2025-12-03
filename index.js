function checkPosNeg() {
    let n = parseFloat(document.getElementById("numPosNeg").value);
    let result = "";

    if (n > 0) {
        result = "The number is Positive";
    } else if (n < 0) {
        result = "The number is Negative";
    } else {
        result = "The number is Zero";
    }

    document.getElementById("resultPosNeg").innerHTML = result;
}

function max(a, b, c) {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}

function findMaxOfThree() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    let c = parseFloat(document.getElementById("numC").value);

    let largest = max(a, b, c);
    document.getElementById("resultMax").innerHTML = "Largest Number is: " + largest;
}

function printTable() {
    let n = parseFloat(document.getElementById("numTable").value);
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += n + " x " + i + " = " + (n * i) + "\n";
    }

    document.getElementById("resultTable").textContent = output;
}

function checkEvenOdd() {
    let n = parseFloat(document.getElementById("numEvenOdd").value);
    let result = (n % 2 === 0) ? n + " is Even" : n + " is Odd";

    document.getElementById("resultEvenOdd").innerHTML = result;
}
