firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("login_div").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
    document.getElementById("profileDiv").style.display = "block";
    document.getElementById("welcomeMessage").style.display = "inline-block";
    document.getElementById("pBtnEdit").style.display = "inline-block";
    document.getElementById("pBtnUpdate").style.display = "none";
    document.getElementById("pBtnCancel").style.display = "none";
    document.getElementById("pDName").disabled = true;
    document.getElementById("pEmail").disabled = true;
    document.getElementById("pAvatar").disabled = true;

    var user = firebase.auth().currentUser;

    if(user != null) {
      var userName = user.displayName;
      var userEmail = user.email;
      var userAvatar = user.photoURL;
      var userEVerified = user.emailVerified;

      if(userName != null) {
        document.getElementById("pDName").value = userName;
        document.getElementById("welDUser").innerHTML = userName;
      }
      if (userAvatar != null) {
        document.getElementById("pAvatar").value = userAvatar;
        document.getElementById("uAvatar").src = userAvatar;
      }
      document.getElementById("pEmail").value = userEmail;
    }

  } else {
    // No user is signed in.
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("profileDiv").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("welcomeMessage").style.display = "none";
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error("+ errorCode +"): " + errorMessage);
  });
}

function logout() {
  firebase.auth().signOut();
}

function pEdit() {
  document.getElementById("pBtnEdit").style.display = "none";
  document.getElementById("pBtnUpdate").style.display = "inline-block";
  document.getElementById("pBtnCancel").style.display = "inline-block";
  document.getElementById("pDName").disabled = false;
  document.getElementById("pEmail").disabled = false;
  document.getElementById("pAvatar").disabled = false;
}

function pUpdate() {
  document.getElementById("pBtnEdit").style.display = "inline-block";
  document.getElementById("pBtnUpdate").style.display = "none";
  document.getElementById("pBtnCancel").style.display = "none";
  document.getElementById("pDName").disabled = true;
  document.getElementById("pEmail").disabled = true;
  document.getElementById("pAvatar").disabled = true;
  
  var user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: document.getElementById("pDName").value,
    photoURL: document.getElementById("pAvatar").value
  });
  user.updateEmail(document.getElementById("pEmail").value);
}

function pCancel() {
  document.getElementById("pBtnEdit").style.display = "inline-block";
  document.getElementById("pBtnUpdate").style.display = "none";
  document.getElementById("pBtnCancel").style.display = "none";
  document.getElementById("pDName").disabled = true;
  document.getElementById("pEmail").disabled = true;
  document.getElementById("pAvatar").disabled = true;
}

function footerH() {
  document.getElementById("footerName").innerHTML = "Mads Andersen"
}

function footerL() {
  document.getElementById("footerName").innerHTML = "Brandon Whittle"
}