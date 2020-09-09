function insertionSort(){

    for(let i=0; i<div_sizes.length;i++){
        updateDiv(divs[i], div_sizes[i], "red");
        let j=i;
        while(j > 0 && div_sizes[j] < div_sizes[j-1]){
            
            let temp = div_sizes[j];
            div_sizes[j] = div_sizes[j-1];
            div_sizes[j-1] = temp;
            updateDiv(divs[j], div_sizes[j], "red");
            updateDiv(divs[j-1], div_sizes[j-1], "red");
            j--;
            updateDiv(divs[j], div_sizes[j], "green");
        }

        for(let k=i; k>0; k--){
            updateDiv(divs[k], div_sizes[k], "green");
        }

    }
    console.log(div_sizes);
}

