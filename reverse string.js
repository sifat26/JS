 let sentence="Ami ekta valo chele";
 console.log(sentence);
 let rev="";
// for(let letter of sentence)
// {
//     rev=letter+rev;
// }

// console.log(rev);

// for(i=0;i<sentence.length;i++)
// {
//     rev=sentence[i]+rev;
// }
// console.log(rev);
let reverse=sentence.split('').reverse().join(' ');
console.log(reverse);