//  typescript of data type : 
//  number,string,boolean

function add(num1 :number , num2 :number,printResult:boolean,someText:string){
//     if(typeof n1=== 'number' && typeof n2 ==='number'){
//     return num1+num2;
// }
// else{
//     return +num1+num2;
// }
if(printResult){
    console.log(` ${someText} ${num1+num2}`);
    
}
else{

    return +num1+num2;
}
}
const n1 = 200;
const n2 = 30;
const printResult = true;
const someText = 'some of two number is '

const ans  = add(n1,n2,printResult,someText);
// console.log(ans);
