document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  document.getElementById("outName").textContent = name;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("outCourse").textContent = course;

  document.getElementById("resultBox").style.display = "block";

  // Optional reset
  this.reset();
});
