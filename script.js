let odstavec = document.getElementById("odstavec");
let button = document.getElementById("button")
let kosik = document.getElementById("kosik")
let score = 0;
let clickPower = 1;
let price = 1;
let autoScore = 0;

button.onclick = function (e){
    score += clickPower;
    odstavec.textContent = score;
}

kosik.onclick = function (e){
    if (score >= price) {
        score -= price;
        price = price+150;
        clickPower = clickPower+1;          
        odstavec.textContent = score;
        autoScore = autoScore+1;
        startAutoScore(autoScore);
    }
}

function startAutoScore(autoScore) {
    autoInterval = setInterval(() => {
        score += autoScore;
        odstavec.textContent = score;
    }, 3000);
}





console.log(odstavec.innerText);

