const map = (cb) => {
  const array = [];
  this;
  for (let i = 0; i < this.length; i++) {
    array.push(cb(this[i]));
  }
  return array;
};
