function percentageCalculator ( number, percentage ) {
    
    var percentageOf = (number * percentage) / 100;
    // BODMAS - Brackets, Order, Division, Multiplication, Addition, Subtraction.

    return percentageOf;

}

console.log ( percentageCalculator (300, 25) );

var twentyfivePercentOfHundred = percentageCalculator ( 100, 25 );

console.log (twentyfivePercentOfHundred );