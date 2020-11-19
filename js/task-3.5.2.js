let shoppingCart = [
    {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    },
    {
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    },
    {
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    },
    {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    },
    {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    },
    {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    },
    {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    },
    {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    },
    {
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    },
    {
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }];

    // 1. Create a function that takes 1 argument (the array)

    function discountForFood( arr ) {

        var totalPrice = 0; // 2. Create a variable inside the funcion

        // 3. Loop through array of objects
        for( var index = 0; index < arr.length; index++ ) {

            // 4. If item has type of 'food', ass a 20% discount
            if ( arr[index].type === "food" ) {

            var discount = ( arr[index].price * 20 ) / 100;

            totalPrice = totalPrice + ( arr[index].price - discount ) * arr[index].quantity;

            } else {

            totalPrice = totalPrice + ( arr[index].price * arr[index].quantity);
           
            }
        } 
        return totalPrice.toFixed(2);

    }

    console.log( discountForFood (shoppingCart) );


    // my attemt: 
    //function shoppingCartTotalPrice( arr ) { 

       // var totalPrice = 0; 
       // var percentage = 20;
    
       // for( var index = 0; index < arr.length; index++ ) {

          //  totalPrice = totalPrice + ( arr[index].price * arr[index].quantity );

           // if( shoppingCart.type = "food" (shoppingCart.price * percentage) / 100; ) { 

     //   } 

      //  }

     //   return totalPrice.toFixed(2);

   // } else {
        
    //    console.log(shoppingCartTotalPrice( shoppingCart ) );

 //   }

