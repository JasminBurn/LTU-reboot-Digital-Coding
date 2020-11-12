function drinkOrder ( drink, size ) {

    var drinkToLowerCase = drink.toLowerCase();

    switch ( drinkToLowerCase ) {
        case "cola" :
            console.log( "You have ordered a " + size + " " + drinkToLowerCase );
            break;

        case "lemonade" :
            console.log( "You have ordered a " + size + " " + drinkToLowerCase );
            break;
    
        case "orangeade" :
            console.log( "You have ordered a " + size + " " + drinkToLowerCase );
            break;
            
        default:
            console.log( "You have tried to order a drink that isn't on the list. Please pick a drink from the list." );
            break;
    
    }
}

//Note: these are case sensitive, don't cover blank spaces or drink sizes. To make things lower case use the variable.