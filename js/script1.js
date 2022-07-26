//reporuccion texto 1
function rep1(){
	decir(document.getElementById("texto1").value);
}
function det1(){
	speechSynthesis.cancel();
}
function pau1(){
	speechSynthesis.pause();
}
function pla1(){
	speechSynthesis.resume();
}

//reporuccion texto 2
function rep2(){
	decir(document.getElementById("texto2").value);
}
function det2(){
	speechSynthesis.cancel();
}
function pau2(){
	speechSynthesis.pause();
}
function pla2(){
	speechSynthesis.resume();
}

//reporuccion texto 3
function rep3(){
	decir(document.getElementById("texto3").value);
}
function det3(){
	speechSynthesis.cancel();
}
function pau3(){
	speechSynthesis.pause();
}
function pla3(){
	speechSynthesis.resume();
}

//reporuccion texto 4
function rep4(){
	decir(document.getElementById("texto4").value);
}
function det4(){
	speechSynthesis.cancel();
}
function pau4(){
	speechSynthesis.pause();
}
function pla4(){
	speechSynthesis.resume();
}

//reporuccion texto 5
function rep5(){
	decir(document.getElementById("texto5").value);
}
function det5(){
	speechSynthesis.cancel();
}
function pau5(){
	speechSynthesis.pause();
}
function pla5(){
	speechSynthesis.resume();
}
//reporuccion texto 6
function rep6(){
	decir(document.getElementById("texto6").value);
}
function det6(){
	speechSynthesis.cancel();
}
function pau6(){
	speechSynthesis.pause();
}
function pla6(){
	speechSynthesis.resume();
}
//reporuccion texto 7
function rep7(){
	decir(document.getElementById("texto7").value);
}
function det7(){
	speechSynthesis.cancel();
}
function pau7(){
	speechSynthesis.pause();
}
function pla7(){
	speechSynthesis.resume();
}
//reporuccion texto 8
function rep8(){
	decir(document.getElementById("texto8").value);
}
function det8(){
	speechSynthesis.cancel();
}
function pau8(){
	speechSynthesis.pause();
}
function pla8(){
	speechSynthesis.resume();
}
//reporuccion texto 9
function rep9(){
	decir(document.getElementById("texto9").value);
}
function det9(){
	speechSynthesis.cancel();
}
function pau9(){
	speechSynthesis.pause();
}
function pla9(){
	speechSynthesis.resume();
}
//reporuccion texto 10
function rep10(){
	decir(document.getElementById("texto10").value);
}
function det10(){
	speechSynthesis.cancel();
}
function pau10(){
	speechSynthesis.pause();
}
function pla10(){
	speechSynthesis.resume();
}
//reporuccion texto 11
function rep11(){
	decir(document.getElementById("texto11").value);
}
function det11(){
	speechSynthesis.cancel();
}
function pau11(){
	speechSynthesis.pause();
}
function pla11(){
	speechSynthesis.resume();
}
//reporuccion texto 12
function rep12(){
	decir(document.getElementById("texto12").value);
}
function det12(){
	speechSynthesis.cancel();
}
function pau12(){
	speechSynthesis.pause();
}
function pla12(){
	speechSynthesis.resume();
}




function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

