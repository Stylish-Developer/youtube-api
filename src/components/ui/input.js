// input component
export const Input = (props) => {
  const { name, value, placeholder, onChange } = props;

  //styles
  const inputStyle = {
    width: "95%",
    height: "30px",
    border: "none",
    paddingLeft: 10,
    borderRadius: "10px",
  };

  return (
    <>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
      />
    </>
  );
};
