var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var key = +document.getElementById("key").innerHTML;

function prev() {
    if(key > 1) {
        key--;
        document.getElementById("key").innerHTML = key;
    }
}

function next() {
    if(key < 25) {
        key++;
        document.getElementById("key").innerHTML = key;
    }
}

function calculate() {
    var input = document.getElementById("input").value.toUpperCase();
    var result = "";

    for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

        var posicao = input.charCodeAt(i)-64;
       
        var letra = (posicao + key) % 26; 
        letra = letra == 0 ? 26 : letra; 
        result += values[letra-1]; 
    }

    document.getElementById("output").innerHTML = result;
}