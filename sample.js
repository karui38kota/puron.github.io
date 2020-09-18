var roulette;
function start(){
    var result = document.getElementById("result");
    var omikuji = ["赤", "青", "緑", "黒","茶","白","灰"];
    roulette = setInterval(function(){
        var random = Math.round(Math.random() * (omikuji.length - 1));
        result.innerHTML = omikuji[random];
    }, 10);
}

function stop(){
    clearInterval(roulette);
} 