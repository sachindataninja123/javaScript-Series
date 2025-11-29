

if(localStorage.getItem("name")){
    a = localStorage.getItem("name");
    document.write("welcome" + a);
} else {
    let a =  prompt("Enter your name");
    localStorage.setItem("name" , a);
    document.write("Hello ", + a);

}