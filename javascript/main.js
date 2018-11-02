function showS(){
       document.getElementById("info_Second_Character").classList.remove("page");
       document.getElementById("info_Second_Character").classList.add("page-active");
}
function closeSecond(){
    document.getElementById("info_Second_Character").classList.remove("page-active");
    document.getElementById("info_Second_Character").classList.add("page");
}
function show(){
       document.getElementById("info_First_Character").classList.remove("page");
       document.getElementById("info_First_Character").classList.add("page-active");
}
function closeF(){
    document.getElementById("info_First_Character").classList.remove("page-active");
    document.getElementById("info_First_Character").classList.add("page");
}
function shop(){
       document.getElementById("shop_Itens").classList.remove("page");
       document.getElementById("shop_Itens").classList.add("page-active");
}
function shopF(){
  document.getElementById("shop_Itens").classList.add("page");
       document.getElementById("shop_Itens").classList.remove("page-active");
}
/*create function random its*/
var item =new Array();
 item[0]="<img src='imgItens/fire.png'/>";
 item[2]="<img src='imgItens/strong.png'/>";
 item[3]="<img src='imgItens/water.png'/>";
 item[4]="<img src='imgItens/trovao.png'/>";
 item[5]="<img src='imgItens/gasoline.png'/>";
 item[6]="<img src='imgItens/potion.png'/>";
 item[7]="<img src='imgItens/speed.png'/>";
 item[8]="<img src='imgItens/tortue.png'/>";
 item[9]="<img src='imgItens/bouclier.png'/>";
 item[1]="<img src='imgItens/level.png'/>";
 
  function teste(){
    let count=0;
    let teste=0;
       while(count==teste){
        teste=Math.floor(Math.random()*item.length);
    testando=item[teste];
    console.log(testando);
      document.getElementById("center_Random_Item").innerHTML=(testando);
      count++;
        //document.write(item[teste]);
}
 }  var combate=document.getElementById("combate");
combate.addEventListener("click", firstAnimation);
    var firstAttackEnnemy=["SecondCharacter/Jump_Throw__000.png", "SecondCharacter/Jump_Throw__001.png", "SecondCharacter/Jump_Throw__002.png","SecondCharacter/Jump_Throw__003.png","SecondCharacter/Jump_Throw__004.png","SecondCharacter/Jump_Throw__005.png","SecondCharacter/Jump_Throw__006.png","SecondCharacter/Jump_Throw__007.png","SecondCharacter/Jump_Throw__008.png","SecondCharacter/Jump_Throw__009.png"]
   var imageEnnemy=document.getElementById("start_image_second_Character");
   var imageEnnemyFixed=["SecondCharacter/Attack__000.png"]
   var secondAttackEnnemy=["SecondCharacter/Attack__000.png","SecondCharacter/Attack__001.png","SecondCharacter/Attack__002.png","SecondCharacter/Attack__003.png","SecondCharacter/Attack__004.png","SecondCharacter/Attack__005.png","SecondCharacter/Attack__006.png","SecondCharacter/Attack__007.png","SecondCharacter/Attack__008.png","SecondCharacter/Attack__009.png"];
   var image = document.getElementById("image");
   var currentPos = 0;
   var currentPos2=0;
   var images = ["FirstCharacter/Jump_Throw__000.png", "FirstCharacter/Jump_Throw__001.png", "FirstCharacter/Jump_Throw__002.png","FirstCharacter/Jump_Throw__003.png","FirstCharacter/Jump_Throw__004.png","FirstCharacter/Jump_Throw__005.png","FirstCharacter/Jump_Throw__006.png","FirstCharacter/Jump_Throw__007.png","FirstCharacter/Jump_Throw__008.png","FirstCharacter/Jump_Throw__009.png"]
   var secondAttackPlayer=["FirstCharacter/Attack__000.png","FirstCharacter/Attack__001.png","FirstCharacter/Attack__002.png","FirstCharacter/Attack__003.png","FirstCharacter/Attack__004.png","FirstCharacter/Attack__005.png","FirstCharacter/Attack__006.png","FirstCharacter/Attack__007.png","FirstCharacter/Attack__008.png","FirstCharacter/Attack__009.png"];
   var imagemFaca=["FirstCharacter/Kunai.png"];
   var imageFacaEnnemy=document.getElementById("imageFacaEnnemy");
   var imageSegundoCaracter=["SecondCharacter/Dead__000.png","SecondCharacter/Dead__001.png","SecondCharacter/Dead__002.png","SecondCharacter/Dead__003.png","SecondCharacter/Dead__004.png","SecondCharacter/Dead__005.png","SecondCharacter/Dead__006.png","SecondCharacter/Dead__007.png","SecondCharacter/Dead__008.png","SecondCharacter/Dead__009.png","SecondCharacter/Jump_Throw__000.png"];
   var imageSegundo=document.getElementById("start_image_second_Character");
   var second_CharDie=document.getElementsByClassName("life_Second_Die");
   var contorDeNivel = document.getElementById("count_Lvl");
   var countFaca=0;
   //aqui em baixo tem a barra px
    let life=300;
     let removeLife=20;
    function changeWidthEnnemy(){
     if(life>=0){
    setTimeout(function changeWidth() {
 let testelife=document.getElementById("life_Second_Die")
 testelife.style.width = life-removeLife+"px";
  life-=removeLife;
 },3000);
     }else if(life<= 0 && life >= -40 ){
      contorDeNivel.value ++;
    alert("You win !");
    
    }else{
      roundTwoPlayerWin();
    testelife=document.getElementById("life_Second_Die")
    testelife.style.width ="300px";

    }
  }
  function roundTwoPlayerWin(){
    WalkPlayer();
    secondAttackPlayerFunc();
  }
  function WalkPlayer(){
    image.style.transition="all 1s linear";
    image.style.left = "84%";
    imageFaca.style.display="none";
  }
