let elem = [];

for(let i=1; i<=18; i++) {
    // console.log(i);
    elem[i] = document.getElementById(i.toString());
    elem[i].children[4].children[0].onclick = function(){add1(elem[i]); modifyOver(elem[i]); total(elem[i]);};
    elem[i].children[4].children[1].onclick = function(){sub1(elem[i]); modifyOver(elem[i]); total(elem[i]);};
    let warnBtn = document.createElement("button")
    warnBtn.className = "btn btn-warning"
    warnBtn.innerHTML = "C"
    elem[i].children[4].appendChild(warnBtn);


}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

// create an "sub1" function
function sub1 (elem) {
    if (elem.children[2].innerHTML != "-" && elem.children[2].innerHTML != "1"){
        let currentScore = elem.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem.children[2].innerHTML = currentScore - 1;
    }
  }

// Calculating over function
function modifyOver(elem){
    if (elem.children[2].innerHTML != "-")
        elem.children[3].innerHTML = elem.children[1].innerHTML - elem.children[2].innerHTML;
    else if(elem.children[3].innerHTML = "0"){
        elem.children[3].innerHTML = "-";
    }
}

// Calculating total function
function total(){
    let totalPar = 0
    let totalScore = 0
    let totalOver = 0
    
    for (let i=1; i <= 18; i++){
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