// amar kase akta array te kisu number ase ,amake ber korte hobe sobcheye boro number konti?
// ________________________________________________
// without funtion:
// **********----------------***********
// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
// let biggest =numbers[0];
// console.log('before loop:', biggest);
// for(let i = 1;i < numbers.length; i++ ){
//     console.log('current number is :', numbers[i],'  and  ', 'biggest number is :',biggest );
//     if(numbers[i] > biggest){
//         biggest = numbers[i];  
//     }
//     console.log('curent biggest is',biggest)
// }
// console.log(biggest);
// ____________________
// 
// _____________________________________________________
// shortcut --------(Math.max(...variable))shekher jonno ata korbo na 
// ************---------------************

// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
// console.log(Math.max(...numbers));


// **********--------------***********
// with function
function giveBiggestNumber(array){
    console.log(typeof(array))
    if(!Array.isArray(array)){
        return "This is not an Array....!"
    }
    let biggest = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > biggest){
            biggest = array[i];
        }
    }
    return biggest
}
// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
const numbers = [1, 2, 100]
// const numbers = 2;
const result = giveBiggestNumber(numbers);
console.log(result);

