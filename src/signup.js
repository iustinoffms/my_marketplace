const username = document.getElementById("name");
const mail = document.getElementById("mail");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const createBtn = document.getElementById("create-account");

let arr = [];
createBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("error-message").innerHTML = "";
  if (verifyPassword() && verifyMail()) {
    let obj = { user: username.value, email: mail.value, password: pass.value };
    let findResult = arr.find(function (arrItem) {
      return arrItem.email === mail.value;
    });

    if (findResult === undefined) {
      arr.push(obj);
      localStorage.setItem("data", JSON.stringify(arr));
      location.href = "./index.html";
    } else {
      document.getElementById("error-message").innerHTML = "Email existent";

      pass.value = "";
      confirmPass.value = "";
      return false;
    }
    console.log(arr);
  }
  username.value = "";
  mail.value = "";
  pass.value = "";
  confirmPass.value = "";
});

function verifyPassword() {
  if (pass.value === "") {
    document.getElementById("pass-error").innerHTML = "Introduceti o parola";
    document.getElementById("pass-label").style.display = "none";
    return false;
  }
  if (pass.value.length < 6) {
    document.getElementById("pass-error").innerHTML = "Minim 6 caractere";
    document.getElementById("pass-label").style.display = "none";
    return false;
  }

  if (confirmPass.value === pass.value) {
    return true;
  } else {
    document.getElementById("confirm-pass-error-message").innerHTML = "Parolele nu se potrivesc";
    document.getElementById("confirm-pass-label").style.display = "none";
    return false;
  }
}
verifyPassword();

function verifyMail() {
  let mailValue = mail.value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailValue.match(mailformat)) {
    return true;
  } else {
    document.getElementById("display-message").innerHTML = "Email invalid";
    document.getElementById("mail-label").style.display = "none";
    return false;
  }
}
