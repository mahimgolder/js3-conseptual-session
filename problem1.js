// amar kase akta array te kisu number ase ,amake ber korte hobe sobcheye boro number konti?

const numbers = [2, 4, 21, 5, 6, 23, 20, 9];

let biggest =numbers[0];

for(let i = 1;i < numbers.length; i++ ){
    if(numbers[i] > biggest){
        biggest = numbers[i];  
    }
}
console.log(biggest);