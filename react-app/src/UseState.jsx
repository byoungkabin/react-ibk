const UseState = (init) => {
  //  구조를 유추하면.....
  let state = init;
  const setState = (val) => {
    state = val;
  };

  return [state, setState];
};
