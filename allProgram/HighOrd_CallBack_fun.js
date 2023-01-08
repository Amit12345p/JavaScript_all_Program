const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return Math.abs(a-b);
}
const mul = (a,b) => {
    return a*b;
}

const cal = (num1,num2, operator) => {
    return operator(num1,num2);
}
console.log(cal(5,2, add));