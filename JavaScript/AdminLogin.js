document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("adminLoginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const adminId = document.getElementById("adminId").value;
    const password = document.getElementById("password").value;

    if (adminId === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Demo credentials
    if (adminId === "admin" && password === "admin123") {
      window.location.href = "../Pages/AdminDash.html";
    } else {
      alert("Invalid Admin ID or Password");
    }
  });

});
