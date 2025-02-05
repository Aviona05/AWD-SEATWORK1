function login() {
  const password = document.getElementById('password').value;
  const correctPassword = "1234";

  if (password === correctPassword) {
    alert("Login successful!");
    console.log("Redirecting to:", window.location.origin + "/pages/Dashboard/index.html");
    window.location.href = "/pages/Dashboard/index.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
