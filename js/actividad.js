//codgo para seleccion multiple

function opcionMultiple1(numero){
	if(numero==1){
		document.getElementById('retroOM1').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroOM1').innerHTML='<b>Respuesta Incorrecta. La estructura descrita en la imagen corresponde al ciclo FOR</b>';
	}
}

function opcionMultiple2(numero){
	if(numero==1){
		document.getElementById('retroOM2').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroOM2').innerHTML='<b>Respuesta Incorrecta. La estructura descrita en la imagen corresponde al ciclo WHILE</b>';
	}
}
function opcionMultiple3(numero){
	if(numero==1){
		document.getElementById('retroOM3').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroOM3').innerHTML='<b>Respuesta Incorrecta. La estructura descrita en la imagen corresponde al ciclo DO-WHILE</b>';
	}
}


//codigo para verdadero y falso

function verdaderoFalso1(numero){
	if(numero==1){
		document.getElementById('retroVF1').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroVF1').innerHTML='<b>Respuesta Incorrecta. Para el ciclo FOR si se necesita saber valor especifico inicial y otro valor final</b>';
	}
}
function verdaderoFalso2(numero){
	if(numero==1){
		document.getElementById('retroVF2').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroVF2').innerHTML='<b>Respuesta Incorrecta. El ciclos while no dependen directamente de valores numéricos, sino de valores booleanos </b>';
	}
}
function verdaderoFalso3(numero){
	if(numero==1){
		document.getElementById('retroVF3').innerHTML='<b>Respuesta Correcta</b>';
	}
	if(numero==2){
		document.getElementById('retroVF3').innerHTML='<b>Respuesta Incorrecta. El ciclo primero DO-WHILE si ejecuta primero el bloque de instrucciones antes de evaluar la condición necesaria</b>';
	}
}


//codigo para llegnar vacios

function comporvarRespoesta1(){
	let val1=document.getElementById("llenar1").value;
	
	if(val1=="verdad"){
		document.getElementById('retroLLenar1').innerHTML="Respuesta correcta";
	}
	else{
		document.getElementById('retroLLenar1').innerHTML="Respuesta incorrecta";
		document.getElementById('mostrarResp1').style.display="block"
		document.getElementById('limpiarResp1').style.display="block"
		document.getElementById('enviarResp1').style.display="none"	
	}
}

function verRespuestaLenar1(){
	document.getElementById('mostrarResp1').style.display="none"
	document.getElementById('limpiarResp1').style.display="block"	
	document.getElementById('retroLLenar1').innerHTML="";
	document.getElementById("llenar1").value="verdad";

}

function lipiarCuadro1(){
	document.getElementById('mostrarResp1').style.display="none"
	document.getElementById('limpiarResp1').style.display="none"
	document.getElementById('enviarResp1').style.display="block"	
	document.getElementById('retroLLenar1').innerHTML="";
	document.getElementById('llenar1').value = "" ;
}

//------------------------------------------
function comporvarRespoesta2(){
	let val2=document.getElementById("llenar2").value;
	
	if(val2=="determinar el tamaño"){
		document.getElementById('retroLLenar2').innerHTML="Respuesta correcta";
	}
	else{
		document.getElementById('retroLLenar2').innerHTML="Respuesta incorrecta";
		document.getElementById('mostrarResp2').style.display="block"
		document.getElementById('limpiarResp2').style.display="block"
		document.getElementById('enviarResp2').style.display="none"	
	}
}

function verRespuestaLenar2(){
	document.getElementById('mostrarResp2').style.display="none"
	document.getElementById('limpiarResp2').style.display="block"	
	document.getElementById('retroLLenar2').innerHTML="";
	document.getElementById("llenar2").value="determinar el tamaño";

}

function lipiarCuadro2(){
	document.getElementById('mostrarResp2').style.display="none"
	document.getElementById('limpiarResp2').style.display="none"
	document.getElementById('enviarResp2').style.display="block"	
	document.getElementById('retroLLenar2').innerHTML="";
	document.getElementById('llenar2').value = "" ;
}

//------------------------------------------------------------
function comporvarRespoesta3(){
	let val3=document.getElementById("llenar3").value;
	
	if(val3=="sin evaluar"){
		document.getElementById('retroLLenar3').innerHTML="Respuesta correcta";
	}
	else{
		document.getElementById('retroLLenar3').innerHTML="Respuesta incorrecta";
		document.getElementById('mostrarResp3').style.display="block"
		document.getElementById('limpiarResp3').style.display="block"
		document.getElementById('enviarResp3').style.display="none"	
	}
}

function verRespuestaLenar3(){
	document.getElementById('mostrarResp3').style.display="none"
	document.getElementById('limpiarResp3').style.display="block"	
	document.getElementById('retroLLenar3').innerHTML="";
	document.getElementById("llenar3").value="sin evaluar";

}

function lipiarCuadro3(){
	document.getElementById('mostrarResp3').style.display="none"
	document.getElementById('limpiarResp3').style.display="none"
	document.getElementById('enviarResp3').style.display="block"	
	document.getElementById('retroLLenar3').innerHTML="";
	document.getElementById('llenar3').value = "" ;
}