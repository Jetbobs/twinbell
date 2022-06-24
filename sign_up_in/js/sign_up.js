
// $('.radio_wrap input').change(function(){
//     console.log("blah")
//     let radio_val = $('.input_radio_test:checked').val();
//     console.log(radio_val);
//     if(radio_val == "buisness"){
//         location.href = "sign_up_business.html";
//     } else if(radio_val == "school"){
//         location.href = "sign_up_school.html";
//     } else if(radio_val == "etc"){
//         location.href = "sign_up_etc.html";
//     } else {
//         location.href = "sign_up_personal.html";
//     }
// })
$(function(){
    $('.radio_wrap').change(function(){
        let radio_val = $('.input_radio_test:checked').val();
        if(radio_val == "business"){
            console.log("business");
            location.href = "sign_up_business.html";
        } else if(radio_val == "school"){
            location.href = "sign_up_school.html";
        } else if(radio_val == "etc"){
            location.href = "sign_up_etc.html";
        } else if(radio_val == "personal") {
            location.href = "sign_up_personal.html";
        }
    });
})


// function radio_click(par){
//     location.href="sign_up_${`par`}";
// }
// function radio_click_business(){
//     location.href="sign_up_business";
// }
