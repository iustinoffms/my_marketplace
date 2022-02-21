let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let button = document.querySelector("button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  for (let user of data) {
    console.log(user.email);
    console.log(user.password);
    if (user.email === mail.value && user.password === pass.value) {
      location.href = "./index.html";
      return true;
    } else {
      document.getElementById("error-message").innerHTML = "Cont inexistent";
      return false;
    }
  }
});
