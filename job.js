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

function jobSelection (info){
    if(typeof info !== "object"){
        return 'invalid object';
    }

    let totalMarks = info.honors + info.hsc;

    if(info.isFFfamily ){
        totalMarks =totalMarks + (totalMarks * 0.2)
    }

    if(totalMarks >= 80){
        return "you got the job";
    }
    else{
        return "you failed";
    }
    
}

console.log(jobSelection(person1));