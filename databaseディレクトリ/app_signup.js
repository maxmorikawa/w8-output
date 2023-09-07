// 保存
function save() {
  const yourEmail = document.getElementById("email-signup").value;
  const yourPassword = document.getElementById("password-signup").value;
  const loginHistory = localStorage.getItem("loginHistory");
  if (!yourEmail || !yourPassword) {
    alert("emailとpasswordを入力してください");
  } else {
    const array = [yourEmail, yourPassword];
    const serializedArray = JSON.stringify(array);
    localStorage.setItem("youremail_pass", serializedArray);
    if (loginHistory == 1) {
      localStorage.removeItem("loginHistory");
    }
    alert("Sign up完了、リンクからSign inページへ戻ってください");
  }
}
