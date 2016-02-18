var wt='ПОБЕДА!!';
var wx=canvas.width/3;
var wy=canvas.height/2;
var wh=30;
var wdx=-2;
var wdy=2;
var wa = 0;

function WIN(){
	ctx.font = "bold "+wh+"px Comic Sans MS";
	ctx.fillStyle = "#0095DD";
	ctx.fillText(wt, wx, wy);
	
	if(wx+wdx>canvas.width-wt.length*wh/2-50||wx+wdx<50){wdx=-wdx*Math.random();}
	if(wy+wdy<wh+50||wy+wdy>canvas.height-50){wdy=-wdy*Math.random();}
    
	if(wdx>4){wdx--;}else if(wdx<-4){wdx++;}
	if(wdy>4){wdy--;}else if(wdy<-4){wdy++;}
	
	wx+=wdx;
	wy+=wdy;
	wdx+=Math.random()-Math.random();
	wdy+=Math.random()-Math.random();
	wa++;
	if(wa==200){
		wt='Автор: Егор Зюзин)';
	}else if(wa==500){
		wt='Спасибо за внимание!';
	}else if(wa==700){
		wt='Это случаное движение)'
	}
}