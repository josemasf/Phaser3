const config = {
    width: 800,
    heigh: 600,
    parent: 'container',
    type: Phaser.CANVAS,
    backgroundColor: '#392542',
    scene:[sceneA, sceneB]
}

const game = new Phaser.Game(config)
