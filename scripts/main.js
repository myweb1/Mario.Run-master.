var variable = 0
var variable2 = 0
function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
	qwertyuiopasdfghjklzxcvbn = loadSound("qwertyuiopasdfghjklzxcvbnm.wav")
}

function setup() {
	var VIDEO = createCapture(VIDEO)
	VIDEO.parent("v_i_d_e_o")
	var ml56 = ml5.poseNet(VIDEO,()=>{console.log("carge!!!!!!!!!!!!!!!!!!!!!!!!!!")})
	ml56.on("pose",(resultados)=>{
		if (resultados [0]) {
			variable = resultados[0].pose.nose.x
			variable2 = resultados[0].pose.nose.y
		}
	})
	var canvas = createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("_juego_chido_carnal")
	instializeInSetup(mario);
	// playBGMusic();
}

function draw() {
	game()
}