var pass = document.getElementById('pass');
var icon = document.getElementById('icon');



icon.onclick = function () {
    
    if(pass.className == 'active') {
        pass.setAttribute('type', 'text');
        icon.className = 'fa fa-eye';
        pass.className = '';
 
     } else {
        pass.setAttribute('type', 'password');
        icon.className = 'fa fa-eye-slash';
        pass.className = 'active';
    }
  }