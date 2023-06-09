var platformer;
//var keyA; 
var button; 

window.addEventListener("load", () =>{ 
    var config = {
        type: Phaser.AUTO,
        width: 896, 
        height: 448,
        physics: {
            default: 'arcade',
            arcade: {
            gravity : { y : 1000}, 
            debug: false,
            tileBias: 32, 
            }},
        
        scene: [Ecran, Hub, Foret, Hub2, Riviere, Boss, MortBoss, Fin]
        
    }

    platformer = new Phaser.Game(config)
})

//------------------------------------------------------HUB------------------------------------------


class Ecran extends Phaser.Scene { 
    constructor() { 
        super("ecranPrincipal")
    }

    preload() { 
        this.load.image("ecranPrincipal", "ecranPrincipal.png"); 
    }

    create() { 
        this.add.image(448, 224, "ecranPrincipal");
        
        this.input.on("pointerdown", function (pointer) { 
            this.scene.start("hubPrincipal"); 
        }, this); 
    }
    
}



























class Hub extends Phaser.Scene { 
    constructor() { 
        super("hubPrincipal")
    }

//init

    init(data){ 

        this.nombrePv = data.pv; 
        this.faimPlayer = data.faim; 
        this.nouvelleMecanique1 = data.forme1; 
        this.nouvelleMecanique2 = data.forme2;  

    }

    
//preload 

    preload() { 

        //chargement des tuiles de jeu
        this.load.image("tuiles", "Hub/assetsHub/LD_Hub_copie_3.png"); 

        //chargement de la carte 
        this.load.tilemapTiledJSON("niveauHub", "Hub/tiledHub/Hub_001.json"); 

        //ajout d'un personnage 
        //this.load.image("kitsune", "spriteIdle2.png"); 
        this.load.spritesheet("kitsune", "spritesheetkitsuneidle.png", {frameWidth: 54, frameHeight: 54}); 
 

        this.load.spritesheet("testKitsuneRunDroit", "spritesheetkitsunerundroit2.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche", "spritesheetkitsunerungauche2.png", {frameWidth: 126, frameHeight: 54});  
        this.load.spritesheet("testKitsuneRunDroit3", "spritesheetkitsunerundroit4.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche3", "spritesheetkitsunerungauche4.png", {frameWidth: 126, frameHeight: 54}); 
        this.load.spritesheet("testKitsuneRunDroit5", "spritesheetkitsunerundroit6.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche5", "spritesheetkitsunerungauche6.png", {frameWidth: 126, frameHeight: 54}); 

        //petits tofus
        this.load.image("tofu1", "Hub/assetsHub/tofu.png"); 
        this.load.image("messageTofu", "Hub/assetsHub/messageTofu.png"); 
        this.load.image("groupeTofus", "Hub/assetsHub/tofuAvarie.png"); 
        this.load.image("tofuAvarie1", "Hub/assetsHub/tofuAvarie.png"); 
        this.load.image("messageTofuAvarie", "Hub/assetsHub/messageTofuAvarie.png"); 

        //ui test
        this.load.image("pv100", "Hub/assetsHub/uiPv100.png"); 
        this.load.image("pv80", "Hub/assetsHub/uiPv80.png"); 
        this.load.image("pv60", "Hub/assetsHub/uiPv60.png"); 
        this.load.image("pv40", "Hub/assetsHub/uiPv40.png"); 
        this.load.image("pv20", "Hub/assetsHub/uiPv20.png"); 

        //panneaux
        this.load.image("panneauHubVersForet", "Hub/assetsHub/panneauForet.png"); 
        this.load.image("panneauHubVersRiviere", "Hub/assetsHub/panneauRiviere.png"); 

        //boule de feu 
        this.load.image("bouleDeFeu", "Hub/assetsHub/bouleFeu.png"); 

        //ecran
        this.load.image("ecranEmpoisonne", "Riviere/empoisonne.png"); 

        //musique
        this.load.audio("musiqueHub", "Hub/Oboro.mp3"); 

        //barre de faim 
        this.load.image("barreFaim1", "barreFaim/1.png"); 
        this.load.image("barreFaim2", "barreFaim/2.png"); 
        this.load.image("barreFaim3", "barreFaim/3.png"); 
        this.load.image("barreFaim4", "barreFaim/4.png"); 
        this.load.image("barreFaim5", "barreFaim/5.png"); 
        this.load.image("barreFaim6", "barreFaim/6.png"); 
        this.load.image("barreFaim7", "barreFaim/7.png"); 
        this.load.image("barreFaim8", "barreFaim/8.png"); 
        this.load.image("barreFaim9", "barreFaim/9.png"); 
        this.load.image("barreFaim10", "barreFaim/10.png"); 
        this.load.image("barreFaim11", "barreFaim/11.png"); 
        this.load.image("barreFaim12", "barreFaim/12.png"); 
        this.load.image("barreFaim13", "barreFaim/13.png"); 
        this.load.image("barreFaim14", "barreFaim/14.png"); 
        this.load.image("barreFaim15", "barreFaim/15.png"); 
        this.load.image("barreFaim16", "barreFaim/16.png"); 
        this.load.image("barreFaim17", "barreFaim/17.png"); 
        this.load.image("barreFaim18", "barreFaim/18.png"); 
        this.load.image("barreFaim19", "barreFaim/19.png"); 
        this.load.image("barreFaim20", "barreFaim/20.png"); 




    }

    
//create 

    create() { 

        //importation de Tiled dans Phaser 
        //chargement de la carte 
        const niveauHubPrincipal = this.add.tilemap("niveauHub"); 

        //chargement du jeu de tuiles 
        const tilesetHub = niveauHubPrincipal.addTilesetImage (
            "LD_Hub_copie_3", 
            "tuiles"
        ); 

        //les calques 
        const calque_background = niveauHubPrincipal.createLayer(
            "background", 
            tilesetHub
        ); 

        const calque_invisible = niveauHubPrincipal.createLayer(
            "invisible", 
            tilesetHub
        ); 

        calque_invisible.setVisible(false); 

        //joueur 
        this.player = this.physics.add.sprite(300,400, "kitsune"); 
        this.player.setCollideWorldBounds(true); 
        this.player.setSize(80,40); 

        this.anims.create({
            key : "idle", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 0, end: 1 }), 
            frameRate : 2,
            repeat : -1
        });
        
        this.anims.create({
            key : "idle3", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 2, end: 3 }), 
            frameRate : 2,
            repeat : -1
        });


      

        //animations 
        this.anims.create({
            key : "right", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });


        //petits tofus 
        this.tofu1 = this.physics.add.image(600, 400, "tofu1").setInteractive(); 
        this.tofu1.setScale(0.8); 
        this.messageTofu = this.physics.add.image(448, 224, "messageTofu").setScrollFactor(0); 
        this.messageTofu.setScale(2); 
        this.messageTofu.setImmovable(); 
        this.messageTofu.body.setAllowGravity(false); 
        this.messageTofu.setVisible(false); 


        //this.tofuAvarie1 = this.physics.add.image(800, 400, "tofuAvarie1").setInteractive(); 
        //this.tofuAvarie1.setScale(0.8); 

        this.groupeTofus = this.physics.add.group({ 
            key : "groupeTofus", repeat : 0, 
            setXY : { x : 800, y : 0, stepX : 100 }
        }); 

        this.groupeTofus.children.iterate(function (child) { 
            child.setBounce(1); 
            child.setCollideWorldBounds(true);
            child.allowGravity = false; 
            child.setVelocity(Phaser.Math.Between(-100, 100), 10);
            child.setScale(0.8); 

            
        }); 

        this.physics.add.collider(this.groupeTofus, calque_invisible); 
        this.physics.add.overlap(this.player, this.groupeTofus, this.empoisonner, null, this ); 

        this.messageTofuAvarie = this.physics.add.image(448, 224, "messageTofuAvarie").setScrollFactor(0); 
        this.messageTofuAvarie.setScale(2); 
        this.messageTofuAvarie.setImmovable(); 
        this.messageTofuAvarie.body.setAllowGravity(false); 
        this.messageTofuAvarie.setVisible(false); 


        

        //panneaux
        this.panneauHubForet = this.physics.add.image(1240, 300, "panneauHubVersForet").setInteractive(); 
        this.contactPanneauHubForet = false; 
        this.panneauHubRiviere = this.physics.add.image(50, 280, "panneauHubVersRiviere").setInteractive(); 

        //boules de feu 
        this.bouleFeu = this.physics.add.image(-100, -100, "bouleDeFeu").setVisible(false); 
        this.tirer = true;      

        //uiPv 

        this.ecranEmpoisonne= this.physics.add.image(448, 224, "ecranEmpoisonne").setScrollFactor(0); 
        this.ecranEmpoisonne.body.setAllowGravity(false); 
        this.ecranEmpoisonne.setImmovable(); 
        this.ecranEmpoisonne.setVisible(false); 
        this.ecranEmpoisonne.setAlpha(0.6); 

        this.invincible = false; 
        this.nombrePv = 100; 
        this.pvPlayer = this.add.text(45,150,"PV : " + this.nombrePv,{fontSize:'16px',fill:'#000'}).setScrollFactor(0);
        //pv = 100
        this.pv100 = this.physics.add.image(80, 80, "pv100").setScrollFactor(0);
        this.pv100.body.setAllowGravity(false); 
        this.pv100.setScale(0.9);
        this.pv100.setVisible(false); 
        //pv = 80 
        this.pv80 = this.physics.add.image(80, 80, "pv80").setScrollFactor(0);
        this.pv80.body.setAllowGravity(false); 
        this.pv80.setScale(0.9);
        this.pv80.setVisible(false); 
        //pv = 60 
        this.pv60 = this.physics.add.image(80, 80, "pv60").setScrollFactor(0);
        this.pv60.body.setAllowGravity(false); 
        this.pv60.setScale(0.9);
        this.pv60.setVisible(false); 
        //pv = 40 
        this.pv40 = this.physics.add.image(80, 80, "pv40").setScrollFactor(0);
        this.pv40.body.setAllowGravity(false); 
        this.pv40.setScale(0.9);
        this.pv40.setVisible(false); 
        //pv = 20 
        this.pv20 = this.physics.add.image(80, 80, "pv20").setScrollFactor(0);
        this.pv20.body.setAllowGravity(false); 
        this.pv20.setScale(0.9);
        this.pv20.setVisible(false); 

        //barre de faim 
        
        this.faimPlayer = 20; 
        this.playerMange = false; 

        this.barreFaim20 = this.physics.add.image(448, 30, "barreFaim20").setScrollFactor(0); 
        this.barreFaim20.body.setAllowGravity(false); 
        this.barreFaim20.setVisible(false); 

        this.barreFaim19 = this.physics.add.image(448, 30, "barreFaim19").setScrollFactor(0); 
        this.barreFaim19.body.setAllowGravity(false); 
        this.barreFaim19.setVisible(false); 

        this.barreFaim18 = this.physics.add.image(448, 30, "barreFaim18").setScrollFactor(0); 
        this.barreFaim18.body.setAllowGravity(false); 
        this.barreFaim18.setVisible(false); 

        this.barreFaim17 = this.physics.add.image(448, 30, "barreFaim17").setScrollFactor(0); 
        this.barreFaim17.body.setAllowGravity(false); 
        this.barreFaim17.setVisible(false); 

        this.barreFaim16 = this.physics.add.image(448, 30, "barreFaim16").setScrollFactor(0); 
        this.barreFaim16.body.setAllowGravity(false); 
        this.barreFaim16.setVisible(false); 

        this.barreFaim15 = this.physics.add.image(448, 30, "barreFaim15").setScrollFactor(0); 
        this.barreFaim15.body.setAllowGravity(false); 
        this.barreFaim15.setVisible(false); 

        this.barreFaim14 = this.physics.add.image(448, 30, "barreFaim14").setScrollFactor(0); 
        this.barreFaim14.body.setAllowGravity(false); 
        this.barreFaim14.setVisible(false); 

        this.barreFaim13 = this.physics.add.image(448, 30, "barreFaim13").setScrollFactor(0); 
        this.barreFaim13.body.setAllowGravity(false); 
        this.barreFaim13.setVisible(false); 

        this.barreFaim12 = this.physics.add.image(448, 30, "barreFaim12").setScrollFactor(0); 
        this.barreFaim12.body.setAllowGravity(false); 
        this.barreFaim12.setVisible(false); 

        this.barreFaim11 = this.physics.add.image(448, 30, "barreFaim11").setScrollFactor(0); 
        this.barreFaim11.body.setAllowGravity(false); 
        this.barreFaim11.setVisible(false); 

        this.barreFaim10 = this.physics.add.image(448, 30, "barreFaim10").setScrollFactor(0); 
        this.barreFaim10.body.setAllowGravity(false); 
        this.barreFaim10.setVisible(false); 

        this.barreFaim9 = this.physics.add.image(448, 30, "barreFaim9").setScrollFactor(0); 
        this.barreFaim9.body.setAllowGravity(false); 
        this.barreFaim9.setVisible(false); 

        this.barreFaim8 = this.physics.add.image(448, 30, "barreFaim8").setScrollFactor(0); 
        this.barreFaim8.body.setAllowGravity(false); 
        this.barreFaim8.setVisible(false); 

        this.barreFaim7 = this.physics.add.image(448, 30, "barreFaim7").setScrollFactor(0); 
        this.barreFaim7.body.setAllowGravity(false); 
        this.barreFaim7.setVisible(false); 

        this.barreFaim6 = this.physics.add.image(448, 30, "barreFaim6").setScrollFactor(0); 
        this.barreFaim6.body.setAllowGravity(false); 
        this.barreFaim6.setVisible(false); 

        this.barreFaim5 = this.physics.add.image(448, 30, "barreFaim5").setScrollFactor(0); 
        this.barreFaim5.body.setAllowGravity(false); 
        this.barreFaim5.setVisible(false); 

        this.barreFaim4 = this.physics.add.image(448, 30, "barreFaim4").setScrollFactor(0); 
        this.barreFaim4.body.setAllowGravity(false); 
        this.barreFaim4.setVisible(false); 

        this.barreFaim3 = this.physics.add.image(448, 30, "barreFaim3").setScrollFactor(0); 
        this.barreFaim3.body.setAllowGravity(false); 
        this.barreFaim3.setVisible(false); 

        this.barreFaim2 = this.physics.add.image(448, 30, "barreFaim2").setScrollFactor(0); 
        this.barreFaim2.body.setAllowGravity(false); 
        this.barreFaim2.setVisible(false); 

        this.barreFaim1 = this.physics.add.image(448, 30, "barreFaim1").setScrollFactor(0); 
        this.barreFaim1.body.setAllowGravity(false); 
        this.barreFaim1.setVisible(false); 

        

        if (this.faimPlayer > 0){ 

            setInterval(() => { 

                this.faimPlayer -= 1; 
                //dans le create this.faimPlayer = 20; 
                
            }, 8000); 
            
        }
        
        

        
        //bool
        calque_invisible.setCollisionByProperty({ estSolide : true}); 

        //collisions 
        this.physics.add.collider(this.player, calque_invisible); 
        this.physics.add.collider(this.tofu1, calque_invisible); 
        this.physics.add.collider(this.player, this.tofu1, this.manger, null, this); 
        this.physics.add.collider(this.panneauHubForet, calque_invisible); 
        this.physics.add.collider(this.player, this.panneauHubForet, this.teleportationHubForet, null, this); 
        this.physics.add.collider(this.panneauHubRiviere, calque_invisible); 
        this.physics.add.collider(this.player, this.panneauHubRiviere, this.teleportationHubRiviere, null, this); 
        this.physics.add.collider(this.bouleFeu, calque_invisible, this.destruction, null, this); 

        //immovable
        this.tofu1.setImmovable(); 
        this.panneauHubForet.setImmovable();
        this.panneauHubRiviere.setImmovable();  

        //gravité
        this.bouleFeu.body.setAllowGravity(false); 

        //taille de la hitbox
        this.bouleFeu.setScale(0.4); 
        this.bouleFeu.setSize(20, 20); 
     

        //---création d'une caméra---  
        this.physics.world.setBounds(0,0,1280,534); 
        this.cameras.main.setBounds(0, 0, 1280, 534);
        this.cameras.main.zoom = 1;

        //---suivi du joueur par la caméra--- 
        this.cameras.main.startFollow(this.player);

        //boutons clavier 
        this.cursors = this.input.keyboard.createCursorKeys(); 

        //musique 
        //this.sound.play("musiqueHub", {volume : 0}); 
        
    
    
    
    }

//update 

    update() {

        

        //clavier 
        if (this.cursors.left.isDown){ //si la touche gauche est appuyée
            this.player.setVelocityX(-220); //alors vitesse négative en X
            this.playerLeft = true; 
            this.playerRight = false; 
            this.player.anims.play("left", true); 
            
            }

        else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée
            this.player.setVelocityX(220); //alors vitesse positive en X
            this.playerLeft = false; 
            this.playerRight = true; 
            this.player.anims.play("right", true); 
            
            }

        else{ // sinon
            this.player.setVelocityX(0); //vitesse nulle
            this.player.anims.play("idle", true); 
            
            }

        if (this.cursors.up.isDown && this.player.body.blocked.down){
            //si touche haut appuyée ET que le perso touche le sol
            this.player.setVelocityY(-340); //alors vitesse verticale négative
        
            }

        if (this.cursors.space.isDown && this.player.body.blocked.down){ 

            //console.log.apply("Space appuyé"); 
            this.player.setVelocityY(-500); 
        }

        if (this.cursors.shift.isDown){ 

            if (this.tirer === true){
                
                if (this.playerRight === true){
        
                    this.bouleFeu.setVisible(true);
                    this.bouleFeu.x = this.player.x + 80
                    this.bouleFeu.y = this.player.y
                    this.bouleFeu.setVelocityX(350);
                    this.tirer = false;
                }


                    setTimeout(() => {
                        this.tirer = true;
                        this.destruction(); 
                    }, 1000);


        
                if (this.playerLeft === true){

                    this.bouleFeu.setVisible(true);
                    this.bouleFeu.x = this.player.x - 80
                    this.bouleFeu.y = this.player.y
                    this.bouleFeu.setVelocityX(-350);
                    this.tirer = false;
                }

                    setTimeout(() => {
                        this.tirer = true;
                        this.destruction(); 
                    }, 1000);
            } 
            
        }
        

        //ui pv 
        if (this.nombrePv === 100){
            this.pv100.setVisible(true);  
        }
        
        if (this.nombrePv === 80){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
        }
    
        if (this.nombrePv === 60){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
        }
    
        if (this.nombrePv === 40){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
        }
    
        if (this.nombrePv === 20){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        //barre de faim 

        if (this.faimPlayer === 20){
            this.barreFaim20.setVisible(true);  
            this.barreFaim19.setVisible(false); 
        }

        if (this.faimPlayer === 19){
            this.barreFaim20.setVisible(false); 
            this.barreFaim19.setVisible(true);  
            this.barreFaim18.setVisible(false); 
        }

        if (this.faimPlayer === 18){
            this.barreFaim19.setVisible(false); 
            this.barreFaim18.setVisible(true);  
            this.barreFaim17.setVisible(false); 
        }

        if (this.faimPlayer === 17){
            this.barreFaim18.setVisible(false); 
            this.barreFaim17.setVisible(true);  
            this.barreFaim16.setVisible(false); 
        }

        if (this.faimPlayer === 16){
            this.barreFaim17.setVisible(false); 
            this.barreFaim16.setVisible(true);  
            this.barreFaim15.setVisible(false); 
        }

        if (this.faimPlayer === 15){
            this.barreFaim16.setVisible(false); 
            this.barreFaim15.setVisible(true);  
            this.barreFaim14.setVisible(false); 
        }

        if (this.faimPlayer === 14){
            this.barreFaim15.setVisible(false); 
            this.barreFaim14.setVisible(true);  
            this.barreFaim13.setVisible(false); 
        }

        if (this.faimPlayer === 13){
            this.barreFaim14.setVisible(false); 
            this.barreFaim13.setVisible(true);  
            this.barreFaim12.setVisible(false); 
        }

        if (this.faimPlayer === 12){
            this.barreFaim13.setVisible(false); 
            this.barreFaim12.setVisible(true);  
            this.barreFaim11.setVisible(false); 
        }

        if (this.faimPlayer === 11){
            this.barreFaim12.setVisible(false); 
            this.barreFaim11.setVisible(true);  
            this.barreFaim10.setVisible(false); 
        }

        if (this.faimPlayer === 10){
            this.barreFaim11.setVisible(false); 
            this.barreFaim10.setVisible(true);  
            this.barreFaim9.setVisible(false); 
        }

        if (this.faimPlayer === 9){
            this.barreFaim10.setVisible(false); 
            this.barreFaim9.setVisible(true);  
            this.barreFaim8.setVisible(false); 
        }

        if (this.faimPlayer === 8){
            this.barreFaim9.setVisible(false); 
            this.barreFaim8.setVisible(true);  
            this.barreFaim7.setVisible(false); 
        }

        if (this.faimPlayer === 7){
            this.barreFaim8.setVisible(false); 
            this.barreFaim7.setVisible(true);  
            this.barreFaim6.setVisible(false); 
        }

        if (this.faimPlayer === 6){
            this.barreFaim7.setVisible(false); 
            this.barreFaim6.setVisible(true);  
            this.barreFaim5.setVisible(false); 
        }

        if (this.faimPlayer === 5){
            this.barreFaim6.setVisible(false); 
            this.barreFaim5.setVisible(true);  
            this.barreFaim4.setVisible(false); 
        }

        if (this.faimPlayer === 4){
            this.barreFaim5.setVisible(false); 
            this.barreFaim4.setVisible(true);  
            this.barreFaim3.setVisible(false); 
        }

        if (this.faimPlayer === 3){
            this.barreFaim4.setVisible(false); 
            this.barreFaim3.setVisible(true);  
            this.barreFaim2.setVisible(false); 
        }

        if (this.faimPlayer === 2){
            this.barreFaim3.setVisible(false); 
            this.barreFaim2.setVisible(true);  
            this.barreFaim1.setVisible(false); 
        }

        if (this.faimPlayer === 1){
            this.barreFaim2.setVisible(false); 
            this.barreFaim1.setVisible(true);  
        
        }

        //manger
        if (this.faimPlayer > 20){ 
            this.faimPlayer = 20; 
        }

        //manger tofu 
        if (this.playerMange === true){ 
            this.faimPlayer += 1; 
        }
        

        //fonction mort de faim 
        if (this.faimPlayer === 0){ 

            this.estMortFaim(); 

        }


        //teleportation
        if (this.contactPanneauHubForet === true){ 
            this.sound.stopAll(); 
        }

        if (this.contactPanneauHubRiviere === true){ 
            this.sound.stopAll(); 
        }

        

        console.log(this.faimPlayer); 

        if (this.faimPlayer > 0){ 

            setInterval(this.playerFaim, 1000);
            
        }

        

        
        

        
        


    }

