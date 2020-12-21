const config = {
    width: 600,
    height: 300,
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
    this.load.image('bird', './assets/bird.png')
}
function create(){
    //this.pajaro = this.physics.add.image(100,50, 'bird');
    this.pajaro = this.add.image(100,50, 'bird');

    /*
    this.input.keyboard.on("keydown-RIGHT", () =>{        
        this.pajaro.x++;
    })
    this.input.keyboard.on("keydown-DOWN", () =>{        
        this.pajaro.y++;
    })
    this.input.keyboard.on("keydown-UP", () =>{        
        this.pajaro.y--;
    })
    this.input.keyboard.on("keydown-LEFT", () =>{        
        this.pajaro.x--;
    })
    */

    this.cursor = this.input.keyboard.createCursorKeys();

    //Derecha personalizada
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
}
function update(time, delta){
    //this.pajaro.angle++;
    //this.pajaro.x++;
    if(this.cursor.right.isDown)
        this.pajaro.x++;
    else if(this.cursor.left.isDown){
        this.pajaro.x--;
    }
    else if(this.right.isDown){
        this.pajaro.x++;
    }
}