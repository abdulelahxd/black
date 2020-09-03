// colors
let colors = ['#F0FFFF','#000','#F8F8FF','#00FF7F','#FF6347','#FFA500','#333','#F0F8FF','#7FFF00','#00CED1','#000080','#9400D3','#FF00FF','#FFC0CB']
let button = document.getElementById('color');
button.addEventListener('click',()=>{
    let RDM = randomNumber();
    document.body.style.backgroundColor = colors[RDM];
});
function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}
// hex
let hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexbtu = document.getElementById('hex');
hexbtu.addEventListener('click',()=>{
    let hexColor = '#';
    for(let idx = 0; idx < 6; idx++){
        hexColor += hex[randomNumberHex()];
    }
    document.body.style.backgroundColor = hexColor;
});
function randomNumberHex() {
    return Math.floor(Math.random() * hex.length);
}