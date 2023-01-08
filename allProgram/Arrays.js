// var frd = ['amit','ram','aashutosh','aman']
// console.log(frd [1]);
// console.log(frd.length);
// console.log(typeof(frd));
// console.log(frd[frd.length -1])

//**for loop in array *///

// var frd = ['amit','ram','aashutosh','aman']

// for(var i = 0; i<frd.length; i++){
//     console.log(frd[i]);


// }


// var frd = ['amit','ram','aashutosh','aman']
// for(let elements in frd){
//     console.log(elements);


// }

//***for of loop  *///

// var frd = ['amit','ram','aashutosh','aman']
// for (let elements of frd){
//     console.log(elements);
// }


//**foe each loop *///

// var frd = ['amit','ram','aashutosh','aman']
// frd.forEach(function(element, index, array) {
//     console.log(element + " index : " + index + " " + array);


// });

///**fat arror function *///
// var frd = ['amit','ram','aashutosh','aman']
// frd.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);


// });


//**crud operation *///

//push method//

// const frd = ['amit','ram','aashutosh','aman'];
// const count = frd.push('Patel');
// console.log(frd);
// console.log(count); 

//**unshift method *//

// const frd = ['amit','ram','aashutosh','aman'];
// const count = frd.unshift('Patel');
// console.log(frd);
// console.log(count); 


///**example// */

// const number = [1,2,3,4,5]
// const count = number.push(10);
// console.log(number);
// console.log(count);

// const number = [1,2,3,4,5]
// const count = number.unshift(10);
// console.log(number);
// console.log(count);


//***pop() *//

// const number = [1,2,3,4,5]
// const count = number.pop(5);
// console.log(number);
// console.log(count);


//**pop () *//

// const number = [1,2,3,4,5]

// console.log(number);
// console.log(number.pop());
// console.log(number);

//**sift() *///
// const number = [1,2,3,4,5]

// console.log(number);
// console.log(number.shift());
// console.log(number);

//***splice method *///

// const frd = ['amit','ram','aashutosh','aman'];
//  const newfrd = frd.splice(4,0,"Kumar");
//  console.log(frd);


//  const frd = ['amit','ram','aashutosh','aman'];
//  const newfrd = frd.splice(frd.length,0,"Kumar");
//  console.log(frd);
//  console.log(newfrd);


//update//

// const frd = ['amit','ram','aashutosh','aman'];
// const updatefrd = frd.splice(1,1,"Ram");
// console.log(frd);


// const frd = ['amit','ram','aashutosh','aman'];
// const indexoffrd = frd.indexOf('ram')
// if(indexoffrd != -1){
//     const updatefrd = frd.splice(indexoffrd,1,"Ram");
//     console.log(frd);

// }else{

//     console.log("element not find");
    
// }

//**delete element *//

// const frd = ['amit','ram','aashutosh','aman'];
// const indexoffrd = frd.indexOf('aman')
// if(indexoffrd != -1){
//     const updatefrd = frd.splice(indexoffrd,1);
//     console.log(frd);
//     console.log(indexoffrd);

// }else{

//     console.log("element not find");
    
// }

// const frd = ['amit','ram','aashutosh','aman'];
// const indexoffrd = frd.indexOf('ram')
// if(indexoffrd != -1){
//     const updatefrd = frd.splice(indexoffrd,3);
//     console.log(frd);
//     console.log(updatefrd);

// }else{

//     console.log("element not find");
    
// }




//**map(), reduce(), filter() method *///


//map()//


// const array1 = [1,9,10,19,20,25];
// let newarray = array1.map((element, index, array) => {
// return element > 9;

// })
// console.log(array1);
// console.log(newarray);


// const array1 = [1,9,10,19,20,25];
// let newarray = array1.map((element, index, array) => {

//     return `index no ${index} the value is ${element} belong to ${array}`


// })
// console.log(newarray);


///for each///

// let newarray1= array1.forEach((element, index, array) => {

//     return `index no ${index} the value is ${element} belong to ${array}`


// })
// console.log(newarray1);

///Square root//

// let arr = [25,36,49,64,81];
// let arrsqr = arr.map((element) => {

//     return Math.sqrt(element);

// })
// console.log(arrsqr);


///element muti by 2 and fine the number greater than 10//

// let arr = [1,2,3,4,6,10];
// let arr2 = arr.map((element) => {
//     return element * 2;
// }).filter(( element) => {
//     return element > 10;

// }).reduce((Accumulator, element) => {
//     return Accumulator += element;
// })
// console.log(arr2);

//**** reduce method *///
/// to find the sum of the all the element in the array///
// let arr = [2,3,4,5,6,7];
// let sum = arr.reduce((Accumulator, element) => {
//     return Accumulator += element;

// })

// console.log(sum);


//**fatten array *//

// const arr =[['a','b'],['c','d'],['e','f'],['g','h']

// ];
// let flatarr = arr.reduce((accum, element) => {
//     return accum.concat(element);


// })
// console.log(flatarr);