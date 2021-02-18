import fs from 'fs'
import Plateau from './plateau.js';
import Coordinate from './coordinate.js';
import Rover from './rover.js';

export default class Util {

    constructor(){

    }

    /**
     * 
     * @param {file consisting of input cases} inputFile 
     */
    readInputFile(inputFile){

        let self = this;
        try{
            let result = fs.readFileSync(inputFile,{encoding: 'utf8'}, function(err, res){
                if(res){
                    result = res.toString();
                    return
                }else{
                    console.log('Error parsing the input ', err)
                }
            })

            return result
        }catch(err){
            console.log('Error processing the file', err)
        }
    }

    /**
     * 
     * @param {Input String} data
     * @returns {Plateau corner coordinates} point
     * @returns {array of position and movements} arr
     */
    transformData(data){

        let self = this;
        let temp = (data.split('\n'));
        let corner = temp[0];
        let cornerPoint = self.fetchPointDataFromString(corner);
        let tempArr = temp.splice(1,temp.length);
        let resArr = self.unflattenArray(tempArr, 2)

        return {corner: cornerPoint, arr: resArr}
    }

    fetchPointDataFromString(str){
        let tempArr = str.split(" ");
        if (tempArr.length != 2) console.log('Issue with input data points');
        let point = new Coordinate(tempArr[0], tempArr[1]).getPoint();
        return point;
    }

    /**
     * 
     * @param {Array to group} arr 
     * @param {length of subarray} n 
     */

    unflattenArray(arr, n){
        let returnArr = []
        for(var i=0; i < arr.length; i+n){
            returnArr.push(arr.splice(i, i+n))
        }

        return returnArr;
    }

    findFinalPosition(element){
        let self = this;
        let initPos = element[0];
        let movements = element[1]
        let temp = self.fetchPointDirectionFromString(initPos)
        let rover1 = new Rover(temp.point.x, temp.point.y, temp.direction);

        
    }

    fetchPointDirectionFromString(str){
        let tempArr = str.split(" ");
        if (tempArr.length !== 3) console.log('Issue with input data points');
        let point = new Coordinate(tempArr[0], tempArr[1]).getPoint();
        return {point: point, direction: tempArr[2]};
    }
}