//fonctions 

    manger(player, tofu1){ 
    
        tofu1.setTint(0x910303); 
        this.messageTofu.setVisible(true); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            tofu1.clearTint(); 
            tofu1.destroy();

        }, 100); 

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 

        setTimeout(() => { 

            this.messageTofu.setVisible(false); 

        }, 3500); 


    }

     


    empoisonner(player, groupeTofus){ 

        groupeTofus.setTint(0xc4e0a2); 
        player.setTint(0xc4e0a2); 

        this.nombrePv -= 20; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        
        this.estInvincible(); 
        groupeTofus.destroy(); 
        this.ecranEmpoisonne.setVisible(true); 
        this.playerMange = true; 
        this.messageTofuAvarie.setVisible(true); 

        setTimeout(() => { 

            groupeTofus.clearTint(); 
            player.clearTint(); 
            this.ecranEmpoisonne.setVisible(false); 

        }, 2000); 

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 

        setTimeout(() => { 

            this.messageTofuAvarie.setVisible(false); 

        }, 3500); 

      
    }

    estInvincible(player){ //permet de rendre le joueur invincible pendant une seconde 

        setTimeout(() => { 
            this.invincible = false
            this.player.setAlpha(1)
        }, 1000); 

        this.invincible = true
        this.player.setAlpha(0.2)
    }

    teleportationHubForet(player, panneauHubForet){ 

        this.scene.start("niveauForet", { pv: this.nombrePv, faim: this.faimPlayer, forme1: this.nouvelleMecanique1, forme2: this.nouvelleMecanique2}); 
        this.contactPanneauHubForet = true;
    }

    teleportationHubRiviere(player, panneauHubForet){ 

        this.scene.start("niveauRiviere", { pv: this.nombrePv, faim: this.faimPlayer, forme1: this.nouvelleMecanique1, forme2: this.nouvelleMecanique2}); 
        this.contactPanneauHubRiviere = true;
    }

    destruction(bouleFeu, calque_invisible){

        this.bouleFeu.x = -100
        this.bouleFeu.y = -100
        this.bouleFeu.setVisible(false); 
        this.bouleFeu.setVelocityX(0); 
    }

    estMortFaim(player){ 
        if (this.faimPlayer <= 0){ 
            this.scene.start("finJeu"); 
        }
    }


}










































//---------------------------------------------------Forêt------------------------------------------

class Foret extends Phaser.Scene { 
    constructor() { 
        super("niveauForet")
    }

//init

    init(data){ 

        this.nombrePv = data.pv; 
        this.faimPlayer = data.faim; 
        this.nouvelleMecanique1 = data.forme1; 
        this.nouvelleMecanique2 = data.forme2; 

    }    

//preload 

    preload() { 
        //chargement des tuiles de jeu

        this.load.image("tuilesForet", "Foret/Ld_foret_002.png"); 

        //chargement de la carte 
        this.load.tilemapTiledJSON("niveauForet", "Foret/TiledForet.json"); 

        //ajout d'un personnage 
        this.load.image("kitsune", "Foret/Essai_kitsune8"); 
        this.load.spritesheet("testKitsuneRunDroit", "spritesheetkitsunerundroit2.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche", "spritesheetkitsunerungauche2.png", {frameWidth: 126, frameHeight: 54});

        //petits tofus
        this.load.image("groupeTofus", "Hub/assetsHub/tofuAvarie"); 
        this.load.image("tofuSoigneur1", "Hub/assetsHub/tofuSoigneur.png"); 
        this.load.image("soin1", "Foret/soin.png"); 
        this.load.image("tofu2", "Hub/assetsHub/tofu.png"); 
        this.load.image("tofu3", "Hub/assetsHub/tofu.png"); 
    

        //ui
        this.load.image("pv100", "Foret/uiPv100.png"); 
        this.load.image("pv80", "Foret/uiPv80.png"); 
        this.load.image("pv60", "Foret/uiPv60.png"); 
        this.load.image("pv40", "Foret/uiPv40.png"); 
        this.load.image("pv20", "Foret/uiPv20.png"); 

        //panneau
        this.load.image("panneauForetVersHub", "Foret/panneauHub.png"); 

        //kodama
        this.load.image("kodama1", "Foret/kodamaa.png"); 
        this.load.image("kodama2", "Foret/kodamaa.png"); 
        this.load.image("kodama3", "Foret/kodamaa.png"); 
        this.load.image("kodama4", "Foret/kodamaa.png"); 
        this.load.image("kodama5", "Foret/kodamaa.png"); 

        //potion de vieilissement 
        this.load.image("potion1", "Foret/potion.png"); 
        this.load.image("textePotion1", "Foret/zoneTexte.png"); 

        //piques 
        this.load.image("pique1", "Foret/pic.png"); 
        this.load.image("pique2", "Foret/pic.png");
        this.load.image("pique3", "Foret/pic.png");
        this.load.image("pique4", "Foret/pic.png");
        this.load.image("piqueReversed1", "Foret/picReversed.png"); 
        this.load.image("piqueReversed2", "Foret/picReversed.png"); 

        //musique 
        this.load.audio("musiqueForet", "Foret/Sakuya3.mp3"); 
        this.load.audio("kitsuneSautLong", "Sons/saut5.mp3"); 
        this.load.audio("bruitMangerTofu", "Sons/cronch1.mp3"); 
        this.load.audio("itemObtenu", "Sons/item2.mp3"); 

        //trampoline
        this.load.image("trampolineForet", "Foret/trampo.png"); 

        //écrans 
        this.load.image("ecranDegat", "Riviere/degat.png"); 
        this.load.image("ecranEmpoisonne", "Riviere/empoisonne.png"); 
        this.load.image("ecranSoin", "Riviere/soin.png"); 

        
    }

//create

    create() { 

        //importation de Tiled dans Phaser 
        //chargement de la carte 
        const niveauForet = this.add.tilemap("niveauForet"); 

        //chargement du jeu de tuiles 
        const tilesetForet = niveauForet.addTilesetImage (
            "Ld_foret_002", 
            "tuilesForet"
        ); 

        //les calques 
        const calque_backgroundForet = niveauForet.createLayer(
            "background", 
            tilesetForet
        ); 

        const calque_invisibleForet = niveauForet.createLayer(
            "invisible", 
            tilesetForet
        ); 

        calque_invisibleForet.setVisible(false); 

        //joueur 
        this.player = this.physics.add.sprite(0,400, "kitsune"); 
        this.player.setCollideWorldBounds(true); 
        this.player.setBounce(0.1);
        this.player.setSize(80,40); 
        //this.player.setScale(0.8); 

        //animations 
        this.anims.create({
            key : "right", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });

        this.anims.create({
            key : "right3", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit3", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left3", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche3", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });

        this.anims.create({
            key : "idle", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 0, end: 1 }), 
            frameRate : 2,
            repeat : -1
        });
        
        this.anims.create({
            key : "idle3", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 2, end: 3 }), 
            frameRate : 2,
            repeat : -1
        });

        //panneau
        this.panneauForetHub = this.physics.add.image(90, 196, "panneauForetVersHub").setInteractive();
        
        //kodama
        this.kodama1 = this.physics.add.image(544, 300, "kodama1").setInteractive(); 
        this.kodama1.setScale(0.8); 
        this.kodama2 = this.physics.add.image(150, 150, "kodama2").setInteractive(); 
        this.kodama2.setScale(0.8);
        this.kodama3 = this.physics.add.image(1020, 180, "kodama3").setInteractive(); 
        this.kodama3.setScale(0.8);
        this.kodama4 = this.physics.add.image(1700, 200, "kodama4").setInteractive(); 
        this.kodama4.setScale(0.8);
        this.kodama5 = this.physics.add.image(2500, 230, "kodama5").setInteractive(); 
        this.kodama5.setScale(0.8);

        //tofus 
        this.groupeTofus = this.physics.add.group({ 
            key : "groupeTofus", repeat : 2, 
            setXY : { x : 700, y : 0, stepX : 700 }
        }); 

        this.groupeTofus.children.iterate(function (child) { 
            child.setBounce(1); 
            child.setCollideWorldBounds(true);
            child.allowGravity = false; 
            child.setVelocity(Phaser.Math.Between(-50, 50), 10);
            child.setScale(0.8); 
           

        }); 

        this.physics.add.collider(this.groupeTofus, calque_invisibleForet); 
        this.physics.add.overlap(this.player, this.groupeTofus, this.empoisonner, null, this ); 

        this.tofuSoigneur1 = this.physics.add.image(3100, 210, "tofuSoigneur1").setInteractive();
        this.tofuSoigneur1.setScale(0.7);  
        this.soin1 = this.physics.add.image(this.player.x, this.player.y, "soin1").setInteractive(); 
        this.soin1.setVisible(false); 

        this.tofu2 = this.physics.add.image(800, 100, "tofu2"); 
        this.tofu2.setImmovable(); 
        this.tofu2.setScale(0.8); 

        this.tofu3 = this.physics.add.image(2680, 450, "tofu3"); 
        this.tofu3.setImmovable(); 
        this.tofu3.setScale(0.8);

        //potion de vieilissement 
        this.nouvelleMecanique1 = false; 
        this.potion1 = this.physics.add.image(2950, 300, "potion1").setInteractive(); 
        this.potion1.setScale(0.8); 

        this.textePotion1 = this.physics.add.image(448, 224, "textePotion1").setScrollFactor(0); 
        this.textePotion1.setScale(2); 
        this.textePotion1.setVisible(false); 

        //piques
        this.pique1 = this.physics.add.image(580, 560, "pique1").setInteractive(); 
        this.pique1.setScale(1); 
        this.pique1.setSize(20,20); 
        this.pique2 = this.physics.add.image(680, 560, "pique2").setInteractive(); 
        this.pique2.setScale(1); 
        this.pique2.setSize(20,20);
        this.pique3 = this.physics.add.image(780, 560, "pique3").setInteractive(); 
        this.pique3.setScale(1); 
        this.pique3.setSize(20,20);
        this.pique4 = this.physics.add.image(1900, 500, "pique3").setInteractive(); 
        this.pique4.setScale(1); 
        this.pique4.setSize(20,20);
        this.piqueReversed1 = this.physics.add.image(2060, 20, "piqueReversed1").setInteractive(); 
        this.piqueReversed1.setScale(1); 
        this.piqueReversed1.setSize(20,20);
        this.piqueReversed2 = this.physics.add.image(1950, 20, "piqueReversed2").setInteractive(); 
        this.piqueReversed2.setScale(1); 
        this.piqueReversed2.setSize(20,20);

        //trampoline
        this.trampolineForet = this.physics.add.image(1475, 490, "trampolineForet"); 
        this.trampolineForet.setImmovable(); 
        //this.trampolineForet.setVisible(false); 
        this.trampolineForet.body.setAllowGravity(false); 
        //this.trampolineForet.setScale(0.5); 
        this.playerOnTrampolineForet = false; 


        //uiPv 
        this.ecranDegat = this.physics.add.image(448, 224, "ecranDegat").setScrollFactor(0); 
        this.ecranDegat.body.setAllowGravity(false); 
        this.ecranDegat.setImmovable(); 
        this.ecranDegat.setVisible(false); 
        this.ecranDegat.setAlpha(0.6); 

        this.ecranEmpoisonne= this.physics.add.image(448, 224, "ecranEmpoisonne").setScrollFactor(0); 
        this.ecranEmpoisonne.body.setAllowGravity(false); 
        this.ecranEmpoisonne.setImmovable(); 
        this.ecranEmpoisonne.setVisible(false); 
        this.ecranEmpoisonne.setAlpha(0.6); 

        this.ecranSoin= this.physics.add.image(448, 224, "ecranSoin").setScrollFactor(0); 
        this.ecranSoin.body.setAllowGravity(false); 
        this.ecranSoin.setImmovable(); 
        this.ecranSoin.setVisible(false); 
        this.ecranSoin.setAlpha(0.8); 

        this.invincible = false; 
        //this.nombrePv = 100; 
        this.pvPlayer = this.add.text(45,150,"PV : " + this.nombrePv,{fontSize:'16px',fill:'#000'}).setScrollFactor(0);
        //pv = 100
        this.pv100 = this.physics.add.image(80, 80, "pv100").setScrollFactor(0);
        this.pv100.body.setAllowGravity(false); 
        this.pv100.setScale(0.9);
        this.pv100.setVisible(false); 
        //pv = 80 
        this.pv80 = this.physics.add.image(80, 80, "pv80").setScrollFactor(0);
        this.pv80.body.setAllowGravity(false); 
        this.pv80.setScale(0.9);
        this.pv80.setVisible(false); 
        //pv = 60 
        this.pv60 = this.physics.add.image(80, 80, "pv60").setScrollFactor(0);
        this.pv60.body.setAllowGravity(false); 
        this.pv60.setScale(0.9);
        this.pv60.setVisible(false); 
        //pv = 40 
        this.pv40 = this.physics.add.image(80, 80, "pv40").setScrollFactor(0);
        this.pv40.body.setAllowGravity(false); 
        this.pv40.setScale(0.9);
        this.pv40.setVisible(false); 
        //pv = 20 
        this.pv20 = this.physics.add.image(80, 80, "pv20").setScrollFactor(0);
        this.pv20.body.setAllowGravity(false); 
        this.pv20.setScale(0.9);
        this.pv20.setVisible(false); 

        //barre de faim 
        
        //this.faimPlayer = 20; 
        this.playerMange = false; 

        this.barreFaim20 = this.physics.add.image(448, 30, "barreFaim20").setScrollFactor(0); 
        this.barreFaim20.body.setAllowGravity(false); 
        this.barreFaim20.setVisible(false); 

        this.barreFaim19 = this.physics.add.image(448, 30, "barreFaim19").setScrollFactor(0); 
        this.barreFaim19.body.setAllowGravity(false); 
        this.barreFaim19.setVisible(false); 

        this.barreFaim18 = this.physics.add.image(448, 30, "barreFaim18").setScrollFactor(0); 
        this.barreFaim18.body.setAllowGravity(false); 
        this.barreFaim18.setVisible(false); 

        this.barreFaim17 = this.physics.add.image(448, 30, "barreFaim17").setScrollFactor(0); 
        this.barreFaim17.body.setAllowGravity(false); 
        this.barreFaim17.setVisible(false); 

        this.barreFaim16 = this.physics.add.image(448, 30, "barreFaim16").setScrollFactor(0); 
        this.barreFaim16.body.setAllowGravity(false); 
        this.barreFaim16.setVisible(false); 

        this.barreFaim15 = this.physics.add.image(448, 30, "barreFaim15").setScrollFactor(0); 
        this.barreFaim15.body.setAllowGravity(false); 
        this.barreFaim15.setVisible(false); 

        this.barreFaim14 = this.physics.add.image(448, 30, "barreFaim14").setScrollFactor(0); 
        this.barreFaim14.body.setAllowGravity(false); 
        this.barreFaim14.setVisible(false); 

        this.barreFaim13 = this.physics.add.image(448, 30, "barreFaim13").setScrollFactor(0); 
        this.barreFaim13.body.setAllowGravity(false); 
        this.barreFaim13.setVisible(false); 

        this.barreFaim12 = this.physics.add.image(448, 30, "barreFaim12").setScrollFactor(0); 
        this.barreFaim12.body.setAllowGravity(false); 
        this.barreFaim12.setVisible(false); 

        this.barreFaim11 = this.physics.add.image(448, 30, "barreFaim11").setScrollFactor(0); 
        this.barreFaim11.body.setAllowGravity(false); 
        this.barreFaim11.setVisible(false); 

        this.barreFaim10 = this.physics.add.image(448, 30, "barreFaim10").setScrollFactor(0); 
        this.barreFaim10.body.setAllowGravity(false); 
        this.barreFaim10.setVisible(false); 

        this.barreFaim9 = this.physics.add.image(448, 30, "barreFaim9").setScrollFactor(0); 
        this.barreFaim9.body.setAllowGravity(false); 
        this.barreFaim9.setVisible(false); 

        this.barreFaim8 = this.physics.add.image(448, 30, "barreFaim8").setScrollFactor(0); 
        this.barreFaim8.body.setAllowGravity(false); 
        this.barreFaim8.setVisible(false); 

        this.barreFaim7 = this.physics.add.image(448, 30, "barreFaim7").setScrollFactor(0); 
        this.barreFaim7.body.setAllowGravity(false); 
        this.barreFaim7.setVisible(false); 

        this.barreFaim6 = this.physics.add.image(448, 30, "barreFaim6").setScrollFactor(0); 
        this.barreFaim6.body.setAllowGravity(false); 
        this.barreFaim6.setVisible(false); 

        this.barreFaim5 = this.physics.add.image(448, 30, "barreFaim5").setScrollFactor(0); 
        this.barreFaim5.body.setAllowGravity(false); 
        this.barreFaim5.setVisible(false); 

        this.barreFaim4 = this.physics.add.image(448, 30, "barreFaim4").setScrollFactor(0); 
        this.barreFaim4.body.setAllowGravity(false); 
        this.barreFaim4.setVisible(false); 

        this.barreFaim3 = this.physics.add.image(448, 30, "barreFaim3").setScrollFactor(0); 
        this.barreFaim3.body.setAllowGravity(false); 
        this.barreFaim3.setVisible(false); 

        this.barreFaim2 = this.physics.add.image(448, 30, "barreFaim2").setScrollFactor(0); 
        this.barreFaim2.body.setAllowGravity(false); 
        this.barreFaim2.setVisible(false); 

        this.barreFaim1 = this.physics.add.image(448, 30, "barreFaim1").setScrollFactor(0); 
        this.barreFaim1.body.setAllowGravity(false); 
        this.barreFaim1.setVisible(false); 

        if (this.faimPlayer > 0){ 

            setInterval(() => { 

                this.faimPlayer -= 1; 
                //dans le create this.faimPlayer = 20; 
                
            }, 8000); 
            
        }


        //bool
        calque_invisibleForet.setCollisionByProperty({ estSolideForet : true}); 

        //collisions 
        this.physics.add.collider(this.player, calque_invisibleForet);
        this.physics.add.collider(this.panneauForetHub, calque_invisibleForet); 
         
        this.physics.add.collider(this.kodama1, calque_invisibleForet);
        this.physics.add.collider(this.kodama2, calque_invisibleForet);
        this.physics.add.collider(this.kodama3, calque_invisibleForet);
        this.physics.add.collider(this.kodama4, calque_invisibleForet);
        this.physics.add.collider(this.kodama5, calque_invisibleForet);

        this.physics.add.collider(this.potion1, calque_invisibleForet);
        this.physics.add.overlap(this.player, this.groupeTofus, this.empoisonner, null, this); 
        this.physics.add.collider(this.player, this.tofuSoigneur1, this.soigner, null, this);
        this.physics.add.collider(this.soin1, calque_invisibleForet); 

        this.physics.add.collider(this.tofu2, calque_invisibleForet); 
        this.physics.add.collider(this.player, this.tofu2, this.mangerTofu2, null, this); 
        this.physics.add.collider(this.tofu3, calque_invisibleForet); 
        this.physics.add.collider(this.player, this.tofu3, this.mangerTofu3, null, this); 

        this.physics.add.overlap(this.player, this.kodama1, this.kodamaFade1, null, this); 
        this.physics.add.overlap(this.player, this.kodama3, this.kodamaFade3, null, this);
        this.physics.add.overlap(this.player, this.kodama2, this.kodamaFade2, null, this);
        this.physics.add.overlap(this.player, this.kodama4, this.kodamaFade4, null, this);
        this.physics.add.overlap(this.player, this.kodama5, this.kodamaFade5, null, this);

        this.physics.add.collider(this.player, this.trampolineForet, this.sautTrampolineForet, null, this); 

        this.physics.add.collider(this.player, this.panneauForetHub, this.teleportationForetHub, null, this);  
        this.physics.add.collider(this.potion1, this.player, this.transformation1, null, this); 

        this.physics.add.collider(this.player, this.pique1, this.contactPique1, null, this); 
        this.physics.add.collider(this.player, this.pique2, this.contactPique2, null, this); 
        this.physics.add.collider(this.player, this.pique3, this.contactPique3, null, this); 
        this.physics.add.collider(this.player, this.pique4, this.contactPique4, null, this); 
        this.physics.add.collider(this.player, this.piqueReversed1, this.contactPiqueReversed1, null, this); 
        this.physics.add.collider(this.player, this.piqueReversed2, this.contactPiqueReversed2, null, this); 

        //fixer
        this.panneauForetHub.setImmovable();
        this.textePotion1.setImmovable(); 
        this.potion1.setImmovable(); 
        this.pique1.setImmovable(); 
        this.pique2.setImmovable(); 
        this.pique3.setImmovable(); 
        this.pique4.setImmovable();
        this.piqueReversed1.setImmovable();  
        this.piqueReversed2.setImmovable(); 
        this.tofuSoigneur1.setImmovable(); 
        //this.pvPlayer.setImmovable(); 

        //gravité
        this.textePotion1.body.setAllowGravity(false); 
        this.pique1.body.setAllowGravity(false); 
        this.pique2.body.setAllowGravity(false); 
        this.pique3.body.setAllowGravity(false); 
        this.pique4.body.setAllowGravity(false); 
        this.piqueReversed1.body.setAllowGravity(false); 
        this.piqueReversed2.body.setAllowGravity(false); 
        this.tofuSoigneur1.body.setAllowGravity(false); 
        //this.pvPlayer.body.setAllowGravity(false); 
        
        //touches du clavier 
        this.cursors = this.input.keyboard.createCursorKeys(); 

        //---création d'une caméra---  
        this.physics.world.setBounds(0,0,3200,581); 
        this.cameras.main.setBounds(0, 0, 3200, 581);
        this.cameras.main.zoom = 1;

        //---suivi du joueur par la caméra--- 
        this.cameras.main.startFollow(this.player);

        //lumière 
        this.light = this.lights.addLight(100, 100, 100).setColor(0xffffff).setIntensity(2);

        calque_backgroundForet.setPipeline("Light2D"); 
        this.kodama1.setPipeline("Light2D");
        this.kodama2.setPipeline("Light2D"); 
        this.kodama3.setPipeline("Light2D"); 
        this.kodama4.setPipeline("Light2D"); 
        this.kodama5.setPipeline("Light2D");
        
        this.player.setPipeline("Light2D"); 
        
        this.lightPlayer = this.lights.addLight(10,10,370).setColor(0xedddaf).setIntensity(1.2);
        this.lightKodama1 = this.lights.addLight(10,10,60).setColor(0xedddaf).setIntensity(1.5);
        this.lightKodama2 = this.lights.addLight(10,10,60).setColor(0xedddaf).setIntensity(1.5);
        this.lightKodama3 = this.lights.addLight(10,10,60).setColor(0xedddaf).setIntensity(1.5);
        this.lightKodama4 = this.lights.addLight(10,10,60).setColor(0xedddaf).setIntensity(1.5);
        this.lightKodama5 = this.lights.addLight(10,10,60).setColor(0xedddaf).setIntensity(1.5);
         
        

        this.lights.enable().setAmbientColor(0x333333);

        //musique 
        this.sound.play("musiqueForet", {volume : 0.1}); 

        


        
        
        

    }

