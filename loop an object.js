const mobile={
    brand:'samsu',
    price:34444,
    color:'red',
    camera:'50mp',
    isNew:true


}
const keys=Object.keys(mobile);
// for(const spec in mobile){
//     console.log(spec," :",mobile[spec]);
    // console.log(keys);
// }
console.log(keys);
let c=0;
for(const key of keys)
{
    c=c+1;
    

    console.log(key,mobile[key]);
   
}
console.log("Key=",c);

const pen=new Object();