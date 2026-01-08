const courses = [
  {
    name: "Bachelor of Computer Applications (BCA)",
    category: "UG",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics",
    description: "Focuses on computer applications, programming, and software development."
  },
  {
    name: "Bachelor of Science (Computer Science)",
    category: "UG",
    duration: "3 Years",
    eligibility: "10+2 Science",
    description: "Provides strong foundation in computing and scientific principles."
  },
  {
    name: "Bachelor of Commerce (B.Com)",
    category: "UG",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
    description: "Focuses on accounting, finance, and business studies."
  },
  {
    name: "Master of Computer Applications (MCA)",
    category: "PG",
    duration: "2 Years",
    eligibility: "Graduation in Computer / IT",
    description: "Advanced study of software development and IT management."
  }
];

function loadCourses(list) {
  const container = document.getElementById("courseList");
  container.innerHTML = "";

  list.forEach(course => {
    const card = `
      <div class="course-card">
        <span class="badge">${course.category}</span>
        <h3>${course.name}</h3>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Eligibility:</strong> ${course.eligibility}</p>
        <p>${course.description}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filterCourses() {
  const value = document.getElementById("categorySelect").value;

  if (value === "all") {
    loadCourses(courses);
  } else {
    const filtered = courses.filter(c => c.category === value);
    loadCourses(filtered);
  }
}

window.onload = () => loadCourses(courses);