//update

    update() { 

        //touches du clavier 
        if (this.cursors.left.isDown){ //si la touche gauche est appuyée

            this.player.setVelocityX(-220); //alors vitesse négative en X
            //this.player.anims.play("left", true); 

            if (this.nouvelleMecanique1 === true){ 

                //this.player.setVelocityX(-240); //alors vitesse négative en X
                this.player.anims.play("left3", true); 
            }
            else { 

                this.player.anims.play("left", true);

            }
        }

       
        

        else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée

            this.player.setVelocityX(220); //alors vitesse positive en X
            //this.player.anims.play("right", true); 

            if (this.nouvelleMecanique1 === true){ 

                this.player.anims.play("right3", true); 
        
            }
            else { 
                this.player.anims.play("right", true); 
            }

          
            
            }

        else{ // sinon
            this.player.setVelocityX(0); //vitesse nulle

            this.kitsuneSautLong = false; 

            if (this.nouvelleMecanique1 === true){ 

                this.player.anims.play("idle3", true); 
        
            }
            else { 
                this.player.anims.play("idle", true); 
            }

            
            }

        if (this.cursors.up.isDown && this.player.body.blocked.down){
            //si touche haut appuyée ET que le perso touche le sol
            this.player.setVelocityY(-370); //alors vitesse verticale négative

            this.kitsuneSautLong = false; 
            }


        if (this.cursors.space.isDown && this.player.body.blocked.down){ 

            if (this.nouvelleMecanique1 === true){ 


                this.player.setVelocityY(-520); 
                this.kitsuneSautLong = true; 

                setTimeout(() => { 
            
                    this.kitsuneSautLong = false; 

                }, 10);


        }    
    }
        
            
        
        

        

        

        //lights 
        this.lightPlayer.x = this.player.x 
        this.lightPlayer.y = this.player.y 

        this.lightKodama1.x = this.kodama1.x 
        this.lightKodama1.y = this.kodama1.y + 60 

        this.lightKodama2.x = this.kodama2.x 
        this.lightKodama2.y = this.kodama2.y + 60 

        this.lightKodama3.x = this.kodama3.x 
        this.lightKodama3.y = this.kodama3.y + 60 

        this.lightKodama4.x = this.kodama4.x 
        this.lightKodama4.y = this.kodama4.y + 60 

        this.lightKodama5.x = this.kodama5.x 
        this.lightKodama5.y = this.kodama5.y + 60 

    

        //affichage de l'UI en fonction du nombre de Pv 
        if (this.nombrePv === 100){
            this.pv100.setVisible(true);  
            this.pv80.setVisible(false); 
        }

        if (this.nombrePv === 90){
            this.pv100.setVisible(true);  
            this.pv80.setVisible(false); 
        }
    
        if (this.nombrePv === 80){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
            this.pv60.setVisible(false); 
        }

        if (this.nombrePv === 70){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
            this.pv60.setVisible(false); 
        }

        if (this.nombrePv === 60){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
            this.pv40.setVisible(false); 
        }

        if (this.nombrePv === 50){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
            this.pv40.setVisible(false); 
        }

        if (this.nombrePv === 40){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
            this.pv20.setVisible(false); 
        }

        if (this.nombrePv === 30){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
            this.pv20.setVisible(false); 
        }

        if (this.nombrePv === 20){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        if (this.nombrePv === 10){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        //mort & écran de fin 
        if (this.nombrePv <= 0){ 
            this.estMort(); 
        }

        //ui pv 
        if (this.nombrePv === 100){
            this.pv100.setVisible(true);  
        }
        
        if (this.nombrePv === 80){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
        }
    
        if (this.nombrePv === 60){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
        }
    
        if (this.nombrePv === 40){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
        }
    
        if (this.nombrePv === 20){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        //barre de faim 

        if (this.faimPlayer === 20){
            this.barreFaim20.setVisible(true);  
            this.barreFaim19.setVisible(false); 
        }

        if (this.faimPlayer === 19){
            this.barreFaim20.setVisible(false); 
            this.barreFaim19.setVisible(true);  
            this.barreFaim18.setVisible(false); 
        }

        if (this.faimPlayer === 18){
            this.barreFaim19.setVisible(false); 
            this.barreFaim18.setVisible(true);  
            this.barreFaim17.setVisible(false); 
        }

        if (this.faimPlayer === 17){
            this.barreFaim18.setVisible(false); 
            this.barreFaim17.setVisible(true);  
            this.barreFaim16.setVisible(false); 
        }

        if (this.faimPlayer === 16){
            this.barreFaim17.setVisible(false); 
            this.barreFaim16.setVisible(true);  
            this.barreFaim15.setVisible(false); 
        }

        if (this.faimPlayer === 15){
            this.barreFaim16.setVisible(false); 
            this.barreFaim15.setVisible(true);  
            this.barreFaim14.setVisible(false); 
        }

        if (this.faimPlayer === 14){
            this.barreFaim15.setVisible(false); 
            this.barreFaim14.setVisible(true);  
            this.barreFaim13.setVisible(false); 
        }

        if (this.faimPlayer === 13){
            this.barreFaim14.setVisible(false); 
            this.barreFaim13.setVisible(true);  
            this.barreFaim12.setVisible(false); 
        }

        if (this.faimPlayer === 12){
            this.barreFaim13.setVisible(false); 
            this.barreFaim12.setVisible(true);  
            this.barreFaim11.setVisible(false); 
        }

        if (this.faimPlayer === 11){
            this.barreFaim12.setVisible(false); 
            this.barreFaim11.setVisible(true);  
            this.barreFaim10.setVisible(false); 
        }

        if (this.faimPlayer === 10){
            this.barreFaim11.setVisible(false); 
            this.barreFaim10.setVisible(true);  
            this.barreFaim9.setVisible(false); 
        }

        if (this.faimPlayer === 9){
            this.barreFaim10.setVisible(false); 
            this.barreFaim9.setVisible(true);  
            this.barreFaim8.setVisible(false); 
        }

        if (this.faimPlayer === 8){
            this.barreFaim9.setVisible(false); 
            this.barreFaim8.setVisible(true);  
            this.barreFaim7.setVisible(false); 
        }

        if (this.faimPlayer === 7){
            this.barreFaim8.setVisible(false); 
            this.barreFaim7.setVisible(true);  
            this.barreFaim6.setVisible(false); 
        }

        if (this.faimPlayer === 6){
            this.barreFaim7.setVisible(false); 
            this.barreFaim6.setVisible(true);  
            this.barreFaim5.setVisible(false); 
        }

        if (this.faimPlayer === 5){
            this.barreFaim6.setVisible(false); 
            this.barreFaim5.setVisible(true);  
            this.barreFaim4.setVisible(false); 
        }

        if (this.faimPlayer === 4){
            this.barreFaim5.setVisible(false); 
            this.barreFaim4.setVisible(true);  
            this.barreFaim3.setVisible(false); 
        }

        if (this.faimPlayer === 3){
            this.barreFaim4.setVisible(false); 
            this.barreFaim3.setVisible(true);  
            this.barreFaim2.setVisible(false); 
        }

        if (this.faimPlayer === 2){
            this.barreFaim3.setVisible(false); 
            this.barreFaim2.setVisible(true);  
            this.barreFaim1.setVisible(false); 
        }

        if (this.faimPlayer === 1){
            this.barreFaim2.setVisible(false); 
            this.barreFaim1.setVisible(true);  
        
        }

        //manger tofu 
        if (this.playerMange === true){ 
            this.faimPlayer += 1; 
        }
        

        //fonction mort de faim 
        if (this.faimPlayer === 0){ 

            this.estMortFaim(); 

        }

        //sons
        if (this.contactPanneauForetHub === true){ 
            this.sound.stopAll(); 
        }

        if (this.kitsuneSautLong === true){ 
            this.sound.play("kitsuneSautLong", {volume : 0.5}); 
        }

        //trampoline
        if (this.playerOnTrampolineForet === true){ 
            this.player.setVelocityY(-400); 
        }

        
    }

//fonctions 

    teleportationForetHub(player, panneauForetHub) { 
        this.scene.start("hubPrincipal2", {pv: this.nombrePv, forme1: this.nouvelleMecanique1, forme2: this.nouvelleMecanique2, faim: this.faimPlayer}); 
        this.contactPanneauForetHub = true; 

    }

    kodamaFade1 (player, kodama1, lightKodama1){ 
        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
            targets : kodama1, 
            alpha : 0, 
            duration : 200, //durée de l'effet de fondu 
            ease : "Sine.InOut",
        }, this); 

        setTimeout(() => { 
            
            this.lightKodama1.setIntensity(0); 
        }, 250);
                
    }

    kodamaFade3 (player, kodama3){ 
        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
            targets : kodama3, 
            alpha : 0, 
            duration : 200, //durée de l'effet de fondu 
            ease : "Sine.InOut",
        }, this); 
        
        setTimeout(() => { 
            
            this.lightKodama3.setIntensity(0); 
        }, 250);

        
    }

    kodamaFade2 (player, kodama2){ 
        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
            targets : kodama2, 
            alpha : 0, 
            duration : 200, //durée de l'effet de fondu 
            ease : "Sine.InOut",
        }, this); 
    
        setTimeout(() => { 
            
            this.lightKodama2.setIntensity(0); 
        }, 250);    

        
    }

    kodamaFade4 (player, kodama4){ 
        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
            targets : kodama4, 
            alpha : 0, 
            duration : 200, //durée de l'effet de fondu 
            ease : "Sine.InOut",
        }, this); 

        setTimeout(() => { 
            
            this.lightKodama4.setIntensity(0); 
        }, 250);
    }

    kodamaFade5 (player, kodama5){ 
        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
            targets : kodama5, 
            alpha : 0, 
            duration : 200, //durée de l'effet de fondu 
            ease : "Sine.InOut",
        }, this); 

        setTimeout(() => { 
            
            this.lightKodama5.setIntensity(0); 
        }, 250);

        
    }

    transformation1(player, potion1){ 

        this.textePotion1.setVisible(true); //faire apparaître la zone de texte 
        this.player.setTint(0xffbb00); 
        this.nouvelleMecanique1 = true; 
        this.potion1.destroy(); //faire disparaître la potion 
        setTimeout(() => { 

            this.player.clearTint(); 
            this.textePotion1.setVisible(false);//faire disparaître la zone de texte 
            

        }, 4000); 

        setTimeout(() => { 
            this.sound.play("itemObtenu", {volume : 0.4}); 
            
        }, 100);

    }

    empoisonner(player, groupeTofus){ 

    
        groupeTofus.setTint(0xc4e0a2); 
        player.setTint(0xc4e0a2); 
        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        this.estInvincible(); 
        groupeTofus.destroy(); 
        this.cameras.main.shake(70, 0.005);
        this.ecranEmpoisonne.setVisible(true); 
        this.playerMange = true; 

        setTimeout(() => { 

            groupeTofus.clearTint(); 
            player.clearTint(); 
            this.ecranEmpoisonne.setVisible(false); 
        }, 2000); 

        setTimeout(() => { 
            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 

      
    }

    soigner(player, tofuSoigneur1){ 


        this.nombrePv += 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        tofuSoigneur1.destroy(); 
        this.ecranSoin.setVisible(true); 
        this.playerMange = true; 

        setTimeout(() => { 

            this.ecranSoin.setVisible(false); 

        }, 2000); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 
    }

    mangerTofu2(player, tofu2){ 
    
        this.tofu2.setTint(0x910303); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            this.playerMange = false; 
            this.tofu2.destroy();
            this.tofu2.clearTint(); 

        }, 0.1); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

    }

    mangerTofu3(player, tofu3){ 
    
        this.tofu3.setTint(0x910303); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            this.playerMange = false; 
            this.tofu3.destroy();
            this.tofu3.clearTint(); 

        }, 0.1); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

    }

    contactPique1(player, pique1){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true); 
        }

        setTimeout(() => { 

            this.player.clearTint(); 
            this.pique1.destroy(); 
            this.ecranDegat.setVisible(false); 
            

        }, 500); 
    }

    contactPique2(player, pique2){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true); 
        }

        setTimeout(() => { 

            this.player.clearTint();
            this.pique2.destroy(); 
            this.ecranDegat.setVisible(false);  
        

        }, 500); 
    }

    contactPique3(player, pique3){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true); 
        }

        setTimeout(() => { 

            this.player.clearTint(); 
            this.pique3.destroy(); 
            this.ecranDegat.setVisible(false);  
        

        }, 500); 
    }

    contactPique4(player, pique4){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true); 
        }

        setTimeout(() => { 

            this.player.clearTint(); 
            this.pique4.destroy(); 
            this.ecranDegat.setVisible(false); 
        

        }, 500); 
    }

    contactPiqueReversed1(player, piqueReversed1){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true);
        }

        setTimeout(() => { 

            this.player.clearTint(); 
            this.piqueReversed1.destroy(); 
            this.ecranDegat.setVisible(false); 
        

        }, 500); 
    }

    contactPiqueReversed2(player, piqueReversed2){ 

        if (this.invincible === false){

            this.player.setTint(0x910f0f);
            this.cameras.main.shake(70, 0.005); //faire vibrer la caméra 
            this.nombrePv -= 20; //diminuer le nombre de PV de 20
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.estInvincible(); 
            this.ecranDegat.setVisible(true);
        }

        setTimeout(() => { 

            this.player.clearTint(); 
            this.piqueReversed2.destroy(); 
            this.ecranDegat.setVisible(false); 
        

        }, 500); 
    }

    sautTrampolineForet(){ 

        this.player.body.setAllowGravity(false); 
        this.playerOnTrampolineForet = true; 

        setTimeout(() => { 

            this.player.body.setAllowGravity(true);
            this.playerOnTrampolineForet = false; 

        }, 200); 


    }

    estInvincible(player){ //permet de rendre le joueur invincible pendant une seconde 
        setTimeout(() => { 
            this.invincible = false
            this.player.setAlpha(1)
        }, 1000); 
        this.invincible = true
        this.player.setAlpha(0.2)
    }

    estMort(player){ 
        if (this.nombrePv <= 0){ 
            this.scene.start("finJeu"); 
        }
    }

    estMortFaim(player){ 
        if (this.faimPlayer <= 0){ 
            this.scene.start("finJeu"); 
        }
    }


}



























class Hub2 extends Phaser.Scene { 
    constructor() { 
        super("hubPrincipal2")
    }

//init

    init(data){ 

        this.nombrePv = data.pv; 
        this.faimPlayer = data.faim; 
        this.nouvelleMecanique1 = data.forme1; 
        this.nouvelleMecanique2 = data.forme2;  

    }

    
//preload 

    preload() { 

        //chargement des tuiles de jeu
        this.load.image("tuiles", "Hub/assetsHub/LD_Hub_copie_3.png"); 

        //chargement de la carte 
        this.load.tilemapTiledJSON("niveauHub", "Hub/tiledHub/Hub_001.json"); 

        //ajout d'un personnage 
        this.load.image("kitsune", "spritesheetkitsuneidle.png", {framewidth: 54, frameHeight: 54}); 
        this.load.spritesheet("testKitsuneRunDroit", "spritesheetkitsunerundroit2.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche", "spritesheetkitsunerungauche2.png", {frameWidth: 126, frameHeight: 54});  
        this.load.spritesheet("testKitsuneRunDroit3", "spritesheetkitsunerundroit4.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche3", "spritesheetkitsunerungauche4.png", {frameWidth: 126, frameHeight: 54}); 
        

        //ui test
        this.load.image("pv100", "Hub/assetsHub/uiPv100.png"); 
        this.load.image("pv80", "Hub/assetsHub/uiPv80.png"); 
        this.load.image("pv60", "Hub/assetsHub/uiPv60.png"); 
        this.load.image("pv40", "Hub/assetsHub/uiPv40.png"); 
        this.load.image("pv20", "Hub/assetsHub/uiPv20.png"); 

        //panneaux
        this.load.image("panneauHubVersForet", "Hub/assetsHub/panneauForet.png"); 
        this.load.image("panneauHubVersRiviere", "Hub/assetsHub/panneauRiviere.png"); 

        //boule de feu 
        this.load.image("bouleDeFeu", "Hub/assetsHub/bouleFeu.png"); 

        //ecran
        this.load.image("ecranEmpoisonne", "Riviere/empoisonne.png"); 

        //musique
        this.load.audio("musiqueHub", "Hub/Oboro.mp3"); 

        //barre de faim 
        this.load.image("barreFaim1", "barreFaim/1.png"); 
        this.load.image("barreFaim2", "barreFaim/2.png"); 
        this.load.image("barreFaim3", "barreFaim/3.png"); 
        this.load.image("barreFaim4", "barreFaim/4.png"); 
        this.load.image("barreFaim5", "barreFaim/5.png"); 
        this.load.image("barreFaim6", "barreFaim/6.png"); 
        this.load.image("barreFaim7", "barreFaim/7.png"); 
        this.load.image("barreFaim8", "barreFaim/8.png"); 
        this.load.image("barreFaim9", "barreFaim/9.png"); 
        this.load.image("barreFaim10", "barreFaim/10.png"); 
        this.load.image("barreFaim11", "barreFaim/11.png"); 
        this.load.image("barreFaim12", "barreFaim/12.png"); 
        this.load.image("barreFaim13", "barreFaim/13.png"); 
        this.load.image("barreFaim14", "barreFaim/14.png"); 
        this.load.image("barreFaim15", "barreFaim/15.png"); 
        this.load.image("barreFaim16", "barreFaim/16.png"); 
        this.load.image("barreFaim17", "barreFaim/17.png"); 
        this.load.image("barreFaim18", "barreFaim/18.png"); 
        this.load.image("barreFaim19", "barreFaim/19.png"); 
        this.load.image("barreFaim20", "barreFaim/20.png"); 




    }

    
//create 

