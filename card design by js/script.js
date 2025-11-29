function createCard(title , cName , views,monthsOld ,duration, thumbnail){
    //Finish the function
    let viewStr;
    if(views < 1000){
        viewStr = views;
    } else if(views > 1000000){
        viewStr = views / 1000000 + "K";
    } else{
       viewStr =views / 1000 + "K";
    }

    let html = `  <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">
                    <p>${duration}</p>
                </div>
                
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} .${viewStr} . ${monthsOld} months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Installing VS code  | Sigma Web Development Course - Tutorial #01", "codeWithHarry",5600000,7,"31:20" , "hqdefault.avif")