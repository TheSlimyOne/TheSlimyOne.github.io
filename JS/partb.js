/*
  Contact
  ------------------------
  Jordan Anodjo
  jjanodjo@svsu.eud
  
  Description
  ------------------------
  JS to assignment 4

  Functions in this script:

  appendTableHeader(tableobj, col1)
  appendTableRow1(tableobj, col1)
  appendTableRow3(tableobj, col1, col2, col3)
  appendTableRow5(tableobj, col1, col2, col3, col4, col5)
  createTable(id)
*/


// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  fullName: function () { return this.firstName + " " + person.lastName },

  streetAddress: "27 Windsor Street",
  city: "North Brunswick, NJ",
  zipCode: 38902,
  fullAddress: function () { return this.streetAddress + " " + this.city + " " + this.zipCode }

}
document.getElementById("1A").innerHTML = person.fullName();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person.streetAddress = "123 Main Street";
document.getElementById("1B").innerHTML = person.fullAddress();
// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a, "1", "2", "3");
appendTableRow3(table2a, "4", "5", "6");
appendTableRow3(table2a, "7", "8", "9");

// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">

let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2b.appendChild(table2b);
table2b.setAttribute("style", "border:1px solid black;")
table2b.setAttribute("width", "100%")
appendTableRow5(table2b, "1", "2", "3", "4", "5");
appendTableRow5(table2b, "6", "7", "8", "9", "10");
appendTableRow5(table2b, "11", "12", "13", "14", "15");
appendTableRow5(table2b, "16", "17", "18", "19", "20");
appendTableRow5(table2b, "21", "22", "23", "24", "25");

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table03A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table3B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column

let div3b = document.getElementById("3B");
let table3b = createTable("table3b");
div3b.appendChild(table3b);
table3b.setAttribute("style", "border:1px solid black;");
table3b.setAttribute("width", "100%");
let total = 0;
appendTableHeader4(table3b, "Item", "Price", "Qty", "Price * Qty");
for (i = 1; i < 4; i++) {
  rowItem = document.getElementById("table03A").children[0].children[i].children[0].innerHTML
  rowPrice = document.getElementById("table03A").children[0].children[i].children[1].innerHTML
  rowQty = document.getElementById("table03A").children[0].children[i].children[2].innerHTML

  let qty = document.getElementById("table03A").children[0].children[i].children[2].innerHTML;
  let price = document.getElementById("table03A").children[0].children[i].children[1].innerHTML;
  
  rowTotal = qty * price;
  total += rowTotal;

  appendTableRow4(table3b, rowItem, rowPrice, rowQty, rowTotal)
}

let table3bTotal = createTable("table3bTotal");
div3b.appendChild(table3bTotal);
table3bTotal.setAttribute("style", "border:1px solid black;");
table3bTotal.setAttribute("width", "100%");
appendTableHeader1(table3bTotal, "Grand Total")
appendTableRow1(table3bTotal, total)

// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

var errDivs
var errors
var inputs
var inputNames