//Aqui vai ter a funcao do caracter a morrer
function dieSecondCharacter(){
    for(let a=0;a<imageSegundoCaracter.length;a++){
        setTimeout(function dieEnne(){
            let secondAttackEnne=imageSegundoCaracter[a];
        imageEnnemy.src=secondAttackEnne;
        },a*400);  
    }  

 }
//aqui em cima vai ter a funcao do caracter a morrer
// aqui em baixo tem o segundo attaque do enimigo
function secondAttackEnnemyFunc(){
for(let a=0;a<secondAttackEnnemy.length;a++){
  setTimeout(function attackEnnemy(){
            let secondAttack=secondAttackEnnemy[a];
        imageEnnemy.src=secondAttack;
        },a*100);
    }
  }
//aqui em cima tem o segundo attaque do enimigo
//aqui em baixo tem o segundo attaque do enimigo
function secondAttackPlayerFunc(){
  for (let a=0;a<secondAttackPlayer.length;a++){
    setTimeout(function secondAttackPlayerFuncTime(){
      let secondAttackPlayerGirl=secondAttackPlayer[a];
      image.src=secondAttackPlayerGirl;  
     },a*100);
 }
} 
//aqui em cima tem o segundo attaque do enimigo
function transition(){
    imageFaca.style.transition="all 1s linear";
 imageFaca.style.left = "89%";

}
function transitionEnnemy(){
    imageFacaEnnemy.style.display="block"
    imageFacaEnnemy.style.transition="all 1s linear"
    imageFacaEnnemy.style.right="89%";
}
//aqui em cima esta a animacao da faca
//aqui em baixo tera a primeira animacao
 function firstAnimation(){
    for(let a=0;a<images.length;a++){
        setTimeout(function timer(){
            let firstAttackGirl=images[a];
        image.src=firstAttackGirl;
        },a*100);  
    }
    transition();
    dieSecondCharacter();
    changeWidthEnnemy();
    backKunaiPlayer();
 }
 function backKunaiEnnemy(){
    setTimeout(function aa(){
      imageFacaEnnemy.style.right="5%";
    },4000);
 }
 function backKunaiPlayer(){
   setTimeout(function dfdf(){
      imageFaca.style.left="6%";
    },4000);
 }

 function ennemyFirstAttack(){
    for(let a=0;a<firstAttackEnnemy.length;a++){
        setTimeout(function attackEnnemy(){
        let allPicturesEnnemy=firstAttackEnnemy[a];
        imageEnnemy.src=allPicturesEnnemy;
        console.log(allPicturesEnnemy);
        },a*100);
    }

    transitionEnnemy();
    changeWidthPlayer();
    backKunaiEnnemy();
   setInterval(ennemyFirstAttack,5000);
 }

 //-------------
     let lifeplayer=300;
    let removeLifePlayer=20;
  function changeWidthPlayer(){
    if(lifeplayer>=0){
    setTimeout(function changeWidthPlaye() {
 let tester=document.getElementById("life_First_Character")
 tester.style.width = lifeplayer-removeLifePlayer+"px";
 lifeplayer-=removeLifePlayer
 },300);
  }else if(lifeplayer<= 0 && lifeplayer>= -40 ){
    alert ("You Lose");
    }else{
      secondAttackEnnemyFunc();

    }
  }
