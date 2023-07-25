
function validateform()
{
    
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var EMail = document.getElementById("EMail").value;
    var emailRegex =
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
     ;

    var Password = document.getElementById("Password").value;
    var Password2 = document.getElementById("Password2").value;

    var checkedmale = document.getElementById("male").checked;
    var checkedfemale = document.getElementById("female").checked;
    var hobby = document.myform.hobby;

    var city = document.getElementById("city").value;
    // var Gender = document.myform.gender;

    var valid = true;

    //Name validation
     if(name == "")
    {
        document.getElementById("username").innerHTML = "Please fill the Name";
        valid = false;
    } else {
        document.getElementById("username").innerHTML = "";
        // alert("name :" + name);
        console.log("name :" +name);
    }
    
    //Address validation
    if(address == "")
    {
        document.getElementById("useraddress").innerHTML = "Please fill the address";
        valid = false;
    }else {
        document.getElementById("useraddress").innerHTML = "";
        // alert("address:" + address);
        console.log("address:" +address);
    }

    //email validation
    if(EMail == "")
    {
        document.getElementById("userEMail").innerHTML = "Please fill the EMail";
        valid = false;
    }else if (!EMail.match(emailRegex)){
        document.getElementById("userEMail").innerHTML = "Please Enter Valid Email";
        valid = false;
    }else {
        document.getElementById("userEMail").innerHTML = "";
        console.log("Email:" +EMail);
    }


    // password validation
    if(Password == "")
    {
        document.getElementById("userPassword").innerHTML = "Please fill the Password";
        valid = false;
    }else {
        document.getElementById("userPassword").innerHTML = "";
        console.log("Password:" +Password);
    }

    if(Password2 == "")
    {
        document.getElementById("userCPassword").innerHTML = "Please fill the Confirm Password";
        valid = false;
    }else if(Password != Password2)
    {
        document.getElementById("userCPassword").innerHTML = "Passwords did not match";
        valid = false;
    }else{
        document.getElementById("userCPassword").innerHTML = "";
        console.log("Confirm Password:" +Password2);
    }

    

    //radio button validation
     if((checkedmale == "") && (checkedfemale == ""))
    {
        document.getElementById("usergender").innerHTML = "Please fill the Gender";
        valid = false;
    }else if(checkedmale == true){
        var male = document.getElementById("male").value;  
        console.log("Gender:" +male);     
    }else if(checkedfemale == true){
        var female = document.getElementById("female").value;  
        console.log("Gender:" +female);     
    }else{
        document.getElementById("usergender").innerHTML = "";
    }

    //checkbox validation
    var selected = new Array();
    for (var i = 0; i < hobby.length; i++) {
        if(hobby[i].checked == "")
        {
            document.getElementById("userhobby").innerHTML = "Please checked  hobby ";
            valid = false;
        }
        else if(hobby[i].checked == true){
            selected.push(hobby[i].value);
            valid = false;
        }
    }
    if(selected.length > 0) {
        console.log("Selected Hobby: " + selected.join(","));
        document.getElementById("userhobby").innerHTML = "";
    }
  
    //select box validation
    if(city == "")
    {
        document.getElementById("usercity").innerHTML = "Please fill the city";
        valid = false;
    }else{
        document.getElementById("usercity").innerHTML = "";
        console.log("City:" +city);
    }

    // for (var i = 0; i < Gender.length; i++) {
    //     if(Gender[i].checked == ""){
    //         document.getElementById("usergender").innerHTML = "Please fill the Gender";
    //         valid = false;
    //     }else if(Gender[i].checked){
    //         document.getElementById("usergender").innerHTML = "";
    //     }
    // }
    return valid;
    
}

// hide/show Password
function myfuction(){
    var Password = document.getElementById("Password");
    var icon = document.getElementById('icon');
    icon.onclick = function () {

        if(Password.className == 'active') {
            Password.setAttribute('type', 'text');
            icon.className = 'fa fa-eye';
            Password.className = '';

        } else {
            Password.setAttribute('type', 'password');
            icon.className = 'fa fa-eye-slash';
            Password.className = 'active';
        }
    }
}
myfuction();
    