// function: validate() ---------------------------------------------
function validate(senderID) {

  if (senderID.includes("10")) {
    console.log("YES")
    // initialize input name array
    inputNames = new Array();
    inputNames[0] = "first10";
    inputNames[1] = "last10";
    inputNames[2] = "email10";
    inputNames[3] = "uid10";
    inputNames[4] = "password10";
    inputNames[5] = "confirm10";

    // initialize error div id array
    errDivs = new Array();
    errDivs[0] = "errFirst10";
    errDivs[1] = "errLast10";
    errDivs[2] = "errEmail10";
    errDivs[3] = "errUid10";
    errDivs[4] = "errPassword10";
    errDivs[5] = "errConfirm10";

    // initialize input array
    inputs = new Array();
    inputs[0] = document.getElementById('first10').value;
    inputs[1] = document.getElementById('last10').value;
    inputs[2] = document.getElementById('email10').value;
    inputs[3] = document.getElementById('uid10').value;
    inputs[4] = document.getElementById('password10').value;
    inputs[5] = document.getElementById('confirm10').value;
  } else {

    // initialize input name array
    inputNames = new Array();
    inputNames[0] = "first";
    inputNames[1] = "last";
    inputNames[2] = "email";
    inputNames[3] = "uid";
    inputNames[4] = "password";
    inputNames[5] = "confirm";

    // initialize error name array
    errDivs = new Array();
    errDivs[0] = "errFirst";
    errDivs[1] = "errLast";
    errDivs[2] = "errEmail";
    errDivs[3] = "errUid";
    errDivs[4] = "errPassword";
    errDivs[5] = "errConfirm";

    // initialize input array
    inputs = new Array();
    inputs[0] = document.getElementById('first').value;
    inputs[1] = document.getElementById('last').value;
    inputs[2] = document.getElementById('email').value;
    inputs[3] = document.getElementById('uid').value;
    inputs[4] = document.getElementById('password').value;
    inputs[5] = document.getElementById('confirm').value;
  }

  // initialize error array
  errors = new Array();
  errors[0] = "<span style='color:red'>Please enter your first name!</span>";
  errors[1] = "<span style='color:red'>Please enter your last name!</span>";
  errors[2] = "<span style='color:red'>Please enter your email!</span>";
  errors[3] = "<span style='color:red'>Please enter your user id!</span>";
  errors[4] = "<span style='color:red'>Please enter your password!</span>";
  errors[5] = "<span style='color:red'>Please confirm your password!</span>";
  // update error array with error message
  switch (senderID) {
    case inputNames[0]:
      if (inputs[0] == "") {
        document.getElementById(errDivs[0]).innerHTML = errors[0];
      }
      else {
        document.getElementById(errDivs[0]).innerHTML = "OK!";
      }
      break;
    case inputNames[1]:
      if (inputs[1] == "") {
        document.getElementById(errDivs[1]).innerHTML = errors[1];
      }
      else {
        document.getElementById(errDivs[1]).innerHTML = "OK!";
      }
      break;
    case inputNames[2]:
      var atpos = inputs[2].indexOf("@");
      var dotpos = inputs[2].lastIndexOf(".");
      if (inputs[2] == "") {
        document.getElementById(errDivs[2]).innerHTML = errors[2];
      } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[2].length) {
        document.getElementById(errDivs[2]).innerHTML
          = "<span style='color: red'>Enter a valid email address!</span>";
      }
      else {
        document.getElementById(errDivs[2]).innerHTML = "OK!";
      }
      break;
    case inputNames[3]:
      if (inputs[3] == "") {
        document.getElementById(errDivs[3]).innerHTML = errors[3];
      }
      else {
        document.getElementById(errDivs[3]).innerHTML = "OK!";
      }
      break;
    case inputNames[4]:
      if (inputs[4] == "") {
        document.getElementById(errDivs[4]).innerHTML = errors[4];
      }
      else {
        document.getElementById(errDivs[4]).innerHTML = "OK!";
      }
      break;
    case inputNames[5]:
      var first = inputs[4];
      var second = inputs[5];
      if (second != first)
        document.getElementById(errDivs[5]).innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
      else
        document.getElementById(errDivs[5]).innerHTML = "OK!";
      break;
    default:
      break;
  }
}

// function: finalValidate() ------------------------------------
function finalValidate() {
  var count = 0;
  for (i = 0; i < 6; i++) {
    if (document.getElementById(errDivs[i]).innerHTML == "OK!") {
      count = count + 1;
    }
    else {

      if (document.getElementById(errDivs[2]).innerHTML == '<span style="color: red">Enter a valid email address!</span>') {
        document.getElementById(errDivs[2]).innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
      }
      else {
        document.getElementById(errDivs[i]).innerHTML = errors[i];
      }

    }
  }

  // Calculating and displaying if the user is correct
  if (count == 6)
    document.getElementById("errFinal").innerHTML
      = "All the data you entered is correct!!!";
  else
    document.getElementById("errFinal").innerHTML = "";
}

// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");
table00.setAttribute("style", "border:1px solid black;")
form00.appendChild(table00);



