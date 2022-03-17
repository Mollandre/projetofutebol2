
var amarelo = 0
var azul = 0
var preto = 0
var vermelho = 0
var hora = document.getElementById("hora")
var date = new Date()
var horas = date.getHours



function Confirmar(){
   
  var cores = document.getElementsByName("cores")
  var img = document.getElementById("img")
  var placar = document.getElementById("placar")
  var lista = document.createElement('option')
  placar.appendChild(lista)

  if(cores[0].checked){
    (++amarelo)
    lista.text = `amarelo ${amarelo} vitorias`
    img.src = "amarelo.png"
  }
else if (cores[1].checked){
  (++azul)
  lista.text = `azul ${azul} vitorias`
  img.src = "azul.png"

}
else if (cores[2].checked){
  (++preto)
  lista.text = `preto ${preto} vitorias`
  img.src = "preto.png"
}
else if (cores[3].checked){
  (++vermelho)
  lista.text = `vermelho ${vermelho} vitorias`
  img.src = "milan.png"
}
else{
  lista.text = '***EMPATE***'
  img.src = "empate.png"
}


}
  
  
  function finalizar(){
    
    var res = document.getElementById("res")
    
    if (amarelo>vermelho && amarelo > preto && amarelo > azul){
				
     res.innerHTML = 'Amarelo Venceu'
      }
    
    
  
  
  
    
      if(vermelho>amarelo && vermelho > preto && vermelho > azul){
        res.innerHTML = 'Vermelho Venceu'
         
         }if(preto>amarelo && preto > vermelho && preto > azul){
        res.innerHTML = 'Preto Venceu'
         }
          if(azul>amarelo && azul > vermelho && azul > preto){
        res.innerHTML = 'Azul Venceu'
      }
          
          
          if (amarelo == vermelho ){
           
           res.innerHTML = 'Amarelo e Vermelho empatou'
           
           }
           
           
           if (amarelo == preto   ){
             
             res.innerHTML = 'Amarelo e Preto empatou'
             
           }
           
           
             if (vermelho == preto   ){
             
               
               res.innerHTML = 'Vermelho e Preto empatou'
               
               }
               
          if (azul == preto   ){
             
               
               res.innerHTML = 'Azul e Preto empatou'
               
               }
               if (azul == vermelho   ){
             
               
               res.innerHTML = 'Azul e Vermelho empatou'
               
               }
               if (azul == amarelo   ){
             
               
               res.innerHTML = 'Azul e Amarelo empatou'
               
               }
               
               
  }
  
    function Aresultado(){
     
     alert('!!VERIFIQUE SE O TIME ESTÁ COM A BOLINHA AZUL SELECIONADA!!')
     alert('!!CASO A BOLINHA AZUL ESTEJA SELECIONADA NO TIME ERRADO FAVOR ADICIONAR NOVAMENTE O TIME SELECIONADO ERRADO!!')
     alert('!!CASO TENHA APAGADO O RESULTADO ERRADO FAVOR ADICIONAR NOVAMENTE!!')
     
      // vamos obter o elemento select
      var cores = document.getElementsByName("cores");    
  var placar = document.getElementById("placar")
      // vamos obter o índice da opção selecionada
      var  lista = placar.options.selectedIndex;
  
      // vamos excluir a opção selecionada
      if(placar.options.remove){ 
        // Internet Explorer, Safari, Opera, Google Chrome 
        placar.options.remove(lista);
      }
      else{ // Firefox
        placar.remove(lista); 
      }
     
      if(cores[0].checked){
        (amarelo--)
        
      }
    else if (cores[1].checked){
      (azul--)
      
    
    }
    else if (cores[2].checked){
      (preto--)
      
    }
    else if (cores[3].checked){
      (vermelho--)
      
    }
    
    }
  
function resultado(){
  var res = document.getElementById('res')

  res.innerHTML = `Time amarelo tem ${amarelo} vitorias, Time azul tem ${azul} vitorias, Time preto ${preto} vitorias, Time vermelho ${vermelho} vitorias.`
}  
function Restart(){
  window.location.reload()
}

