const Jsx = () => {
  const name = "리액트";

  //   JS falsy한 값
  // 0 , "" , false , null, undefined, NaN

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>{name}</div>

      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      {name === "리액트" ? (
        <h1>리액트입니다.</h1>
      ) : name === "뷰" ? (
        <h1>뷰입니다</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      {name === "리액트" && <h1>리액트입니다.</h1>}
      {name || "이름이 없습니다."}
      {name ?? "이름이 없습니다."}

      <input />
      <br />
    </>
  );
};

export default Jsx;
