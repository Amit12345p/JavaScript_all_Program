//**Let And Const *///

// function biodata(){
//     var myfirstname = ("Amit");
//     console.log(myfirstname);

//     if(true){
//         var mylastname = ("Patel");
//         console.log('inner ' + mylastname);
//         console.log('inner ' + myfirstname);

//     }
//     console.log('innerouter ' + mylastname);
// }
// biodata();

//***let *///

// function biodata(){
//     let myfirstname = ("Amit");
//     console.log(myfirstname);

//     if(true){
//         let mylastname = ("Patel");
//         console.log('inner ' + mylastname);
//         console.log('inner ' + myfirstname);

//     }
//     // console.log('innerouter ' + mylastname);
// }
// biodata();

//**Template Literals *//


// for (let num = 1; num <= 10; num++){
//     let tableof = 12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

//**defult Paremeter */

// function mult(a,b){
//     return(a*b);


// }

// console.log(mult(5,3))

//**fat arrow Function */

// const sum = () => {
//     let a = 20; b = 30;
//     let sum = a+b;
//     return `the sum of two number is ${sum}`;
// }

// console.log(sum());


// const sum = () => {
//     return `the sum of two number is ${(a=5)+(b=6)}`;
// }

// console.log(sum());


// const sum = () => `the some of two number is ${(a=10)+(b=30)}`
// console.log(sum());
