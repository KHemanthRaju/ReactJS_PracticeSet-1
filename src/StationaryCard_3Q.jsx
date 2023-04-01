const StationaryCard = ({ header, items }) => {
  return (
    <>
      <h2> {header}</h2>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};

export default StationaryCard;
