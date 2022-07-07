$(function () {
  $(".radio_info").change(function () {
    let radio_val = $(".radio_info input:checked").val();
    console.log(radio_val);
    if (radio_val == "b") {
      location.href = "sign_up_business.html";
    } else if (radio_val == "s") {
      location.href = "sign_up_school.html";
    } else if (radio_val == "e") {
      location.href = "sign_up_etc.html";
    } else if (radio_val == "p") {
      location.href = "sign_up_personal.html";
    }
  });
});
