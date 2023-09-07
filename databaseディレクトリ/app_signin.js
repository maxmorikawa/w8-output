const serializedArray = localStorage.getItem("youremail_pass");
console.log(serializedArray);
const array = JSON.parse(serializedArray);
console.log(array);
const registEmail = array[0]; //登録済みemail読込
console.log("登録email:", registEmail);
const registPass = array[1]; //登録済みpassword読込
console.log("登録password:", registPass);
const loginHistory = localStorage.getItem("loginHistory");
console.log("login履歴:", loginHistory);

if (loginHistory == 1) {
  document.getElementById("email-signin").value = registEmail;
  document.getElementById("password-signin").value = registPass;
}

// 保存
function save() {
  const yourEmail = document.getElementById("email-signin").value; //入力email
  const yourPassword = document.getElementById("password-signin").value; //入力password
  if (!yourEmail || !yourPassword) {
    alert("emailとpasswordを入力してください");
    document.getElementById("email-signin").value = "";
    document.getElementById("password-signin").value = "";
  } else {
    const array = [yourEmail, yourPassword];
    const serializedArray = JSON.stringify(array);
    localStorage.setItem("youremail_pass", serializedArray);
    console.log("Sign in OK");
    localStorage.setItem("loginHistory", 1);
  }
}
