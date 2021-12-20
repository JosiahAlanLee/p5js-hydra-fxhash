//_hydra_overlay_002

/* CUSTOM FUNCTIONS FOR P5LIVE */
// keep fullscreen if window resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
	return oVal += (iVal - oVal) * eVal;
}

// processing compatibility
function println(msg){
	print(msg);
}


let libs = ['./hydra-synth']
const c = document.createElement('canvas')
c.width = window.innerWidth
c.height = window.innerHeight
document.body.appendChild(c)
let hydra = new Hydra ({detectAudio: false, canvas:c})
let pg;

//hydra
src(o0)
.layer(src(s0))
.blend(osc())
.pixelate(150,150)
.out(o0)
render(o0)
// / hydra - end

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	pg = createGraphics(1000,1000)
	s0.init({ src:drawingContext.canvas })
	background(0)
}

function draw() {
	clear()
	pg.drawingContext.drawImage(c, 0, 0, pg.width, pg.height)
	texture(pg)
	plane(pg.width - 100, pg.height - 100);
}

