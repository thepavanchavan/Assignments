var information = [
    {'name': 'John', 'city': 'Mumbai' },
    {'name': 'Leo', 'city': 'Delhi' },
    {'name': 'Ram', 'city': 'Pune' },
    {'name': 'Sham', 'city': 'Nashik' },
    {'name': 'Johny', 'city': 'Kolkata' },
]

buildTable(information)

function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].city}</td>
                        <td><button>Edit</button></td>
                        <td><button onclick="deleteRow(this)">Delete</button></td>
                  </tr>`
        table.innerHTML += row


    }
}

function searchFunction(){
    var input, filter, table, tableRow, tableData, i, textValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tableRow = table.getElementsByTagName("tr");
    for(i=0; i<tableRow.length; i++){
        tableData = tableRow[i].getElementsByTagName("td")[0];
        if(tableData){
            textValue = tableData.textContent || tableData.innerText;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tableRow[i].style.display = "";
            }
            else{
                tableRow[i].style.display = "none";
            }
        }
    }
}

function deleteRow(row)
{
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i-1);
}