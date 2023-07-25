// let stop_event = document.querySelectorAll('a')
// let thirdLink = stop_event[2]

// thirdLink.addEventListener('click',function(e) {
//     e.preventDefault() //  defaulf event stop krva
//     console.log("aaaaaaa");
// })

//------ex:1-----e.target-----
// let mydiv = document.createElement('div');

// function target_text(e) {
//     console.log("text--->" + e.target.textContent);
// }

// mydiv.addEventListener("click",target_text)

// for (let index = 0; index <= 50; index++) {
//     let childnode = document.createElement('p')
//     childnode.textContent = "this is element" + index;

//     mydiv.appendChild(childnode);
// }
// document.body.appendChild(mydiv)

//------ex:2-----NodeName----
let getdiv = document.querySelector('#wrapp');
getdiv.addEventListener("click",function(e) {
    console.log("----->11",e)
    if (e.target.nodeName === "SPAN") {
        console.log("----->",e.target.textContent)
    }
})
