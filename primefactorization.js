/* This function takes an number(integer) and outputs and 
outputs an array of prime numbers starting from smallest */
function primeFactorization(number) {
    //initialize an empty array
    let factors = [];
    //initialize and set starting trial factor to number 3
    let trialFactor = 3;
    //while the inputed number is bigger than 1 do the loop
    while(number > 1) {
        //we start by dividing with smallest prime, that is number 2, if the modulo is 0 do
        if(number % 2 == 0){
            //divide by 2 and save the divided number in the same variable
            number = number / 2;
            //save the first divisor - number 2 to the array
            factors.push(2)
        }
        //continue dividing by next prime, that is number 3 saved in trialFactor variable
        if(number % trialFactor == 0){
            //divide by 3 if modulo is 0 
            number = number / trialFactor;
            //save the new number after dividing by 3
            factors.push(trialFactor);
            //save the divisor to array
        }
        //if it is not divisible - modulo is not 0 increment the divisor by 2 and do the loop again
        else{
            trialFactor = trialFactor + 2;
        }
    }
    //logs an array of prime factors
    console.log(factors);
}

//call a function for testing with number 56187 inputed
console.log(primeFactorization(56187))