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

  const elEmail = document.querySelector('#email-createAccount');
  const elPassword = document.querySelector('#password-createAccount');
  const elSubmit = document.querySelector('#submit-createAccount');
  const elFeedback = document.querySelector('#feedback-createAccount');
  var emailCreateAccount;
  var passwordCreateAccount;

  elEmail.addEventListener('input', function() {
    emailCreateAccount = this.value;
  });

  elPassword.addEventListener('input', function() {
    passwordCreateAccount = this.value;
  });

  elSubmit.addEventListener('click', function(e) {

    e.preventDefault();

    var email = emailCreateAccount;
    var password = passwordCreateAccount;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;

      elFeedback.innerHTML = '<strong>' + error.code + '</strong>' + '<br />' + error.message;

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

function firebaseAuth() {

  const elEmail = document.querySelector('#email-authAccount');
  const elPassword = document.querySelector('#password-authAccount');
  const elSubmit = document.querySelector('#submit-authAccount');
  const elFeedback = document.querySelector('#feedback-authAccount');
  var emailAuthAccount;
  var passwordAuthAccount;

  elEmail.addEventListener('input', function() {
    emailAuthAccount = this.value;
  });

  elPassword.addEventListener('input', function() {
    passwordAuthAccount = this.value;
  });

  elSubmit.addEventListener('click', function(e) {

    e.preventDefault();

    var email = emailAuthAccount;
    var password = passwordAuthAccount;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      elFeedback.innerHTML = '<strong>' + error.code + '</strong>' + '<br />' + error.message;

    });

  });

}

function firebaseSignOut() {

  const elAction = document.querySelector('#auth-signOut');

  elAction.addEventListener('click', function() {

    console.clear();
    console.log("🍻");

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });

  });

}

function firebaseDatabase() {

  var database = firebase.database();

}

firebaseCreateAccount();
firebaseAuth();
firebaseAuthStateChanged();
firebaseSignOut();
firebaseDatabase();
