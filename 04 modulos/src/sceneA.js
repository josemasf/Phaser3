import sceneC from './sceneC.js'
export default class sceneA extends Phaser.Scene{
    constructor(){
        super({
            key: "ScenaA"
        })
    }

    preload(){

    }

    create(){
       const graphics = this.add.graphics();

       graphics.fillStyle(0xff3300,1);

       graphics.fillRect(100,200,600,300);
       graphics.fillRect(100,100,100,100);

       this.add.text(120,110, 'A',{
           font: '96px Courier', fill: '#000000'
       })

       this.scene.add('sceneC', new sceneC)
    }


}