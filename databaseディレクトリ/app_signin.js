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

// 読込
// function load() {
//   const keyData = document.getElementById("email-signin").value; //keyData
//   console.log("入力email:", keyData);
//   const valueData = document.getElementById("password-signin").value; //入力Password
//   console.log("入力password", valueData);

//   if (keyData !== registEmail) {
//     alert("データがありません");
//   } else {
//     if (valueData !== registPass) {
//       alert("データがありません");
//     } else {
//       console.log("OK");
//       localStorage.setItem("loginHistory", 1);
//       // window.location.href = "./index_main.html";
//     }
//   }
// }

// 保存
function save() {
  const youremail = document.getElementById("email-signin").value;
  const yourpassword = document.getElementById("password-signin").value;
  if (!youremail || !yourpassword) {
    alert("emailとpasswordを入力してください");
  } else {
    const array = [youremail, yourpassword];
    const serializedArray = JSON.stringify(array);
    localStorage.setItem("youremail_pass", serializedArray);
    console.log("OK");
    localStorage.setItem("loginHistory", 1);
  }
}
