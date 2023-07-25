var to_dt; //for get to date
var diff; // for diff hours
var diff_date; // for diff hours
var find_4hrs_diff; //for diff 4 hrs
var find_6hrs_diff; //for diff 6 hrs
var cDate = new Date();
var day, night;
var dayValue, nightValue;
var formDay = [];
var formNight = [];
var toDay = [];
var toNight = [];
var fromFlag = false;
var toFlag = false;

function FromToDatePicker() {
    $('.from_date_input').each(function () {
        // var getToDateInput = $('.from_date_input').datetimepicker('getValue');
        console.log("from---",$(this).parents('.book_rate_column'));
        let getFromDateInput = $(this).parents('.book_rate_column').find('.from_date_input');
        console.log("----",getFromDateInput);
        // find day and night
        var getfromDate;
        var fromGetHours;
        $(this).datetimepicker({
            minDate: new Date(), closeOnTimeSelect: true,defaultTime: "00:00", formatTime: "H:i", 
            onSelectTime: function () {
                getfromDate = new Date($(getFromDateInput).val());
                fromGetHours = new Date($(getFromDateInput).val()).getHours();
                // console.log('111from_dt',getfromDate,fromGetHours);
                formDay = [];
                toNight = [];
                findHours();
                find_4hrs_diff(fromGetHours)
            }
        });
    })
    // $('.to_date_input').each(function () {
    //     console.log("to---");
    //     let getToDateInput = $(this).parents('.book_rate_column').find('.to_date_input');
    //     console.log("----",getToDateInput);
    //     // find day and night
    //     var getToDate;
    //     var toGetHours;
    //     $(this).datetimepicker({
    //         minDate: new Date(),
    //         closeOnTimeSelect: true,
    //         closeOnDateSelect: false, 
    //         defaultTime: "00:00", 
    //         formatTime: "H:i", 
    //         onSelectTime: function () {
    //             getToDate = new Date($(getToDateInput).val());
    //             toGetHours = new Date($(getToDateInput).val()).getHours();
    //             // console.log('111from_dt',getToDate,fromGetHours);
    //             formDay = [];
    //             toNight = [];
    //             fromFlag = true;
    //             // findHours();
    //         }
    //     });
    
    // })
}
FromToDatePicker()

function find_4hrs_diff(fromGetHours) {
    console.log("---",cDate.getHours(),fromGetHours);
        var find_4hrs_diff = Math.abs(cDate.getHours() - fromGetHours);
        if (find_4hrs_diff <= 4) {
            alert("diff must be in 4 hrs");
        }
}

// var getDateFromInput = document.getElementById("from_datepicker");
// var from_dt = new Date($(getToDateInput).val()).getHours(); //for get from date
// console.log('from_dt',from_dt);





//click event
// function from_btn(params) {
    
//     $('#from_btn').on('click', function () {
    
//         // from_dt = $('#from_datepicker').datetimepicker('getValue');
    
//         //6hours difference
//         var find_4hrs_diff = Math.abs(cDate.getHours() - from_dt.getHours());
//         console.log("---");
//         // console.log(find_4hrs_diff, "find_4hrs_diff");
//         if (find_4hrs_diff >= 4) {
//             document.querySelector(".from_disp").innerHTML = from_dt;
//         }
//         else {
//             alert("diff must be in 4 hrs");
//         }
      
//     });
// }

// $('#to_datepicker').datetimepicker({ minDate: new Date(), defaultTime: "00:00", formatTime: "H:i" }); //display  datetimepicker

// $('#to_btn').on('click', function () {
//     // var current = new Date();
//     toFlag = true;
//     to_dt = $('#to_datepicker').datetimepicker('getValue');
//     console.log(from_dt.getHours(), to_dt.getHours());

//     if (from_dt.getDate() >= to_dt.getDate()) {
//         if (from_dt.getHours() > to_dt.getHours()) {
//             alert("not allowed");
//         }
//         else {
//             var find_6hrs_diff = Math.abs(to_dt.getHours() - from_dt.getHours());
//             console.log(find_6hrs_diff, "find_6hrs_diff");

