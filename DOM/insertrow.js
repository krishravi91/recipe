function insertrow() {
    let table = document.getElementById("newrow");
    let row = table.insertRow(0);


    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    
    c1.innerHTML = "New row inserted in cell1";
    c2.innerHTML = "New row inserted in cell2";
}
