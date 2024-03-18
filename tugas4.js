let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//Ubah data menggunakan spread operator
let myData = {
    ...data,
    hobby:["Muay Thai", "track and field", "Cooking"]
}
myData.name = "Farhan Nur Hakim";
myData.email = "farhanz.nh.13@gmail.com"

console.log(myData);

//Ambil data street dan city menggunakan destructuring
let {street, city} = data.address;
console.log(street+"\n"+city);