// Step 2. Create an JS object array containing form info 
let formArray = [
  {
    label: "First name:", inputType: "text", id: "first10",
    onkeyup: "validate(\'first10\')", errorId: "errFirst10"
  },
  {
    label: "Last name:", inputType: "text", id: "last10",
    onkeyup: "validate(\'last10\')", errorId: "errLast10"
  },
  {
    label: "Email:", inputType: "text", id: "email10",
    onkeyup: "validate(\'email10\')", errorId: "errEmail10"
  },
  {
    label: "User id:", inputType: "text", id: "uid10",
    onkeyup: "validate(\'uid10\')", errorId: "errUid10"
  },
  {
    label: "Password:", inputType: "password", id: "password10",
    onkeyup: "validate(\'password10\')", errorId: "errPassword10"
  },
  {
    label: "Confirm Password:", inputType: "password", id: "confirm10",
    onkeyup: "validate(\'confirm10\')", errorId: "errConfirm10"
  }
];

// Step 3. loop through the JS object array to populate the form

// your code here

// for (let i = 0; i < formArray.length; i++){
//   appendTableRow5(table00, formArray[i].label,formArray[i].inputType,formArray[i].id,formArray[i].onkeyup,formArray[i].errorId)
// }


// append to tableobj a 4-column table header
function appendTableHeader1(tableobj, col1) {
  // create column (table division) DOM objects
  let td1 = document.createElement("th");
  // set attributes of the cells
  td1.setAttribute("style", "border:1px solid black;")
  // insert content into columns
  td1.innerHTML = col1;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);

}

// append to tableobj a 4-column table header
function appendTableHeader4(tableobj, col1, col2, col3, col4) {
  // create column (table division) DOM objects
  let td1 = document.createElement("th");
  let td2 = document.createElement("th");
  let td3 = document.createElement("th");
  let td4 = document.createElement("th");
  // set attributes of the cells
  td1.setAttribute("style", "border:1px solid black;")
  td2.setAttribute("style", "border:1px solid black;")
  td3.setAttribute("style", "border:1px solid black;")
  td4.setAttribute("style", "border:1px solid black;")
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);

}

// append to tableobj a 1-column table row 
function appendTableRow1(tableobj, col1) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  // set attributes of the cells
  td1.setAttribute("style", "text-align: center; border:1px solid black;")
  // insert content into columns
  td1.innerHTML = col1;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// append to tableobj a 3-column table row 
function appendTableRow3(tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// append to tableobj a 4-column table row 
function appendTableRow4(tableobj, col1, col2, col3, col4) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  // set attributes of the cells
  td1.setAttribute("style", "text-align: center; border:1px solid black;")
  td2.setAttribute("style", "text-align: center; border:1px solid black;")
  td3.setAttribute("style", "text-align: center; border:1px solid black;")
  td4.setAttribute("style", "text-align: center; border:1px solid black;")
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// append to tableobj a 5-column table row
function appendTableRow5(tableobj, col1, col2, col3, col4, col5) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  // set attributes of the cells
  td1.setAttribute("style", "border:1px solid black;")
  td2.setAttribute("style", "border:1px solid black;")
  td3.setAttribute("style", "border:1px solid black;")
  td4.setAttribute("style", "border:1px solid black;")
  td5.setAttribute("style", "border:1px solid black;")

  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

// possible object oriented form append code
divs10 = new Array();
divs10[0] = "first";
divs10[1] = "last";
divs10[2] = "email";
divs10[3] = "uid";
divs10[4] = "password";
divs10[5] = "confirm";

let fieldLabel, fieldEntry, fieldError;
for (let i = 0; i < formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry = `<input type="${formArray[i].inputType}" `
    + `id="${formArray[i].id}" name="${formArray[i].id}" `
    + `onkeyup="${formArray[i].onkeyup}" \/>`;
  fieldError = `<span id="${formArray[i].errorId}" ></span>`;
  appendTableRow3(table00, fieldLabel, fieldEntry, fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);

