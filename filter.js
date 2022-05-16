const filter = (cb) => {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      array.push(this[i]);
    }
  }

  return array;
};

const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1.filter((e) => {
  return e > 2;
});
