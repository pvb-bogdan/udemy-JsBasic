//  Scope an difference between let and var

// Global scope
var a = 1;
let b = 2;
const c = 3;



//function scope

function test(){
  var a = 4;// 4 
  let b = 5;// 5
  const c = 6;//6
  console.log('Function/local scope: ' , a, b,c);
}
test();
// varibles does not change inside the funnction - local scope

//Block scope - if or for or block actions

// if(true){
//   var a = 7;  
//   let b = 8; 
//   const c = 9;
//   console.log(a,b,c)//7 8 9
// }
// var inside if statement is 7, but rename a var inside a block statement it will change the global scope so in global scope now a = 7 not 1 -major //bug!!!

for(let a = 0; a < 10; a++){
  console.log(`Loop  ${a}`);
}// 0,1,2...9 and the global var stay 1 because of use let, if we change let with var in the global scope var a will became  10

console.log('Global scope: ' , a, b,c);