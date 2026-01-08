const attendanceData = {
  BCA: {
    1: {
      "BCA101": [
        { subject: "Programming in C", total: 40, attended: 34 },
        { subject: "Mathematics", total: 42, attended: 30 },
        { subject: "Digital Electronics", total: 38, attended: 32 }
      ]
    },
    2: {
      "BCA101": [
        { subject: "Data Structures", total: 40, attended: 33 },
        { subject: "DBMS", total: 42, attended: 35 },
        { subject: "Operating System", total: 38, attended: 29 }
      ]
    }
  },

  BSc: {
    1: {
      "BSC001": [
        { subject: "Physics", total: 40, attended: 28 },
        { subject: "Chemistry", total: 40, attended: 30 }
      ]
    }
  }
};

function showAttendance() {
  const roll = document.getElementById("rollInput").value.trim();
  const course = document.getElementById("courseSelect").value;
  const semester = document.getElementById("semesterSelect").value;

  const tableBody = document.getElementById("attendanceBody");
  const box = document.getElementById("attendanceBox");

  tableBody.innerHTML = "";

  if (!roll || !course || !semester) {
    alert("Please fill all fields");
    return;
  }

  const data = attendanceData[course]?.[semester]?.[roll];

  if (!data) {
    alert("Attendance record not found");
    return;
  }

  data.forEach(item => {
    const percent = Math.round((item.attended / item.total) * 100);
    const status = percent >= 75 ? "Eligible" : "Short Attendance";

    const row = `
      <tr>
        <td>${item.subject}</td>
        <td>${item.total}</td>
        <td>${item.attended}</td>
        <td>${percent}%</td>
        <td class="${percent >= 75 ? 'pass' : 'fail'}">${status}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });

  box.style.display = "block";
}
