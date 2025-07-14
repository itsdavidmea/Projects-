const prompt = require('prompt-sync')();

// Compound interest calculator that prompts a user for some inputs, 
// and finally calculates the compounded interest value



// step 1 - define a function that we can use to calculate the final value of the compounded interest
function compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate ) {

    let total = initial_amount
    let annual_contribution = monthly_contribution * 12
    for (let i = 0; i < number_of_years; i++) {
        total +=  annual_contribution
        total = total * ((100 + interest_rate) / 100)
    }
    return total 
}

// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)

function calculateRegularAmount (initial_amount, monthly_contribution, number_of_years) {

    return initial_amount + monthly_contribution * 12 * number_of_years
}

// create a function that prints output 



// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run() {

    let initial_amount = parseInt(prompt('Enter initial Amount:' ))
    let monthly_contribution = parseInt(prompt('Enter the monthly contribution:' ))
    let number_of_years = parseInt(prompt('Enter the number of years:' ))
    let interest_rate = parseInt(prompt('Enter the interest rate:'  ))

    printOutput(initial_amount, monthly_contribution, number_of_years, interest_rate )
}

run()
// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

function printOutput (initial_amount, monthly_contribution, number_of_years, interest_rate ) {
    let totalCompounded = compoundInterest(initial_amount, monthly_contribution, number_of_years, interest_rate).toFixed(2)
    let totalRegular = calculateRegularAmount(initial_amount, monthly_contribution, number_of_years).toFixed(2)
    console.log(`INITIAL AMOUNT: $${initial_amount} \nMONTHLY CONTRIBUTION: $${monthly_contribution} \nNUMBER OF YEARS: ${number_of_years} \nINTEREST RATE: ${interest_rate}\n\nCOMPOUNDED INTEREST: $${totalCompounded} \nREGULAR INVESTMENT: ${totalRegular}\nDIFFERENCE: $${totalCompounded - totalRegular}`)
    


    
}


