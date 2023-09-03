// 保存
function save() {
  const youremail = document.getElementById("email-signup").value;
  const yourpassword = document.getElementById("password-signup").value;
  if (!youremail || !yourpassword) {
    alert("emailとpasswordを入力してください");
  } else {
    const array = [youremail, yourpassword];
    const serializedArray = JSON.stringify(array);
    localStorage.setItem("youremail_pass", serializedArray);
    alert("Sign up完了、リンクからSign inページへ戻ってください");
  }
}
