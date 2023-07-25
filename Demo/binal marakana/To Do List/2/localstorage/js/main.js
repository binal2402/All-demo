window.onload = ()=>{

    var formtodo = document.querySelector('.formTodo');
    var list = document.querySelector('.list');
    var itemget = JSON.parse(localStorage.getItem('todoItemsTut'));

     //----------------form submit------------
    formtodo.onsubmit = function(e){
        e.preventDefault();
        var value = e.target.name.value;
        // alert(value);
        var items = [];
        var id = Id();
        function Id(){
            if (itemget === null || itemget.length == 0) {
                return 1;
            }else{
                return itemget[itemget.length -1].id + 1;
            }
        }
       var item = {
                    id:id,
                    name:value,
                };
                // console.log(item);


        if (value == '') {
            alert('please fill text!!');
        }else{
            // debugger
            if (itemget === null) {
                items.push(item);
                localStorage.setItem('todoItemsTut',JSON.stringify(items));
                window.location.reload();
                // alert('item added');
            }else{
                itemget.map(todo=>{
                    items.push(todo);
                });
                items.push(item);
                localStorage.setItem('todoItemsTut',JSON.stringify(items));
                window.location.reload();
                // alert('item added');
            }
       
        }
    }
    //-------------- add item to the list ---------
    
    if (itemget !== null) {
        itemget.map(todo=>{
            var div = document.createElement('div');
                div.className = 'item';
                
            var p = document.createElement('span');
                p.innerHTML = todo.name;

            var idelete = document.createElement("input");
                idelete.type = "button";
                idelete.value = "Delete";
                idelete.name = "itemDelete";
                idelete.id = todo.id;

            var iEdit = document.createElement("input");
                iEdit.type = "button";
                iEdit.value = "Edit";
                iEdit.name = "itemEdit";
                iEdit.id = todo.id;
               
           div.append(p);
           div.append(idelete,iEdit);
           // console.log(div);
           list.append(div);
        }); 
    }
    
    //--------- remove item-------------
    var deletes = document.querySelectorAll('input[name="itemDelete"]');
    for (let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener("click",function(e){
       if (itemget !== null) {
                var itemLocal = [];
                itemget.map(todo=>{
                    if (todo.id != e.target.id) {
                       itemLocal.push(todo);
                    }
                });
                localStorage.setItem('todoItemsTut',JSON.stringify(itemLocal));
                window.location.reload();
                // alert('delete item');
            }
            // alert('hello'); 
        })
        
    }

    var updates = document.querySelectorAll('input[name="itemEdit"]');
        for (let i = 0; i < updates.length; i++) {
           updates[i].addEventListener("click",function(e){
                e.preventDefault();
                // var value = e.target.name.value;
                document.getElementById("fname").value = e.target.id;
              
           
           })
           
    }
   
}