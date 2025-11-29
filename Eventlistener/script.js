let button = document.querySelector("#btn");

button.addEventListener("click" , () => {
    alert("your content was changed");
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})