    create() { 

        //importation de Tiled dans Phaser 
        //chargement de la carte 
        const niveauHubPrincipal = this.add.tilemap("niveauHub"); 

        //chargement du jeu de tuiles 
        const tilesetHub = niveauHubPrincipal.addTilesetImage (
            "LD_Hub_copie_3", 
            "tuiles"
        ); 

        //les calques 
        const calque_background = niveauHubPrincipal.createLayer(
            "background", 
            tilesetHub
        ); 

        const calque_invisible = niveauHubPrincipal.createLayer(
            "invisible", 
            tilesetHub
        ); 

        calque_invisible.setVisible(false); 

        //joueur 
        this.player = this.physics.add.sprite(1100,300, "kitsune"); 
        this.player.setCollideWorldBounds(true); 
        this.player.setSize(80,40); 

      

        //animations 
        this.anims.create({
            key : "right3", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit3", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left3", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche3", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });

        this.anims.create({
            key : "idle3", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 2, end: 3 }), 
            frameRate : 2,
            repeat : -1
        });

        

        

        //panneaux
        this.panneauHubForet = this.physics.add.image(1240, 300, "panneauHubVersForet").setInteractive(); 
        this.contactPanneauHubForet = false; 
        this.panneauHubRiviere = this.physics.add.image(50, 280, "panneauHubVersRiviere").setInteractive(); 
        

        //uiPv

        this.invincible = false; 
        this.nombrePv = 100; //le joueur reprend 100PV quand il revient dans le hub ! 
        this.pvPlayer = this.add.text(45,150,"PV : " + this.nombrePv,{fontSize:'16px',fill:'#000'}).setScrollFactor(0);
        //pv = 100
        this.pv100 = this.physics.add.image(80, 80, "pv100").setScrollFactor(0);
        this.pv100.body.setAllowGravity(false); 
        this.pv100.setScale(0.9);
        this.pv100.setVisible(false); 
        //pv = 80 
        this.pv80 = this.physics.add.image(80, 80, "pv80").setScrollFactor(0);
        this.pv80.body.setAllowGravity(false); 
        this.pv80.setScale(0.9);
        this.pv80.setVisible(false); 
        //pv = 60 
        this.pv60 = this.physics.add.image(80, 80, "pv60").setScrollFactor(0);
        this.pv60.body.setAllowGravity(false); 
        this.pv60.setScale(0.9);
        this.pv60.setVisible(false); 
        //pv = 40 
        this.pv40 = this.physics.add.image(80, 80, "pv40").setScrollFactor(0);
        this.pv40.body.setAllowGravity(false); 
        this.pv40.setScale(0.9);
        this.pv40.setVisible(false); 
        //pv = 20 
        this.pv20 = this.physics.add.image(80, 80, "pv20").setScrollFactor(0);
        this.pv20.body.setAllowGravity(false); 
        this.pv20.setScale(0.9);
        this.pv20.setVisible(false); 

        //barre de faim 
        
        this.faimPlayer = 20; 
        this.playerMange = false; 

        this.barreFaim20 = this.physics.add.image(448, 30, "barreFaim20").setScrollFactor(0); 
        this.barreFaim20.body.setAllowGravity(false); 
        this.barreFaim20.setVisible(false); 

        this.barreFaim19 = this.physics.add.image(448, 30, "barreFaim19").setScrollFactor(0); 
        this.barreFaim19.body.setAllowGravity(false); 
        this.barreFaim19.setVisible(false); 

        this.barreFaim18 = this.physics.add.image(448, 30, "barreFaim18").setScrollFactor(0); 
        this.barreFaim18.body.setAllowGravity(false); 
        this.barreFaim18.setVisible(false); 

        this.barreFaim17 = this.physics.add.image(448, 30, "barreFaim17").setScrollFactor(0); 
        this.barreFaim17.body.setAllowGravity(false); 
        this.barreFaim17.setVisible(false); 

        this.barreFaim16 = this.physics.add.image(448, 30, "barreFaim16").setScrollFactor(0); 
        this.barreFaim16.body.setAllowGravity(false); 
        this.barreFaim16.setVisible(false); 

        this.barreFaim15 = this.physics.add.image(448, 30, "barreFaim15").setScrollFactor(0); 
        this.barreFaim15.body.setAllowGravity(false); 
        this.barreFaim15.setVisible(false); 

        this.barreFaim14 = this.physics.add.image(448, 30, "barreFaim14").setScrollFactor(0); 
        this.barreFaim14.body.setAllowGravity(false); 
        this.barreFaim14.setVisible(false); 

        this.barreFaim13 = this.physics.add.image(448, 30, "barreFaim13").setScrollFactor(0); 
        this.barreFaim13.body.setAllowGravity(false); 
        this.barreFaim13.setVisible(false); 

        this.barreFaim12 = this.physics.add.image(448, 30, "barreFaim12").setScrollFactor(0); 
        this.barreFaim12.body.setAllowGravity(false); 
        this.barreFaim12.setVisible(false); 

        this.barreFaim11 = this.physics.add.image(448, 30, "barreFaim11").setScrollFactor(0); 
        this.barreFaim11.body.setAllowGravity(false); 
        this.barreFaim11.setVisible(false); 

        this.barreFaim10 = this.physics.add.image(448, 30, "barreFaim10").setScrollFactor(0); 
        this.barreFaim10.body.setAllowGravity(false); 
        this.barreFaim10.setVisible(false); 

        this.barreFaim9 = this.physics.add.image(448, 30, "barreFaim9").setScrollFactor(0); 
        this.barreFaim9.body.setAllowGravity(false); 
        this.barreFaim9.setVisible(false); 

        this.barreFaim8 = this.physics.add.image(448, 30, "barreFaim8").setScrollFactor(0); 
        this.barreFaim8.body.setAllowGravity(false); 
        this.barreFaim8.setVisible(false); 

        this.barreFaim7 = this.physics.add.image(448, 30, "barreFaim7").setScrollFactor(0); 
        this.barreFaim7.body.setAllowGravity(false); 
        this.barreFaim7.setVisible(false); 

        this.barreFaim6 = this.physics.add.image(448, 30, "barreFaim6").setScrollFactor(0); 
        this.barreFaim6.body.setAllowGravity(false); 
        this.barreFaim6.setVisible(false); 

        this.barreFaim5 = this.physics.add.image(448, 30, "barreFaim5").setScrollFactor(0); 
        this.barreFaim5.body.setAllowGravity(false); 
        this.barreFaim5.setVisible(false); 

        this.barreFaim4 = this.physics.add.image(448, 30, "barreFaim4").setScrollFactor(0); 
        this.barreFaim4.body.setAllowGravity(false); 
        this.barreFaim4.setVisible(false); 

        this.barreFaim3 = this.physics.add.image(448, 30, "barreFaim3").setScrollFactor(0); 
        this.barreFaim3.body.setAllowGravity(false); 
        this.barreFaim3.setVisible(false); 

        this.barreFaim2 = this.physics.add.image(448, 30, "barreFaim2").setScrollFactor(0); 
        this.barreFaim2.body.setAllowGravity(false); 
        this.barreFaim2.setVisible(false); 

        this.barreFaim1 = this.physics.add.image(448, 30, "barreFaim1").setScrollFactor(0); 
        this.barreFaim1.body.setAllowGravity(false); 
        this.barreFaim1.setVisible(false); 

        

        if (this.faimPlayer > 0){ 

            setInterval(() => { 

                this.faimPlayer -= 1; 
                //dans le create this.faimPlayer = 20; 
                
            }, 8000); 
            
        }
        
        

        
        //bool
        calque_invisible.setCollisionByProperty({ estSolide : true}); 

        //collisions 
        this.physics.add.collider(this.player, calque_invisible); 
        this.physics.add.collider(this.panneauHubForet, calque_invisible); 
        this.physics.add.collider(this.player, this.panneauHubForet, this.teleportationHubForet, null, this); 
        this.physics.add.collider(this.panneauHubRiviere, calque_invisible); 
        this.physics.add.collider(this.player, this.panneauHubRiviere, this.teleportationHubRiviere, null, this); 
       

        //immovable
        this.panneauHubForet.setImmovable();
        this.panneauHubRiviere.setImmovable();       

        //---création d'une caméra---  
        this.physics.world.setBounds(0,0,1280,534); 
        this.cameras.main.setBounds(0, 0, 1280, 534);
        this.cameras.main.zoom = 1;

        //---suivi du joueur par la caméra--- 
        this.cameras.main.startFollow(this.player);

        //boutons clavier 
        this.cursors = this.input.keyboard.createCursorKeys(); 

        //musique 
        //this.sound.play("musiqueHub", {volume : 0}); 
        
    
    
    
    }

//update 

    update() {

        

        //clavier 
        if (this.cursors.left.isDown){ //si la touche gauche est appuyée
            this.player.setVelocityX(-220); //alors vitesse négative en X
            this.playerLeft = true; 
            this.playerRight = false; 
            this.player.anims.play("left3", true); 
            
            }

        else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée
            this.player.setVelocityX(220); //alors vitesse positive en X
            this.playerLeft = false; 
            this.playerRight = true; 
            this.player.anims.play("right3", true); 
            
            }

        else{ // sinon
            this.player.setVelocityX(0); //vitesse nulle
            this.player.anims.play("idle3", true); 
            
            }

        if (this.cursors.up.isDown && this.player.body.blocked.down){
            //si touche haut appuyée ET que le perso touche le sol
            this.player.setVelocityY(-340); //alors vitesse verticale négative
        
            }

        if (this.cursors.space.isDown && this.player.body.blocked.down){ 

            //console.log.apply("Space appuyé"); 
            this.player.setVelocityY(-500); 
        }

        
        

        //ui pv 
        if (this.nombrePv === 100){
            this.pv100.setVisible(true);  
        }
        
        if (this.nombrePv === 80){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
        }
    
        if (this.nombrePv === 60){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
        }
    
        if (this.nombrePv === 40){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
        }
    
        if (this.nombrePv === 20){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        //barre de faim 

        if (this.faimPlayer === 20){
            this.barreFaim20.setVisible(true);  
            this.barreFaim19.setVisible(false); 
        }

        if (this.faimPlayer === 19){
            this.barreFaim20.setVisible(false); 
            this.barreFaim19.setVisible(true);  
            this.barreFaim18.setVisible(false); 
        }

        if (this.faimPlayer === 18){
            this.barreFaim19.setVisible(false); 
            this.barreFaim18.setVisible(true);  
            this.barreFaim17.setVisible(false); 
        }

        if (this.faimPlayer === 17){
            this.barreFaim18.setVisible(false); 
            this.barreFaim17.setVisible(true);  
            this.barreFaim16.setVisible(false); 
        }

        if (this.faimPlayer === 16){
            this.barreFaim17.setVisible(false); 
            this.barreFaim16.setVisible(true);  
            this.barreFaim15.setVisible(false); 
        }

        if (this.faimPlayer === 15){
            this.barreFaim16.setVisible(false); 
            this.barreFaim15.setVisible(true);  
            this.barreFaim14.setVisible(false); 
        }

        if (this.faimPlayer === 14){
            this.barreFaim15.setVisible(false); 
            this.barreFaim14.setVisible(true);  
            this.barreFaim13.setVisible(false); 
        }

        if (this.faimPlayer === 13){
            this.barreFaim14.setVisible(false); 
            this.barreFaim13.setVisible(true);  
            this.barreFaim12.setVisible(false); 
        }

        if (this.faimPlayer === 12){
            this.barreFaim13.setVisible(false); 
            this.barreFaim12.setVisible(true);  
            this.barreFaim11.setVisible(false); 
        }

        if (this.faimPlayer === 11){
            this.barreFaim12.setVisible(false); 
            this.barreFaim11.setVisible(true);  
            this.barreFaim10.setVisible(false); 
        }

        if (this.faimPlayer === 10){
            this.barreFaim11.setVisible(false); 
            this.barreFaim10.setVisible(true);  
            this.barreFaim9.setVisible(false); 
        }

        if (this.faimPlayer === 9){
            this.barreFaim10.setVisible(false); 
            this.barreFaim9.setVisible(true);  
            this.barreFaim8.setVisible(false); 
        }

        if (this.faimPlayer === 8){
            this.barreFaim9.setVisible(false); 
            this.barreFaim8.setVisible(true);  
            this.barreFaim7.setVisible(false); 
        }

        if (this.faimPlayer === 7){
            this.barreFaim8.setVisible(false); 
            this.barreFaim7.setVisible(true);  
            this.barreFaim6.setVisible(false); 
        }

        if (this.faimPlayer === 6){
            this.barreFaim7.setVisible(false); 
            this.barreFaim6.setVisible(true);  
            this.barreFaim5.setVisible(false); 
        }

        if (this.faimPlayer === 5){
            this.barreFaim6.setVisible(false); 
            this.barreFaim5.setVisible(true);  
            this.barreFaim4.setVisible(false); 
        }

        if (this.faimPlayer === 4){
            this.barreFaim5.setVisible(false); 
            this.barreFaim4.setVisible(true);  
            this.barreFaim3.setVisible(false); 
        }

        if (this.faimPlayer === 3){
            this.barreFaim4.setVisible(false); 
            this.barreFaim3.setVisible(true);  
            this.barreFaim2.setVisible(false); 
        }

        if (this.faimPlayer === 2){
            this.barreFaim3.setVisible(false); 
            this.barreFaim2.setVisible(true);  
            this.barreFaim1.setVisible(false); 
        }

        if (this.faimPlayer === 1){
            this.barreFaim2.setVisible(false); 
            this.barreFaim1.setVisible(true);  
        
        }

        //manger
        if (this.faimPlayer > 20){ 
            this.faimPlayer = 20; 
        }

        

        //fonction mort de faim 
        if (this.faimPlayer === 0){ 

            this.estMortFaim(); 

        }


        //teleportation
        if (this.contactPanneauHubForet === true){ 
            this.sound.stopAll(); 
        }

        if (this.contactPanneauHubRiviere === true){ 
            this.sound.stopAll(); 
        }

        

        console.log(this.faimPlayer); 

        if (this.faimPlayer > 0){ 

            setInterval(this.playerFaim, 1000);
            
        }

        
        


    }

//fonctions 

    
    teleportationHubForet(player, panneauHubForet){ 

        this.scene.start("niveauForet", { pv: this.nombrePv, faim: this.faimPlayer, forme1: this.nouvelleMecanique1, forme2: this.nouvelleMecanique2}); 
        this.contactPanneauHubForet = true;
    }

    teleportationHubRiviere(player, panneauHubForet){ 

        this.scene.start("niveauRiviere", { pv: this.nombrePv, faim: this.faimPlayer, forme1: this.nouvelleMecanique1, forme2: this.nouvelleMecanique2}); 
        this.contactPanneauHubRiviere = true;
    }


    estMortFaim(player){ 
        if (this.faimPlayer <= 0){ 
            this.scene.start("finJeu"); 
        }
    }


}





































//niveau de la rivière -----------------------------------------------------------------------------------------------------------------

class Riviere extends Phaser.Scene { 
    constructor() { 
        super("niveauRiviere")
    }

//init

    init(data){ 

        this.nombrePv = data.pv; 
        this.faimPlayer = data.faim; 

    }

//preload 

