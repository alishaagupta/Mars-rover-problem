import Util from './src/util.js';

let output = new Util();
// Read the input file
let readData = output.readInputFile('./input/input1.txt')
// Transform it to appropriate format
if(readData){
    let obj1 = output.transformData(readData);
    let plateauCorner = obj1.corner;
    let roverSteps = obj1.arr;
    let res = []
    for(let i=0 ; i< roverSteps.length; i++){
        let temp = output.findFinalPosition(roverSteps[i])
        res.push(temp)
    }
}else{
    console.log('Empty input')
}