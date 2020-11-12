function calculator ( number1, number2, operator ) {

    var result = " ";

    switch ( operator ) {
        case "+" :
            result = number1 + number2;
            console.log( number1 + " + " + number2 + " = " + result );
            break;

        case "-" :
            result = number1 - number2;
            console.log( number1 + " - " + number2 + " = " + result );
            break;

        case "/" :
            result = number1 / number2;
            console.log( number1 + " ÷ " + number2 + " = " + result );
            break;

        case "*" :
            result = number1 * number2;
            console.log( number1 + " x " + number2 + " = " + result );
            break;

        case "%" :
            result = (number1 * number2) / 100;
            console.log( number1 + " % of " + number2 + " = " + result );
            break;

        default :
            console.log ( "There has been an error with your calculation. Please try again." );
            break;
    }

}

// + 
// -
// /
// *
// %