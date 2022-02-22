//login validation
$(function () {
    const loginform = document.getElementById('loginform');
    const loginid = document.getElementById('loginid');
    const loginpw = document.getElementById('loginpw');

    loginform.addEventListener('submit', e => {
      e.preventDefault();
      if (checkInputs() == false)
        {
            return;
        }
      
      loginform.submit();
    });

    function checkInputs() {
      // trim to remove the whitespaces
      const usernameValue = loginid.value.trim();
      const passwordValue = loginpw.value.trim();
      
      if(usernameValue === '') {
        setErrorFor(loginid, '아이디를 입력해주세요.');
        return false;
      } else {
        setSuccessFor(loginid);
      }		
      
      if(passwordValue === '') {
        setErrorFor(loginpw, '비밀번호를 입력해주세요.');
        return false;
      } else {
        setSuccessFor(loginpw);
      }		
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'login-form-control error';
      small.innerText = message;
    }

    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'login-form-control success';
    }
    
    $( "#loginpw" ).on( "click", function() {
      $( ".login-form-control" ).removeClass( "error", 200);
    });    
});