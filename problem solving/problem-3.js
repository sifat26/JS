// average of odd number in array
function oddAverage(numbers)
{
    let sum=0,c=0;
    for(let number of numbers)
    {
        if(number%2===1){
            sum=sum+number;
            c++;
        }

    }
    avg=sum/c;
    return avg;

}
let numbers=[42,13,58,65,81,96,7];
let average=oddAverage(numbers);
console.log(average);
