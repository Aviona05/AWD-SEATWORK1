function login() {
  const password = document.getElementById('password').value;
  const correctPassword = "1234";

  if (password === correctPassword) {
    alert("Login successful!");
    window.location.href = "./pages/dashboard/index.html";
  } else {
    alert("Incorrect password. Please try again.");
  }
}
