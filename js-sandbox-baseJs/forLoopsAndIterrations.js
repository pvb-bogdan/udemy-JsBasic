//  for loops, while loops, do while loops, map loops and for in loops

//FOR LOOPS

// for(let i = 10; i > 0; i--){
//   console.log(i);// de la 10 la 1
// }

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue; // whitout continue the loop include if statement and number 2, continue exclude nuber two and remain only if statement
//   }

//   if(i === 5){
//     console.log('stop the loop')
//     break; // stop the loop regardless how much is it to loop through
//   }
//   console.log(i);
// }

//WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('number' + i);
//   i++;
// }

// DO WHILE
// it will run once regardless of condition

// let i = 0;

// do{
//   console.log(i);
//   i++;
// }

// while(i < 10);

//LOOP THROUGH ARRAYS

const cars = ['sandero','logan','duster','mcv'];

// // for(let i = 0; i < cars.length; i++){
// //   console.log('Dacia ' + cars[i]);
// // }
//FOREACH
cars.forEach(function(car){
  console.log(` dacia ${car}`);
});

cars.forEach(function(car, index){
  console.log(` ${index} : ${car} `)
});

// MAP

const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Martha'},
  {id:3, name: 'Linda'},
  {id:4, name: 'Gigi'}
];

const ids = users.map(function(user){
  return user.name;
});
console.log(ids);

// FOR IN LOOP

const user = {
  firstName: 'Gigi',
  lastName: 'Multescu',
  age: 49
}
for(let x in user){
  console.log(user[x]);
}