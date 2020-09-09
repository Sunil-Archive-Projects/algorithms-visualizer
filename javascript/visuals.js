var delay = 0;

function updateDiv(divName,height,color){
    window.setTimeout(function(){
    divName.style.backgroundColor = color;
    divName.style.height = `${height*30}px`;
    divName.innerText = height;
    console.log(delay);
}, delay+=100);
}
