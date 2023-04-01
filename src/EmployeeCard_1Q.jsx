const EmployeeCard = ({ employees }) => {
  const { name, workExperience, designation } = employees;

  return (
    <>
      <h2>Employee Details</h2>
      <h2>{name}</h2>
      <p>
        <span style={{ color: "green" }}>Designation:</span> {designation}
      </p>
      <p>
        <span style={{ color: "blue" }}>Experience:</span> {workExperience}
      </p>

      {/* {employees.map((employee) => (
        <li key={employee.id}>
          <span>{employee.name}</span> -{" "}
          <span style={{ color: "blue" }}>
            {employee.workExperience} Experience
          </span>
          -<span style={{ color: "green" }}> {employee.designation}</span>
        </li>
      ))} */}
    </>
  );
};

export default EmployeeCard;
