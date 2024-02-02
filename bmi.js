let w=90;
let h=1.8;
let bmi=w/(Math.pow(h,2));
console.log(bmi);
if(bmi<18.5)
{
    console.log("You are underweight");

}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("You are normal");

}
else if(bmi>=25 && bmi<=29.9){
    console.log("You are overweight");

}
else{
    console.log("you are obese");
}
