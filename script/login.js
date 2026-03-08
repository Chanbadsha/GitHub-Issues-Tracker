const demoUserName = "admin";
const demoUserPassword = "admin123";
const handleSubmit = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  if (username == demoUserName && password == demoUserPassword) {
    // console.log(true);
    window.location.href = "home.html";
  } else {
    alert("Username and password not matched");
  }
};
