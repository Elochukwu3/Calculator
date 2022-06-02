

let summary = document.querySelector(".summary");
let result = document.querySelector(".result")
let btnContainer = document.querySelector(".calc-Btns");
let del = document.querySelector(".del");


let firstOperand;
let secondOperand;
let operator;

btnContainer.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
     let display = result.textContent;
     let key = e.target.value;
     let action = e.target.dataset.action;
     del.textContent= "C";
    if (action == undefined) {
     if (display == "0") {
        display = key ;
        result.textContent = display;
     } 
     else{
       display = display + key;
       result.textContent = display;
      //  console.log(display);
     }
    }
    else{
      if (action == "addition") {
        operator = "+";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent = firstOperand + operator;
       result.textContent = "";
      }
      if (action == "subtraction") {
        operator = "-";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent = firstOperand + operator;
       result.textContent = "";
      }
      if (action == "divide") {
        operator = "/";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent = firstOperand + operator;
       result.textContent = "";
      }
      if (action == "decimal") {
        operator = ".";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent = firstOperand + operator;
       result.textContent = "";
      }
      if (action == "multiplication") {
        operator = "*";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent = firstOperand + operator;
       result.textContent = "";
      }
      if (action == "minus") {
        operator = "-";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent =operator   + firstOperand;
       result.textContent = "";
      }
      if (action == "percentage") {
        operator = "%";
        firstOperand = display;
        // console.log(firstOperand);
        summary.textContent =firstOperand ;
       result.textContent = "";
      }
      if (action == "delete") {
        summary.textContent = "";

       result.textContent = "0";
      
      }
      if (action =="equals") {
        secondOperand = result.textContent;
        summary.textContent= firstOperand + " "+operator + secondOperand;
          // secondOperand = result.textContent;
          if (operator == "+") {
            result.textContent = Number(firstOperand) + Number(secondOperand);
            
            }
            if (operator == "-") {
              result.textContent = Number(firstOperand) - Number(secondOperand);
              
            }
            if (operator == "/") {
              result.textContent = Number(firstOperand) / Number(secondOperand);
              
            }
            if (operator == "*") {
              result.textContent = Number(firstOperand) * Number(secondOperand);
              
            }
            if (operator == "%") {
              result.textContent = Number(firstOperand)/100;
              
            }
        }
    }
    }
    else{

      alert
  }  
})