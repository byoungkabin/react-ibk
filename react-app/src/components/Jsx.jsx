const Jsx = () => {
  const name = "리액트";
  const name2 = "qq";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      {/* 주석은 이렇게 */}
      <div style={style}> {name} </div>
      <h1> {name} 안녕 </h1>
      <h2> 잘 작동하니? </h2>
      {name === "리액트" ? (
        <h1> 리액트입니다.</h1>
      ) : (
        <h2> 리액트가 아닙니다.</h2>
      )}
      {name === "리액트" && <h1>조건식(name)이 참이면, 출력됩니다.</h1>}
      {name2 || "name2 null 이면 출력됩니다.name2 이름이 없습니다."}
    </>
  );
};
export default Jsx;
