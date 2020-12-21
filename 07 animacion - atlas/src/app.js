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
    console.log('preload');

    
}
function create(){
    console.log('create')
    
}