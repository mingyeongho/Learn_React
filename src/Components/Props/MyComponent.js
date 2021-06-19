const MyComponent = ({ name }) => {
  return <div>{name}</div>;
};

MyComponent.defaultProps = {
  name: "kim",
};

export default MyComponent;
