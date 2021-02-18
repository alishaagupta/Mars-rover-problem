import Coordinate from "./coordinate.js";

export default class Plateau{
    constructor(x, y){
        this.corner = new Coordinate(x,y)
        this.start = new Coordinate(0,0)
    }

    isPointValid(x,y){

        let isValid = true;
        ((x < this.start.x || x > this.corner.x) || (y < this.start.y || y > this.corner.y)) ? isValid = false : isValid = true
        return isValid;
         
    }
}