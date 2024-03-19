let printSegitiga = 7;
let temp = "";

for(let i=1; i<=printSegitiga; i++){
    for(let j=1; j<=i; j++){
        temp += j;
    }
    console.log(temp);
    temp="";
}