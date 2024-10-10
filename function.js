// function showName(){
//     console.log('mahim golder')
// }

// showName();

function showName(name, age, address){
    console.log(name)
    console.log(age);
    console.log(address);
}
// showName("mehedy", 20, 'Dhaka');



// function add(x, y){
//     const total = x + y;
//     console.log(total);
// }

// add (4,7);
// add (5, 4);



function giveName (){
    const x = 'mehedi'
    return x;
}
// const myName = giveName();
// console.log(myName);

// or
// console.log(giveName())



// type of function -----(4)
// *****
// 1. No PARAMITERS No RETURN

function show(){
    console.log('hellow')
}

// 2. PARAMITERS with No RETURN

function add(x, y){
    console.log(x + y)
}


// 3. No PARAMITERS but RETURN

function giveName (){
    const x = 'mehedi'
    return x;
}


// 4. PARAMITERS with RETURN

function giveDouble (x){
    return x * 2;
}

console.log(giveDouble(2));