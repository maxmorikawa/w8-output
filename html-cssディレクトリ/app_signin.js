// const emailvalue = "mori2@";
// const passwordvalue = "password";
// window.localStorage.setItem(email, password);
// window.localStorage.removeItem(password);
// window.localStorage.clear();

// 読込
function load() {
  var keyData = document.getElementById("email").value; //keyData
  console.log(keyData);
  var valueData = document.getElementById("password").value; //入力Password
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

// 保存
function save() {
  var youremail = document.getElementById("email").value;
  console.log(youremail);
  var yourpassword = document.getElementById("password").value;
  localStorage.setItem(youremail, yourpassword);
}
