const StudentCard = ({ student }) => {
  const gradefun = (totalMarks) => {
    if (totalMarks >= 220) {
      return "A";
    } else if (totalMarks >= 180) {
      return "B";
    } else if (totalMarks >= 120) {
      return "C";
    } else {
      return "D";
    }
  };
  return (
    <>
      <h2>Student Details</h2>
      <p>Name:{student.name}</p>
      <p>English:{student.english}</p>
      <p>Maths:{student.maths}</p>
      <p>Computers:{student.computers}</p>
      <p>Total Marks:{student.english + student.maths + student.computers}</p>
      <p>
        Grade:{gradefun(student.english + student.maths + student.computers)}
      </p>
    </>
  );
};

export default StudentCard;
