//  typescript of data type : 
//  number,string,boolean
 
function add(num1, num2, printResult, someText) {
    //     if(typeof n1=== 'number' && typeof n2 ==='number'){
    //     return num1+num2;
    // }
    // else{
    //     return +num1+num2;
    // }
    if (printResult) {
        console.log(" ".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return +num1 + num2;
    }
}
var n1 = 200;
var n2 = 30;
var printResult = true;
var someText = 'some of two number is ';
var ans = add(n1, n2, printResult, someText);
// console.log(ans);
