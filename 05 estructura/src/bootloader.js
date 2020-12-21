class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"})
    }

    preload(){
        this.load.on('complete', () =>{
            this.scene.start('Scene_play');
        })
        this.load.image('ball', './assets/ball.png');
        this.load.image('izq', './assets/left_pallete.png');
        this.load.image('der', './assets/right_pallete.png');
        this.load.image('separador', './assets/separator.png');
        
    }

    create(){
        
    }
}

export default Bootloader;