
$(function(){
    //한글만 입력
    $('#name_input input').keyup(function (event) {
         regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
         v = $(this).val();
         console.log(regexp.test(v))
         if (regexp.test(v)) {
             alert("한글만 입력가능 합니다.");
             $(this).val(v.replace(regexp, ''));
         }
     });
     //이메일만 입력

     //핸드폰 번호 변환
     $('#phone_input input').keydown(function(event) {
        var key = event.charCode || event.keyCode || 0;
        $text = $(this);
        if (key !== 8 && key !== 9) {
            if ($text.val().length === 3) {
                $text.val($text.val() + '-');
            }
            if ($text.val().length === 8) {
                $text.val($text.val() + '-');
            }
        }
  
        return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));          
    });
      
});

