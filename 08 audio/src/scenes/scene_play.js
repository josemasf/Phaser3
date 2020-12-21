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

        //Controles
        this.cursor = this.input.keyboard.createCursorKeys();

        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    }
    update(){
        if(this.ball.x<0 || this.ball.x > this.sys.game.config.width){
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2)
        }

        //control de las palas
        if(this.cursor.down.isDown){
            this.der.body.setVelocityY(300);
        }
        else if(this.cursor.up.isDown){
            this.der.body.setVelocityY(-300);
        }
        else{
            this.der.body.setVelocityY(0);
        }

        //pala izquierda
        if(this.cursor_S.isDownws)
            this.izq.body.setVelocityY(300);
        else if(this.cursor_W.isDown){
            this.izq.body.setVelocityY(-300);
        }
        else{
            this.izq.body.setVelocityY(0);
        }
    
    }

    chocaPala(){
        this.ball.setVelocityY(Phaser.Math.Between(-120,120));

    }
}

export default Scene_play