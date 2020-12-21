class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: 'Scene_play'});
    }
    create(){
        //separador
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'separador');

        //Palas
        this.izq = this.add.image(this.sys.game.config.width/8, this.sys.game.config.height/2, 'izq');
        this.der = this.add.image(this.sys.game.config.width - this.sys.game.config.width/8, this.sys.game.config.height/2, 'der');

        //bola
        this.ball = this.physics.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'ball')

        this.ball.setVelocityX(-180)
    }
}

export default Scene_play