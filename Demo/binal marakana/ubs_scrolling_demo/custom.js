$(document).ready(function(e) {
    // //blog detail
    // $('a[href*=#]').bind('click', function(e) {
    //     console.log("hellloo");
    //     e.preventDefault(); // prevent hard jump, the default behavior

    //     var target = $(this).attr("href"); // Set the target as variable

    //     // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //     $('html, body').stop().animate({
    //         scrollTop: $(target).offset().top
    //     }, 600, function() {
    //         location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //     });

    //     return false;
    // });
    // $('.toc_widget').find('a').on('click', function () {
    //     // console.log("11111",nav.find('a'),$(this));
    //     var target = $(this).attr("href"); // Set the target as variable
    //     $('html, body').stop().animate({
    //         scrollTop: $(target).offset().top
    //     }, 600, function() {
    //         location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //     });
    //     return false;
    // });
   
  
    console.log($('header').height());

    var sections = $('.logo_wrap span')
      , nav = $('.toc_widget')
      , nav_height = nav.outerHeight(),
        nav_header = $('header').height();
    
    // $(window).on('scroll', function () {
    //   var cur_pos = $(this).scrollTop();
      
    //   sections.each(function() {
    //       var top = $(this).offset().top - nav_height,
    //       bottom = top + $(this).outerHeight();

    //       if (cur_pos >= top && cur_pos <= bottom) {
    //         console.log("hhhh");
    //           nav.find('a').removeClass('active');
    //           sections.removeClass('active');
              
    //           $(this).addClass('active');
    //           nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    //         //   console.log("", nav.find('a[href="#'+$(this).attr('id')+'"]'));
    //     }
    //   });
    // });
     
    // nav.find('a').on('click', function () {
    //     // console.log("11111",nav.find('a'),$(this));
    //   var $el = $(this)
    //     , id = $el.attr('href');
      
    //   $('html, body').animate({
    //     scrollTop: $(id).offset().top - nav_height
    //   }, 500);
      
    //   return false;
    // });
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('nav').addClass('fixed-header');
            $('nav div').addClass('visible-title');
        }
        else {
            $('nav').removeClass('fixed-header');
            $('nav div').removeClass('visible-title');
        }
    });
    $(window).on('scroll', function () {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.logo_wrap span').each(function() {
            if ($(this).position().top <= scrollDistance) {
                $('.toc_widget').find('a').removeClass('active');
                $('.logo_wrap span').removeClass('active');
                
                $(this).addClass('active');
                $('.toc_widget').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function() {
        var el = $(this)
        , id = el.attr('href'),target = $(id);
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - nav_header
        }, 600, function() {
            location.hash = target;
        });
        console.log($(target).offset().top - 100);

        return false;
    });
   
})

  
  // blog details 
  
//   $('.toc_widget_list li a').click(function () {
//     var tab_id = $(this).attr('href');
    
//     $('.toc_widget_list li a').removeClass('current');
//     $('a').removeClass('current');
  
//     $(this).addClass('current');
//     $("#" + tab_id).addClass('current');
//   })
  
//   let tabs = document.querySelectorAll('.toc_widget_list li a')
//   let sections = document.querySelectorAll('.sw_all_data h2')
  
//   tabs.forEach(function(element) {
//   element.addEventListener('click', function(event) {
//           let tabIndex = element.href.split("#")[1]
//         sections[tabIndex].scrollIntoView(true) 
//             tabs.forEach((e,index) => {
//               index+1 == tabIndex ? e.classList.add("active") : e.classList.remove("active")
//             });
//       })
//     }
//   );
  
//   $(".toc_widget_list li a").click(function (e) {
//     $(".toc_widget_list li a").removeClass("active");
//     $(this).addClass("active");
//   });
  
//   // Blog - Table of content
//   $(document).on("click", ".sw_position_fix .widget-title", (e) => {
//     $(".sw_position_fix .toc_widget_list").slideToggle();
//   });
  
//   var maxY = 0;
//   if ($(".sw_position_fix").length) {
//     var top =
//       $(".sw_position_fix").offset().top -
//       parseFloat($(".sw_position_fix").css("marginTop"));
//     var footTop = $(".author_newslatter_wrap").offset().top;
//     maxY = footTop - $(".sw_position_fix .toc_widget").outerHeight();
//   }
  
  