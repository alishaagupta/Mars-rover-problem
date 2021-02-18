import Coordinate from "./coordinate.js"

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
        let finalDirection;
        switch(this.direction){
            case 'N':
                finalDirection = 'E';
                break;
            case 'S':
                finalDirection = 'W';
                break;
            case 'W': 
                finalDirection = 'N';
                break;
            case 'E' :
                finalDirection = 'S';
                break;
        }
        this.direction = finalDirection;
        return {x: this.x, y: this.y, direction: this.direction};

    }

    rotateLeft(currentDirection){
        let finalDirection;

        switch(this.direction){
            case 'N':
                finalDirection = 'W';
                break;
            case 'S':
                finalDirection = 'E';
                break;
            case 'W': 
                finalDirection = 'S';
                break;
            case 'E' :
                finalDirection = 'N';
                break;
        }
        this.direction = finalDirection;
        return {x: this.x, y: this.y, direction: this.direction};
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