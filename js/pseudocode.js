var arrBookList = [
    {
        title:"The Hobbit",
        author:"JRR Tolkein",
        hasRed:false,
    },
    {
        title:"Hobbit",
        author:"JRR Tolkein",
        hasRed:false,
    },
    {
        title:"Harry Potter",
        author:"JK Rowling",
        hasRed:true,
    },
];

// LOOP through each item in the book list array
for(counter = 0; counter < arrBookList.length; counter++){
    var objCurrentBook = arrBookList[counter];
    //THEN create a message to output that is {title} by {author}
    var strMessage = objCurrentBook.title + ' by ' + objCurrentBook.author;
    //IF the book has already been read
    if(objCurrentBook.hasRead){
        //THEN prepend the message with "You have read "
        strMessage = "You have read " + strMessage;
    }
    //ELSE
    else {
        //THEN prepend the message with "You need to read "
        strMessage = "You need to read " + strMessage;
    }
    console.log(strMessage);
}