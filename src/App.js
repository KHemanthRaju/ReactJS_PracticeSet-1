import EmployeeCard from "./EmployeeCard_1Q";
import EmployeeDetailsCard from "./EmployeeDetailsCard_8910Q";

import ImageCard from "./ImageCard_4Q";
import ProductCard from "./ProductCard_5Q";
import ProductDetailsCard from "./ProductDetailsCard_6Q";
import StartBtn from "./StartBtn_2Q";
import StationaryCard from "./StationaryCard_3Q";
import StudentCard from "./StudentCard_7Q";
import "./styles.css";
const employees = {
  id: "E1",
  name: "Arpit Jain",
  workExperience: 6,
  designation: "Software Engineer"
};
const buttonStyle = {
  backgroundColor: "lightgreen",
  color: "darkgreen",
  borderRadius: "5px",
  padding: "10px"
};
const items = ["pen", "pencil", "ruler", "eraser"];
const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";
const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];
const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70
};
const employees1 = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200
  }
];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <EmployeeCard employees={employees} />
      <StartBtn
        backgroundColor={buttonStyle.backgroundColor}
        color={buttonStyle.color}
        borderRadius={buttonStyle.borderRadius}
        padding={buttonStyle.padding}
      />
      <StationaryCard header="Stationary Items" items={items} />
      <ImageCard image={imageLink} caption={caption} />
      <ProductCard products={products} />
      <ProductDetailsCard products={products} />
      <StudentCard student={student} />
      <EmployeeDetailsCard employees={employees1} />
    </div>
  );
}
