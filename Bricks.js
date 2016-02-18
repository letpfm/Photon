var brickRowCount = 4;//4
var brickColumnCount = 9;//9
var brickWidth = 75;
var brickHeight = 30;
var brickPadding = 10;
var brickOffsetTop = 40;
var brickOffsetLeft = 17.5;
var bricks = [];
var k = [255,0,0];
var K = 1;
var a = 0;
var score = 0;
var Plus = [];

var bricks = [];

function bricksnull(){
	for(c=0; c<brickColumnCount; c++) {
		bricks[c] = [];
		Plus[c] = [];
		for(r=0; r<brickRowCount; r++) {
			bricks[c][r] = { x: 0, y: 0, status: 1 };
			Plus[c][r] = {a: 0};
		}
	}
}
bricksnull();
function drawBricks() {
	if(a==1){a=0;k=[0,0,0];k[K]=255;K++;if(K>2){K=0}}
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
			var b = bricks[c][r]
			var plus = Plus[c][r]
            if(b.status == 1) {
                b.x = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                b.y = (r*(brickHeight+brickPadding))+brickOffsetTop;
                ctx.beginPath();
                ctx.rect(b.x, b.y, brickWidth, brickHeight);
                ctx.fillStyle = 'rgb('+k[0]+','+k[1]+','+k[2]+')';
                ctx.fill();
                ctx.closePath();
				
				if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
					dy = -dy;
					b.status = 0;
					score++;
					if(score == brickRowCount*brickColumnCount) {
						win=1;
                    }
				}
			}else if(b.status==0){
				ctx.font = "bold 30px Arial";
				ctx.fillStyle = "#0095DD";
				ctx.fillText("+", b.x+brickWidth/3, b.y+brickHeight-plus.a);
				plus.a++;
				if(plus.a==50){b.status = 2;}
			}
        }
    }
}