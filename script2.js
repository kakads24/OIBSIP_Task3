/*let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}
function celToFar(){
    let output = (parseFloat(fahrenheit.value) - 32) * 5/ 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}*/
console.log("hello")
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    fah.value = f;
})

fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    cel.value = c;
})