/**
 * Merge time ranges if they overlap or are close enough
 * @param {Array<[number, number]>} arr - list of time ranges
 * @param {number} gap - max gap to still merge
 * @returns {Array<[number, number]>}
 */

const mergeTimeRanges=(arr, gap) => {
  if (!arr || arr.length === 0) return [];
  //to sort all the ranges by the start time
  const s=arr.sort((a, b) => a[0]-b[0]);
  const res=[];
  let [a,b]=s[0];
 
  for (let i=1;i<s.length;i++) {
    const [c,d] = s[i];
    //checking for overlap of ranges
    if (c<=b+gap) {
      //extend current range
      b=Math.max(b,d);
    } else {
      //push current range and start new one
      res.push([a,b]);
      a=c;
      b=d;
    }
  }
  // push last range
  res.push([a,b]);
  return res;
};
module.exports = { mergeTimeRanges };
