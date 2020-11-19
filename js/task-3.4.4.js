var lasagne = {
    ingredients: ['Cheese', ' Pasta sheets', ' Tomato paste', ' Onions',' Salt', ' Pepper', ' Quorn mince'],
    servings: 2,
    directions: ["Fry", "grate"]
}
    
function outputRecipe(recipe) {  
        console.log('You want to make ' + recipe.servings + ' servings of lasagne, using the ingredients of: ' + recipe.ingredients + '.' + " You'll need to follow these steps: " + recipe.directions);
    }

outputRecipe(lasagne);

for(var index = 0; index < ingredients.length; index++ ) {

    console.log( ingredients[index] )

}