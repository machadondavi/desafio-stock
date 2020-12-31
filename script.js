var selectedRow = null;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) 
         insertNewRecord(formData); 
    else 
        updateRecord(formData);
    
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["_id"] = document.getElementById("_id").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["price"] = document.getElementById("price").value;
    formData["product"] = document.getElementById("product").value;
    formData["client"] = document.getElementById("client").value;
    formData["active"] = document.getElementById("active").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("dadosList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data._id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.quantity;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.product;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.client;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.active;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a class="select" onClick="onEdit(this)">Select</a>
                       <a class="delete" onClick="Delete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById('_id').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('price').value = "";
    document.getElementById('product').value = "";
    document.getElementById('client').value = "";
    document.getElementById('active').value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("product").value = selectedRow.cells[3].innerHTML;
    document.getElementById("client").value = selectedRow.cells[4].innerHTML;
    document.getElementById("active").value = selectedRow.cells[5].innerHTML;

}

function Delete(td) {
    if(confirm('Você deseja mesmo deletar?')) {
        row = td.parentElement.parentElement;
        document.getElementById("dadosList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.quantity;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.product;
    selectedRow.cells[4].innerHTML = formData.client;
    selectedRow.cells[5].innerHTML = formData.active;

}





