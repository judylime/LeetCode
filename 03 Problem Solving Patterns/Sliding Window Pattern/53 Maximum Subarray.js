function maxSubbarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}
 

function maxSubbarraySum (arr,num) {
  let maxSum = 0;
  let tempSum =0;
  if (arr.length <num) return null;
  for (let i=0; i<num; i++) {
    maxSum += arr[i];
  }
  tempSum =maxSum;
  for ( let i =num; i<arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max (maxSum, tempSum);
  }
  return maxSum;
}
maxSubbarraySum ([2,6,9,2,1,8,5,6,3],3)