var delay = 0;
var delay_increase = 100;

function updateDiv(divName,height,color){
    window.setTimeout(function(){
    divName.style.backgroundColor = color;
    divName.style.height = `${height*10}px`;
    divName.innerText = height;
    console.log(delay);
}, delay+=delay_increase);
}

