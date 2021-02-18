import Coordinate from "./coordinate.js"
import {direction as dir} from './constants.js';

export default class Rover{
    /**
     * 
     * @param {x coordinate of Rover} x 
     * @param {y coordinate of Rover} y 
     * @param {direction of Rover} direction 
     */
    constructor(x,y,direction){
        this.direction = direction;
        this.coordinate = new Coordinate(x, y).getPoint()
    }

    rotateRight(){
        let current = dir.indexOf(this.direction);
        return current !== dir.length - 1 ? this.direction = dir[current + 1] :this.direction = dir[0];
    }

    rotateLeft(){
        let current = dir.indexOf(this.direction)
        current !== 0 ? this.direction = dir[current - 1] :this.direction = dir[dir.length-1];
    }

    moveForward(){
        let self = this;
        switch(this.direction){
            case 'N':
                self.moveTop();
                break;
            case 'S':
                self.moveBottom();
                break;
            case 'E':
                self.moveRight();
                break;
            case 'W':
                self.moveLeft();
                break;
        }
    }
    moveRight(){
        this.coordinate.x = this.coordinate.x + 1;
    }

    moveLeft(){
        this.coordinate.x = this.coordinate.x -1 ;
    }

    moveTop(){
        this.coordinate.y = this.coordinate.y + 1;
    }

    moveBottom(){
        this.coordinate.y = this.coordinate.y - 1;
    }

    getCurrentPosition(){
        return this.x, this.y;
    }

    getCurrentDirection(){
        return this.direction;
    }
}