/*The magical Sorting Hat : Imagine you are creating a magical sorting hat for a wizard School .Implement a js function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6),Hufflepuff(length less than 8) , Ravenclaw(length less than 12) , Slytherin(length greater than or equal to 12))based on the length of their names.*/

let students = ["shubham" , "shivangi" , "anshu" ," mohan" ,"shivani" , "shivesh" , "kaif" ," anjali" , "Annapurna","dogeshdeepakbhai"];

let houses = [];

for( const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor");
    }
    else if(student.length < 8){
        houses.push("Hufflepuff");
    } else if(student.length < 12) {
        houses.push("Ravenclaw");
    } else if(student.length >= 12){
        houses.push("Slytherin");
    }
}
console.log(houses);

