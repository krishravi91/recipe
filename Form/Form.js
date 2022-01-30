// function food(j) {
//     var total=0;
//     for(var i=0; i < document.SurveyForm.fd.length; i++){
//         if(document.SurveyForm.fd[i].checked){
//         total =total +1;
//         }
//         if(total > 2){
//         alert("Please Select only three") 
//         document.SurveyForm.fd[j].checked = false ;
//         return false;
//         }
//     }
// }

function fetchDetails(){
	var values = {
	 "firstName": document.getElementById("fname").value,
	 "lastName": document.getElementById("lname").value,
	 "Address": document.getElementById("add").value,
     "Gender": function (){
		 var ele = document.getElementsByName('sex');
		 for(var i=0;i<2;i++){
			 if(ele[i].checked){return ele[i]}
		 }
	 },
	 //"Food": document.querySelector('input[name="fd"].checked'),
	 "State": document.getElementById("personaladdress").value,
	 "Pincode": document.getElementById("pincode").value
	}
	finalResult(values);
}
	
var col = ["firstName","lastName","Address","Gender","Food","State","Pincode"];


function finalResult(data) {
	console.log(data);
	var table = document.getElementById("datatable");
	var tr = document.createElement("tr");
		 
		 
		 var td = document.createElement("td");
		 var td1 = document.createElement("td");
		 var td2 = document.createElement("td");
		 var td3 = document.createElement("td");
		 //var td4 = document.createElement("td");
		 var td5 = document.createElement("td");
		 var td6 = document.createElement("td");
		 //var td7 = document.createElement("td");
		 
		 
		 td.innerText = data.firstName;
		 tr.appendChild(td);
		 td1.innerText = data.lastName;
		 tr.appendChild(td1);
		 td2.innerText = data.Address;  
		 tr.appendChild(td2);
		 td3.innerHTML = data.Gender;
		 tr.appendChild(td3);
		//  td4.innerHTML = data.Food; 
		//  tr.appendChild(td4);	
		 td5.innerHTML = data.State; 
		 tr.appendChild(td5);
		 td6.innerHTML = data.Pincode; 
		 tr.appendChild(td6);	
		table.appendChild(tr);		 
}

