function showSection(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
//Logout Function it's work when logout button click
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "../Pages/StudentLogin.html";
  }
}

