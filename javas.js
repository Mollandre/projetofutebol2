
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
    img.src = "borussia.png"
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
    alert('!!APERTE NO BOTÃO RESTART PARA INICIAR UMA NOVA CONTAGEM!!')
    var res1 = document.getElementById("res1")
    res1.style.backgroundColor = '#F2DB3F';
    res1.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
  var res2 = document.getElementById("res2")
  res2.style.backgroundColor = '#2347C8';
    res2.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
    var res3 = document.getElementById("res3")
    res3.style.backgroundColor = 'black';

    res3.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
    var res4 = document.getElementById('res4')
    res4.style.backgroundColor = '#DB532E';
    res4.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
    var img = document.getElementById('img')

   
    if (amarelo>vermelho && amarelo > preto && amarelo > azul){
				
     res1.innerHTML = 'Amarelo Venceu'
     img.src = "borussiacam.png"
     res1.innerHTML = ''
     res2.innerHTML =''
     res3.innerHTML = ''
     res4.innerHTML =''
      }
    
    if(vermelho>amarelo && vermelho > preto && vermelho > azul){
        res4.innerHTML = 'Vermelho Venceu'
         img.src = "milancam.png"
         }
         if(preto>amarelo && preto > vermelho && preto > azul){
        res3.innerHTML = 'Preto Venceu'
        img.src = "preto cam.png"
         }
          if(azul>amarelo && azul > vermelho && azul > preto){
        res2.innerHTML = 'Azul Venceu'
        img.src = "camazul.png"
      }
          
          
          if (amarelo == vermelho ){
           
           res1.innerHTML = 'Amarelo e Vermelho empatou'
           
           }
           
           
           if (amarelo == preto   ){
             
             res1.innerHTML = 'Amarelo e Preto empatou'
             
           }
           
           
             if (vermelho == preto   ){
             
               
               res4.innerHTML = 'Vermelho e Preto empatou'
               
               }
               
          if (azul == preto   ){
             
               
               res3.innerHTML = 'Azul e Preto empatou'
               
               }
               if (azul == vermelho   ){
             
               
               res2.innerHTML = 'Azul e Vermelho empatou'
               
               }
               if (azul == amarelo   ){
             
               
               res2.innerHTML = 'Azul e Amarelo empatou'
               
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
  var res1 = document.getElementById("res1")
  res1.style.backgroundColor = '#F2DB3F';
  res1.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
var res2 = document.getElementById("res2")
res2.style.backgroundColor = '#2347C8';
  res2.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
  var res3 = document.getElementById("res3")
  res3.style.backgroundColor = 'black';
  res3.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";
  var res4 = document.getElementById('res4')
  res4.style.backgroundColor = '#DB532E';
  res4.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.404)";



  res1.innerHTML = `Time Amarelo tem ${amarelo} vitorias`
  
  res2.innerHTML = `Time Azul tem ${azul} vitorias`
  res3.innerHTML = `Time Preto tem ${preto} vitorias`
  res4.innerHTML = `Time Vermelho tem ${vermelho} vitorias`



}  
function Restart(){
  window.location.reload()
}



