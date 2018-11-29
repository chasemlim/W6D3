Array.prototype.bsearch = function(target, func) {
  if (this.length === 0) return null;

  if (!func) {
    func = (x, y) => {
      if (x <= y) return -1;
      return 1;
    };
  }

  const midIdx = Math.floor(this.length / 2);
  if (this[midIdx] === target) return midIdx;
  if (func(target, this[midIdx]) === -1) {
    return this.slice(0, midIdx).bsearch(target, func);
  } else {
    const bsearchResults = this.slice(midIdx + 1).bsearch(target, func);
    if (bsearchResults !== null) {
      return bsearchResults + midIdx + 1;
    }
  }

  return null;
};



Array.function.myFlatten = function() {
  const flattened = [].concat(...this); // flattens a bidimensional array
  return flattened.some(el => el instanceof Array ? el.myFlatten() : el);
};
