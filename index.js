import Util from './src/util.js';

let output = new Util();
// Read the input file
let readData = output.readInputFile('./input/input1.txt')

// Transform it to appropriate format
if(readData){
    let obj1 = output.transformData(readData);
}