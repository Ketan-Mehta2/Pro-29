class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            density : 0.001,
            friction : 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(color);
        stroke(border);
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
    }
}