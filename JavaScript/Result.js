const resultData = {
  BCA: {
    1: {
      "BCA101": [
        { subject: "Programming in C", marks: 78 },
        { subject: "Mathematics", marks: 65 },
        { subject: "Digital Electronics", marks: 70 }
      ]
    },
    2: {
      "BCA101": [
        { subject: "Data Structures", marks: 72 },
        { subject: "DBMS", marks: 68 },
        { subject: "Operating System", marks: 75 }
      ]
    }
  },

  BSc: {
    1: {
      "BSC001": [
        { subject: "Physics", marks: 66 },
        { subject: "Chemistry", marks: 71 }
      ]
    }
  }
};

function showResult() {
  const roll = document.getElementById("rollInput").value.trim();
  const course = document.getElementById("courseSelect").value;
  const semester = document.getElementById("semesterSelect").value;

  const body = document.getElementById("resultBody");
  const box = document.getElementById("resultBox");
  const totalSpan = document.getElementById("totalMarks");
  const finalResult = document.getElementById("finalResult");

  body.innerHTML = "";
  totalSpan.textContent = "";
  finalResult.textContent = "";

  if (!roll || !course || !semester) {
    alert("Please fill all fields");
    return;
  }

  const studentData = resultData[course]?.[semester]?.[roll];

  if (!studentData) {
    alert("Result not found!");
    return;
  }

  let total = 0;
  let pass = true;

  studentData.forEach(item => {
    total += item.marks;

    if (item.marks < 35) pass = false;

    const row = `
      <tr>
        <td>${item.subject}</td>
        <td>${item.marks}</td>
        <td class="${item.marks >= 35 ? 'pass' : 'fail'}">
          ${item.marks >= 35 ? 'Pass' : 'Fail'}
        </td>
      </tr>
    `;
    body.innerHTML += row;
  });

  totalSpan.textContent = total;
  finalResult.textContent = pass ? "PASS" : "FAIL";
  finalResult.className = pass ? "pass" : "fail";

  box.style.display = "block";
}
