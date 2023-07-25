// debugger
// roles = [
//     {label: 'administrator', checked: false, value: 'administrator'},
//     {label: 'organizer', checked: false, value: 'organizer'},
//     {label: 'athlete', checked: false, value: 'athlete'}
//   ];

//   var myDiv = document.getElementById("cboxes");

//   for (var i = 0; i < roles.length; i++) {
//       debugger
//       var checkBox = document.createElement("input");
//       var label = document.createElement("label");
//       checkBox.type = "checkbox";
//       checkBox.value = roles[i];
//       myDiv.appendChild(checkBox);
//       myDiv.appendChild(label);
//       label.appendChild(document.createTextNode(roles[i]));
//   }

// var check  = `<input type="checkbox" value= "cricket" name="hobby" />`

// myDiv.append(check)

function myFunction() {
    // debugger;
    var checkedvalue = "";
    var arrChecks = document.getElementsByName("theCheckbox");

    for (i = 0; i < arrChecks.length; i++) 
    {
        // if the current state is checked, unchecked and vice-versa
        if (arrChecks[i].checked) {
            arrChecks[i].checked = false;
        } else {
            arrChecks[i].checked = true;
            checkedvalue = checkedvalue + " " + arrChecks[i].getAttribute('value');
        }

    }

    document.getElementById("demo").innerHTML = checkedvalue;
}


function makeCheckboxes(str) {
    var a = document.getElementById("blah");
    var arr = str;
    var returnStr = "";
    for (i = 0; i < arr.length; i++) {
        returnStr += '<input type="checkbox" name="theCheckbox" value="' + arr[i] + '" />' + arr[i];
    }
    a.innerHTML = returnStr;
}

window.onload = function () {
    var arrt = ["test1", "test2", "apple", "samsung", "nokia"];

    makeCheckboxes(arrt);
};
