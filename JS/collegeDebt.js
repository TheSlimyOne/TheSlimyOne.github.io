// --- global variables ---
var pattern = /[0-9]/
var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
];

// --- function: loadDoc() ---

function loadDoc() {

  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;

  // document.getElementById("loan_year0" + 1).value = defaultYear++;
  $("#loan_amt0" + 1).val(defaultYear++);
  
  var defaultLoanAmount = loans[0].loan_amount;
  
  //  document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));

  var defaultInterestRate = loans[0].loan_int_rate;

  // document.getElementById("loan_int0" + 1).value = defaultInterestRate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  
  // document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));
  $("#loan_bal0" + 1).html(toComma(loanWithInterest.toFixed(2)))

  // pre-fill defaults for other loan years
  for (var i = 2; i < 6; i++) {

    $("#loan_year0" + i).val(defaultYear++); // document.getElementById("loan_year0" + i).value = defaultYear++;
    $("#loan_year0" + i).prop("disabled", true); // document.getElementById("loan_year0" + i).disabled = true;
    $("#loan_year0" + i).css("background-color", "gray") // document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
    $("#loan_year0" + i).css("color", "white") // document.getElementById("loan_year0" + i).style.color = "white";
    $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2)); // document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
    $("#loan_int0" + i).val(defaultInterestRate); // document.getElementById("loan_int0" + i).value = defaultInterestRate;
    $("#loan_int0" + i).prop("disabled", true); // document.getElementById("loan_int0" + i).disabled = true;
    $("#loan_int0" + i).css("background-color", "gray") // document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
    $("#loan_int0" + i).css("color", "white") // document.getElementById("loan_int0" + i).style.color = "white";
    loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
    $("#loan_bal0" + i).html(toComma(loanWithInterest.toFixed(2))) // document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));

  } // end: "for" loop

  // all input fields: select contents on fucus
  $("input[type=text]").focus(function () {
    $(this).select();
    $(this).css("background-color", "yellow");
  });
  $("input[type=text]").blur(function () {
    $(this).css("background-color", "white");
  });

  // set focus to first year: messes up codepen
  $("#loan_year01").focus();

  $("#loan_year01").blur(function () {
    updateYear();
  });

  $("#loan_int01").blur(function () {
    updateIntRate();
  });

} // end: function loadDoc()


function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateYear(){

  // YEAR
  yearReg = /^(19|20)\d{2}$/; // only allow numberical characters within the field


  if ((yearReg).test($("#loan_year01").val())){
    loans[0].loan_year = parseInt($("#loan_year01").val())

    for (var i = 1; i < 5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
      $("#loan_year0" + (i + 1)).val(loans[i].loan_year);
    }

  } else {
    $("#loan_year01").css("background-color", "red") // document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
    
  }

}

function updateIntRate(){
  // With any leading number with 
  intReg = /^([0-9]+?)(\.[0-9]+?)$/;  
  
  // INTREST RATE
  if ((intReg).test($("#loan_int01").val())){
    loans[0].loan_int_rate = parseInt($("#loan_int01").val())

    for (var i = 1; i < 5; i++) {
      $("#loan_int0" + (i + 1)).val(loans[i].loan_int_rate);
    }

  } else {
    $("#loan_int01").css("background-color", "red") // document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
    
  }

}

function updateLoansArray() {
  
  
  amtReg = /^\d$/;
  
 
  



  //  = manditory digit + an optional decimal and digit
  // This allows for integers and decals  
  // if ($("#loan_int01").val().match()){
  //   loans[0].loan_year = parseInt($("#loan_year01").val());
  // } else {
  //   $("loan_year01").val($("#loan_year01").val($("#loan_year01").attr('placeholder')))
  //   loans[0].loan_year = parseInt($("#loan_year01").attr('placeholder'));
  // }

  // AMOUNT


}

function update(){

}