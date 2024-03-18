let biodata = {
    name:"Farhan Nur Hakim",
    age:22,
    hobbies:["Muay Thai", "track and field", "Cooking"],
    IsMarried:false,
    schoolList:[
        {
            name: "SMA AL-MUTTAQIN",
            yearIn: 2016,
            yearOut: 2019,
            major: "MIPA"
        },
        {
            name: "Telkom University",
            yearIn: 2019,
            yearOut: 2023,
            major: "Telecommunication Engineering"
        }
    ],
    skills:[
        {
            skillName:"Machine Learning",
            level:"advanced"
        },
        {
            skillName:"Mobile Dev",
            level:"beginner"
        }
    ],
    interestInCoding:true
}
// console.log(biodata);
console.log("Nama: "+biodata.name);
console.log("Umur: "+biodata.age);
let hobi="Hobi: ";
for(let i=0; i<biodata.hobbies.length; i++){
    if(i==biodata.hobbies.length-1){
        hobi = hobi+biodata.hobbies[i];
    } else{
        hobi = hobi+biodata.hobbies[i]+", ";
    }
}
console.log(hobi);
biodata.IsMarried ? console.log("Status: Menikah") : console.log("Status: Lajang");
let count = 1;
console.log("Riwayat Pendidikan: ");
for(let i of biodata.schoolList){
    console.log("\t"+count+".\tNama Institut: "+i.name);
    console.log("\t\tTahun Masuk: "+i.yearIn);
    console.log("\t\tTahun Keluar: "+i.yearOut);
    console.log("\t\tJurusan: "+i.major);
    count++;
}
console.log("Skill: ");
count = 1;
for(let i of biodata.skills){
    console.log("\t"+count+".\t"+i.skillName);
    console.log("\t\t"+i.level);
    count++;
}
biodata.interestInCoding ? console.log("Minat coding: Berminat") : console.log("Minat coding: Tidak berminat");