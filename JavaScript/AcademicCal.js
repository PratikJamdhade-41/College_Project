const academicEvents = [
  { date: "01", month: "June", event: "Academic Session Begins", desc: "Start of new academic year" },
  { date: "15", month: "July", event: "Internal Assessment – I", desc: "First internal examination" },
  { date: "10", month: "August", event: "Independence Day Celebration", desc: "College cultural program" },
  { date: "20", month: "September", event: "Mid-Semester Exams", desc: "Mid-term examinations" },
  { date: "05", month: "October", event: "Seminar Week", desc: "Student seminars & presentations" },
  { date: "15", month: "November", event: "Internal Assessment – II", desc: "Second internal test" },
  { date: "01", month: "December", event: "Practical Exams", desc: "Lab & practical examinations" },
  { date: "10", month: "January", event: "End Semester Exams", desc: "University exams begin" },
  { date: "25", month: "February", event: "Result Declaration", desc: "Results published" },
  { date: "10", month: "March", event: "Vacation Begins", desc: "Semester break starts" }
];

function loadCalendar(data) {
  const tbody = document.getElementById("calendarBody");
  tbody.innerHTML = "";

  data.forEach(item => {
    const row = `
      <tr>
        <td>${item.date}</td>
        <td>${item.month}</td>
        <td>${item.event}</td>
        <td>${item.desc}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function filterMonth() {
  const selected = document.getElementById("monthSelect").value;

  if (selected === "all") {
    loadCalendar(academicEvents);
  } else {
    const filtered = academicEvents.filter(e => e.month === selected);
    loadCalendar(filtered);
  }
}

window.onload = () => loadCalendar(academicEvents);
