// *************************************
//
//   File Name
//   -> Description
//
// *************************************

  // -------------------------------------
  //   Private Variables
  // -------------------------------------

  // ...

  // -------------------------------------
  //   Initialize
  // -------------------------------------



  // -------------------------------------
  //   Set Event Handlers
  // -------------------------------------


// -------------------------------------
//   Usage
// -------------------------------------

function firebaseCreateAccount() {

  const elEmailCreateAccount = document.querySelector('.form-input');
  const elPasswordCreateAccount = document.querySelector('#password-createAccount');
  const elSubmitCreateAccount = document.querySelector('#submit-createAccount');
  const elFeedbackCreateAccount = document.querySelector('#feedback-createAccount');
  var emailCreateAccount;

  elEmailCreateAccount.addEventListener('input', function() {
    emailCreateAccount = this.value;
  });

  elPasswordCreateAccount.addEventListener('input', function() {
    passwordCreateAccount = this.value;
  });

  elSubmitCreateAccount.addEventListener('click', function(e) {

    e.preventDefault();

    var email = emailCreateAccount;
    var password = passwordCreateAccount;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;

      elFeedbackCreateAccount.innerHTML = '<strong>' + error.code + '</strong>' + '<br />' + error.message;

    });

  });

}

function firebaseAuthStateChanged() {

  const elFeedbackAuthedAccount = document.querySelector('#feedback-authedAccount');

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      elFeedbackAuthedAccount.innerHTML = user.email + ' is authed';
    } else {
      elFeedbackAuthedAccount.innerHTML = 'No authed account';
    }

  });

}

function firebaseDatabase() {

  var database = firebase.database();

}

firebaseCreateAccount();
firebaseAuthStateChanged();
firebaseDatabase();
