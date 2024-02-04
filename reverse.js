let ar=[1,2,3,4,5,6,7];
// ar.reverse();
const rev=[];
// for(const arr of ar){
//         console.log(arr);

//     rev.unshift(arr);

// }
// for(let i=0;i<ar.length;i++)
// {
//     rev.unshift(ar[i]);

// }
for(let i=ar.length-1;i>=0;i--)
{
    rev.push(ar[i]);
    

}
console.log(rev);