    preload() { 

        //chargement des tuiles de jeu

        this.load.image("tuilesRiviere", "Riviere/LD_Riviere_001.png"); 

        //chargement de la carte 
        this.load.tilemapTiledJSON("niveauRiviere", "Riviere/tiledRiviere.json"); 

        //ajout d'un personnage 
        //this.load.image("kitsune", "Foret/Essai_kitsune8"); 
        //this.load.spritesheet("testKitsuneRunDroit", "spritesheetkitsunerundroit2.png", {frameWidth: 126, frameHeight: 54});
        //this.load.spritesheet("testKitsuneRunGauche", "spritesheetkitsunerungauche2.png", {frameWidth: 126, frameHeight: 54});

        //petits tofus
        this.load.image("tofu4", "Hub/assetsHub/tofu.png"); 
        this.load.image("tofu5", "Hub/assetsHub/tofu.png"); 
        this.load.image("tofu6", "Hub/assetsHub/tofu.png"); 
        this.load.image("tofuSoigneur2", "Hub/assetsHub/tofuSoigneur.png"); 

        //ui
        this.load.image("pv100", "Foret/uiPv100.png"); 
        this.load.image("pv80", "Foret/uiPv80.png"); 
        this.load.image("pv60", "Foret/uiPv60.png"); 
        this.load.image("pv40", "Foret/uiPv40.png"); 
        this.load.image("pv20", "Foret/uiPv20.png"); 

        //panneau
        

        //potion de vieilissement 
        this.load.image("potion2", "Foret/potion.png"); 
        //this.load.image("textePotion1", "Foret/zoneTexte.png"); 


        this.load.audio("musiqueRiviere", "Riviere/Sakuya2.mp3"); 


        //concombre
        this.load.image("concombre", "Riviere/concombre.png"); 
        this.load.image("concombreUi", "Riviere/concombre.png"); 
        this.load.spritesheet("concombreCollectible1", "Riviere/concombreAnim.png", {frameWidth: 64, frameHeight: 64});  
        this.load.spritesheet("concombreCollectible2", "Riviere/concombreAnim.png", {frameWidth: 64, frameHeight: 64});  
        this.load.spritesheet("concombreCollectible3", "Riviere/concombreAnim.png", {frameWidth: 64, frameHeight: 64});  
        

        //kappa
        this.load.image("kappa1", "Riviere/kappa.png"); 
        this.load.image("kappa2", "Riviere/kappa.png"); 
        this.load.image("kappa3", "Riviere/kappa.png"); 
        this.load.image("blocInvisible5", "Riviere/blocInvisible.png"); 
        this.load.image("blocInvisible6", "Riviere/blocInvisible.png"); 
        this.load.image("messageShift", "Riviere/messageShift.png"); 

        this.load.image("heart", "Riviere/heart.png"); 
        this.load.image("heart1sur1Kappa1", "Riviere/heart1sur1.png"); 

        //musique
        this.load.audio("bruitMangerTofu", "Sons/cronch1.mp3"); 

        //plateformes 
        this.load.image("plateformeNuage", "Riviere/plateformeNuage.png"); 
        this.load.image("blocInvisible1", "Riviere/blocInvisible.png"); 
        this.load.image("blocInvisible2", "Riviere/blocInvisible.png"); 
        this.load.image("plateformeNuage2", "Riviere/plateformeNuage2.png"); 
        this.load.image("blocInvisible7", "Riviere/blocInvisible.png"); 
        this.load.image("blocInvisible8", "Riviere/blocInvisible.png"); 

        this.load.image("plateformeNuage3", "Riviere/plateformeNuage3.png"); 
        this.load.image("plateformeNuage4", "Riviere/plateformeNuage3.png"); 
        this.load.image("plateformeNuage5", "Riviere/plateformeNuage3.png"); 
        this.load.image("plateformeNuage6", "Riviere/plateformeNuage.png"); 

        this.load.image("plateformeCerfVolant1", "Riviere/cerfVolant.png"); 
        this.load.image("blocInvisible3", "Riviere/blocInvisible.png"); 
        this.load.image("blocInvisible4", "Riviere/blocInvisible.png"); 
        this.load.image("trampoline", "Riviere/trampo2.png"); 

        //ecrans 
        this.load.image("ecranDegat", "Riviere/degat.png"); 
        this.load.image("ecranEmpoisonne", "Riviere/empoisonne.png"); 
        this.load.image("ecranSoin", "Riviere/soin.png"); 

        //panneau 
        this.load.image("panneauRiviereVersBoss", "Riviere/panneauBoss.png"); 

        this.load.audio("itemObtenu", "Sons/item2.mp3"); 

        //premier plan
        this.load.image("premierPlanRiviere", "Riviere/premierPlanRiviere.png"); 

        
    }

//create

create() { 

    //importation de Tiled dans Phaser -------------------------------------------------------------- 
    //chargement de la carte 
    const niveauRiviere = this.add.tilemap("niveauRiviere"); 

    //chargement du jeu de tuiles 
    const tilesetRiviere = niveauRiviere.addTilesetImage (
        "LD_Riviere_001", 
        "tuilesRiviere"
    ); 

    //les calques 
    const calque_backgroundRiviere = niveauRiviere.createLayer(
        "calque_backgroundRiviere", 
        tilesetRiviere
    ); 

    const calque_invisibleRiviere = niveauRiviere.createLayer(
        "calque_invisibleRiviere", 
        tilesetRiviere
    ); 

    calque_invisibleRiviere.setVisible(false); 

    

    //joueur -----------------------------------------------------------------------------------------
    this.player = this.physics.add.sprite(3100,200, "kitsune"); 
    this.player.setCollideWorldBounds(true); 
    this.player.setBounce(0.1);
    this.player.setSize(80,40); 
    this.kitsuneSautLong = false; 

    //animations 
    this.anims.create({
        key : "right3", 
        frames : this.anims.generateFrameNumbers("testKitsuneRunDroit3", {start: 0, end: 7 }), 
        frameRate : 9,
        //repeat : -1
    }); 

    this.anims.create({
        key : "left3", 
        frames : this.anims.generateFrameNumbers("testKitsuneRunGauche3", {start: 0, end: 7 }), 
        frameRate : 9,
        //repeat : -1
    });

    this.anims.create({
        key : "right5", 
        frames : this.anims.generateFrameNumbers("testKitsuneRunDroit5", {start: 0, end: 7 }), 
        frameRate : 9,
        //repeat : -1
    }); 

    this.anims.create({
        key : "left5", 
        frames : this.anims.generateFrameNumbers("testKitsuneRunGauche5", {start: 0, end: 7 }), 
        frameRate : 9,
        //repeat : -1
    });

    this.anims.create({
        key : "idle3", 
        frames : this.anims.generateFrameNumbers("kitsune", {start: 2, end: 3 }), 
        frameRate : 2,
        repeat : -1
    });
    
    this.anims.create({
        key : "idle5", 
        frames : this.anims.generateFrameNumbers("kitsune", {start: 4, end: 5 }), 
        frameRate : 2,
        repeat : -1
    });

    //panneau
    //this.panneauForetHub = this.physics.add.image(90, 196, "panneauForetVersHub").setInteractive();

    //tofus ------------------------------------------------------------------------------------------
    this.groupeTofus = this.physics.add.group({ 
        key : "groupeTofus", repeat : 3, 
        setXY : { x : 2800, y : 0, stepX : -800 }
    }); 

    this.groupeTofus.children.iterate(function (child) { 
        child.setBounce(1); 
        child.setCollideWorldBounds(true);
        child.allowGravity = false; 
        child.setVelocity(Phaser.Math.Between(-100, 100), 10);
        child.setScale(0.8); 
       

    }); 

    this.physics.add.collider(this.groupeTofus, calque_invisibleRiviere); 
    this.physics.add.overlap(this.player, this.groupeTofus, this.empoisonner, null, this ); 

    //tofus 
    this.tofu4 = this.physics.add.image(1660, 300, "tofu4"); 
    this.tofu4.setImmovable(); 
    this.tofu4.setVisible(true); 
    this.tofu4.setScale(0.8); 

    this.tofu5 = this.physics.add.image(500, 400, "tofu5"); 
    this.tofu5.setImmovable(); 
    this.tofu5.setVisible(true); 
    this.tofu5.setScale(0.8); 

    this.tofu6 = this.physics.add.image(2520, 95, "tofu6"); 
    this.tofu6.setImmovable(); 
    this.tofu6.setVisible(true); 
    this.tofu6.body.setAllowGravity(false); 
    this.tofu6.setScale(0.8); 

    this.tofuSoigneur2 = this.physics.add.image(35, 200, "tofuSoigneur2"); 
    this.tofuSoigneur2.setImmovable(); 
    this.tofuSoigneur2.setVisible(true);  
    this.tofuSoigneur2.setScale(0.8); 

    //potion de vieillisement passe de 3 à 5 queues 
    this.potion2 = this.physics.add.image(2920, 280, "potion2"); 
    this.potion2.setImmovable(); 
    this.potion2.setScale(0.6); 
    this.nouvelleMecanique2 = false; 

    //message shift 
    this.messageShift = this.physics.add.image(448, 224, "messageShift").setScrollFactor(0); 
    this.messageShift.body.setAllowGravity(false); 
    this.messageShift.setVisible(false); 
    this.messageShift.setScale(2); 
    this.messageShift.setDepth(1); 


    //uiPv ------------------------------------------------------------------------------------------

    this.ecranDegat = this.physics.add.image(448, 224, "ecranDegat").setScrollFactor(0); 
    this.ecranDegat.body.setAllowGravity(false); 
    this.ecranDegat.setImmovable(); 
    this.ecranDegat.setVisible(false); 
    this.ecranDegat.setAlpha(0.6); 

    this.ecranEmpoisonne= this.physics.add.image(448, 224, "ecranEmpoisonne").setScrollFactor(0); 
    this.ecranEmpoisonne.body.setAllowGravity(false); 
    this.ecranEmpoisonne.setImmovable(); 
    this.ecranEmpoisonne.setVisible(false); 
    this.ecranEmpoisonne.setAlpha(0.6); 

    this.ecranSoin= this.physics.add.image(448, 224, "ecranSoin").setScrollFactor(0); 
    this.ecranSoin.body.setAllowGravity(false); 
    this.ecranSoin.setImmovable(); 
    this.ecranSoin.setVisible(false); 
    this.ecranSoin.setAlpha(0.6); 

    this.invincible = false; 
    //this.nombrePv = 100; 
    this.pvPlayer = this.add.text(45,150,"PV : " + this.nombrePv,{fontSize:'16px',fill:'#000'}).setScrollFactor(0);
    
    //pv = 100
    this.pv100 = this.physics.add.image(80, 80, "pv100").setScrollFactor(0);
    this.pv100.body.setAllowGravity(false); 
    this.pv100.setScale(0.9);
    this.pv100.setVisible(false); 
    this.pv100.setDepth(1); 
    
    //pv = 80 
    this.pv80 = this.physics.add.image(80, 80, "pv80").setScrollFactor(0);
    this.pv80.body.setAllowGravity(false); 
    this.pv80.setScale(0.9);
    this.pv80.setVisible(false); 
    this.pv80.setDepth(1); 
    //pv = 60 
    this.pv60 = this.physics.add.image(80, 80, "pv60").setScrollFactor(0);
    this.pv60.body.setAllowGravity(false); 
    this.pv60.setScale(0.9);
    this.pv60.setVisible(false); 
    this.pv60.setDepth(1); 
    //pv = 40 
    this.pv40 = this.physics.add.image(80, 80, "pv40").setScrollFactor(0);
    this.pv40.body.setAllowGravity(false); 
    this.pv40.setScale(0.9);
    this.pv40.setVisible(false); 
    this.pv40.setDepth(1); 
    //pv = 20 
    this.pv20 = this.physics.add.image(80, 80, "pv20").setScrollFactor(0);
    this.pv20.body.setAllowGravity(false); 
    this.pv20.setScale(0.9);
    this.pv20.setVisible(false); 
    this.pv20.setDepth(1); 

    //barre de faim 
        
    //this.faimPlayer = 20; 
    this.playerMange = false; 

    this.barreFaim20 = this.physics.add.image(448, 30, "barreFaim20").setScrollFactor(0); 
    this.barreFaim20.body.setAllowGravity(false); 
    this.barreFaim20.setVisible(false); 
    this.barreFaim20.setDepth(1); 

    this.barreFaim19 = this.physics.add.image(448, 30, "barreFaim19").setScrollFactor(0); 
    this.barreFaim19.body.setAllowGravity(false); 
    this.barreFaim19.setVisible(false); 
    this.barreFaim19.setDepth(1); 

    this.barreFaim18 = this.physics.add.image(448, 30, "barreFaim18").setScrollFactor(0); 
    this.barreFaim18.body.setAllowGravity(false); 
    this.barreFaim18.setVisible(false); 
    this.barreFaim18.setDepth(1); 

    this.barreFaim17 = this.physics.add.image(448, 30, "barreFaim17").setScrollFactor(0); 
    this.barreFaim17.body.setAllowGravity(false); 
    this.barreFaim17.setVisible(false); 
    this.barreFaim17.setDepth(1); 

    this.barreFaim16 = this.physics.add.image(448, 30, "barreFaim16").setScrollFactor(0); 
    this.barreFaim16.body.setAllowGravity(false); 
    this.barreFaim16.setVisible(false); 
    this.barreFaim16.setDepth(1); 

    this.barreFaim15 = this.physics.add.image(448, 30, "barreFaim15").setScrollFactor(0); 
    this.barreFaim15.body.setAllowGravity(false); 
    this.barreFaim15.setVisible(false); 
    this.barreFaim15.setDepth(1); 

    this.barreFaim14 = this.physics.add.image(448, 30, "barreFaim14").setScrollFactor(0); 
    this.barreFaim14.body.setAllowGravity(false); 
    this.barreFaim14.setVisible(false); 
    this.barreFaim14.setDepth(1); 

    this.barreFaim13 = this.physics.add.image(448, 30, "barreFaim13").setScrollFactor(0); 
    this.barreFaim13.body.setAllowGravity(false); 
    this.barreFaim13.setVisible(false); 
    this.barreFaim13.setDepth(1); 

    this.barreFaim12 = this.physics.add.image(448, 30, "barreFaim12").setScrollFactor(0); 
    this.barreFaim12.body.setAllowGravity(false); 
    this.barreFaim12.setVisible(false); 
    this.barreFaim12.setDepth(1); 

    this.barreFaim11 = this.physics.add.image(448, 30, "barreFaim11").setScrollFactor(0); 
    this.barreFaim11.body.setAllowGravity(false); 
    this.barreFaim11.setVisible(false); 
    this.barreFaim11.setDepth(1); 

    this.barreFaim10 = this.physics.add.image(448, 30, "barreFaim10").setScrollFactor(0); 
    this.barreFaim10.body.setAllowGravity(false); 
    this.barreFaim10.setVisible(false); 
    this.barreFaim10.setDepth(1); 

    this.barreFaim9 = this.physics.add.image(448, 30, "barreFaim9").setScrollFactor(0); 
    this.barreFaim9.body.setAllowGravity(false); 
    this.barreFaim9.setVisible(false); 
    this.barreFaim9.setDepth(1); 

    this.barreFaim8 = this.physics.add.image(448, 30, "barreFaim8").setScrollFactor(0); 
    this.barreFaim8.body.setAllowGravity(false); 
    this.barreFaim8.setVisible(false); 
    this.barreFaim8.setDepth(1); 

    this.barreFaim7 = this.physics.add.image(448, 30, "barreFaim7").setScrollFactor(0); 
    this.barreFaim7.body.setAllowGravity(false); 
    this.barreFaim7.setVisible(false); 
    this.barreFaim7.setDepth(1); 

    this.barreFaim6 = this.physics.add.image(448, 30, "barreFaim6").setScrollFactor(0); 
    this.barreFaim6.body.setAllowGravity(false); 
    this.barreFaim6.setVisible(false); 
    this.barreFaim6.setDepth(1); 

    this.barreFaim5 = this.physics.add.image(448, 30, "barreFaim5").setScrollFactor(0); 
    this.barreFaim5.body.setAllowGravity(false); 
    this.barreFaim5.setVisible(false); 
    this.barreFaim5.setDepth(1); 

    this.barreFaim4 = this.physics.add.image(448, 30, "barreFaim4").setScrollFactor(0); 
    this.barreFaim4.body.setAllowGravity(false); 
    this.barreFaim4.setVisible(false); 
    this.barreFaim4.setDepth(1); 

    this.barreFaim3 = this.physics.add.image(448, 30, "barreFaim3").setScrollFactor(0); 
    this.barreFaim3.body.setAllowGravity(false); 
    this.barreFaim3.setVisible(false); 
    this.barreFaim3.setDepth(1); 

    this.barreFaim2 = this.physics.add.image(448, 30, "barreFaim2").setScrollFactor(0); 
    this.barreFaim2.body.setAllowGravity(false); 
    this.barreFaim2.setVisible(false); 
    this.barreFaim2.setDepth(1); 

    this.barreFaim1 = this.physics.add.image(448, 30, "barreFaim1").setScrollFactor(0); 
    this.barreFaim1.body.setAllowGravity(false); 
    this.barreFaim1.setVisible(false); 
    this.barreFaim1.setDepth(1); 

    if (this.faimPlayer > 0){ 

        setInterval(() => { 

            this.faimPlayer -= 1; 
            //dans le create this.faimPlayer = 20; 
                
        }, 8000); 
            
    }
    //kappa ------------------------------------------------------------------------------------------
    this.kappa1 = this.physics.add.image(1920, 440, "kappa1"); 
    this.kappa1.setSize(32,64); 
    this.kappa1.setImmovable();
    this.kappa1.setVisible(true); 

    this.kappa2 = this.physics.add.image(1330, 300, "kappa2"); 
    this.kappa2.setSize(32,64); 
    this.kappa2.setImmovable();
    this.kappa2.setVisible(true); 
    this.kappa2Left = false; 
    this.kappa2Right = false; 
    this.kappa2.setVelocityX(70); 

    this.kappa3 = this.physics.add.image(220, 470, "kappa3"); 
    this.kappa3.setSize(32,64); 
    this.kappa3.setImmovable();
    this.kappa3.setVisible(true); 

    this.contactKappaWithPlayer = false; 

    this.blocInvisible5 = this.physics.add.image(1270, 400, "blocInvisible5"); 
    this.blocInvisible5.setImmovable(); 
    this.blocInvisible5.body.setAllowGravity(false); 
    this.blocInvisible5.setScale(0.5); 
    this.blocInvisible5.setVisible(false); 

    this.blocInvisible6 = this.physics.add.image(1590, 400, "blocInvisible6"); 
    this.blocInvisible6.setImmovable(); 
    this.blocInvisible6.body.setAllowGravity(false); 
    this.blocInvisible6.setScale(0.5); 
    this.blocInvisible6.setVisible(false); 



    //coeurs 
    //this.heart = this.physics.add.image(-10, -10, "heart"); 
    //this.heart.setVisible(false);  
    //this.heart.setScale(0.8);
    //this.heart1sur1Kappa1 = this.physics.add.image(-10, -10, "heart1sur1Kappa1"); 
    //this.heart1sur1Kappa1.setVisible(false);  
    //this.heart1sur1Kappa1.setScale(0.6);
    this.loveKappa1 = false; 
    this.nombreConcombreKappa1 = 0; 

    //concombre 
    this.concombre = this.physics.add.image(-10, -10, "concombre").setVisible(false); 
    this.tirer = false; 
    this.concombre.setScale(0.5);
    
    //concombres collectibles 
    //1
    this.concombreCollectible1 = this.physics.add.sprite(2500, 300, "concombreCollectible1"); 
    this.anims.create({
        key : "concombreCollectible1Anim", 
        frames : this.anims.generateFrameNumbers("concombreCollectible1", {start: 0, end: 3 }), 
        frameRate : 4,
        repeat : -1
    }); 
    this.concombreCollectible1.anims.play("concombreCollectible1Anim"); 
    this.concombreCollectible1.setScale(0.6); 

    

    //2
    this.concombreCollectible2 = this.physics.add.sprite(2700, 450, "concombreCollectible2"); 
    this.anims.create({
        key : "concombreCollectible2Anim", 
        frames : this.anims.generateFrameNumbers("concombreCollectible2", {start: 0, end: 3 }), 
        frameRate : 4,
        repeat : -1
    }); 
    this.concombreCollectible2.anims.play("concombreCollectible2Anim"); 
    this.concombreCollectible2.setScale(0.6); 

    //3
    this.concombreCollectible3 = this.physics.add.sprite(1200, 300, "concombreCollectible3"); 
    this.anims.create({
        key : "concombreCollectible3Anim", 
        frames : this.anims.generateFrameNumbers("concombreCollectible3", {start: 0, end: 3 }), 
        frameRate : 4,
        repeat : -1
    }); 
    this.concombreCollectible3.anims.play("concombreCollectible3Anim"); 
    this.concombreCollectible3.setScale(0.6); 

   

    //uiConcombre 
    this.concombreUi = this.physics.add.image(200, 50, "concombreUi").setScrollFactor(0); 
    this.concombreUi.setScale(0.6); 
    this.concombreUi.body.setAllowGravity(false);   
    this.nombreConcombre = 0;      
    this.nombreconcombreUi = this.add.text(225,50," x " + this.nombreConcombre,{fontSize:'16px',fill:'#000'}).setScrollFactor(0); 
   


    

    

    //boules de feu 
    //this.bouleFeu = this.physics.add.image(-100, -100, "bouleDeFeu").setVisible(false); 
    //this.tirer = true;   
    //this.bouleFeu.setScale(0.4); 
    //this.bouleFeu.setSize(32, 32); 



    //plateformes -----------------------------------------------------------------------------------
    //nuage1
    this.plateformeNuage = this.physics.add.image(600, 110, "plateformeNuage"); 
    this.plateformeNuage.setImmovable(); 
    this.plateformeNuage.setSize(200,10); 
    this.plateformeNuage.setVelocityX(-50); 
    this.plateformeNuage.body.setAllowGravity(false); 

    this.blocInvisible1 = this.physics.add.image(300, 110, "blocInvisible1"); 
    this.blocInvisible1.setImmovable(); 
    this.blocInvisible1.body.setAllowGravity(false); 
    this.blocInvisible1.setScale(0.5); 
    this.blocInvisible1.setVisible(false); 

    this.blocInvisible2 = this.physics.add.image(800, 110, "blocInvisible1"); 
    this.blocInvisible2.setImmovable(); 
    this.blocInvisible2.body.setAllowGravity(false); 
    this.blocInvisible2.setScale(0.5);
    this.blocInvisible2.setVisible(false); 
    
    //nuage2
    this.plateformeNuage2 = this.physics.add.image(1380, 200, "plateformeNuage2"); 
    this.plateformeNuage2.setImmovable(); 
    this.plateformeNuage2.setSize(200,10); 
    this.plateformeNuage2.setVelocityX(50); 
    this.plateformeNuage2.body.setAllowGravity(false); 

    this.blocInvisible7 = this.physics.add.image(1250, 200, "blocInvisible7"); 
    this.blocInvisible7.setImmovable(); 
    this.blocInvisible7.body.setAllowGravity(false); 
    this.blocInvisible7.setScale(0.5); 
    this.blocInvisible7.setVisible(false); 

    this.blocInvisible8 = this.physics.add.image(1650, 200, "blocInvisible8"); 
    this.blocInvisible8.setImmovable(); 
    this.blocInvisible8.body.setAllowGravity(false); 
    this.blocInvisible8.setScale(0.5);
    this.blocInvisible8.setVisible(false); 


    //nuage3
    this.plateformeNuage3 = this.physics.add.image(960, 85, "plateformeNuage3"); 
    this.plateformeNuage3.setImmovable(); 
    this.plateformeNuage3.setSize(360,5); 
    this.plateformeNuage3.body.setAllowGravity(false); 

    //nuage4
    this.plateformeNuage4 = this.physics.add.image(2850, 120, "plateformeNuage4"); 
    this.plateformeNuage4.setImmovable(); 
    this.plateformeNuage4.setSize(360,5); 
    this.plateformeNuage4.body.setAllowGravity(false); 
    this.plateformeNuage4.setScale(0.8); 

    //nuage5
    this.plateformeNuage5 = this.physics.add.image(2000, 140, "plateformeNuage5"); 
    this.plateformeNuage5.setImmovable(); 
    this.plateformeNuage5.setSize(360,5); 
    this.plateformeNuage5.body.setAllowGravity(false); 

    //nuage6
    this.plateformeNuage6 = this.physics.add.image(2450, 110, "plateformeNuage6"); 
    this.plateformeNuage6.setImmovable(); 
    this.plateformeNuage6.setScale(1.2), 
    this.plateformeNuage6.setSize(230,5); 
    this.plateformeNuage6.body.setAllowGravity(false); 

    //cerf volant 1
    this.plateformeCerfVolant1 = this.physics.add.image(180, 300, "plateformeCerfVolant1"); 
    this.plateformeCerfVolant1.setImmovable(); 
    this.plateformeCerfVolant1.setSize(100,10); 
    this.plateformeCerfVolant1.setVelocityY(50); 
    this.plateformeCerfVolant1.setScale(0.5); 
    this.plateformeCerfVolant1.body.setAllowGravity(false); 

    this.blocInvisible3 = this.physics.add.image(180, 480, "blocInvisible3"); 
    this.blocInvisible3.setImmovable(); 
    this.blocInvisible3.body.setAllowGravity(false); 
    this.blocInvisible3.setScale(0.5); 
    this.blocInvisible3.setVisible(false); 

    this.blocInvisible4 = this.physics.add.image(180, 200, "blocInvisible4"); 
    this.blocInvisible4.setImmovable(); 
    this.blocInvisible4.body.setAllowGravity(false); 
    this.blocInvisible4.setScale(0.5); 
    this.blocInvisible4.setVisible(false); 

    //trampoline
    this.trampoline = this.physics.add.image(830, 500, "trampoline"); 
    this.trampoline.setImmovable(); 
    this.trampoline.body.setAllowGravity(false); 
    this.sautTrampoline = false; 

    //portail Riviere vers Salle de boss 
    this.panneauRiviereBoss = this.physics.add.image(2975, 90, "panneauRiviereVersBoss"); 
    this.panneauRiviereBoss.body.setAllowGravity(false); 
    this.panneauRiviereBoss.setImmovable(); 
    this.panneauRiviereBoss.setScale(0.8); 
    this.contactPanneauRiviereBoss = false; 

    this.concombre.body.setAllowGravity(false); 

    
  
    //bool
    calque_invisibleRiviere.setCollisionByProperty({ estSolideRiviere : true}); 

    //collisions 
    this.physics.add.collider(this.player, calque_invisibleRiviere);
    this.physics.add.collider(this.concombre, calque_invisibleRiviere, this.destruction, null, this);

    
    this.physics.add.collider(this.kappa1, calque_invisibleRiviere); 
    this.physics.add.collider(this.kappa2, calque_invisibleRiviere); 
    this.physics.add.collider(this.kappa3, calque_invisibleRiviere); 

    
    this.physics.add.collider(this.player, this.kappa1, this.contactKappaPlayer, null, this); 
    this.physics.add.collider(this.player, this.kappa2, this.contactKappaPlayer, null, this); 
    this.physics.add.collider(this.player, this.kappa3, this.contactKappaPlayer, null, this); 
    
    this.physics.add.collider(this.kappa1, this.concombre, this.contactKappa1, null, this); 
    this.physics.add.collider(this.kappa2, this.concombre, this.contactKappa2, null, this); 
    this.physics.add.collider(this.kappa3, this.concombre, this.contactKappa3, null, this); 

    this.physics.add.collider(this.kappa2, this.blocInvisible5, this.contactKappa2Bloc5, null, this); 
    this.physics.add.collider(this.kappa2, this.blocInvisible6, this.contactKappa2Bloc6, null, this);

    this.physics.add.collider(this.concombreCollectible1, calque_invisibleRiviere); 
    this.physics.add.collider(this.concombreCollectible2, calque_invisibleRiviere); 
    this.physics.add.collider(this.concombreCollectible3, calque_invisibleRiviere);



    this.physics.add.overlap(this.player, this.concombreCollectible2, this.collectConcombre2, null, this); 
    this.physics.add.overlap(this.player, this.concombreCollectible1, this.collectConcombre1, null, this); 
    this.physics.add.overlap(this.player, this.concombreCollectible3, this.collectConcombre3, null, this); 

    this.physics.add.collider(this.player, this.plateformeNuage); 
    this.physics.add.collider(this.player, this.plateformeNuage2); 
    this.physics.add.collider(this.player, this.plateformeNuage3); 
    this.physics.add.collider(this.player, this.plateformeNuage4); 
    this.physics.add.collider(this.player, this.plateformeNuage5); 
    this.physics.add.collider(this.player, this.plateformeNuage6); 

    this.physics.add.collider(this.plateformeNuage, this.blocInvisible1, this.contactNuage1Bloc1, null, this); 
    this.physics.add.collider(this.plateformeNuage, this.blocInvisible2, this.contactNuage1Bloc2, null, this); 
    this.physics.add.collider(this.plateformeNuage2, this.blocInvisible7, this.contactNuage2Bloc7, null, this); 
    this.physics.add.collider(this.plateformeNuage2, this.blocInvisible8, this.contactNuage2Bloc8, null, this); 

    this.physics.add.collider(this.plateformeCerfVolant1, this.player); 
    this.physics.add.collider(this.plateformeCerfVolant1, this.blocInvisible3, this.contactCerfVolant1Bloc3, null, this); 
    this.physics.add.collider(this.plateformeCerfVolant1, this.blocInvisible4, this.contactCerfVolant1Bloc4, null, this); 
    this.physics.add.collider(this.trampoline, calque_invisibleRiviere); 
    this.physics.add.collider(this.trampoline, this.player, this.contactTrampoline, null, this);
    
    this.physics.add.collider(this.player, this.panneauRiviereBoss, this.teleportationRiviereBoss, null, this); 

    this.physics.add.collider(this.player, this.potion2, this.transformation2, null, this); 
    this.physics.add.collider(this.potion2, calque_invisibleRiviere); 

    //tofus 
    this.physics.add.collider(this.tofu4, calque_invisibleRiviere); 
    this.physics.add.collider(this.tofu4, this.player, this.mangerTofu4, null, this); 
    this.physics.add.collider(this.tofu5, calque_invisibleRiviere); 
    this.physics.add.collider(this.tofu5, this.player, this.mangerTofu5, null, this); 
    this.physics.add.collider(this.tofu6, this.player, this.mangerTofu6, null, this); 
    this.physics.add.collider(this.tofuSoigneur2, calque_invisibleRiviere);
    this.physics.add.collider(this.tofuSoigneur2, this.player, this.soigner2, null, this); 

    //touches du clavier -------------------------------------------------------------------------------
    this.cursors = this.input.keyboard.createCursorKeys(); 

    //---création d'une caméra----------------------------------------------------------------------- 
    this.physics.world.setBounds(0,0,3200,581); 
    this.cameras.main.setBounds(0, 0, 3200, 581);
    this.cameras.main.zoom = 1;

    //---suivi du joueur par la caméra --------------------------------------------------------------
    this.cameras.main.startFollow(this.player);

    //premier plan
    this.premierPlanRiviere = this.physics.add.image(1600, 290, "premierPlanRiviere").setScrollFactor(0.8); 
    this.premierPlanRiviere.body.setAllowGravity(false); 
    this.premierPlanRiviere.setImmovable(); 

    //musique -------------------------------------------------------------------------------------
    this.sound.play("musiqueRiviere", {volume : 0.1});

}

//update

update() { 

    //touches du clavier 
    if (this.cursors.left.isDown){ //si la touche gauche est appuyée

        this.player.setVelocityX(-250); //alors vitesse négative en X
        //this.player.anims.play("left3", true); 

        if (this.nouvelleMecanique2 === true){ 

            this.player.anims.play("left5", true); 
        }
        else { 

            this.player.anims.play("left3", true);

        }

        this.playerLeft = true; 
        this.playerRight = false; 
        
        }

    else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée

        this.player.setVelocityX(250); //alors vitesse positive en X

        if (this.nouvelleMecanique2 === true){ 

            this.player.anims.play("right5", true); 
        }
        else { 

            this.player.anims.play("right3", true);

        }

        this.playerLeft = false; 
        this.playerRight = true; 
        
        }

