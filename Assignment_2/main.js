var information = [
{'id':'11','name': 'John', 'city': 'Mumbai','branch':'CSE','degree': 'BTech' },
{'id':'22','name': 'Leo', 'city': 'Delhi', 'branch':'Mechanical','degree': 'MTech' },
{'id':'33','name': 'Ram', 'city': 'Pune', 'branch':'CSE','degree': 'PHD' },
{'id':'44','name': 'Julia', 'city': 'Nashik', 'branch':'IT','degree': 'BCS' },
{'id':'55','name': 'Johny', 'city': 'Kolkata', 'branch':'Aerospace','degree': 'MS' }
]

showTable();

console.log(information);

// FUNCTION FOR ADDING NEW ROW


function addRow(){
var id = document.querySelector(".id-form").value
var name = document.querySelector(".name-form").value;
var city = document.querySelector(".city-form").value;
var branch = document.querySelector(".dept-form").value;
var degree = document.querySelector(".degree-form").value;
console.log(id,name,city,branch,degree)
if(id=='' || name=='' || city =='' || branch=='' || degree==''){
    alert("Please Fill The Complete form")
}
else{
information.push({"id":id, "name":name, "city":city,"branch":branch, "degree":degree});
}

showTable();
newInfo();
console.log(information);
}

// FUNCTION FOR SHOWING TABLE USING FOREACH 

function showTable() {
var tbody1 = document.querySelector("tbody");
tbody1.innerHTML = "";
var tableData = ``;

information.forEach((info) => {
tableData += `<tr>
        <td>${info.id}</td>
        <td>${info.name}</td>
        <td>${info.city}</td>
        <td>${info.branch}</td>
        <td>${info.degree}</td>
        <td id="${info.id}" onclick = "editItem(this);"><button>Update</button></td>
        <td id="${info.id}" onclick="deleteItem(this)"><button>Delete</button></td>
    </tr>` 
});
tbody1.innerHTML = tableData
}

// FUNCTION FOR DELETE

function deleteItem(data){
var updated_array = information.filter((element)=> {
return element.id != data.id;
});
information = updated_array;
showTable();
newInfo();
console.log(information);
}


// FUNCTION FOR UPDATE


function editItem(data){
var objIndex = information.findIndex((obj => obj.id == data.id));
information[objIndex].name = information[objIndex].name+ " (Updated)";
information[objIndex].city = information[objIndex].city+" (Updated)";
information[objIndex].branch = information[objIndex].branch+" (Updated)";
information[objIndex].degree = information[objIndex].degree+" (Updated)";
showTable();
newInfo();
}


// FUNCTION WITH APPLICATION OF MAP

function newInfo(){
var newInformation = information.map(item =>{
    return{
        name: item.name,
        city: item.city,
        branch: item.branch
    };
});

var tbody1 = document.getElementById("newTableBody")
tbody1.innerHTML = "";
var tableData = ``;

newInformation.forEach((info) => {
tableData += `<tr>
        <td>${info.name}</td>
        <td>${info.city}</td>
        <td>${info.branch}</td>
    </tr>` 
});
tbody1.innerHTML = tableData
}
newInfo();


// FUNCTION FOR SEARCH BY ID


function searchById(){
var input, filter, table, tableRow, tableData, i, textValue;
input = document.getElementById('idInput');
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

// FUNCTION FOR SEARCH BY NAME

function searchByName(){
var input, filter, table, tableRow, tableData, i, textValue;
input = document.getElementById('nameInput');
filter = input.value.toUpperCase();
table = document.getElementById('myTable');
tableRow = table.getElementsByTagName("tr");
for(i=0; i<tableRow.length; i++){
tableData = tableRow[i].getElementsByTagName("td")[1];
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

// FUNCTION FOR SEARCH BY CITY


function searchByCity(){
var input, filter, table, tableRow, tableData, i, textValue;
input = document.getElementById('cityInput');
filter = input.value.toUpperCase();
table = document.getElementById('myTable');
tableRow = table.getElementsByTagName("tr");
for(i=0; i<tableRow.length; i++){
tableData = tableRow[i].getElementsByTagName("td")[2];
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

// FUNCTION FOR SEARCH BY DEPARTMENT


function searchByDept(){
var input, filter, table, tableRow, tableData, i, textValue;
input = document.getElementById('deptInput');
filter = input.value.toUpperCase();
table = document.getElementById('myTable');
tableRow = table.getElementsByTagName("tr");
for(i=0; i<tableRow.length; i++){
tableData = tableRow[i].getElementsByTagName("td")[3];
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

// FUNCTION FOR SEARCH BY DEGREE


function searchByDegree(){
var input, filter, table, tableRow, tableData, i, textValue;
input = document.getElementById('degreeInput');
filter = input.value.toUpperCase();
table = document.getElementById('myTable');
tableRow = table.getElementsByTagName("tr");
for(i=0; i<tableRow.length; i++){
tableData = tableRow[i].getElementsByTagName("td")[4];
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