console.log("ajax file");
var fetchdata = document.getElementById('fetchdata');
fetchdata.addEventListener("click",buttonclickhandler);

function buttonclickhandler(){
    console.log('click btn');
    //xhr object
    var xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET','demo.txt',true);
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');



    xhr.onprogress = function(){
        console.log('on profress');
    }

    xhr.onload = function(){
        if (this.status == 200) {
            console.log(this.responseText);
        }else{
            console.log("some error");
        }
    }
    
    // send request
    params = `{"name":"test12","salary":"123","age":"23"}`;
    xhr.send(params);
}

var populatebtn = document.getElementById('populate');

populatebtn.addEventListener("click",pophandler);

function pophandler()
{
    console.log('click btn');

    //xhr object
    var xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
   
    xhr.onload = function(){
        if (this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var list = document.getElementById('list');
            str = "";
            for(key in obj)
            {
                str += `<td> ${obj[key]} </td>`
            }
            list.innerHTML = str;
        }else{
            console.log("some error");
        }
    }
    
    // send request
     xhr.send();
}