    else{ // sinon
        this.player.setVelocityX(0); //vitesse nulle

        if (this.nouvelleMecanique2 === true){ 

            this.player.anims.play("idle5", true); 
        }

        else { 
            this.player.anims.play("idle3", true); 
        }
        
        }

    if (this.cursors.up.isDown && this.player.body.blocked.down){
        //si touche haut appuyée ET que le perso touche le sol
        this.player.setVelocityY(-370); //alors vitesse verticale négative
    
        }

    if (this.cursors.space.isDown && this.player.body.blocked.down){ 

    
            
        this.player.setVelocityY(-520); 
        this.kitsuneSautLong = true; 
        
        
    } 

    //tirer
    if (this.cursors.shift.isDown){ 


        if (this.tirer === true){
    
                
            if (this.playerRight === true){
        
                this.concombre.setVisible(true);
                this.concombre.x = this.player.x + 50
                this.concombre.y = this.player.y
                this.concombre.setVelocityX(380);
                this.tirer = false;

                setTimeout(() => {
                    this.tirer = true;
                    this.destruction(); 
                }, 1000);
            }


               


        
            if (this.playerLeft === true){

                this.concombre.setVisible(true);
                this.concombre.x = this.player.x - 50
                this.concombre.y = this.player.y
                this.concombre.setVelocityX(-380);
                this.tirer = false;

                setTimeout(() => {
                    this.tirer = true;
                    this.destruction(); 
                }, 1000);
            }

                
        } 

    } 

    //pour pas que le nombre de concombres soit inférieur à 0 
    if (this.nombreConcombre <= 0 ){ 
        this.nombreConcombre = 0;     
    }
        
    
    //kappa1
    this.distancePlayerKappa1 = Phaser.Math.Distance.Between(this.kappa1.x, this.kappa1.y, this.player.x, this.player.y);

    if(this.distancePlayerKappa1 < 260){ //si la distance entre le joueur et le kappa est inférieure à 300 px 

        this.kappa1.setVelocityX(this.player.x - this.kappa1.x); //le kappa va suivre le joueur

        

    }

    //kappa3
    this.distancePlayerKappa3 = Phaser.Math.Distance.Between(this.kappa3.x, this.kappa3.y, this.player.x, this.player.y);

    if(this.distancePlayerKappa3 < 260){ //si la distance entre le joueur et le kappa est inférieure à 300 px 

        this.kappa3.setVelocityX(this.player.x - this.kappa3.x); //le kappa va suivre le joueur


    }

    //kappa2
    if (this.kappa2Left === true){ 
        this.kappa2.setVelocityX(70); 
    }

    if (this.kappa2Right === true){ 
        this.kappa2.setVelocityX(-70); 
    }

    
    //affichage de l'UI en fonction du nombre de Pv 
    if (this.nombrePv === 100){
        this.pv100.setVisible(true);  
        this.pv80.setVisible(false); 
    }

    if (this.nombrePv === 90){
        this.pv100.setVisible(true);  
        this.pv80.setVisible(false); 
    }

    if (this.nombrePv === 80){ 
        this.pv100.setVisible(false); 
        this.pv80.setVisible(true); 
        this.pv60.setVisible(false); 
    }

    if (this.nombrePv === 70){ 
        this.pv100.setVisible(false); 
        this.pv80.setVisible(true); 
        this.pv60.setVisible(false); 
    }

    if (this.nombrePv === 60){ 
        this.pv80.setVisible(false); 
        this.pv60.setVisible(true); 
        this.pv40.setVisible(false); 
    }

    if (this.nombrePv === 50){ 
        this.pv80.setVisible(false); 
        this.pv60.setVisible(true); 
        this.pv40.setVisible(false); 
    }

    if (this.nombrePv === 40){ 
        this.pv60.setVisible(false); 
        this.pv40.setVisible(true); 
        this.pv20.setVisible(false); 
    }

    if (this.nombrePv === 30){ 
        this.pv60.setVisible(false); 
        this.pv40.setVisible(true); 
        this.pv20.setVisible(false); 
    }

    if (this.nombrePv === 20){ 
        this.pv40.setVisible(false); 
        this.pv20.setVisible(true); 
    }

    if (this.nombrePv === 10){ 
        this.pv40.setVisible(false); 
        this.pv20.setVisible(true); 
    }

    //barre de faim 

    if (this.faimPlayer === 20){
        this.barreFaim20.setVisible(true);  
        this.barreFaim19.setVisible(false); 
    }

    if (this.faimPlayer === 19){
        this.barreFaim20.setVisible(false); 
        this.barreFaim19.setVisible(true);  
        this.barreFaim18.setVisible(false); 
    }

    if (this.faimPlayer === 18){
        this.barreFaim19.setVisible(false); 
        this.barreFaim18.setVisible(true);  
        this.barreFaim17.setVisible(false); 
    }

    if (this.faimPlayer === 17){
        this.barreFaim18.setVisible(false); 
        this.barreFaim17.setVisible(true);  
        this.barreFaim16.setVisible(false); 
    }

    if (this.faimPlayer === 16){
        this.barreFaim17.setVisible(false); 
        this.barreFaim16.setVisible(true);  
        this.barreFaim15.setVisible(false); 
    }

    if (this.faimPlayer === 15){
        this.barreFaim16.setVisible(false); 
        this.barreFaim15.setVisible(true);  
        this.barreFaim14.setVisible(false); 
    }

    if (this.faimPlayer === 14){
        this.barreFaim15.setVisible(false); 
        this.barreFaim14.setVisible(true);  
        this.barreFaim13.setVisible(false); 
    }

    if (this.faimPlayer === 13){
        this.barreFaim14.setVisible(false); 
        this.barreFaim13.setVisible(true);  
        this.barreFaim12.setVisible(false); 
    }

    if (this.faimPlayer === 12){
        this.barreFaim13.setVisible(false); 
        this.barreFaim12.setVisible(true);  
        this.barreFaim11.setVisible(false); 
    }

    if (this.faimPlayer === 11){
        this.barreFaim12.setVisible(false); 
        this.barreFaim11.setVisible(true);  
        this.barreFaim10.setVisible(false); 
    }

    if (this.faimPlayer === 10){
        this.barreFaim11.setVisible(false); 
        this.barreFaim10.setVisible(true);  
        this.barreFaim9.setVisible(false); 
    }

    if (this.faimPlayer === 9){
        this.barreFaim10.setVisible(false); 
        this.barreFaim9.setVisible(true);  
        this.barreFaim8.setVisible(false); 
    }

    if (this.faimPlayer === 8){
        this.barreFaim9.setVisible(false); 
        this.barreFaim8.setVisible(true);  
        this.barreFaim7.setVisible(false); 
    }

    if (this.faimPlayer === 7){
        this.barreFaim8.setVisible(false); 
        this.barreFaim7.setVisible(true);  
        this.barreFaim6.setVisible(false); 
    }

    if (this.faimPlayer === 6){
        this.barreFaim7.setVisible(false); 
        this.barreFaim6.setVisible(true);  
        this.barreFaim5.setVisible(false); 
    }

    if (this.faimPlayer === 5){
        this.barreFaim6.setVisible(false); 
        this.barreFaim5.setVisible(true);  
        this.barreFaim4.setVisible(false); 
    }

    if (this.faimPlayer === 4){
        this.barreFaim5.setVisible(false); 
        this.barreFaim4.setVisible(true);  
        this.barreFaim3.setVisible(false); 
    }

    if (this.faimPlayer === 3){
        this.barreFaim4.setVisible(false); 
        this.barreFaim3.setVisible(true);  
        this.barreFaim2.setVisible(false); 
    }

    if (this.faimPlayer === 2){
        this.barreFaim3.setVisible(false); 
        this.barreFaim2.setVisible(true);  
        this.barreFaim1.setVisible(false); 
    }

    if (this.faimPlayer === 1){
        this.barreFaim2.setVisible(false); 
        this.barreFaim1.setVisible(true);  
    
    }

    //manger
    if (this.faimPlayer > 20){ 
        this.faimPlayer = 20; 
    }

    //manger tofu 
    if (this.playerMange === true){ 
        this.faimPlayer += 1; 
    }
    console.log(this.faimPlayer); 


    //fonction mort de faim 
    if (this.faimPlayer === 0){ 

        this.estMortFaim(); 

    }

    //mort & écran de fin 
    if (this.nombrePv <= 0){ 
        this.estMort(); 
    }

    //musique 
    if (this.contactPanneauRiviereHub === true){ 
        this.sound.stopAll(); 
    }

    //this.heart1sur1Kappa1.x = this.kappa1.x; 
    //this.heart1sur1Kappa1.y = this.kappa1.y - 50; 

    //condition pour tirer des concombres 
    if (this.nombreConcombre > 0){ 
        this.tirer = true; 
        
    }

    else{ 
        this.tirer = false; 
    }

    //trampoline 
    if (this.sautTrampoline === true){ 
        
        this.player.setVelocityY(-600); 
    }

    //arrêter la musique 
    if (this.contactPanneauRiviereBoss === true){ 
        this.sound.stopAll();  
    }




    


}

//fonctions 

    destruction(concombre, calque_invisibleRiviere){

        this.concombre.x = -100
        this.concombre.y = -100
        this.concombre.setVisible(false); 
        this.concombre.setVelocityX(0); 
    }

    empoisonner(player, groupeTofus){ 

       
        groupeTofus.setTint(0xc4e0a2); 
        player.setTint(0xc4e0a2); 
        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        this.estInvincible(); 
        groupeTofus.destroy(); 
        this.ecranEmpoisonne.setVisible(true); 
        this.playerMange = true; 

        setTimeout(() => { 

            groupeTofus.clearTint(); 
            player.clearTint(); 
            this.ecranEmpoisonne.setVisible(false); 

        }, 2000); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 

      
    }

    mangerTofu4(player, tofu4){ 
    
        this.tofu4.setTint(0x910303); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            this.playerMange = false; 
            this.tofu4.destroy();
            this.tofu4.clearTint(); 

        }, 0.1); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

    }

    mangerTofu5(player, tofu5){ 
    
        this.tofu5.setTint(0x910303); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            this.playerMange = false; 
            this.tofu5.destroy();
            this.tofu5.clearTint(); 

        }, 0.1); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

    }

    mangerTofu6(player, tofu6){ 
    
        this.tofu6.setTint(0x910303); 
        this.playerMange = true; 
         

        setTimeout(() => { 

            this.playerMange = false; 
            this.tofu6.destroy();
            this.tofu6.clearTint(); 

        }, 0.1); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

    }

    soigner2(player, tofuSoigneur2){ 


        this.nombrePv += 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        this.tofuSoigneur2.destroy(); 
        this.ecranSoin.setVisible(true); 
        this.playerMange = true; 

        setTimeout(() => { 

            this.ecranSoin.setVisible(false); 

        }, 2000); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 
    }
    

    

    

    transformation2(player, potion2){ 

        this.messageShift.setVisible(true); 
        this.player.setTint(0xffbb00); 
        this.nouvelleMecanique2 = true; 

        setTimeout(() => { 

            this.player.clearTint(); 
            this.messageShift.setVisible(false); 
            
            
        }, 5500); 

        setTimeout(() => { 

            this.sound.play("itemObtenu", {volume : 0.4}); 
            this.potion2.destroy(); 
        }, 100);

    }



    estInvincible(player){ //permet de rendre le joueur invincible pendant une seconde 

        setTimeout(() => { 
            this.invincible = false
            this.player.setAlpha(1)
        }, 1000); 
        this.invincible = true
        this.player.setAlpha(0.2)
    }

    collectConcombre1(player, concombreCollectible1){ 

        this.nombreConcombre += 1; 

        

        setTimeout(() => { 
            this.concombreCollectible1.destroy(); 
            this.nombreconcombreUi.setText(" x " + this.nombreConcombre); 
            
        })

        

    }

    collectConcombre2(player, concombreCollectible2){ 

        this.nombreConcombre += 1; 

        setTimeout(() => { 
            this.concombreCollectible2.destroy(); 
            this.nombreconcombreUi.setText(" x " + this.nombreConcombre); 
        })

    }

    collectConcombre3(player, concombreCollectible3){ 

        this.nombreConcombre += 1; 
        setTimeout(() => { 
            this.concombreCollectible3.destroy(); 
            this.nombreconcombreUi.setText(" x " + this.nombreConcombre); 
        })

    }


    contactKappa1(kappa1, concombre){ 

        
        //this.heart1sur1Kappa1.setVisible(true);
        this.kappa1.setOffset(-500, -500); 
        this.kappa1.body.setAllowGravity(false); 

        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
                targets : kappa1,
                alpha : 0, 
                duration : 350, //durée de l'effet de fondu 
                ease : "Sine.InOut",
        }, this);
    
        this.nombreConcombre -= 1;
        this.nombreconcombreUi.setText(" x " + this.nombreConcombre);  
        setTimeout(() => { 

            //this.heart1sur1Kappa1.destroy(); 
            this.kappa1.setVisible(false);
            
            
            
            
        }, 500); 
    }

    contactKappa2(kappa2, concombre){ 

        
        //this.heart1sur1Kappa1.setVisible(true);
        this.kappa2.setOffset(-500, -500); 
        this.kappa2.body.setAllowGravity(false); 

        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
                targets : kappa2,
                alpha : 0, 
                duration : 350, //durée de l'effet de fondu 
                ease : "Sine.InOut",
        }, this);
    
        this.nombreConcombre -= 1; 
        this.nombreconcombreUi.setText(" x " + this.nombreConcombre); 
        setTimeout(() => { 

            //this.heart1sur1Kappa1.destroy(); 
            this.kappa2.setVisible(false);
            
            
            
            
        }, 500); 
    }

    contactKappa3(kappa3, concombre){ 

        
        //this.heart1sur1Kappa1.setVisible(true);
        this.kappa3.setOffset(-500, -500); 
        this.kappa3.body.setAllowGravity(false); 

        this.tweens.add({ //pour qu'il puisse disparaître avec un effet fondu 
                targets : kappa3,
                alpha : 0, 
                duration : 350, //durée de l'effet de fondu 
                ease : "Sine.InOut",
        }, this);
    
        this.nombreConcombre -= 1;
        this.nombreconcombreUi.setText(" x " + this.nombreConcombre);  
        setTimeout(() => { 

            //this.heart1sur1Kappa1.destroy(); 
            this.kappa3.setVisible(false);
            
            
            
            
        }, 500); 
    }

    contactKappaPlayer(kappa1, kappa2, kappa3, player){ 

        if (this.invincible === false){ 

            this.player.setTint(0x910f0f);
            this.ecranDegat.setVisible(true); 
            this.nombrePv -= 10; 
            this.pvPlayer.setText("PV : " + this.nombrePv); 
            this.cameras.main.shake(70, 0.005);
            this.estInvincible(); 

        }
        
        
        setTimeout(() => { 

            this.ecranDegat.setVisible(false); 
            this.player.clearTint();
                    
        }, 1000); 

    }

    //kappa2 
    contactKappa2Bloc5(){ 
        this.kappa2Left = true; 
        this.kappa2Right = false; 
    }

    contactKappa2Bloc6(){ 
        this.kappa2Right=true; 
        this.kappa2Left = false; 
    }
    
    //plateformenuage1
    contactNuage1Bloc1(plateformeNuage, blocInvisible1){ 
        this.plateformeNuage.setVelocityX(50); 
    }

    contactNuage1Bloc2(plateformeNuage, blocInvisible2){ 
        this.plateformeNuage.setVelocityX(-50); 
    }

    //plateformenuage1
    contactNuage2Bloc7(plateformeNuage2, blocInvisible7){ 
        this.plateformeNuage2.setVelocityX(50); 
    }

    contactNuage2Bloc8(plateformeNuage2, blocInvisible8){ 
        this.plateformeNuage2.setVelocityX(-50); 
    }

    //plateforme cerfvolant1
    contactCerfVolant1Bloc3(plateformeCerfVolant1, blocInvisible3){ 
        this.plateformeCerfVolant1.setVelocityY(-50); 
    }
      
    contactCerfVolant1Bloc4(plateformeCerfVolant1, blocInvisible4){ 
        this.plateformeCerfVolant1.setVelocityY(50); 
    }

    //trampoline
    contactTrampoline(player, trampoline){ 
        this.sautTrampoline = true; 
        this.player.body.setAllowGravity(false); 

        setTimeout(() => { 

            this.sautTrampoline = false; 
            this.player.body.setAllowGravity(true); 
            
            
            
        }, 200); 

    }

    //mort du player 
    estMort(player){ 
        if (this.nombrePv <= 0){ 
            this.scene.start("finJeu"); 
        }
    }

    estMortFaim(player){ 
        if (this.faimPlayer <= 0){ 
            this.scene.start("finJeu"); 
        }
    }
      
    //teleportation vers la salle du boss 
    teleportationRiviereBoss(player, panneauRiviereBoss){ 

        this.scene.start("niveauBoss", {pv: this.nombrePv, faim: this.faimPlayer}); 
        this.contactPanneauRiviereBoss = true; 
    }
    


}






































