let printSegitiga = 7;
let temp = "";

for(let i=1; i<=7; i++){
    for(let j=1; j<=i; j++){
        temp += j.toString();
    }
    console.log(temp);
    temp="";
}