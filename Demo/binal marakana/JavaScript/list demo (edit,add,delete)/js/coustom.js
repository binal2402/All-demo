
var dataArray = [];

function display()
{
    // document.getElementById('tablerows').innerHTML= "";

   if(localStorage.dataRecord)
    {
        dataArray=JSON.parse(localStorage.dataRecord);
        for (let i = 0; i < dataArray.length; i++) {
            tablecell(dataArray[i].firstname);
        }
    }
}

function onsubmitValue()
{
    // event.preventdefault();
    var fname = document.getElementById("fname").value;
    userData = {
        firstname: fname,
      };
   
    if (fname == "") {
          document.getElementById("username").innerHTML = "Please fill the username";
          return false;
        } else {
            document.getElementById("username").innerHTML = "";
    }
     // dataArray.push(userData);
     if (selectedIndex === -1) {
        dataArray.push(userData);
      } else {
        dataArray.splice(selectedIndex, 1, userData);
    }

    localStorage.dataRecord = JSON.stringify(dataArray);

    tablecell(userData.firstname);
    document.getElementById("fname").value ="";
    document.getElementById("submit").value = "submit";

    display();
    editRow(index);
    return false;
}
function tablecell(fname,index)
{
    var table = document.getElementById('tablerows');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = fname;
    cell2.innerHTML = ' <button onclick = "deleteRow(this)"class="btn-delete"> Delete</button> <button onclick = "editRow(' + index +')" class="btn-edit">Edit</button>';
}
function deleteRow(index)
{
    var row = index.parentNode.parentNode;
    var table = document.getElementById('table');
    table.deleteRow(row.rowIndex);
    dataArray.splice(row.rowIndex, 1);
    localStorage.dataRecord = JSON.stringify(dataArray);
    // console.log(row.rowIndex);
}

var selectedIndex = -1;
function editRow(index)
{
    var table = document.getElementById('table'),
        rIndex;

    for (var i = 1; i < table.rows.length; i++) {
         table.rows[i].onclick = function () {
          rIndex = this.rowIndex;
          console.log(rIndex);
          var userData = dataArray[rIndex - 1];
          console.log(userData);
          document.getElementById("fname").value = userData.firstname;
          selectedIndex = rIndex - 1;
        };
        document.getElementById("submit").value = "Update";

      }
   
}