//             if (from_dt.getHours() >= 6 && from_dt.getHours() <= 18) {
//                 day = from_dt.getHours();
//                 console.log("day", day);
//             }
//             else {
//                 night = from_dt.getHours();
//                 console.log("night", night);
//             }

//             if (find_6hrs_diff >= 6) {
//                 document.querySelector(".to_disp").innerHTML = to_dt;
//             }
//             else {
//                 alert("diff must be in 6 hours")
//             }
//         }
//     }
//     else {
//         document.querySelector(".to_disp").innerHTML = to_dt;
//     }
//     console.log("+++", toFlag, "-----", fromFlag);

//     if (toFlag == true) {
//         toHours();
//     }
// });

// $('#diff_btn').on('click', function () {
//     var diff = 0;
//     console.log(from_dt, to_dt);
//     if (from_dt && to_dt) {
//         diff.CustomFormat = "'Today is:' hh:mm:ss dddd MMMM dd, yyyy";

//         // console.log("diif_date",diff_date*24); 
//         if (to_dt.getDate() > from_dt.getDate() && from_dt.getHours() >= to_dt.getHours()) {
//             diff_date = Math.abs((to_dt.getDate() - from_dt.getDate()) * 24);
//             diff = Math.abs(to_dt.getHours() - from_dt.getHours()); // ms per day
//             var final_res = diff_date - diff;
//             console.log("final res1", final_res);
//         }
//         else if (to_dt.getDate() > from_dt.getDate() && from_dt.getHours() <= to_dt.getHours()) {
//             diff_date = Math.abs((to_dt.getDate() - from_dt.getDate()) * 24);
//             diff = Math.abs(to_dt.getHours() - from_dt.getHours()); // ms per day
//             var final_res = diff_date + diff;
//             console.log("final res2", final_res);
//         }
//         else {
//             diff = Math.abs(to_dt.getHours() - from_dt.getHours()); // ms per day
//             console.log("----", diff);
//         }
//     }

//     if (from_dt.getHours() >= 6 && from_dt.getHours() <= 18 || to_dt.getHours() >= 6 && to_dt.getHours() <= 18) {
//         alert("day");
//         day = from_dt.getHours();
//         console.log("day", day);

//         var sal = Math.abs((to_dt.getHours() - from_dt.getHours()) * 50);
//         console.log(sal, "salary ");
//     }
//     else {
//         var sal = Math.abs((to_dt.getHours() - from_dt.getHours()) * 60);
//         console.log(sal, "salary ", to_dt.getHours() - from_dt.getHours());
//     }
  

// });

function findHours() {
    $(".xdsoft_time").each(function (index, e) {
        console.log("eeeeeee", e);
        // console.log(from_dt,parseInt($(e).text()));
        // if(from_dt <= parseInt ($(e).text())){
        //     if(parseInt ($(e).text()) >= 6 && parseInt ($(e).text()) < 18){
        //         // console.log("day 6");
        //         formDay.push(parseInt ($(e).text()));
        //         console.log("from day ",formDay);
        //     }
        //     else{
        //         formNight.push(parseInt ($(e).text()));
        //         console.log(" from night",formNight);
        //     }
        // }
    });
}

// function toHours(e) {

//     $(".xdsoft_time").each(function (index, e) {
//         console.log( "+++++++++",index + ": " + $( this ).text(),"eeeeeee",e) ;

//         // console.log(to_dt.getHours(),parseInt ($(e).text()));
//         if (to_dt.getHours() > parseInt($(e).text())) {
//             if (parseInt($(e).text()) >= 6 && parseInt($(e).text()) < 18) {
//                 // console.log("day 6");
//                 toDay.push(parseInt($(e).text()));
//                 console.log("to day", toDay);
//             }
//             else {
//                 toNight.push(parseInt($(e).text()));
//                 console.log("to night", toNight);
//             }
//         }
//     });
// }