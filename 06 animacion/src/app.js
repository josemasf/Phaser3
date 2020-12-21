const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true, 
    scene:{
        preload,
        create
    }

}

new Phaser.Game(config);

function preload(){
    console.log('preload')

    this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', {frameWidth: 16, frameHeight: 25})
}
function create(){
    console.log('create')

    this.tomato = this.add.sprite(100,100,'evil_tomato').setScale(2)

    this.anims.create({
        key: 'tomato_walk',
        frames: this.anims.generateFrameNumbers('evil_tomato',{
            start: 1,
            end: 8
        }),
        repeat: -1,
        frameRate: 10
    });

    this.tomato.anims.play('tomato_walk');

    
}