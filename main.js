function tocaSom (idelementaudio){
   const elemento = document.querySelector(idelementaudio);
   if( elemento != null && elemento.localName === 'audio'){
    elemento.play()
   }
   else {
    alert("Elemento não encontrado")
   }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador=0; contador<ListaDeTeclas.length; contador++){
   
    const teclas = ListaDeTeclas[contador];
    const instrumento = teclas.classList[1];

   
    const idAudio = `#som_${instrumento}` //template string = com crase 


   
    teclas.onclick= function (){
    tocaSom(idAudio)
   }
 
    teclas.onkeydown = function(evento)
    {
      
      
        if(evento.code === 'Space' || evento.code === 'Enter'){
        teclas.classList.add('ativa');
      }
    
    }

    teclas.onkeyup = function (){
        teclas.classList.remove('ativa')
    }

    
}

