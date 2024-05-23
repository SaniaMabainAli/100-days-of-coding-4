//Updating Object Properties: Add a property named color to the existing car object, and then 
//update the year property to 2021. Show how to perform these operations.
var Car = {
    maker: "Toyota",
    model: "Corolla Altis",
    year: 2012
};
console.log('Real Object: ', Car);
Car.color = "Black";
Car.year = 2021;
console.log('Updated Object: ', Car);
