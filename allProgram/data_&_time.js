///new Date()//

// let newdate = new Date();
// console.log(newdate);
// console.log(newdate.toLocaleString());
// console.log(newdate.toString());

//date.now()//

// console.log(Date.now());

//new Date(year,month.....)//

// var d = new Date(2021,11);
// console.log(d);

// var d = new Date(2021,11);
// console.log(d.toLocaleString());
// console.log(d.toString());

//new Date(datestring)//

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());
// console.log(d);

//new Date(Millisecond)//

// var d = new Date(1667035829414);
// console.log(d.toLocaleString());

// var d = new Date(1667035829414*2);
// console.log(d.toLocaleString());

// var d = new Date(0);
// console.log(d.toLocaleString());



//date method//

// const curdate = new Date();
// console.log(curdate.toLocaleString());
// console.log(curdate.getFullYear());
// console.log(curdate.getMonth());
// console.log(curdate.getDate());
// console.log(curdate.getDay());

//how to set the date//
//set method//
// const curdate = new Date();
// console.log(curdate.toLocaleString());
// console.log(curdate.setFullYear(2022));
// console.log(curdate.setMonth(8));
// console.log(curdate.getDate(10));
// console.log(curdate.setDay(5));


//time method//

const curtime = new Date();
console.log(curtime.getTime());
console.log(curtime.getHours());
console.log(curtime.getMinutes());
console.log(curtime.getSeconds());
console.log(curtime.getMilliseconds());



