// string

// let str = "apnawaqt";
// let str2 = "sachinraj"
// console.log(str);
// console.log(str.length); // string length
// console.log(str2);
// console.log(str2.length);

// console.log(str2[1]); //by indices

//TEMPLATE LITERALS
// let specialString = `This is our college and we study here.`
// console.log(specialString);
// console.log(typeof specialString);
// console.log(specialString.length);

let profile = {
    id : "sachin",
    followers : 545,
    bio : "Engineer",
}
console.log("The id of this person is =", profile.id ,"followers are =", profile.followers, "and the bio is =", profile.bio);
let output = `The id of this person is ${profile.id} followers are ${profile.followers} and the bio is ${profile.bio}`;
console.log(output); 