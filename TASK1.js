let drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ];
  
function firstStep(){
    drinks.sort((x1,x2) =>{
        if(x1.price>x2.price){
            return 1
        }else if(x2.price>x1.price){
            return -1;
        }else{
            return 0;
        }
    })
    console.log(drinks)
};
