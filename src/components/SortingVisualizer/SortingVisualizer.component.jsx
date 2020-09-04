import React from 'react';
import './SortingVisualizer.styles.css';
import bubbleSorter from '../../bubbleSort';

class SortingVisualizer extends React.Component {

    constructor(){
        super();
        this.state = {
            array : []
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
       
        const array = [];
        for(let i=0 ; i < 310 ; i++){
            array.push(this.randomIntFromInterval(5,730));
        }
        this.setState({array});
    }

    quickSort(){

    }

    mergeSort(){

    }

    bubbleSort(){
        let array = [];

        for(let i=0; i<100; i++){
            array.push(this.randomIntFromInterval(1,1000));
        }
        console.log(array);
        console.log(bubbleSorter(array));
    }

    insertionSort(){

    }

    randomIntFromInterval = (min,max) =>{
        //min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render(){
        const {array} = this.state;
        console.log(array);
        return( 
            <div className = 'array-container'>
               { array.map((number, idx) => 
                   <div key={idx} className='array-bar' style={{height: `${number}px`}}>
                        
                   </div>) }
                   <br/>
                <button onClick = {() => this.resetArray()}>Generate New Array</button>
                <button onClick = {() => this.quickSort()}>Quick Sort</button>
                <button onClick = {() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick = {() => this.mergeSort()}>Merge Sort</button>
                <button onClick = {() => this.insertionSort()}>Insertion Sort</button>
            </div>
        );
    }
  
}

export default SortingVisualizer;
