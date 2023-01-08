
//synchronous//
// const fun2 = () => {
//     console.log('function 2 is call 2');
// }
// const fun1 = () => {
//     console.log('function 1 is call 1');
//     fun2();
//     console.log('function 1 is call 3');
// }
// fun1();

//Asynchronous//
const fun2 = () => {
    setTimeout(() => {
        console.log('function 2 is call 2');
    }, 2000);
        
    }
    const fun1 = () => {
        console.log('function 1 is call 1');
        fun2();
        console.log('function 1 is call 3');
    }
    fun1();

