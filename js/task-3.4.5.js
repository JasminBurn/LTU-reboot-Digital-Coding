var lasagne = {
    recipeName: "Lasagne",
    ingredients: ['Cheese', ' Pasta sheets', ' Tomato paste', ' Onions',' Salt', ' Pepper', ' Quorn mince'],
    servings: 2,
    directions: ["Fry", "grate"]
}
    
//function outputRecipe(recipe) {  
        //console.log('You want to make ' + recipe.servings + ' servings of lasagne, using the ingredients of: ' + recipe.ingredients + '.' + " You'll need to follow these steps: " + recipe.directions);
    //}

function letsCook(cook) {
        console.log("I'm hungry! Let's cook..." + cook.recipeName)
}

outputRecipe(lasagne);