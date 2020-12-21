const config = {
    width: 800,
    heigh: 600,
    parent: 'container',
    type: Phaser.AUTO,
    scene:{
        preload: preload,
        create: create,
        update: update,
    },
    physics:{
        default: "arcade",
        arcade:{
            gravity:{
                y: 500
            }
        }
    }
}

const game = new Phaser.Game(config)

function preload(){
    this.load.image('pajaro', './assets/bird.png')
}
function create(){
    this.pajaro = this.physics.add.image(50,100, 'pajaro');

    //Cambiar escala
    this.pajaro.setScale(2);

    //Rotar
    this.pajaro.flipX = true;

    //Gira unos angulos
    this.pajaro.setAngle(20);

    //Físicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.3)
    //this.pajaro.setAcceleration(10, 0.5)
    this.pajaro.setVelocity(500,0)

    
}
function update(time, delta){
    //this.pajaro.angle++;
    //this.pajaro.x++;
}