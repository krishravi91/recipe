
//for clearing the values 
function clr()
{
    document.getElementById("inpbox").value = "";
}

//values are entered into the text box using mouse by the following function
function insert(val)
{
     document.getElementById("inpbox").value+=val;
}

function equal() {

    var equation = document.getElementById("inpbox").value;

    console.log(eval(equation))

    // Creating empty arrays for storing brackets, operators, operands
    var brackets = []
    var operators = []
    var operands = []
    var operandString = ""


    for (var index = 0, operatorIndex = 0, bracketIndex = 0; index < equation.length; index++) {

        // Checking for operators
        if (equation.charAt(index) == '+'
            || equation.charAt(index) == '-'
            || equation.charAt(index) == '*'
            || equation.charAt(index) == '/') {

            // Below condition is to deal with (a+b)+(c+d) this part of equation
            if (equation.charAt(index - 1) == ')' && equation.charAt(index + 1) == '(') {
                operators[operatorIndex++] = "*"
                brackets[bracketIndex++] = null
                brackets[bracketIndex++] = null
                operators[operatorIndex++] = equation.charAt(index)
                operandString += " 1 "
            }
            // Fetching operators and storing into operators[] array
            else {
                operators[operatorIndex++] = equation.charAt(index)
                brackets[bracketIndex++] = null

                operandString += " "
            }
        }
        // Fetching brackets and storing into brackets[] array
        else if (equation.charAt(index) == '(' || equation.charAt(index) == ')') {
            brackets[bracketIndex++] = equation.charAt(index)
            operators[operatorIndex++] = null
        }
        // Fetching operand digits and storing into operandString
        else {
            operandString += equation.charAt(index)
        }
    }

    operandsTemp = operandString.split(" ")

    for (var index = 0, indexOperand = 0; index < operators.length; index++) {
        if (brackets[index] == null) {
            operands[index] = Number(operandsTemp[indexOperand++])
        }
        else {
            operands[index] = null
        }
    }
    operands[operands.length] = Number(operandsTemp[indexOperand])



    console.log(brackets)
    console.log(operators)
    console.log(operands)


    // Result variables
    var result = 0
    var finalResult = 0

    if (brackets.length > 0) {

        for (var index = 0; index < brackets.length; index++) {

            if (brackets[index] == ')') {
                var indexBracketEnd = index
                for (var indexBracket = indexBracketEnd; indexBracket >= 0; indexBracket--) {
                    if (brackets[indexBracket] == '(') {
                        var indexBracketStart = indexBracket
                        evaluate(indexBracketStart, indexBracketEnd, operators, operands)
                        brackets[indexBracketStart] = null
                        brackets[indexBracketEnd] = null
                        break
                    }
                }
                console.log(brackets)
            }
        }
    }



    finalResult = evaluate(0, operators.length, operators, operands)


    console.log(`FINAL RESULT = ${finalResult}`)
    console.log(operands);

    document.getElementById('inpbox').value = finalResult
}

// Evaluation of equation by using BOAD MASS method
function evaluate(indexStart, indexEnd, operators, operands) {

    for (var index = indexStart; index < indexEnd; index++) {

        var indexFirstOperand = index
        var indexNextOperand = index + 1
        var indexNextOperator = index

        if (operators[indexNextOperator] == null) {
            for (var indexNext = indexNextOperator + 1; indexNext < operators.length; indexNext++) {
                if (operators[indexNext] != null) {
                    indexNextOperator = indexNext
                    indexFirstOperand = indexNext
                    indexNextOperand = indexNext + 1
                    index = indexNext - 1
                    break
                }
            }
        }

        if (operands[indexNextOperand] == null) {
            for (var indexNext = indexNextOperand + 1; indexNext < operands.length; indexNext++) {
                if (operands[indexNext] != null) {
                    indexNextOperand = indexNext
                    index = indexNext - 1
                    break
                }
            }
        }

        // MULTIPLICATION 
        if (operators[indexNextOperator] == '*') {
            result = operands[indexFirstOperand] * operands[indexNextOperand]

            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0

            console.log(operands)
            console.log(operators)
        }
        // DIVISION
        else if (operators[indexNextOperator] == '/') {
            result = operands[indexFirstOperand] / operands[indexNextOperand]

            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0

            console.log(operands)
            console.log(operators)
        }
    }

    // ADDITION and SUBSTRACTION
    for (var index = indexStart; index < indexEnd; index++) {

        var indexFirstOperand = index
        var indexNextOperand = index + 1
        var indexNextOperator = index

        if (operators[indexNextOperator] == null) {
            for (var indexNext = indexNextOperator + 1; indexNext < operators.length; indexNext++) {
                if (operators[indexNext] != null) {
                    indexNextOperator = indexNext
                    indexFirstOperand = indexNext
                    indexNextOperand = indexNext + 1
                    index = indexNext - 1
                    break
                }
            }
        }

        if (operands[indexNextOperand] == null) {
            for (var indexNext = indexNextOperand + 1; indexNext < operands.length; indexNext++) {
                if (operands[indexNext] != null) {
                    indexNextOperand = indexNext
                    index = indexNext - 1
                    break
                }
            }
        }

        // ADDITION 
        if (operators[indexNextOperator] == '+') {
            result = operands[indexFirstOperand] + operands[indexNextOperand]

            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0

            console.log(operands)
            console.log(operators)
        }
        // SUBSTRACTION
        else if (operators[indexNextOperator] == '-') {
            result = operands[indexFirstOperand] - operands[indexNextOperand]

            operands[indexNextOperand] = result
            operands[indexFirstOperand] = null
            operators[indexNextOperator] = null
            finalResult = result
            result = 0

            console.log(operands)
            console.log(operators)
        }
    }
    return finalResult
}


//backspace function for deleting one character at a time
function backspace()
{
var exp = document.getElementById("inpbox").value;
document.getElementById("inpbox").value = exp.substring(0, exp.length - 1); 
}

//keypress function is defined and only numbers and special characters such as "+-*/." are allowed by the following function
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    //alert(charCode);

    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57) && charCode !=42 && charCode !=43 && charCode != 45 && charCode !=47) {
            alert("Please Enter Only Numbers");
            return false;           
    }
    else if (charCode == 13){
        equal();
		  return false;
    }
    
    return true; 

}
 