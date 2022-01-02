const conditionalSum = function (values, condition){
 // Your code here
let  result, sum = 0;
if (condition === "even"){
result = 0;
}else{
result = 1;
}
 for (let i = 0; i < values.length; i++){
	if (values[i] % 2 === result){
		sum += values[i];
}
}
return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5],"odd"));
console.log(conditionalSum([13, 88, 12, 44, 99],"even"));
console.log(conditionalSum([],"odd"));
