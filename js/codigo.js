var op1=0;
var op2=0;
var op3=0;
var op4=0;
var op5=0;
var op6=0;


var cop1=0;
var cop2=0;
var cop3=0;
var cop4=0;
var cop5=0;


function activiarBoton(){


	var s=document.getElementById('todoContenido').style.display
	if(s=="block"){
		document.getElementById('todoContenido').style.display="none"
	}
	else{
		document.getElementById('todoContenido').style.display="block"
	}

	if(op3==0){
		document.getElementById("progress").value+=10;
		op3=1;
	}
	
}
function desactivarBoton(){
	document.getElementById('todoContenido').style.display="none"
}

function desactivarBoton2(){
	document.getElementById('todoContenido').style.display="none"
	if(op2==0){
		document.getElementById("progress").value+=10;
		op2=1;
	}
}

function desactivarBoton4(){
	document.getElementById('todoContenido').style.display="none"
	if(op4==0){
		document.getElementById("progress").value+=15;
		op4=1;
	}
}
function desactivarBoton5(){
	document.getElementById('todoContenido').style.display="none"
	if(op5==0){
		document.getElementById("progress").value+=20;
		op5=1;
	}
}
function desactivarBoton6(){
	document.getElementById('todoContenido').style.display="none"
	if(op6==0){
		document.getElementById("progress").value+=5;
		op6=1;
	}
}

function cont1(){
	if(cop1==0){
		document.getElementById("progress").value+=10;
		cop1=1;
	}
}

function cont2(){
	if(cop2==0){
		document.getElementById("progress").value+=10;
		cop2=1;
	}
}

function cont3(){
	if(cop3==0){
		document.getElementById("progress").value+=10;
		cop3=1;
	}
}

function cont4(){
	if(cop4==0){
		document.getElementById("progress").value+=10;
		cop4=1;
	}
}

function cont5(){
	if(cop5==0){
		document.getElementById("progress").value+=10;
		cop5=1;
	}
}

