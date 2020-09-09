function bubbleSort(){
    let isSorted = false;
    let counter = 0;
    let numberOfSorts = 0;

    // actual algorithm
    // you swap, you lose
    while(!isSorted){
        isSorted = true;
        // counter to minimize the colorizing of the already sorted elements 
        numberOfSorts++; 
        for(var i=0; i < div_sizes.length - 1 - counter; i++){
            if(div_sizes[i] > div_sizes[i+1]){
                //update the divs to red  which are being compared
                updateDiv(divs[i], div_sizes[i], "red");
                updateDiv(divs[i+1], div_sizes[i+1], "red");
                let temp = div_sizes[i];
                div_sizes[i] = div_sizes[i+1];
                div_sizes[i+1] = temp;
                // update the divs back to blue once the swap is done
                updateDiv(divs[i], div_sizes[i], "blue");
                updateDiv(divs[i+1], div_sizes[i+1], "blue");
                isSorted = false;
            }
            else{
                // if the div is already sorted flash it in green to indicate
                updateDiv(divs[i], div_sizes[i], "green");
                updateDiv(divs[i+1], div_sizes[i+1], "green");
                updateDiv(divs[i], div_sizes[i], "blue");
                updateDiv(divs[i+1], div_sizes[i+1], "blue");
            }
        }
        // update the div to green which is sorted by this loop
        updateDiv(divs[i], div_sizes[i], "green");
        counter++;
    }
    //actual algorithm ends here

    //color code the already sorted numbers. minimize this loop starting at index where the last loops did not run for.
    for (var i=div_sizes.length - numberOfSorts -1; i>= 0; i--){
        updateDiv(divs[i], div_sizes[i], "green");
        divs[i].classList.add("sorted");

    }
}