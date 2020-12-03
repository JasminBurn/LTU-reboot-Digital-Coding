 //FUNCTION fixstart(string)
 function fixStart(strString){
    //STORE the first character of the string
    var firstCharacter = strString[0]
    // console.log(firstCharacter);
    // console.log(firstCharacter.length);
    //LOOP through each character of the string
    var newString = firstCharacter;
    for(counter = 0; counter < strString.length; counter++){
        currentLetter = strString[counter];
        if(counter){
            //IF the string matches the first character replace with *
            if(currentLetter.toLowerCase() == firstCharacter || currentLetter.toUpperCase() == firstCharacter){
                newString += '*';
            } else {
                newString += strString[counter];
            }
        }
    }
    return newString;
}
var testString = fixStart('Jajjjjjjajajajaja');
console.log(testString);