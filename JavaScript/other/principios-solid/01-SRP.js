function calculateSalary(employee) {
  const salary = employee.hoursWorked * employee.payPerHour;

  const report = `
	  Name: ${employee.name}
	  Hours worked: ${employee.hoursWorked}
	  Pay per hour: ${employee.payPerHour}
	  Total salary: ${salary}
	`;

  console.log(report);
  return salary;
}

// -----------------------------------------

const employee = {
  name: 'Pedro Mosquera',
  hoursWorked: 8,
  payPerHour: 40,
};

function calculateSalary(employee) {
  return employee.hoursWorked * employee.payPerHour;
}

function generateReport(employee, salary) {
  const report = `
    Name: ${employee.name}
    Hours worked: ${employee.hoursWorked}
    Pay per hour: ${employee.payPerHour}
    Total salary: ${salary}
  `;
  return report;
}

const salary = calculateSalary(employee);
console.log(generateReport(employee, salary));
