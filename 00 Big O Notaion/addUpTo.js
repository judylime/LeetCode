function addUpTo(n) {
  let total = 0;
  for (let i=1;i<=n;i++){
    total +=1;
  }
  return total;
}

let t1 =performance.now();
addUpTo(100000000);
let t2 =performance.now();
console.log(`Time Elapsed:${(t2-t1)/1000} seconds}`)




function addUpTo(n) {
  return n*(n+1)/2;
}

function countUpAndDown (n){
  console.log("Going up!");
  for (let i=0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! \n Going down...");
  for (let j=n-1; j>=0; j--){
    console.log(j);
  }
  console.log("Back down. Bye!");
}

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
