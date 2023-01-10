function tocaSom (idelementaudio){
    document.querySelector(idelementaudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador<ListaDeTeclas.length){
   
    const teclas = ListaDeTeclas[contador];
    const instrumento = teclas.classList[1];

    //template string = com crase 
    const idAudio = `#som_${instrumento}`

   // console.log(idAudio)
   
    teclas.onclick= function (){
    tocaSom(idAudio)
   }
    contador = contador+1;
    //console.log(contador)
}
