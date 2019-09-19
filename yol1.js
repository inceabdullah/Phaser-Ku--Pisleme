class yol1 extends Phaser.Scene{

  constructor(){
    super({key:"yol1"});
    this.__degisken = "anan";
    this.__update_say = 0;
    this.__cizgi = 0;
    this.__bird = "";
    this.__bok_array = [];
    this.__last_gol_len = 0;
    this.__gols_say = 0;
    this.__bok_say = 0;
    this.__yazi = "";

  }




  preload(){

this.load.image("gri_yol", "assets/gri_yol.png");
this.load.spritesheet("bird","assets/bird_sp.png", {frameWidth:250, frameHeight:116});
this.load.image("araba", "assets/araba.png");

  }

  create(degisken=null){

    this.__yazi = this.add.text(0,0, "");



    var create_toggle;
    var araba_var;



// if(degisken !== null) console.log("null degil");

  if (degisken !== null)
    {

   if (degisken === "fiz") return physics_image;
//continue;
//  return degisken;

    }

    if (create_toggle === 1) return false;

create_toggle = 1;




      var sprite;

var anim_config = {
  key: "fly",
  frames: this.anims.generateFrameNumbers("bird"),
  frameRate:8,
  yoyo:true,
  repeat:-1

};


//physics_image.setVelocity(Phaser.Math.RND.integerInRange(-200,200), -200);

this.add.image(400,300,"gri_yol");



var physics_image = this.physics.add.image(517, 73, "araba"); //517, 73
this.__degisken =  physics_image; // "baçin";

var graphics = this.add.graphics();
graphics.fillStyle(0xD3D3D3, 1);
graphics.fillRect(400, -500,20,100);

var fizik_ext = this.physics.add.existing(graphics);
//var physics_cizgi = this.physics.add.image(graphics);
//physics_cizgi.setVelocity(100,100)

this.__cizgi = fizik_ext;

//console.log("cizgi_y:  ");



// yol cizgisi ///////////////////////
//var rect = new Phaser.Geom.Rectangle(390, 10, 20, 100);


//console.log("grafiks");
//console.log(graphics);






//physics_image.setVelocity(Phaser.Math.RND.integerInRange(-200,200), -200);

this.anims.create(anim_config);

sprite = this.add.sprite(517,200, "bird").setScale(0.5);
sprite.setZ(0.2);

sprite.anims.load("fly");

this.__bird  = sprite; //bir kustur

//this.anims.load("fly");

this.input.on("pointerdown",function(pointer){
  var bok1 = this.add.circle(517,200+(320/4),10,0x8B4513);
  this.physics.add.existing(bok1);
  this.__bok_array.push(bok1);
  this.__bok_say++;

  this.__yazi.destroy();

  this.__yazi = this.add.text(0,0, "Atış:  " + this.__bok_say + "\r\nİsabet:  " + this.__gols_say, {font:"40px Georgis self"});



}, this);






  }


  update(){




    this.__update_say++;

  //  if (true) console.log(this.__update_say);


if (this.__degisken.y < 585 && this.__degisken.y > 560){


  for (let i = 0; i < this.__bok_array.length; i++){



    this.__yazi.destroy();

    this.__yazi = this.add.text(0,0, "Atış:  " + this.__bok_say + "\r\nİsabet:  " + this.__gols_say, {font:"40px Georgis self"});

    if (this.__bok_array[i].y >= 600) this.__bok_array[i].destroy();

    if (this.__bok_array[i].y < 585 && this.__bok_array[i].y > 560){


      this.__last_gol_len = this.__bok_array.length;
      this.__gols_say++;
      //console.log("gollllllllllllll");



    }


  }

}




  if (this.__cizgi.y >= 20){

    this.__bird.destroy();
    var sprite = this.add.sprite(517,200, "bird").setScale(0.5);

  //  sprite.anims.load("fly");
  sprite.anims.load("fly");
    sprite.anims.play("fly");
    this.__bird = sprite;


    var yeni_cizgi = this.add.graphics();
    var fizik_ext = this.physics.add.existing(yeni_cizgi);

    this.__cizgi = fizik_ext;
    yeni_cizgi.fillStyle(0xD3D3D3, 1);
    yeni_cizgi.fillRect(400, -500,20,100);
    yeni_cizgi.setZ(0.1);

    //fizik_ext.body.maxSpeed = 300;


    if (this.__update_say >= 600 && this.__update_say <= 700){
      //console.log("fiz obj");
       //console.log(fizik_ext);


     }


    //yeni_cizgi.y = 0;
  //  console.log("yeni cizgi");
  //  console.log(yeni_cizgi);
  }

    if (this.__degisken.y >= (600 + Phaser.Math.RND.integerInRange(100,300))){

      this.__degisken.destroy();



      //console.log("y:  " + this.__degisken.y);


          var physics_image = this.physics.add.image(517, -500, "araba"); //517, 73
          //console.log("tip: " + typeof physics_image);
          /*
          physics_image.setVelocityY(-200);
          physics_image.state = -1;
          physics_image.height = 100;
          physics_image.active = false;
          physics_image.setAccelerationY(0);
          physics_image.setImmovable(1);
          physics_image.x = 100;
          physics_image.body.gravity.x = 0;
          physics_image.body.gravity.y = -200;
          //physics_image.body.maxSpeed = 0;
          //physics_image.refreshbody();
          */
          //console.log(physics_image);
          physics_image.body.maxSpeed = 300;

          this.__degisken = physics_image;



  setTimeout(() => {



        //    this.scene.start('example1');

      }, 2000);







  //    var timer = new Phaser.Timer.2;




      //console.log("up_say:  " + this.__update_say);

      //console.log("yeni araba");

    }

    //var x_lay = Phaser.Scene.create("anan"); //this.physics[0].x;

//let varr = new yol1();
//let varr2 = varr.create("fizz");

//console.log("updateeee    "+ this.__degisken); // physics_image.x

  }


}
