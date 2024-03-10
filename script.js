function subscribe() {
    var button = document.getElementById("subscribeBtn");
    button.className = "btnclicked";

    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
     

    if (!emailInput.checkValidity()) {
      emailError.textContent = 'Valid Email Required';
    }else if (emailInput.value.trim() === ''){
      emailError.textContent = 'Valid Email Required';
    }else {
      emailError.textContent = 'Thanks for Subscribing';
      window.location.href = 'Subscribe.html';
    }

    setTimeout(function() {
        button.className = "btn";
        emailError.textContent='';
    }, 4000);
  };
function dismiss() {
  var subbtn = document.getElementById("dismiss");
  subbtn.className = "sbtnclicked"
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 2000);
 };
