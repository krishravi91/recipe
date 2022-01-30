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

//"=" is defined 
function equal()
{
     let x = document.getElementById("inpbox").value;
     let y = eval(x);
	 alert(y);
     document.getElementById("inpbox").value = y;
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
 