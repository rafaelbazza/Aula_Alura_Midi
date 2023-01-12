function tocaSom (idelementaudio){
    document.querySelector(idelementaudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador=0; contador<ListaDeTeclas.length; contador++){
   
    const teclas = ListaDeTeclas[contador];
    const instrumento = teclas.classList[1];

   
    const idAudio = `#som_${instrumento}` //template string = com crase 


   
    teclas.onclick= function (){
    tocaSom(idAudio)
   }
 
    

    
}

