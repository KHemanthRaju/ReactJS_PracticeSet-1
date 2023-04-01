const EmployeeDetailsCard = ({ employees }) => {
  let totalSalary = 0;
  // const highlightLevel2 = {
  //   backgroundColor: orange
  // };
  return (
    <>
      <h2>Employee Details Card</h2>
      <ul>
        {employees.map((employee) => {
          totalSalary += employee.salary;
          return (
            <li
              style={{
                backgroundColor: employee.level == "2" ? "orange" : "none",
                border:
                  employee.designation == "President"
                    ? "solid 5px green"
                    : "none"
              }}
            >
              Name:{employee.name} Level:{employee.level} Dept:{employee.dept}{" "}
              Designation:{employee.designation} salary:{employee.salary}
            </li>
          );
        })}
      </ul>
      <p>Total Salary Expense : {totalSalary}</p>
    </>
  );
};
export default EmployeeDetailsCard;
