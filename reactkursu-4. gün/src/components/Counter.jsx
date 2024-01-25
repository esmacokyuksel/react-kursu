const Counter = (props) => {
  const { counter, setCounter, children } = props;
  return (
    <>
      <div>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{ marginRight: "4px" }}
        >
          +
        </button>
        {children}
        <button
          onClick={() => setCounter(counter - 1)}
          style={{ marginLeft: "6px" }}
        >
          -
        </button>
      </div>
    </>
  );
};
export default Counter;
