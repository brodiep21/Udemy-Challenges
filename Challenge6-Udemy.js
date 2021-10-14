// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK 


const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,  //kilograms
    height : 1.69, //meters
    bmiCalc : function(){
        return this.mass / (this.height ** 2);
    }
};

const john = {
    firstName :'John',
    lastName : 'Smith',
    mass : 92, //kilograms
    height : 1.95, //meters
    bmiCalc : function(){
        return this.mass / (this.height ** 2)
    }
};

const bmiFinder = function() {
    if (john.bmiCalc() > mark.bmiCalc()){
    return `${john.firstName}'s BMI ${john.bmiCalc()} is larger than ${mark.firstName}'s BMI ${mark.bmiCalc()}'`
    }
    else return `${mark.firstName}'s BMI ${mark.bmiCalc()} is larger than ${john.firstName}'s BMI ${john.bmiCalc()}`
}

console.log(bmiFinder())