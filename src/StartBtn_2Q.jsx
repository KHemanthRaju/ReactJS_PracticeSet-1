const StartBtn = ({ backgroundColor, color, borderRadius, padding }) => {
  const handleBtn = {
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: borderRadius,
    padding: padding
  };

  return (
    <>
      <h2>Hello</h2>
      <button
        style={
          handleBtn
          // backgroundColor: backgroundColor,
          // color: color,
          // borderRadius: borderRadius,
          // padding: padding
        }
      >
        Start
      </button>
    </>
  );
};
export default StartBtn;
