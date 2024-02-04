function isLeapYear(year){
    if(year%100!=0 && year%4==0)
    {
        return true;
    }
    else if(year%100==0 && year%400==0){
        return true;
    }
    else
    return false;

}
let isLeap= isLeapYear(2100);
let isLeap1= isLeapYear(2400);
let isLeap2= isLeapYear(1900);
console.log(isLeap,isLeap1,isLeap2)