//niveau du boss --------------------------------------------------------------------------------

class Boss extends Phaser.Scene { 
    constructor() { 
        super("niveauBoss")
    }



//init

    init(data){ 

        this.nombrePv = data.pv; 
        this.faimPlayer = data.faim; 

    }    
//preload 

    preload() {
        
        //tiled 
        this.load.image("tuilesBoss", "Boss/salleDeBoss.png"); 
        this.load.tilemapTiledJSON("niveauBoss", "Boss/niveauBoss.json"); 

        //kitsune
        this.load.spritesheet("testKitsuneRunDroit7", "spritesheetkitsunerundroit8.png", {frameWidth: 126, frameHeight: 54});
        this.load.spritesheet("testKitsuneRunGauche7", "spritesheetkitsunerungauche8.png", {frameWidth: 126, frameHeight: 54});

        //ui
        this.load.image("pv100", "Foret/uiPv100.png"); 
        this.load.image("pv80", "Foret/uiPv80.png"); 
        this.load.image("pv60", "Foret/uiPv60.png"); 
        this.load.image("pv40", "Foret/uiPv40.png"); 
        this.load.image("pv20", "Foret/uiPv20.png"); 

        //tufo 
        this.load.image("boss", "Boss/tufo.png"); 
        this.load.image("bossSad", "Boss/tufoSad.png"); 

        //potion3
        this.load.image("potion3", "Foret/potion.png"); 
        this.load.image("messageShift2", "Boss/messageShift2.png"); 


        this.load.image("armeTufo", "Boss/armeTufo.png"); 
        this.load.image("armeTufo2", "Boss/armeTufo.png"); 
        this.load.image("armeTufo3", "Boss/armeTufo.png");
        this.load.image("armeTufo4", "Boss/armeTufo.png");

        this.load.image("projectileTufo", "Boss/projectileTufo.png"); 
        this.load.image("projectileTufo2", "Boss/projectileTufo.png"); 
        this.load.image("murInvisible", "Riviere/blocInvisible.png"); 
        this.load.image("flamme", "Boss/tufoFlamme.png"); 
        this.load.image("visionTufo", "Boss/visionTufo.png"); 

        //boule de feu 
        this.load.image("bouleDeFeu", "Hub/assetsHub/bouleFeu.png"); 

        //tofu avarié 
        this.load.image("tofuAvarieBoss1", "Hub/assetsHub/tofuAvarie.png"); 

        //tofu soigneur 
        this.load.image("tofuSoigneur3", "Hub/assetsHub/tofuSoigneur.png"); 

        //piques 
        this.load.image("piques", "Boss/piques.png"); 
        this.load.image("piques2", "Boss/piques2.png"); 
        this.load.image("piques3", "Boss/piques2.png"); 
        this.load.image("piques4", "Boss/piques.png"); 
        this.load.image("piques5", "Boss/piques.png"); 
        this.load.image("piques6", "Boss/piques2.png"); 
        this.load.image("piques7", "Boss/piques2.png"); 
        
        this.load.image("piege", "Boss/piege.png"); 
        this.load.image("piege2", "Boss/piege.png"); 
        this.load.image("piege3", "Boss/piege.png"); 
        this.load.image("piege4", "Boss/piege.png"); 

        //musique boss 
        this.load.audio("musiqueBoss", "Sons/boss.mp3"); 
        


    }


    create() { 

        //importation de Tiled dans Phaser -------------------------------------------------------------- 
        //chargement de la carte 
        const niveauBoss = this.add.tilemap("niveauBoss"); 

        //chargement du jeu de tuiles 
        const tilesetBoss = niveauBoss.addTilesetImage (
            "salleDeBoss", 
            "tuilesBoss"
        ); 

        //les calques 
        const calque_backgroundBoss = niveauBoss.createLayer(
            "background", 
            tilesetBoss
        ); 

        const calque_invisibleBoss = niveauBoss.createLayer(
            "invisible", 
            tilesetBoss
        ); 

        calque_invisibleBoss.setVisible(false); 


        //joueur -----------------------------------------------------------------------------------------
        this.player = this.physics.add.sprite(40,200, "kitsune"); 
        this.player.setCollideWorldBounds(true); 
        this.player.setBounce(0.1);
        this.player.setSize(80,40); 
        this.kitsuneSautLong = false; 



        //animations 
        this.anims.create({
            key : "right", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });

        this.anims.create({
            key : "right7", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunDroit7", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        }); 

        this.anims.create({
            key : "left7", 
            frames : this.anims.generateFrameNumbers("testKitsuneRunGauche7", {start: 0, end: 7 }), 
            frameRate : 9,
            //repeat : -1
        });

        this.anims.create({
            key : "idle5", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 4, end: 5 }), 
            frameRate : 2,
            repeat : -1
        });
        
        this.anims.create({
            key : "idle7", 
            frames : this.anims.generateFrameNumbers("kitsune", {start: 6, end: 7 }), 
            frameRate : 2,
            repeat : -1
        });

        

        //potion
        this.potion3 = this.physics.add.image(370, 200, "potion3"); 
        this.potion3.setScale(0.8); 
        this.potion3.setImmovable(); 

        this.nouvelleMecanique3 = false; 
        this.messageShift2 = this.physics.add.image(448, 224, "messageShift2").setScrollFactor(0); 
        this.messageShift2.setScale(2.2); 
        this.messageShift2.body.setAllowGravity(false); 
        this.messageShift2.setImmovable(); 
        this.messageShift2.setVisible(false); 

        //tofu soigneur
        this.tofuSoigneur3 = this.physics.add.image(805, 300, "tofuSoigneur3"); 
        this.tofuSoigneur3.setImmovable(); 
        this.tofuSoigneur3.setVisible(true);  
        this.tofuSoigneur3.setScale(0.8); 
        this.tofuSoigneur3.setSize(32,32); 
            

        //tufo le boss 
        this.boss = this.physics.add.image(1050, 320, "boss"); 
        this.boss.setScale(1.2); 
        this.boss.setSize(160,160); 
        this.boss.setImmovable(); 
        //this.textureBossSad = this.textures.get("bossSad"); 

        this.nombrePvBoss = 50; 
        this.pvBoss = this.add.text(-20, -20, "PV Tufo : " + this.nombrePvBoss, {fontSize:'16px',fill:'#000'}); 

        this.visionTufo = this.physics.add.image(750, 320, "visionTufo"); 
        this.visionTufo.body.setAllowGravity(false); 
        this.visionTufo.setImmovable(); 
        this.visionTufo.setVisible(false); 
        this.repereParTufo = false; 
        this.repereParTufo2 = false; 
        this.repereParTufo3 = false; 
        this.repereParTufo4 = false; 

        this.armeTufo = this.physics.add.image(930, 220, "armeTufo"); 
        this.armeTufo.setVisible(false); 
        this.armeTufo.body.setAllowGravity(false); 
        this.armeTufo.setSize(60, 3); 
        this.armeTufo.setScale(2);
        this.armeTufo.setImmovable(); 

        this.armeTufo2 = this.physics.add.image(930, 320, "armeTufo2"); 
        this.armeTufo2.setVisible(false); 
        this.armeTufo2.body.setAllowGravity(false); 
        this.armeTufo2.setSize(60, 3); 
        this.armeTufo2.setScale(2);
        this.armeTufo2.setImmovable(); 

        this.armeTufo3 = this.physics.add.image(930, 120, "armeTufo3"); 
        this.armeTufo3.setVisible(false); 
        this.armeTufo3.body.setAllowGravity(false); 
        this.armeTufo3.setSize(60, 3); 
        this.armeTufo3.setScale(2);
        this.armeTufo3.setImmovable(); 

        this.armeTufo4 = this.physics.add.image(930, 340, "armeTufo4"); 
        this.armeTufo4.setVisible(false); 
        this.armeTufo4.body.setAllowGravity(false); 
        this.armeTufo4.setSize(65, 3); 
        this.armeTufo4.setScale(3);
        this.armeTufo4.setImmovable(); 
       

        this.projectileTufo = this.physics.add.image(920, 270, "projectileTufo"); 
        this.projectileTufo.setVisible(false); 
        this.projectileTufo.body.setAllowGravity(false); 
        this.projectileTufo.setSize(60, 32); 
        this.projectileTufo.setImmovable(); 
  

        this.murInvisible = this.physics.add.image(10, 224, "murInvisible"); 
        this.murInvisible.setVisible(false); 
        this.murInvisible.setImmovable(); 
        this.murInvisible.body.setAllowGravity(false); 
        this.murInvisible.setSize(10,380); 
        this.contactMurInvisible = false; 

        this.flamme = this.physics.add.image(-10, -10, "flamme"); 
        this.flamme.setScale(1.2); 
        this.flamme.setVisible(false); 
        this.flamme.body.setAllowGravity(false); 

        //boules de feu 
        this.bouleFeu = this.physics.add.image(-100, -100, "bouleDeFeu").setVisible(false); 
        this.tirer = true;      
        this.bouleFeu.body.setAllowGravity(false); 
        this.bouleFeu.setScale(0.4); 
        this.bouleFeu.setSize(64, 64); //taille de la hitbox

        //tofu avarié 1 
        this.tofuAvarieBoss1 = this.physics.add.image(300, 150, "tofuAvarieBoss1"); 
        this.tofuAvarieBoss1.setScale(0.8); 
        this.tofuAvarieBoss1.setImmovable(); 
        this.tofuAvarieBoss1.setVisible(true); 

        //piques
        this.piques = this.physics.add.image(600, 10, "piques"); 
        this.piques.body.setAllowGravity(false); 
        this.piques.setScale(1.6); 


        this.piques2 = this.physics.add.image(760, 10, "piques2"); 
        this.piques2.body.setAllowGravity(false); 
        this.piques2.setScale(1.6); 

        this.piques3 = this.physics.add.image(440, 10, "piques3"); 
        this.piques3.body.setAllowGravity(false); 
        this.piques3.setScale(1.6); 

        this.piques4 = this.physics.add.image(280, 10, "piques4"); 
        this.piques4.body.setAllowGravity(false); 
        this.piques4.setScale(1.6); 

        this.piques5 = this.physics.add.image(920, 10, "piques5"); 
        this.piques5.body.setAllowGravity(false); 
        this.piques5.setScale(1.6); 

        this.piques6 = this.physics.add.image(115, 10, "piques6"); 
        this.piques6.body.setAllowGravity(false); 
        this.piques6.setScale(1.6); 

        this.piques7 = this.physics.add.image(3, 10, "piques7"); 
        this.piques7.body.setAllowGravity(false); 
        this.piques7.setScale(1.6); 

        this.piege = this.physics.add.image(680, 390, "piege"); 
        this.piege.setImmovable(); 
        this.piege.body.setAllowGravity(false); 
        this.piege.setVisible(false); 

        this.piege2 = this.physics.add.image(840, 330, "piege2"); 
        this.piege2.setImmovable(); 
        this.piege2.body.setAllowGravity(false); 
        this.piege2.setVisible(false); 

        this.piege3 = this.physics.add.image(200, 420, "piege3"); 
        this.piege3.setImmovable(); 
        this.piege3.body.setAllowGravity(false); 
        this.piege3.setVisible(false); 

        this.piege4 = this.physics.add.image(460, 420, "piege4"); 
        this.piege4.setImmovable(); 
        this.piege4.body.setAllowGravity(false); 
        this.piege4.setVisible(false); 
        


        //ui pv 

        this.ecranDegat = this.physics.add.image(448, 224, "ecranDegat").setScrollFactor(0); 
        this.ecranDegat.body.setAllowGravity(false); 
        this.ecranDegat.setImmovable(); 
        this.ecranDegat.setVisible(false); 
        this.ecranDegat.setAlpha(0.6); 
        this.ecranDegat.setScale(1.2); 

        this.ecranSoin= this.physics.add.image(448, 224, "ecranSoin").setScrollFactor(0); 
        this.ecranSoin.body.setAllowGravity(false); 
        this.ecranSoin.setImmovable(); 
        this.ecranSoin.setVisible(false); 
        this.ecranSoin.setAlpha(1.2); 

        this.invincible = false; 
        //this.nombrePv = 100; 
        this.pvPlayer = this.add.text(35,150,"PV : " + this.nombrePv,{fontSize:'16px',fill:'#000'}).setScrollFactor(0);
        
        //pv = 100
        this.pv100 = this.physics.add.image(60, 80, "pv100").setScrollFactor(0);
        this.pv100.body.setAllowGravity(false); 
        this.pv100.setScale(1.1);
        this.pv100.setVisible(false); 
        
        //pv = 80 
        this.pv80 = this.physics.add.image(60, 80, "pv80").setScrollFactor(0);
        this.pv80.body.setAllowGravity(false); 
        this.pv80.setScale(1.1);
        this.pv80.setVisible(false); 
        //pv = 60 
        this.pv60 = this.physics.add.image(60, 80, "pv60").setScrollFactor(0);
        this.pv60.body.setAllowGravity(false); 
        this.pv60.setScale(1.1);
        this.pv60.setVisible(false); 
        //pv = 40 
        this.pv40 = this.physics.add.image(60, 80, "pv40").setScrollFactor(0);
        this.pv40.body.setAllowGravity(false); 
        this.pv40.setScale(1.1);
        this.pv40.setVisible(false); 
        //pv = 20 
        this.pv20 = this.physics.add.image(60, 80, "pv20").setScrollFactor(0);
        this.pv20.body.setAllowGravity(false); 
        this.pv20.setScale(1.1);
        this.pv20.setVisible(false); 


        //barre de faim 
    
        this.playerMange = false; 

        this.barreFaim20 = this.physics.add.image(448, 30, "barreFaim20").setScrollFactor(0); 
        this.barreFaim20.body.setAllowGravity(false); 
        this.barreFaim20.setVisible(false); 

        this.barreFaim19 = this.physics.add.image(448, 30, "barreFaim19").setScrollFactor(0); 
        this.barreFaim19.body.setAllowGravity(false); 
        this.barreFaim19.setVisible(false); 

        this.barreFaim18 = this.physics.add.image(448, 30, "barreFaim18").setScrollFactor(0); 
        this.barreFaim18.body.setAllowGravity(false); 
        this.barreFaim18.setVisible(false); 

        this.barreFaim17 = this.physics.add.image(448, 30, "barreFaim17").setScrollFactor(0); 
        this.barreFaim17.body.setAllowGravity(false); 
        this.barreFaim17.setVisible(false); 

        this.barreFaim16 = this.physics.add.image(448, 30, "barreFaim16").setScrollFactor(0); 
        this.barreFaim16.body.setAllowGravity(false); 
        this.barreFaim16.setVisible(false); 

        this.barreFaim15 = this.physics.add.image(448, 30, "barreFaim15").setScrollFactor(0); 
        this.barreFaim15.body.setAllowGravity(false); 
        this.barreFaim15.setVisible(false); 

        this.barreFaim14 = this.physics.add.image(448, 30, "barreFaim14").setScrollFactor(0); 
        this.barreFaim14.body.setAllowGravity(false); 
        this.barreFaim14.setVisible(false); 

        this.barreFaim13 = this.physics.add.image(448, 30, "barreFaim13").setScrollFactor(0); 
        this.barreFaim13.body.setAllowGravity(false); 
        this.barreFaim13.setVisible(false); 

        this.barreFaim12 = this.physics.add.image(448, 30, "barreFaim12").setScrollFactor(0); 
        this.barreFaim12.body.setAllowGravity(false); 
        this.barreFaim12.setVisible(false); 

        this.barreFaim11 = this.physics.add.image(448, 30, "barreFaim11").setScrollFactor(0); 
        this.barreFaim11.body.setAllowGravity(false); 
        this.barreFaim11.setVisible(false); 

        this.barreFaim10 = this.physics.add.image(448, 30, "barreFaim10").setScrollFactor(0); 
        this.barreFaim10.body.setAllowGravity(false); 
        this.barreFaim10.setVisible(false); 

        this.barreFaim9 = this.physics.add.image(448, 30, "barreFaim9").setScrollFactor(0); 
        this.barreFaim9.body.setAllowGravity(false); 
        this.barreFaim9.setVisible(false); 

        this.barreFaim8 = this.physics.add.image(448, 30, "barreFaim8").setScrollFactor(0); 
        this.barreFaim8.body.setAllowGravity(false); 
        this.barreFaim8.setVisible(false); 

        this.barreFaim7 = this.physics.add.image(448, 30, "barreFaim7").setScrollFactor(0); 
        this.barreFaim7.body.setAllowGravity(false); 
        this.barreFaim7.setVisible(false); 

        this.barreFaim6 = this.physics.add.image(448, 30, "barreFaim6").setScrollFactor(0); 
        this.barreFaim6.body.setAllowGravity(false); 
        this.barreFaim6.setVisible(false); 

        this.barreFaim5 = this.physics.add.image(448, 30, "barreFaim5").setScrollFactor(0); 
        this.barreFaim5.body.setAllowGravity(false); 
        this.barreFaim5.setVisible(false); 

        this.barreFaim4 = this.physics.add.image(448, 30, "barreFaim4").setScrollFactor(0); 
        this.barreFaim4.body.setAllowGravity(false); 
        this.barreFaim4.setVisible(false); 

        this.barreFaim3 = this.physics.add.image(448, 30, "barreFaim3").setScrollFactor(0); 
        this.barreFaim3.body.setAllowGravity(false); 
        this.barreFaim3.setVisible(false); 

        this.barreFaim2 = this.physics.add.image(448, 30, "barreFaim2").setScrollFactor(0); 
        this.barreFaim2.body.setAllowGravity(false); 
        this.barreFaim2.setVisible(false); 

        this.barreFaim1 = this.physics.add.image(448, 30, "barreFaim1").setScrollFactor(0); 
        this.barreFaim1.body.setAllowGravity(false); 
        this.barreFaim1.setVisible(false); 

        if (this.faimPlayer > 0){ 

            setInterval(() => { 

                this.faimPlayer -= 1; 
                //dans le create this.faimPlayer = 20; 
                
            }, 8000); 
            
        }


        //bool
        calque_invisibleBoss.setCollisionByProperty({ estSolideBoss : true}); 

        //collisions 
        this.physics.add.collider(this.player, calque_invisibleBoss);

        this.physics.add.collider(this.player, this.boss); 
        this.physics.add.collider(this.boss, calque_invisibleBoss); 

        this.physics.add.overlap(this.player, this.visionTufo, this.vuParTufo, null, this); 
        this.physics.add.collider(this.player, this.armeTufo, this.contactArmeTufo, null, this); 
        this.physics.add.collider(this.player, this.armeTufo2, this.contactArmeTufo2, null, this); 
        this.physics.add.collider(this.player, this.armeTufo3, this.contactArmeTufo3, null, this); 
        this.physics.add.collider(this.player, this.armeTufo4, this.contactArmeTufo4, null, this); 
        this.physics.add.collider(this.player, this.projectileTufo, this.contactProjectileTufo, null, this); 

        this.physics.add.collider(this.projectileTufo, this.murInvisible, this.demiTour, null, this); 

        this.physics.add.collider(this.piques, calque_invisibleBoss);  
        this.physics.add.collider(this.piques2, calque_invisibleBoss); 
        this.physics.add.collider(this.piques7, calque_invisibleBoss);
        this.physics.add.collider(this.piques6, calque_invisibleBoss); 

        this.physics.add.collider(this.player, this.piques, this.contactPiques, null, this); 
        this.physics.add.collider(this.player, this.piques2, this.contactPiques2, null, this);
        this.physics.add.collider(this.player, this.piques7, this.contactPiques7, null, this);
        this.physics.add.collider(this.player, this.piques6, this.contactPiques6, null, this);

        this.physics.add.overlap(this.player, this.piege, this.contactPiege, null, this);
        this.physics.add.overlap(this.player, this.piege2, this.contactPiege2, null, this);
        this.physics.add.overlap(this.player, this.piege3, this.contactPiege3, null, this);
        this.physics.add.overlap(this.player, this.piege4, this.contactPiege4, null, this);
        
        this.physics.add.collider(this.bouleFeu, calque_invisibleBoss, this.destruction, null, this); 
        this.physics.add.collider(this.bouleFeu, this.boss, this.contactFeuTufo, null, this);

        this.physics.add.collider(this.tofuAvarieBoss1, calque_invisibleBoss); 
        this.physics.add.collider(this.player, this.tofuAvarieBoss1, this.contactTofuAvarieBoss1, null, this); 
        this.physics.add.collider(this.tofuAvarieBoss1, this.bouleFeu, this.contactFeuTofuAvarie1, null, this); 

        this.physics.add.collider(this.player, this.potion3, this.transformation3, null, this); 
        this.physics.add.collider(this.potion3, calque_invisibleBoss); 

        this.physics.add.collider(this.tofuSoigneur3, calque_invisibleBoss); 
        this.physics.add.collider(this.tofuSoigneur3, this.player, this.soigner3, null, this); 



        //touches du clavier -------------------------------------------------------------------------------
        this.cursors = this.input.keyboard.createCursorKeys(); 

        //---création d'une caméra---  
        this.physics.world.setBounds(0,0,1280,512); 
        this.cameras.main.setBounds(0, 0, 1280, 512);
        this.cameras.main.zoom = 0.9;
        this.cameras.main.followOffset.x = 300; 

        //---suivi du joueur par la caméra--- 
        this.cameras.main.startFollow(this.player);

        //musique
        this.sound.play("musiqueBoss", {volume : 0.1}); 

    }

//update

