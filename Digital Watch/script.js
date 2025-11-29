const currentTime = () => {
    let currTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = currTime;
};

currentTime();

const intervalId = setInterval(() => {
    currentTime();
}, 1000);

// setTimeout = (() => {
//     clearInterval(intervalId);
// }, 5000)