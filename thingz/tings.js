// Array.prototype.mergeSort = function(func) {
//   if (this.length <= 1) return this;
//
//   if (func === undefined) {
//     func = (a, b) => a >= b ? -1 : 1;
//   }
//
//   let duparr = this.slice();
//
//   let mid = Math.floor(duparr.length / 2);
//   let left = duparr.slice(0, mid).mergeSort(func);
//   let right = duparr.slice(mid).mergeSort(func);
//
//   return left.merge(right, func);
// };
//
// Array.prototype.merge = function(arr, func) {
//   let ans = [];
//
//   while (this.length && arr.length) {
//     switch (func(this[0], arr[0])) {
//       case 1:
//         ans.push(this.shift());
//         break;
//       case -1:
//         ans.push(arr.shift());
//         break;
//       case 0:
//         ans.push(arr.shift());
//         break;
//     }
//   }
//   ans = ans.concat(this);
//   ans = ans.concat(arr);
//   return ans;
//
// };

Array.prototype.permutations = function () {
  if (this.length <= 1) return [this];

  let answer = [];
  let temp = this.shift();
  let perms = this.permutations();

  for (var i = 0; i < perms.length; i++) {
    let perm = perms[i];
    for (var j = 0; j <= perm.length; j++) {
      let mini = [];
      mini = mini.concat(perm.slice(0, j));
      mini.push(temp);
      mini = mini.concat(perm.slice(j));
      answer.push(mini);
    }
  }
  return answer;
};
