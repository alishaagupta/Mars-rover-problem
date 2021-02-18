export default class Coordinate{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getPoint(){
        return {x: this.x, y: this.y}
    }
}