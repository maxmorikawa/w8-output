// 読込
function load() {
  var keyData = document.getElementById("email-signin").value; //keyData
  console.log(keyData);
  var valueData = document.getElementById("password-signin").value; //入力Password
  console.log(valueData);
  var registPass = localStorage.getItem(keyData); //登録済みpassword読込
  console.log(registPass);

  if (!localStorage.getItem(keyData)) {
    registPass = "データがありません";
    console.log(valueData);
  } else {
    if (valueData !== registPass) {
      console.log("データがありません");
    } else {
      console.log("OK");
      window.location.href = "./index.html";
    }
  }
}
