const person1 = {
    name: "abul kasem",
    honors: 40,
    hsc: 30,
    isFFfamily: true,
}
const person2 = {
    name: "mokbul mia",
    honors: 45,
    hsc: 32,
    isFFfamily: false,
}
const person3 = {
    name: "maruf mia",
    honors: 20,
    hsc: 20,
    isFFfamily: true,
}

function jobSelection (info){
    if(typeof info !== "object"){
        return 'invalid object';
    }

    let totalMarks = info.honors + info.hsc;

    if(info.isFFfamily ){
        totalMarks =totalMarks + (totalMarks * 0.2)
    }
    console.log(totalMarks)

    if (info.isFFfamily && totalMarks >= 80){
        return "Aho vatija Aho.....!"
    }
    else if(info.isFFfamily && totalMarks < 80){
        return "Bad luck vatija ...Try nest time!"
    }
    else if(!info.isFFfamily && totalMarks >=80){
        return "you got the job."
    }
    else if(!info.isFFfamily && totalMarks < 80) {
        console.log( typeof info.isFFfamily);
        return "rajakar rajakar ....!"
    }


    // if(totalMarks >= 80){
    //     return "you got the job";
    // }
    // else{        console.log( typeof info.isFFfamily);

    //     return "you failed";
    // }
    
}

console.log(jobSelection(person3));