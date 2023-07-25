$(function () {

     $("html").click(function () {
             $(".nav-dropdown").hide();
     });
     $("#nav-toggle").click(function () {
             $(".cpq_menu_wrapper .menu_list").toggleClass('open');
     });
    
     $("#navMenus").on('click','li',function(){
        // remove classname 'active' from all li who already has classname 'active'
        $("#navMenus li.active").removeClass("active"); 
        // adding classname 'active' to current click li 
        $(this).addClass("active"); 
    });

   
    $('.menu_list li > .sub-menu').parent().on('click',function() {
        var submenu = $(this).children('.sub-menu');
        if ( $(submenu).is(':hidden') ) {
          $(submenu).slideDown(200);
        } else {
          $(submenu).slideUp(200);
        }
      });
});