var tela = 1
var largura = 200
var altura = 50
var xmenu = 50
var ymenu1 = 85
var ymenu2 = 145
var ymenu3 = 200
var inp
var frase1 = ""
var estado1 = true
var botao;
var botaoMudar;
var respostas = [];

function setup(){
  createCanvas(300, 300);
  respostas[0] = "meu nome é pedro"; //tela 5
  respostas[1] = "ola bom dia" // tela2
  respostas[2] = "nossa que dia lindo" // tela 6
  respostas[3] = "bob esponja calça quadrada"
  respostas[4] = "sempre respeitem seus pais"
  respostas[5] = "eu gosto de comer maça"
  respostas[6] = "é muito bom estar de ferias"
  respostas[7] = "é muito bom estudar matematica"
  respostas[8] = "eu gosto muito de comer lasanha"
  respostas[9] = "o natal é um tempo magico"


}
 
function meuEvento() {
  //console.log('voce ta digitando: ', this.value());
  frase1 = this.value();
}
function draw(){
 // console.log("Coordenada X: " + mouseX + "\n Coordenada Y: " + mouseY)
  
  textStyle(NORMAL);
  if(tela==1){
    background(0, 126, 255)
    textAlign(CENTER)
    textSize(26)
    
    if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > 
      ymenu1 && mouseY < ymenu1 + altura){
      stroke(200);
      fill(20);
      rect(xmenu, ymenu1, largura, altura, 20);
   if(mouseIsPressed) {
          tela = 5
        }
    }
    fill(240);
    noStroke()
    text("começar", 150, 120);
    
        if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > 
      ymenu2 && mouseY < ymenu2 + altura){
    stroke(200);
    fill(20);
    rect(xmenu, ymenu2, largura, altura, 15)
        if(mouseIsPressed) {
          tela = 3
        }
        }
    
    fill(240)
    noStroke()
    text("explicações", 150, 180)
    
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > 
      ymenu3 && mouseY < ymenu3 + altura){
    stroke(200);
    fill(20);
    rect(xmenu, ymenu3, largura, altura, 15)
        if(mouseIsPressed) {
          tela = 4
        }
        }
    
    fill(240)
    noStroke()
    text("creditos", 150, 235)
     }
 
    
  else if (tela == 3) {
  background(10);
    text("esse jogo tem o intuito de ensinar as crianças do 1ºano do ensino fundamental a pegar frases embaralhadas e colocar elas de forma correta, afim de deixar uma frase com coesão, ",55,40,200);
    textSize(17)
    fill(500);
    noStroke()
   
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
     
      }
}

 
//creditos do jogo
else if(tela == 4){
  tela4();
  
}//fim da tela 4



if(tela == 2){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
      estado1 = false
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
    text(" bom ola dia",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}
  
  
  
  else if(tela == 5){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
      estado1 = false
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
    text(" pedro meu é nome",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()
}//fecha o tela 5


else if(tela == 6){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
    text(" lindo nossa dia que",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

else if(tela == 7){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
     }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
   
    text(" esponja bob quadrada calça",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

else if(tela == 8){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
     }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
   
    text(" pais seus sempre respeitem",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

else if(tela == 9){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
   
    text(" gosto maça eu comer de",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

else if(tela == 10){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar')    
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
    
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
    text(" de ferias estar muito bom é",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

  else if(tela == 11){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
    
    }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
    text(" bom é muito matematica estudar",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

  else if(tela == 12){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
     }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
   
    text(" muito lasanha gosto comer eu de",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

  
  else if(tela == 13){
  background(60)
 
    if(estado1==true){
    inp = createInput('');
      inp.input(meuEvento)
      inp.position(70,70)
      botao = createButton('verificar');
      botao.show();
      inp.show();
      botao.position(70, 90);
      botao.mousePressed(verificar);
 estado1 = false
     }else{
      
    }
     //text(frase1, 55, 260,200)
    //voltar para a tela inicial
    text("voltar", 160, 15,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
        botao.hide();
        inp.hide();
        estado1 = true;
      }
   
   
    text(" um magico tempo natal é o ",150,250)

    




  
    
  textSize(20)
  fill(500)
  noStroke()

}

  else if (tela == 14){
    botao.hide();
        inp.hide();
    background(20)
    text("parabens, você conseguiu todas as fases",85,70,200)
    textSize(20)
    fill(500)
    noStroke()
    
 //voltar para a tela inicial
    text("voltar", 230, 15,200)
    textSize(30)
    fill(500)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
 
      }// fecha tela 14
  }
}// chave que fecha o draw

//função que desenha a tela 4 do jogo - Creditos.
function tela4(){
  background(10)
  textSize(25)
   text(" Marco Antonio Rodrigues da Silva Castro.                                                             Rummenigge Rudson Dantas.", 50, 50,200)
  
  fill(500)
  stroke(250)
  textSize(15)
   //voltar para a tela inicial
    text("voltar", 160, 20,200)
 if(mouseX > 232 && mouseX < 283 && mouseY > 
      13 && mouseY < ymenu1 + 31)
      if(mouseIsPressed){
        tela=1
    
      
      }
}

//verifica se a frase ta correta
function verificar(){
  if(respostas[0]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase); // tela 5
  }
if(respostas[1]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase);// tela 2
}

  if(respostas[2]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  if(respostas[3]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  if(respostas[4]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }

  if(respostas[5]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  if(respostas[6]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }

  if(respostas[7]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  if(respostas[8]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  if(respostas[9]==frase1){
      botaoMudar = createButton('Proxima');
      botaoMudar.position(140, 90);
      botaoMudar.mousePressed(mudarFase) //tela 6
  }
  
  //muda de fase
function mudarFase(){
  //tela=2
  inp.value("");
  botaoMudar.hide();//tela 5

if(tela==5){
   tela=2
}else{
    if(tela==2){
      tela=6
    }else{ 
      if(tela==6){
        tela=7
      }
        else{
        if(tela==7){
          tela=8
        }
          else{
            if(tela==8){
              tela=9
            }
            else{
              if(tela==9){
                tela=10
              }
              else{
                if(tela==10){
                  tela=11
                }
                else{
                  if(tela==11){
                    tela=12
                  }
                  else{
                    if(tela==12){
                      tela=13
                    }
                    else{
                      if(tela==13){
                        tela=14
                      }
                    }
                  }
                }
              }
            }
          }
      }
    }
}


  /*function mudarFase(){
  tela=6;
  inp.value("");
  botaoMudar.hide();// tela 2
}*/
 
}
}