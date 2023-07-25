$(document).ready(function(){
    $('.tab_wrap:first').show()
    $('ul li:first').addClass('active')

     //--------- hover------------
    $('ul li').mouseenter(function(event){
        index = $(this).index();
        // console.log(index);
        $('ul li').removeClass('active');
        $(this).addClass('active');

        $('.tab_wrap').hide();
        $('.tab_wrap').eq(index).show();
     })


    //-----------click-------------
    
    //  $('ul li').click(function(event){
    //     index = $(this).index();
    //     // console.log(index);
    //     $('ul li').removeClass('active');
    //     $(this).addClass('active');

    //     $('.tab_wrap').hide();
    //     $('.tab_wrap').eq(index).show();
    //  })

});