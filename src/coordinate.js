export default class Coordinate{
    constructor(x,y, direction){
        this.x = x;
        this.y = y;
        this.directon = direction
    }

    getPoint(){
        return {x: this.x, y: this.y}
    }

}