const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람", "눈"];
  //   const nameList = names.map((e) => <li>{e}</li>);
  //   console.log(nameList);
  return (
    // <ul>{[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]}</ul>
    <ul>
      {names.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

export default IterationSample;
