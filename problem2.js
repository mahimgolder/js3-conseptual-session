// amar nam mahim ,amr bari patuakhali


// function showInfo(info){
//     if(typeof info !== "object"){
//         return "please provide a valid object....!";
//     }
//     const result = "amar nam "+info.name + ", amr bari " + info.addrress;
//     return result;
// }

// const person = { name: "mahim", addrress: 'Patuakhali'}

// const x = showInfo(person);
// console.log(x);


// ******---------------*******-----------

// output pete chi : mahimgolder@patuakhali.com

const person1 = { name: "mahim", address: 'Patuakhali'}
const person2 = { name: 'suvo', address: 'dhaka'}


function createEmail(info){
    if(typeof info !== 'object'){
        return 'Please enter an object';
    }
    const result = info.name + "@" + info.address + ".com";
    return result;
}
const result = createEmail(person1);
console.log(result);
