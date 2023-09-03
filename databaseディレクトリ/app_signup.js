// 保存
function save() {
  var youremail = document.getElementById("email-signup").value;
  console.log(youremail);
  var yourpassword = document.getElementById("password-signup").value;
  localStorage.setItem(youremail, yourpassword);
}
