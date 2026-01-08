const examData = {
  BCA: {
    1: [
      { date: "05-04-2025", subject: "Programming in C", time: "10:00 AM - 1:00 PM", room: "Lab 101" },
      { date: "08-04-2025", subject: "Mathematics", time: "10:00 AM - 1:00 PM", room: "Room 12" }
    ],
    2: [
      { date: "10-04-2025", subject: "Data Structures", time: "10:00 AM - 1:00 PM", room: "Lab 102" },
      { date: "13-04-2025", subject: "DBMS", time: "10:00 AM - 1:00 PM", room: "Room 15" }
    ]
  },

  BSc: {
    1: [
      { date: "06-04-2025", subject: "Physics", time: "9:30 AM - 12:30 PM", room: "Hall A" }
    ]
  },

  BCom: {
    1: [
      { date: "07-04-2025", subject: "Accounting", time: "11:00 AM - 2:00 PM", room: "Room 20" }
    ]
  }
};

function loadSchedule() {
  const course = document.getElementById("courseSelect").value;
  const semester = document.getElementById("semesterSelect").value;
  const tbody = document.getElementById("examBody");

  tbody.innerHTML = "";

  if (!course || !semester) {
    tbody.innerHTML = `<tr><td colspan="4" class="msg">Select course & semester</td></tr>`;
    return;
  }

  const exams = examData[course]?.[semester];

  if (!exams) {
    tbody.innerHTML = `<tr><td colspan="4" class="msg">No schedule available</td></tr>`;
    return;
  }

  exams.forEach(exam => {
    const row = `
      <tr>
        <td>${exam.date}</td>
        <td>${exam.subject}</td>
        <td>${exam.time}</td>
        <td>${exam.room}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}
