function insertionSort(array){
    let len = array.length;

    for(let i=0; i<len;i++){
        let j=i;

        while(j > 0 && array[j] < array[j-1]){
            let temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            j--;
        }
    }
    return array;
}

let randArray = [];
for (let i=0; i<100; i++){
    randArray[i] = Math.floor(Math.random()*100 + 10);
}

console.log(randArray);
randArray = insertionSort(randArray);
console.log(randArray);
