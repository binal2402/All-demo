
var progressbarinner = document.querySelector('.progress_bar_inner');

 window.addEventListener('scroll',function(){
        var h = document.documentElement;
        
        
        var st = h.scrollTop || document.body.scrollTop;
        console.log('st',st);
        var tscrollheight = h.scrollHeight || document.body.scrollHeight;
        console.log('sh',tscrollheight);
        var percent = Math.round(st / (tscrollheight - h.clientHeight) * 100);
        console.log('pr',percent);

        // var roundedPercent = Math.round(percent);
    
        progressbarinner.style.width = percent + "%";
        // progressbarinner.innerHTML = roundedPercent + "%";

    });



// var body = document.querySelector('body');
// var progressbarinner = document.querySelector('.progress_bar_inner');

// function stretch(){
//     var pixelscroll = window.scrollY;  //currently scrolled vertically
//     var viewportheight = window.innerHeight; //window's content area.
//     var totalheightscroll = body.scrollHeight;

//     var percent = Math.round(pixelscroll / (totalheightscroll - viewportheight) * 100);

//     progressbarinner.style.width = percent + "%";
// }

// window.addEventListener('scroll',stretch);    