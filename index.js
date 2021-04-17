// KHAI BAO
let chance; // bien xac suat dap an dung
let first; // parameter dau tien
const phepTinh = [`+`, `-`, `*`]; // array phep tinh, bo dau "/" vi chia phuc tap
let middle; // phepTinh[random]
let last; // parameter thu hai
let phuongTrinh; // = first + middle + last
let resultTrue; // ket qua chinh xac bang eval
let count = 4; // dat bien thoi gian co dinh la 4s
let resetTime; // dat ham reset time khi tra loi xong cau hoi
let colorBGR = [`#0066B4`, `#EE161F`, `#5C2992`, `#00A65D`,`#F58220`, `#000000`] // array background doi mau khi sang cau moi

// HAM GAME
function start() {
    chance = Math.random()
    first = Math.floor(Math.random() * 10);
    middle = phepTinh[Math.floor(Math.random() * 2.99)]; // chon 2.99 de xac suat chia deu trong 3 phan tu ma k bi bug phepTinh[3] = undefined
    last = Math.floor(Math.random() * 10);
    phuongTrinh = `${first}${middle}${last}`;
    resultTrue = eval(phuongTrinh).toString();
    document.getElementById("first").innerText = first;
    document.getElementById("middle").innerText = middle;
    document.getElementById("last").innerText = last;
    if (chance < 0.5) { // dat xac suat 50%
        document.getElementById('result').innerText = resultTrue;
    } else {
        document.getElementById('result').innerText = Math.floor(Math.random() * 100).toString();
    }
}

// HAM DEM THOI GIAN
function newTime() {
    count = 4;
    resetTime = setInterval(() => {
        count --;
        document.getElementById("time").innerText = `TIME: ${count}s`
        console.log(count)
        if (count === 0) {
            clearInterval(resetTime);
            document.getElementById("point").innerText = document.getElementById("score").innerText;
            document.getElementById("leaderboard").style.zIndex = 99; // neu sai se game over ngay
        }
    }, 1000);
}

// HAM KHI CHON DUNG
function dung() {
    clearInterval(resetTime);
    document.getElementById("game").style.backgroundColor = colorBGR[Math.floor(Math.random() * 6)];
    if (document.getElementById('result').innerText === resultTrue) {
        document.getElementById("score").innerText++;
    } else {
        document.getElementById("point").innerText = document.getElementById("score").innerText;
        document.getElementById("leaderboard").style.zIndex = 99;
    }
    start();
    newTime();
}
// HAM KHI CHON SAI
function sai() {
    clearInterval(resetTime);
    document.getElementById("game").style.backgroundColor = colorBGR[Math.floor(Math.random() * 6)];
    if (document.getElementById('result').innerText !== resultTrue) {
        document.getElementById("score").innerText++;
    } else {
        document.getElementById("point").innerText = document.getElementById("score").innerText;
        document.getElementById("leaderboard").style.zIndex = 99;
    }
    start();
    newTime();
}
// HAM KHI AN PLAY
function play() {
    clearInterval(resetTime);
    document.getElementById("score").innerText = 0;
    document.getElementById("welcome").style.zIndex = -2;
    document.getElementById("leaderboard").style.zIndex = -99;
    start();
    newTime();
}

