const feeData = {
  BCA: {
    1: [
      { name: "Admission Fee", amount: 3000 },
      { name: "Tuition Fee", amount: 12000 },
      { name: "Library Fee", amount: 1500 },
      { name: "Lab Fee", amount: 2500 }
    ],
    2: [
      { name: "Tuition Fee", amount: 12000 },
      { name: "Library Fee", amount: 1500 },
      { name: "Lab Fee", amount: 2500 }
    ],
    3: [
      { name: "Tuition Fee", amount: 13000 },
      { name: "Library Fee", amount: 1500 },
      { name: "Lab Fee", amount: 2500 }
    ],
    4: [
      { name: "Tuition Fee", amount: 13000 },
      { name: "Library Fee", amount: 1500 },
      { name: "Lab Fee", amount: 2500 }
    ],
    5: [
      { name: "Tuition Fee", amount: 14000 },
      { name: "Library Fee", amount: 1500 },
      { name: "Project Fee", amount: 3000 }
    ],
    6: [
      { name: "Tuition Fee", amount: 15000 },
      { name: "Project Fee", amount: 3000 }
    ]
  },

  BSc: {
    1: [
      { name: "Admission Fee", amount: 3500 },
      { name: "Tuition Fee", amount: 14000 },
      { name: "Lab Fee", amount: 3000 }
    ]
  },

  BCom: {
    1: [
      { name: "Admission Fee", amount: 2500 },
      { name: "Tuition Fee", amount: 10000 }
    ]
  }
};

function updateFees() {
  const course = document.getElementById("courseSelect").value;
  const semester = document.getElementById("semesterSelect").value;
  const body = document.getElementById("feesBody");
  const totalSpan = document.getElementById("totalAmount");

  body.innerHTML = "";
  totalSpan.textContent = "0";

  if (!course || !semester) return;

  const fees = feeData[course][semester];

  let total = 0;

  fees.forEach(item => {
    total += item.amount;

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>₹ ${item.amount}</td>
      </tr>
    `;
    body.innerHTML += row;
  });

  totalSpan.textContent = total;
}
