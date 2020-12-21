import { Palas } from "../gameObjects/palas.js";

class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: 'Scene_play'});
    }
    create(){
        //separador
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'separador');

        //Palas
        
        this.izq = new Palas(this, this.sys.game.config.width/8, this.sys.game.config.height/2, 'izq');        
        this.der = new Palas(this, this.sys.game.config.width - this.sys.game.config.width/8, this.sys.game.config.height/2, 'der');

        //bola
        this.physics.world.setBoundsCollision(false, false, true, true)
        this.ball = this.physics.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'ball')
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180)

        //fisicas
        this.physics.add.collider(this.ball, this.izq, this.chocaPala,  null, this);
        this.physics.add.collider(this.ball, this.der, this.chocaPala,null, this);
    }

    chocaPala(){

    }
}

export default Scene_play