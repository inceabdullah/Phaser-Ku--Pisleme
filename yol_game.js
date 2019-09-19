var config = {

type: Phaser.AUTO,
width: 800,
height: 600,
physics: {

default: "arcade",
arcade:{
  gravity:{
    y: 300
  }
}

},
pixelArt: true,

scene: [ yol1 ]

};

var game = new Phaser.Game(config);
