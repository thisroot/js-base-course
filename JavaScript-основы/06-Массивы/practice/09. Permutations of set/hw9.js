n = 5
arr = []

for(let i=0;i < n; i ++) {
    arr[i] = i
}

function permutation(a){

  let res = [];
  for(let i=0; i<a.length; i++){
    let restA = a.slice(0,i).concat(a.slice(i+1));
    let rest = permutation( restA);
    if(rest.length === 0){
      res.push([a[i]]);
    }else{
      for(let j=0; j<rest.length; j++){
	res.push([a[i]].concat(rest[j]));
      }
    }
  }

  return res;
}


arr = permutation(arr)
console.log(arr);