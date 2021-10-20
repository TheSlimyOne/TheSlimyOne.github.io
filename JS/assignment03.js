let elem = [];

for (let i = 1; i <= 18; i++) {
    // console.log(i);

    elem[i] = document.getElementById(i.toString());

    // Creates all the buttons needed programmatically 
    createButton("btn btn-success", "+", elem[i].children[4])
    createButton("btn btn-danger", "-", elem[i].children[4])
    createButton("btn btn-warning", "C", elem[i].children[4])

    // Adds the events needed for each button
    elem[i].children[4].children[0].onclick = function() {
        add1(elem[i]);
        calcOver(elem[i]);
        calcTotal(elem[i]);
    };
    elem[i].children[4].children[1].onclick = function() {
        sub1(elem[i]);
        calcOver(elem[i]);
        calcTotal(elem[i]);
    };
    elem[i].children[4].children[2].onclick = function() {
        clear(elem[i]);
        calcOver(elem[i]);
        calcTotal(elem[i]);
    };

}

// Create a new button element 
function createButton(className, text, parent) {
    let btn = document.createElement("button");
    btn.className = className
    btn.innerHTML = text
    parent.appendChild(btn);
}

// Create an "add1" function
function add1(elem) {
    if (elem.children[2].innerHTML == "-")
        elem.children[2].innerHTML = "1";
    else {
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore + 1;
    }
}

// Create a "sub1" function
function sub1(elem) {
    if (elem.children[2].innerHTML != "-" && elem.children[2].innerHTML != "1") {
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore - 1;
    }
}

// Clears the row
function clear(elem) {
    elem.children[2].innerHTML = "-"
    elem.children[3].innerHTML = "-"
}

// Calculating over function
function calcOver(elem) {
    if (elem.children[2].innerHTML != "-")
        elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML;
}

// Calculating total function
function calcTotal() {
    let totalPar = 0
    let totalScore = 0
    let totalOver = 0

    for (let i = 1; i <= 18; i++) {
        if (elem[i].children[1].innerHTML != "-")
            totalPar += Number.parseInt(elem[i].children[1].innerHTML);
        if (elem[i].children[2].innerHTML != "-")
            totalScore += Number.parseInt(elem[i].children[2].innerHTML);
        if (elem[i].children[3].innerHTML != "-")
            totalOver += Number.parseInt(elem[i].children[3].innerHTML);

    }

    let totalTable = document.getElementById("totals")
    totalTable.children[1].innerHTML = totalPar;
    totalTable.children[2].innerHTML = totalScore;
    totalTable.children[3].innerHTML = totalOver;
}