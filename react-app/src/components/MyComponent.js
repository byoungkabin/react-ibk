const MyComponent = ({ name, children, name2 }) => {
  return (
    <div>
      {children}
      반갑습니다, 제 이름은 {name}입니다.{name2}
      {children}
    </div>
  );
};

export default MyComponent;
