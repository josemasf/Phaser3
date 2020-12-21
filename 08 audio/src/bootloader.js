class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"})
    }

    preload(){
        this.load.path = './assets/';

        this.load.audio('prueba', 'sandwich.mp3')
    }

    create(){

        this.sound.pauseOnBlur = false; //Mantien siempre la música

        const audio = this.sound.add('prueba',{
            loop: false
        });

        this.input.keyboard.on('keydown-RIGHT', () =>{
            audio.play();
        });
        this.input.keyboard.on('keydown-LEFT', () =>{
            audio.stop();
        });
        this.input.keyboard.on('keydown-UP', () =>{
            //audio.pause();
            //audio.rate += 0.1;
            audio.detune += 100;
        });
        this.input.keyboard.on('keydown-DOWN', () =>{
            //audio.resume();
            //audio.rate += 1;
            audio.detune += 1;
        });
    }
}

export default Bootloader;