function firebaseCreateAccount(){const e=document.querySelector(".form-input"),t=document.querySelector("#password-createAccount"),a=document.querySelector("#submit-createAccount"),n=document.querySelector("#feedback-createAccount");var c;e.addEventListener("input",function(){c=this.value}),t.addEventListener("input",function(){passwordCreateAccount=this.value}),a.addEventListener("click",function(e){e.preventDefault();var t=c,a=passwordCreateAccount;firebase.auth().createUserWithEmailAndPassword(t,a).catch(function(e){e.code,e.message;n.innerHTML="<strong>"+e.code+"</strong><br />"+e.message})})}function firebaseAuthStateChanged(){const e=document.querySelector("#feedback-authedAccount");firebase.auth().onAuthStateChanged(function(t){t?e.innerHTML=t.email+" is authed":e.innerHTML="No authed account"})}function firebaseDatabase(){firebase.database()}firebaseCreateAccount(),firebaseAuthStateChanged(),firebaseDatabase();