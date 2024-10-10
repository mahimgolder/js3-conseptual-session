// akta array r vitore koyta boolean value ase tar count kore dekhao.

const x = [3, 2, true, 'hello', true, false, 34, { name: "mahim" }];

function countBoolean(array){
    if(!Array.isArray(array)){
        return "Please provide an array";
    }    
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'boolean'){
            count = count + 1;
        }
    }
    return count;

}
const result = countBoolean(x);
console.log(result);
