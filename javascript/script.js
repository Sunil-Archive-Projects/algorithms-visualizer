let container = document.getElementById('array-container');

let div_sizes = [];
let divs = [];

let input_array_size = 60;

let start_button = document.getElementById('start-visuals');
let generate_random_array_button = document.getElementById('generate-random-array');

start_button.addEventListener('click', chooseAlgorithm);
generate_random_array_button.addEventListener('click', generate_random_array);

function generate_random_array(){
    divs = [];
    div_sizes = []; 
    container.innerHTML = "";

    for(let i=0; i<input_array_size; i++){
        div_sizes[i] = Math.floor(Math.random() * 60+5);
        divs[i] = document.createElement('div');
        divs[i].classList.add('row');
        divs[i].innerText = div_sizes[i];
        divs[i].style = `height:${div_sizes[i]*10}px`;
        divs[i].style.backgroundColor = "blue";
        container.appendChild(divs[i]);
    }
}

function chooseAlgorithm(){
    // bubbleSort();
    insertionSort();

    console.log(div_sizes);

}

window.onload = generate_random_array;

