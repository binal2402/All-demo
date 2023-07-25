var filtter = function(){
    $('.product-list').masonry({
        // options
        itemSelector: '.product-item',
        columnWidth: 50,
        // gutter:20,
    });
}
//==============  JSON DATA Print into HTML ===================

    var output = " ";
    // console.log("data", data)

    data.forEach((data) => {
       
        data.subcategories.map((item, i) => {
            item.items.map((list) => {
                // console.log("--------------", JSON.stringify(list));
                output += '<div class="cart product-item ' + item.name + '"> ' +
                    '<div class="product-img">' +
                        '<img src=' + list.photoUrl + '>' +
                    '</div>' +
                    '<input type="hidden" class="product-qty" value=' + list.quantity + '>' +
                    '<div class="product-content ">' +
                        '<h3 class="product-name ">' + list.name + '</h3>' +
                        '<p class="product-description ">' + list.description + '</p>' +
                        '<p class="product-price ">$' + list.price + '</p>' +
                    '</div>' +
                    '</div>';
            })

        })
     })

    document.getElementById("subItems").innerHTML = output;

    //==============  Filtering  ===================

    var menubtns = document.querySelectorAll('.btn');
    var items = document.querySelectorAll('.cart');
     
    for (let i = 0; i < menubtns.length; i++) {
        menubtns[i].addEventListener("click" , (e) =>{
            e.preventDefault();
            var filter = e.target.id;
            console.log(filter);
            items.forEach((product)=>{
                // debugger
                if (filter == "showall") {
                     product.style.display = "block";
                     filtter()
                }else{
                    if (product.classList.contains(filter)) {
                         product.style.display = "block";
                         filtter()
                    }else{
                    product.style.display = "none";
                    }
                }
            })
        })
        
    }

    //==============  active class add ===================

    menubtns.forEach((allbtn)=>{
        allbtn.addEventListener('click',()=>{
            resetActiveBtn();
           allbtn.classList.add('active');
        })
    })

    function resetActiveBtn()
    {
        menubtns.forEach((allbtn)=>{
            allbtn.classList.remove('active');
        })
    }
    
  

    //==============  active class add ===================

    // var btnContainer = document.getElementById("toggles");
    // var btns = btnContainer.getElementsByClassName("btn");
    // //  console.log(btns);
    // for (var i = 0; i < btns.length; i++) {
    //     btns[i].addEventListener("click", function() {
    //         var current = document.getElementsByClassName("active");
    //         // console.log(current);
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active";
    //     });
    // }


    //======================== search ========================

    var search  = document.getElementById("search");
    // console.log("search",search);
    search.addEventListener("keyup",(e) =>{
        e.preventDefault();
        
        var  svalue = e.target.value;
        // var svalue = search.value.toLowerCase().trim();
        // console.log(svalue);

        items.forEach(function(item){
     
            if (item.textContent.toLowerCase().indexOf(svalue) != -1) {
                // console.log(item.textContent.toLowerCase());
                item.style.display = "block";
            }else{
                item.style.display = "none";
            }
        })
    })
   
    $(document).ready(function(){
        
        filtter();
    });
