function verifypwd()
{
    var pw = document.getElementById("pwd").value;
    let len = pw.length;
    if(len == 0) {
        alert("Fill the Password");
     }
    
     if(pw=="krishna")
     {
        alert("successfully signed in");
     }
     else {
        alert("Please verify the Password");
     }
}
   
