function insertionSort(){

    for(let i=1; i<div_sizes.length;i++){
        // the current element that needs to be inserted at the proper place
        updateDiv(divs[i], div_sizes[i], "yellow");
        let j=i;
        while(j > 0 && div_sizes[j] < div_sizes[j-1]){
            
            let temp = div_sizes[j];
            div_sizes[j] = div_sizes[j-1];
            div_sizes[j-1] = temp;
            //the elements that are being swapped to accommodate the new element that needs to be sorted 
            updateDiv(divs[j], div_sizes[j], "red");
            updateDiv(divs[j-1], div_sizes[j-1], "red");
            j--;
        }

        for(let k=i; k>=j; k--){
            // after each loop, show the sorted list in Green
            updateDiv(divs[k], div_sizes[k], "green");
        }

    }
}

