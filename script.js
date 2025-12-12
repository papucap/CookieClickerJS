let odstavec = document.getElementById("odstavec");
let cena1 = document.getElementById("cena1")
let cena2 = document.getElementById("cena2")
let button = document.getElementById("button")
let kosik = document.getElementById("kosik")
let autoclick = document.getElementById("auto")
let score = 0;
let clickPower = 1;
let price = 100;
let price2 = 100;
let autoScore = 1;

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
        cena1.textContent = price1;

    }
}

autoclick.onclick = function (e){
    if (score >= price2) {
        score -= price2;
        price2 = price2+150;          
        odstavec.textContent = score;
        autoScore = autoScore+1;
        cena2.textContent = price2;
        startAutoScore(autoScore);
    }
}


function startAutoScore(autoScore) {
    autoInterval = setInterval(() => {
        score += autoScore;   
        odstavec.textContent = score;
    }, 1000);
}





console.log(odstavec.innerText);

