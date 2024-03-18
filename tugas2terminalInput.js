let listNilai = {indo:0,ing:0,mtk:0,ipa:0};

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Isi Nilai Bahasa Indonesia: ', (nilai) => {
//     listNilai.indo = parseInt(nilai);
//     rl.question('Isi Nilai Bahasa Inggris: ', (nilai) => {
//         listNilai.ing = parseInt(nilai);
//         rl.question('Isi Nilai Matematika: ', (nilai) => {
//             listNilai.mtk = parseInt(nilai);
//             rl.question('Isi Nilai Bahasa IPA: ', (nilai) => {
//                 listNilai.ipa = parseInt(nilai);
//                 rl.close();
//             });
//         });
//     });
// });

const readlineSync = require('readline-sync');

do{
    listNilai.indo = readlineSync.question('Isi nilai Bahasa Indonesia: ');
    listNilai.indo = parseInt(listNilai.indo);
    if(isNaN(listNilai.indo) || listNilai.indo<0 || listNilai.indo>100){
        console.log("Masukan Nilai dengan Benar!!!");
    }
}while(isNaN(listNilai.indo) || listNilai.indo<0 || listNilai.indo>100);

do{
    listNilai.ing = readlineSync.question('Isi nilai Bahasa Inggris: ');
    listNilai.ing = parseInt(listNilai.ing);
    if(isNaN(listNilai.ing) || listNilai.ing<0 || listNilai.ing>100){
        console.log("Masukan Nilai dengan Benar!!!");
    }
}while(isNaN(listNilai.ing) || listNilai.ing<0 || listNilai.ing>100);

do{
    listNilai.mtk = readlineSync.question('Isi nilai Matematika: ');
    listNilai.mtk = parseInt(listNilai.mtk);
    if(isNaN(listNilai.mtk) || listNilai.mtk<0 || listNilai.mtk>100){
        console.log("Masukan Nilai dengan Benar!!!");
    }
}while(isNaN(listNilai.mtk) || listNilai.mtk<0 || listNilai.mtk>100);

do{
    listNilai.ipa = readlineSync.question('Isi nilai IPA: ');
    listNilai.ipa = parseInt(listNilai.ipa);
    if(isNaN(listNilai.ipa) || listNilai.ipa<0 || listNilai.ipa>100){
        console.log("Masukan Nilai dengan Benar!!!");
    }
}while(isNaN(listNilai.ipa) || listNilai.ipa<0 || listNilai.ipa>100);

let total=0;
let mean=0;

for(let key in listNilai){
    total+=listNilai[key];
}

mean=total/Object.keys(listNilai).length;
console.log("\nRata-rata nilai: "+mean);

let grade = "";
if(mean<=100 && mean>=90){
    grade = "A";
}else if(mean<90 && mean>=80){
    grade = "B";
}else if(mean<80 && mean>=70){
    grade = "C";
}else if(mean<70 && mean>=60){
    grade = "D";
}else{
    grade = "E";
}
console.log("Grade: "+grade);










