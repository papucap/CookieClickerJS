let odstavec = document.getElementById("odstavec");
let cena1 = document.getElementById("cena1")
let cena2 = document.getElementById("cena2")
let button = document.getElementById("button")
let kosik = document.getElementById("kosik")
let autoclick = document.getElementById("auto")
let autoPocet = document.getElementById("autoPocet");
let klikPocet = document.getElementById("klikPocet");
let reset = document.getElementById("reset");
let score = 0;
let clickPower = 1;
let price = 100;
let price2 = 100;
let autoScore = 0;

button.onclick = function (e){
    score += clickPower;
    odstavec.textContent = score;
}

kosik.onclick = function (e){
    if (score >= price) {
        score -= price;
        price = price+150;
        odstavec.textContent = score;
        clickPower = clickPower+1;
        klikPocet.textContent = clickPower;          
        cena1.textContent = price;
    }else{
        alert("Nemáš dostatek skore!");
    }
}

autoclick.onclick = function (e){
    if (score >= price2) {
        score -= price2;
        price2 = price2+150;          
        odstavec.textContent = score;
        autoScore = autoScore+1;
        cena2.textContent = price2;
        autoPocet.textContent = autoScore + "/s";
        startAutoScore(autoScore);
    }else{
        alert("Nemáš dostatek skore!");
    }
}

reset.onclick = function (e){
    score = 0;
    clickPower = 1;
    autoScore == 0;
    stopAutoScore();
    cena1.textContent = 100;
    cena2.textContent = 100;
    price = 100;
    price2 = 100;
    odstavec.textContent = score;
    klikPocet.textContent = clickPower;
    autoPocet.textContent = autoScore + "/s";

}

function startAutoScore(autoScore) {
    autoInterval = setInterval(() => {
        score += autoScore;   
        odstavec.textContent = score;
    }, 1000);
}

function stopAutoScore() {
    clearInterval(autoInterval);
}

function openShop() {
    document.getElementById("shop").style.display = "block";
}

function closeShop() {
    document.getElementById("shop").style.display = "none";
}



console.log(odstavec.innerText);

