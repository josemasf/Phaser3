class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"})
    }

    preload(){
        this.load.path = './assets/';

        this.load.audio('prueba', 'sandwich.mp3')
    }

    create(){
        const audio = this.sound.add('prueba',{
            loop: false
        });

        this.input.keyboard.on('keydown-RIGHT', () =>{
            audio.play();
        });
        this.input.keyboard.on('keydown-LEFT', () =>{
            audio.stop();
        });
    }
}

export default Bootloader;