    update() { 

        //touches du clavier 
        if (this.cursors.left.isDown){ 

            this.player.setVelocityX(-270); 
            this.playerLeft = true; 
            this.playerRight = false; 

            if (this.nouvelleMecanique3 === true){ 
    
                this.player.anims.play("left7", true); 
            }
            else { 
    
                this.player.anims.play("left5", true);
    
            }
            
        }


        else if (this.cursors.right.isDown){ //sinon si la touche droite est appuyée

            this.player.setVelocityX(270); //alors vitesse positive en X
            this.playerLeft = false; 
            this.playerRight = true; 

            if (this.nouvelleMecanique3 === true){ 
    
                this.player.anims.play("right7", true); 
            }
            else { 
    
                this.player.anims.play("right5", true);
    
            }

            
        }

        else{ // sinon
            this.player.setVelocityX(0); //vitesse nulle

            if (this.nouvelleMecanique3 === true){ 

                this.player.anims.play("idle7", true); 
            }

            else { 
                this.player.anims.play("idle5", true); 
            }
            
        }

        if (this.cursors.up.isDown && this.player.body.blocked.down){
            //si touche haut appuyée ET que le perso touche le sol
            this.player.setVelocityY(-370); //alors vitesse verticale négative
        
        }

        if (this.cursors.space.isDown && this.player.body.blocked.down){ 

        
                
            this.player.setVelocityY(-520); 
            //this.kitsuneSautLong = true; 
            
            
        } 

        //tirer les boules de feu 

        if (this.cursors.shift.isDown){ 

            if (this.tirer === true){
                
                if (this.playerRight === true){
        
                    this.bouleFeu.setVisible(true);
                    this.bouleFeu.x = this.player.x + 30
                    this.bouleFeu.y = this.player.y
                    this.bouleFeu.setVelocityX(350);
                    this.tirer = false;
                }


                    setTimeout(() => {
                        this.tirer = true;
                        this.destruction(); 
                    }, 1000);


        
                if (this.playerLeft === true){

                    this.bouleFeu.setVisible(true);
                    this.bouleFeu.x = this.player.x - 30
                    this.bouleFeu.y = this.player.y
                    this.bouleFeu.setVelocityX(-350);
                    this.tirer = false;
                }

                    setTimeout(() => {
                        this.tirer = true;
                        this.destruction(); 
                    }, 1000);
            } 
            
        }

        //affichage de l'UI en fonction du nombre de Pv 
        if (this.nombrePv === 100){
            this.pv100.setVisible(true);  
            this.pv80.setVisible(false); 
        }

        if (this.nombrePv === 90){
            this.pv100.setVisible(true);  
            this.pv80.setVisible(false); 
        }

        if (this.nombrePv === 80){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
            this.pv60.setVisible(false); 
        }

        if (this.nombrePv === 70){ 
            this.pv100.setVisible(false); 
            this.pv80.setVisible(true); 
            this.pv60.setVisible(false); 
        }

        if (this.nombrePv === 60){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
            this.pv40.setVisible(false); 
        }

        if (this.nombrePv === 50){ 
            this.pv80.setVisible(false); 
            this.pv60.setVisible(true); 
            this.pv40.setVisible(false); 
        }

        if (this.nombrePv === 40){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
            this.pv20.setVisible(false); 
        }

        if (this.nombrePv === 30){ 
            this.pv60.setVisible(false); 
            this.pv40.setVisible(true); 
            this.pv20.setVisible(false); 
        }

        if (this.nombrePv === 20){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        if (this.nombrePv === 10){ 
            this.pv40.setVisible(false); 
            this.pv20.setVisible(true); 
        }

        //mort & écran de fin 
        //if (this.nombrePv <= 0){ 
            //this.estMort(); 
        //}

        //barre de faim 

        if (this.faimPlayer === 20){
            this.barreFaim20.setVisible(true);  
            this.barreFaim19.setVisible(false); 
        }

        if (this.faimPlayer === 19){
            this.barreFaim20.setVisible(false); 
            this.barreFaim19.setVisible(true);  
            this.barreFaim18.setVisible(false); 
        }

        if (this.faimPlayer === 18){
            this.barreFaim19.setVisible(false); 
            this.barreFaim18.setVisible(true);  
            this.barreFaim17.setVisible(false); 
        }

        if (this.faimPlayer === 17){
            this.barreFaim18.setVisible(false); 
            this.barreFaim17.setVisible(true);  
            this.barreFaim16.setVisible(false); 
        }

        if (this.faimPlayer === 16){
            this.barreFaim17.setVisible(false); 
            this.barreFaim16.setVisible(true);  
            this.barreFaim15.setVisible(false); 
        }

        if (this.faimPlayer === 15){
            this.barreFaim16.setVisible(false); 
            this.barreFaim15.setVisible(true);  
            this.barreFaim14.setVisible(false); 
        }

        if (this.faimPlayer === 14){
            this.barreFaim15.setVisible(false); 
            this.barreFaim14.setVisible(true);  
            this.barreFaim13.setVisible(false); 
        }

        if (this.faimPlayer === 13){
            this.barreFaim14.setVisible(false); 
            this.barreFaim13.setVisible(true);  
            this.barreFaim12.setVisible(false); 
        }

        if (this.faimPlayer === 12){
            this.barreFaim13.setVisible(false); 
            this.barreFaim12.setVisible(true);  
            this.barreFaim11.setVisible(false); 
        }

        if (this.faimPlayer === 11){
            this.barreFaim12.setVisible(false); 
            this.barreFaim11.setVisible(true);  
            this.barreFaim10.setVisible(false); 
        }

        if (this.faimPlayer === 10){
            this.barreFaim11.setVisible(false); 
            this.barreFaim10.setVisible(true);  
            this.barreFaim9.setVisible(false); 
        }

        if (this.faimPlayer === 9){
            this.barreFaim10.setVisible(false); 
            this.barreFaim9.setVisible(true);  
            this.barreFaim8.setVisible(false); 
        }

        if (this.faimPlayer === 8){
            this.barreFaim9.setVisible(false); 
            this.barreFaim8.setVisible(true);  
            this.barreFaim7.setVisible(false); 
        }

        if (this.faimPlayer === 7){
            this.barreFaim8.setVisible(false); 
            this.barreFaim7.setVisible(true);  
            this.barreFaim6.setVisible(false); 
        }

        if (this.faimPlayer === 6){
            this.barreFaim7.setVisible(false); 
            this.barreFaim6.setVisible(true);  
            this.barreFaim5.setVisible(false); 
        }

        if (this.faimPlayer === 5){
            this.barreFaim6.setVisible(false); 
            this.barreFaim5.setVisible(true);  
            this.barreFaim4.setVisible(false); 
        }

        if (this.faimPlayer === 4){
            this.barreFaim5.setVisible(false); 
            this.barreFaim4.setVisible(true);  
            this.barreFaim3.setVisible(false); 
        }

        if (this.faimPlayer === 3){
            this.barreFaim4.setVisible(false); 
            this.barreFaim3.setVisible(true);  
            this.barreFaim2.setVisible(false); 
        }

        if (this.faimPlayer === 2){
            this.barreFaim3.setVisible(false); 
            this.barreFaim2.setVisible(true);  
            this.barreFaim1.setVisible(false); 
        }

        if (this.faimPlayer === 1){
            this.barreFaim2.setVisible(false); 
            this.barreFaim1.setVisible(true);  
        
        }

        //manger tofu 
        if (this.playerMange === true){ 
            this.faimPlayer += 1; 
        }
        

        //fonction mort de faim 
        if (this.faimPlayer === 0){ 

            this.estMortFaim(); 

        }


        //flammes sur tufo 
        this.flamme.x = this.boss.x
        this.flamme.y = this.boss.y

        //pv tufo 
        this.pvBoss.x = this.boss.x - 60
        this.pvBoss.y = this.boss.y - 160

        //tofu avarié 1 
        this.distancePlayerTofuAvarie1 = Phaser.Math.Distance.Between(this.tofuAvarieBoss1.x, this.tofuAvarieBoss1.y, this.player.x, this.player.y);

        if(this.distancePlayerTofuAvarie1 < 200){ //si la distance entre le joueur et le kappa est inférieure à 300 px 

            this.tofuAvarieBoss1.setVelocityX(this.player.x - this.tofuAvarieBoss1.x); //le tofu va suivre le joueur
            this.tofuAvarieBoss1.setVelocityY(this.player.y - this.tofuAvarieBoss1.y); //le tofu va suivre le joueur

        }

        if (this.nombrePvBoss <= 0){ 

            this.scene.start("mortBoss"); 
        }

        

        //vision tufo 

        if (this.repereParTufo === true && this.nombrePvBoss >= 30){ 

            this.armeTufo.setVelocityX(-120); 
        }

        if (this.repereParTufo2 === true && this.nombrePvBoss >= 30){ 

            this.armeTufo2.setVelocityX(-140); 
        }
              

        if (this.repereParTufo3 === true && this.nombrePvBoss >= 30){ 
            this.armeTufo3.setVelocityX(-180); 
        }


        if (this.repereParTufo4 === true && this.nombrePvBoss >= 30){ 
            this.armeTufo4.setVelocityX(-200); 
        }

        if (this.repereParTufo3 === true && this.nombrePvBoss < 30){ 
            this.armeTufo3.setVelocityX(-280); 
        }

        if (this.repereParTufo4 === true && this.nombrePvBoss < 30){ 
            this.armeTufo4.setVelocityX(-400); 
        }

        if (this.repereParTufo5 === true && this.nombrePvBoss >= 30){ 
            this.projectileTufo.setVelocityX(-240); 
        }

        if (this.repereParTufo5 === true && this.nombrePvBoss < 30){ 
            this.projectileTufo.setVelocityX(-340); 
        }

        //projectileTufo qui fait demi tour 
        if (this.contactMurInvisible === true){ 
            this.projectileTufo.flipX = true; 
            this.repereParTufo5 = false; 
            this.projectileTufo.setVelocityX(260); 
        }


    }

//fonctions 

    destruction(bouleFeu, calque_invisibleBoss){

        this.bouleFeu.x = -100
        this.bouleFeu.y = -100
        this.bouleFeu.setVisible(false); 
        this.bouleFeu.setVelocityX(0); 
    }

    contactFeuTufo(boss, bouleFeu){ 

        this.boss.setTint(0xe8554a);
        this.flamme.setVisible(true); 
        this.boss.setTexture("bossSad"); 
        this.nombrePvBoss -= 10; 
        this.pvBoss.setText("PV Tufo : " + this.nombrePvBoss); 

        setTimeout(() => { 

            this.boss.clearTint(); 
            this.flamme.setVisible(false); 
            this.boss.setTexture("boss"); 
                    
        }, 1000); 


    }

    contactFeuTofuAvarie1(tofuAvarieBoss1, bouleFeu){ 

        this.tofuAvarieBoss1.setTint(0x910f0f);
        this.tofuAvarieBoss1.setOffset(-900, -900); 
        this.tofuAvarieBoss1.body.setAllowGravity(false); 
        


        
        setTimeout(() => { 

            this.tofuAvarieBoss1.clearTint(); 
            this.tofuAvarieBoss1.setVisible(false); 
           
                    
        }, 300); 


    }

    contactPiege(player, piege){ 

        setTimeout(() => { 

            this.piques.body.setAllowGravity(true); 
             
        }, 750); 

        this.piege.destroy(); 

        setTimeout(() => { 

            this.piques.destroy();          
                    
        }, 2000); 
        
    }

    contactPiege2(player, piege2){ 

        setTimeout(() => { 

            this.piques2.body.setAllowGravity(true); 
             
        }, 750); 

        this.piege2.destroy(); 

        setTimeout(() => { 

            this.piques2.destroy();          
                    
        }, 2000); 
        
    }

    contactPiege3(player, piege3){ 

        setTimeout(() => { 

            this.piques7.body.setAllowGravity(true); 
             
        }, 750); 

        this.piege3.destroy(); 

        setTimeout(() => { 

            this.piques7.destroy();          
                    
        }, 2000); 
        
    }

    contactPiege4(player, piege4){ 

        setTimeout(() => { 

            this.piques6.body.setAllowGravity(true); 
             
        }, 750); 

        this.piege4.destroy(); 

        setTimeout(() => { 

            this.piques6.destroy();          
                    
        }, 2000); 
        
    }

    contactPiques(player, piques){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        
        setTimeout(() => { 

            this.piques.destroy(); 
                    
                    
        }, 0.1); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactPiques2(player, piques2){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        
        setTimeout(() => { 

            this.piques2.destroy(); 
                    
                    
        }, 0.1); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactPiques7(player, piques7){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        
        setTimeout(() => { 

            this.piques7.destroy(); 
                    
                    
        }, 0.1); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactPiques6(player, piques6){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        
        setTimeout(() => { 

            this.piques6.destroy(); 
                    
                    
        }, 0.1); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    demiTour(projectileTufo, murInvisible){ 
        this.contactMurInvisible = true; 

        setTimeout(() => { 

            this.contactMurInvisible = false; 
                    
        }, 2000); 

        setTimeout(() => { 

            this.projectileTufo.setOffset(-900, -900); 
            this.projectileTufo.setVisible(false);   
            this.projectileTufo.setVelocityX(0); 

        }, 2000);

    }

    contactArmeTufo(player, armeTufo){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        this.estInvincible(); 
        
        this.armeTufo.setOffset(-900, -900); 
        this.armeTufo.setVisible(false); 
         

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactArmeTufo2(player, armeTufo2){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        this.estInvincible(); 

        this.armeTufo2.setOffset(-900, -900); 
        this.armeTufo2.setVisible(false); 
         

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactArmeTufo3(player, armeTufo3){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        this.estInvincible(); 
         
        this.armeTufo3.setOffset(-900, -900); 
        this.armeTufo3.setVisible(false); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactArmeTufo4(player, armeTufo4){ 

        this.nombrePv -= 20; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        this.estInvincible(); 
         
        this.armeTufo4.setOffset(-900, -900); 
        this.armeTufo4.setVisible(false); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    contactProjectileTufo(player, projectileTufo){ 

        this.nombrePv -= 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv);
        this.player.setTint(0x910f0f); 
        this.ecranDegat.setVisible(true); 
        this.estInvincible(); 
         
        this.projectileTufo.setOffset(-900, -900); 
        this.projectileTufo.setVisible(false); 

        setTimeout(() => { 

            this.player.clearTint();  
            this.ecranDegat.setVisible(false); 
            
        }, 1600); 

    }

    soigner3(player, tofuSoigneur3){ 


        this.nombrePv += 10; 
        this.pvPlayer.setText("PV : " + this.nombrePv); 
        this.tofuSoigneur3.destroy(); 
        this.ecranSoin.setVisible(true); 
        this.playerMange = true; 

        setTimeout(() => { 

            this.ecranSoin.setVisible(false); 

        }, 2000); 

        setTimeout(() => { 

            this.sound.play("bruitMangerTofu", {volume : 0.5}); 
            
        }, 50);

        setTimeout(() => { 

            this.playerMange = false; 

        }, 0.1); 
    }



    estInvincible(player){ //permet de rendre le joueur invincible pendant deux sec 

        setTimeout(() => { 
            this.invincible = false;
            this.player.setAlpha(1);
        }, 2000); 

        this.invincible = true;
        this.player.setAlpha(0.2);
    }

    estMort(player){ 
        if (this.nombrePv <= 0){ 
            this.scene.start("finJeu"); 
        }
    }

    //vu par tufo 
    vuParTufo(player, visionTufo){ 

            this.armeTufo.setVisible(true); 
            this.repereParTufo = true;        

        setTimeout(() => { 

            this.armeTufo2.setVisible(true); 
            this.repereParTufo2 = true; 

        }, 4000); 

        setTimeout(() => { 

            this.armeTufo3.setVisible(true); 
            this.repereParTufo3 = true; 

        }, 10000); 

        setTimeout(() => { 

            this.projectileTufo.setVisible(true); 
            this.repereParTufo5 = true; 

        }, 14000); 

        setTimeout(() => { 

            this.armeTufo4.setVisible(true); 
            this.repereParTufo4 = true; 

        }, 20000); 


    }

    

    transformation3(player, potion3){ 

        this.messageShift2.setVisible(true); 
        this.player.setTint(0xffbb00); 
        this.nouvelleMecanique3 = true; 
        this.potion3.destroy(); 
        setTimeout(() => { 

            this.player.clearTint(); 
            this.messageShift2.setVisible(false); 
            
            
        }, 3500); 

        setTimeout(() => { 
            this.sound.play("itemObtenu", {volume : 0.4}); 
            
        }, 100);

    }

    estMortFaim(player){ 
        if (this.faimPlayer <= 0){ 
            this.scene.start("finJeu"); 
        }
    }

    
    
 
        

    
}












class MortBoss extends Phaser.Scene { 
    constructor() { 
        super("mortBoss")
    }

    preload() { 
        this.load.image("ecranMortTufo", "ecranMortTufo.png"); 
    }

    create() { 
        this.ecranMortTufo = this.add.image(448, 224, "ecranMortTufo");
        
    }

    update() { 
        //...
    }
    
}















//chargement de l'écran de fin ---------------------------------------------------------------------------------------------------------

class Fin extends Phaser.Scene { 
    constructor() { 
        super("finJeu")
    }

    preload() { 
        this.load.image("ecranFin", "ecranMort.png"); 
    }

    create() { 
        this.add.image(448, 224, "ecranFin");
    
    }
    
}
