document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("staffLoginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const staffId = document.getElementById("staffId").value;
    const password = document.getElementById("password").value;

    if (staffId === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Demo password check
    if (password === "12345") {
      window.location.href = "../Pages/FacultyDash.html";
    } else {
      alert("Invalid Staff ID or Password");
    }
  });

});
