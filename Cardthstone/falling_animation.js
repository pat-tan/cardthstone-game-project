// https://www.youtube.com/watch?v=_ARGxz_cU_o
// https://www.youtube.com/watch?v=NxRwIZWjLtE
import AudioController from "./script.js"

const audioController = new AudioController();

var timedFall;
function timedSnow(){
    timedFall = setInterval(createSnowFlake, 10);
    var c = 5;
        function createSnowFlake() {
            --c;
            const snow_flake = document.createElement('i');
            snow_flake.classList.add('fas');
            snow_flake.classList.add('fa-snowflake');
            snow_flake.style.left = Math.random() * window.innerWidth + 'px';
            snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
            
            document.body.appendChild(snow_flake);
            
            setTimeout(() => {
                snow_flake.remove();
            }, 5000)

            if (c == 0) {
                clearInterval(timedFall);
            }
        }
}

var timedFall2;
function timedPetals(){
    timedFall2 = setInterval(createSnowFlake, 10);
    var d = 5;
        function createSnowFlake() {
            --d;
            const snow_flake = document.createElement('i');
            snow_flake.classList.add('fas');
            snow_flake.classList.add('fa-circle');
            snow_flake.style.left = Math.random() * window.innerWidth + 'px';
            snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
            
            document.body.appendChild(snow_flake);
            
            setTimeout(() => {
                snow_flake.remove();
            }, 5000)

            if (d == 0) {
                clearInterval(timedFall2);
            }
        }
}

var timedFall3;
function timedLeaves(){
    timedFall3 = setInterval(createSnowFlake, 10);
    var d = 5;
        function createSnowFlake() {
            --d;
            const snow_flake = document.createElement('i');
            snow_flake.classList.add('fas');
            snow_flake.classList.add('fa-leaf');
            snow_flake.style.left = Math.random() * window.innerWidth + 'px';
            snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
            
            document.body.appendChild(snow_flake);
            
            setTimeout(() => {
                snow_flake.remove();
            }, 5000)

            if (d == 0) {
                clearInterval(timedFall3);
            }
        }
}

document.getElementById("winter").addEventListener("click", () => {
    audioController.jingle();
    setTimeout(() =>{
        timedSnow();
    }, 1000)
})

document.getElementById("spring").addEventListener("click", () => {
    audioController.flute();
    setTimeout(() =>{
        timedPetals();
    }, 1000)
})

document.getElementById("autumn").addEventListener("click", () => {
    audioController.cello();
    setTimeout(() =>{
        timedLeaves();
    }, 1000)
})

// document.getElementById("spring").addEventListener("click", () => {
//     setTimeout(() =>{
//         timedSnow();
//     }, 1000)
// })

// document.getElementById('winter').addEventListener('click', setInterval(createSnowFlake, 50));
