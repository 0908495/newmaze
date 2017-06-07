class Game{

    p: Player;
    f: Finish;
    c: Canvas;
    constructor(){
        this.p = new Player('w','s','a','d');
        this.f = new Finish();
        this.c = new Canvas();

        requestAnimationFrame(() => this.gameLoop());
    }
    // keeps loping over these functions
    gameLoop(){
        requestAnimationFrame(() => this.gameLoop());
        this.p.move();
        this.collision()
    }
    // calculates if there is collision with the finish and the player
    collision(){
        if (this.f.posX < this.p.posX + 20 &&
            this.f.posX + 20 > this.p.posX &&
            this.f.posY < this.p.posY + 20 &&
            40 + this.f.posY > this.p.posY) {
            this.p.reset()
        }
    }

}

