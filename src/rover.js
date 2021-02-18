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

    rotateRight(currentDirection){
        let finalDirection;
        switch(currentDirection){
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
        return finalDirection;
    }

    rotateLeft(currentDirection){
        let finalDirection;
        switch(currentDirection){
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
        return finalDirection;
    }

    moveRight(point){
        return {x: point.x + 1, y: point.y};
    }

    moveLeft(point){
        return {x: point.x - 1, y: point.y};
    }

    moveTop(){
        return {x: point.x , y: point.y + 1};
    }

    moveBottom(){
        return {x: point.x , y: point.y - 1};
    }

    getCurrentPosition(){
        return this.x, this.y;
    }

    getCurrentDirection(){
        return this.direction;
    }
}