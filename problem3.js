// apnar mashik khoroj , ghor-vara = 5000 , khabar-khoroj = 3000, hat-khoroj = 2000, mash sese apnar savings koto hobe? amnar ayer upoe vitti kore ; 
function calculateSavings(income){

    // ****function r paramiter check korbe :
    if(typeof income !== 'number' ){
        return "Please enter a number....!"
    }

    const houseRent = 5000;
    const mealCost = 3000; 
    const personalExpenses = 2000;
    const totalExpenses = houseRent + mealCost + personalExpenses;//total income tk


//jodi income r theke totalExpenses  beshi hoy : 
    if(totalExpenses > income){
        return 'Earn more money..!';
    }

    const savings = income - totalExpenses;
    return savings;
}
const result = calculateSavings(5000);
console.log(result);
