const staffData = [
  {
    id: "IT101",
    name: "Pratik Jamdhade",
    department: "IT",
    designation: "Assistant Professor",
    email: "pratik41@gmail.com",
    phone: "99--------"
  },
  {
    id: "CS102",
    name: "Dipalee Pandit",
    department: "Computer Science",
    designation: "HOD",
    email: "dpandit@gmail.com",
    phone: "98--------"
  },
  {
    id: "BCA201",
    name: "Ron Namikaze",
    department: "BCA",
    designation: "Lecturer",
    email: "ron@gmail.com",
    phone: "7666-1515-"
  }
];

// Load staff into table
function loadStaff(data) {
  const tbody = document.getElementById("staffBody");
  tbody.innerHTML = "";

  data.forEach(staff => {
    const row = `
      <tr>
        <td>${staff.id}</td>
        <td>${staff.name}</td>
        <td>${staff.department}</td>
        <td>${staff.designation}</td>
        <td>${staff.email}</td>
        <td>${staff.phone}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Search by name or ID
function searchStaff() {
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = staffData.filter(staff =>
    staff.name.toLowerCase().includes(search) ||
    staff.id.toLowerCase().includes(search)
  );

  loadStaff(filtered);
}

// Filter by department
function filterDepartment() {
  const dept = document.getElementById("departmentFilter").value;

  if (dept === "all") {
    loadStaff(staffData);
  } else {
    const filtered = staffData.filter(s => s.department === dept);
    loadStaff(filtered);
  }
}

// Load on start
window.onload = () => loadStaff(staffData);
