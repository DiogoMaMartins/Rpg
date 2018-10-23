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
 }  
 //random=Math.floor(Math.random()*item.length);
  //document.write(item[random]);

   var image = document.getElementById("image");
   var currentPos = 0;
   var currentPos2=0;
   var images = ["FirstCharacter/Jump_Throw__000.png", "FirstCharacter/Jump_Throw__001.png", "FirstCharacter/Jump_Throw__002.png","FirstCharacter/Jump_Throw__003.png","FirstCharacter/Jump_Throw__004.png","FirstCharacter/Jump_Throw__005.png","FirstCharacter/Jump_Throw__006.png","FirstCharacter/Jump_Throw__007.png","FirstCharacter/Jump_Throw__008.png","FirstCharacter/Jump_Throw__009.png"]
   var imagemFaca=["FirstCharacter/Kunai.png"];
   var imageSegundoCaracter=["SecondCharacter/Dead__000.png","SecondCharacter/Dead__001.png","SecondCharacter/Dead__002.png","SecondCharacter/Dead__003.png","SecondCharacter/Dead__004.png","SecondCharacter/Dead__005.png","SecondCharacter/Dead__006.png","SecondCharacter/Dead__007.png","SecondCharacter/Dead__008.png","SecondCharacter/Dead__009.png"];
   var imageSegundo=document.getElementById("start_image_second_Character");
   var second_CharDie=document.getElementsByClassName("life_Second_Die");
   var contorDeNivel = document.getElementById("count_Lvl");
   var countFaca=0;
    function changeWidth() {
 document.getElementById("life_Second_Die").style.width = "200px";
}
//Aqui vai ter a funcao do caracter a morrer
function dieSecondCharacter(){
     			      	if(currentPos2==0){
     			      		start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			      		currentPos2++;

     			      	}else if(currentPos2==1){
     			    start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			          			      currentPos2++;
     			      
     			    }else if(currentPos2==2){
     	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			    
     			      currentPos2++;
     			 
     			    }else if(currentPos2==3){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			      
     			      currentPos2++;
     			  
     			 
     			    }else if(currentPos2==4){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			      
     			      currentPos2++;
     			      
     			 
     			    }else if(currentPos2==5){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			     
     			      currentPos2++;
     			 
     			    }else if(currentPos2==6){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			     
     			      currentPos2++;
     			 
     			    }else if( currentPos2==7){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			      
     			      currentPos2++;
     			 
     			    }else if(currentPos2==8){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			    
     			      currentPos2++;
     			 
     			    }else if(currentPos2==9 ){
     			      	
     			      start_image_second_Character.src=(imageSegundoCaracter[currentPos2]);
     			   
     			      currentPos2++;
     			       contorDeNivel.value = "2";
     			      second_CharDie.style.width = "400px";
     			      
     			    }
     			    setInterval(dieSecondCharacter, 1000);
     			    changeWidth();
     			      }
//aqui em cima vai ter a funcao do caracter a morrer
//aqui em baixo vai a animacao da faca
function faca(){
	if(counFaca==0){
		imageFaca.src = (imagemFaca[0]);
		imageFaca.setAttribute("style", "display:block;");
		countFaca++;
	}else if(counFaca==1){
                	image.src = images[currentPos];
                	imageFaca.src = (imagemFaca[0]);
                	imageFaca.setAttribute("style", "display:block;left:270px;");
     			        currentPos++;
     			      }else if(counFaca==2 ){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:370px;");
                     counFaca++;
     			    }else if(counFaca==3){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:470px;");
     			      counFaca++;
     			    }else if(counFaca==4 ){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:570px;");
     			      
     			          counFaca++;
     			    }else if(currentPos==5){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:670px;");
     			      counFaca++;
     			    }else if(counFaca==6){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:770px;");
     			      counFaca++;
     			    }else if(counFaca==7){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:870px;");
     			      counFaca++;
     			    }else if(counFaca==8 ){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:970px;");
     			      counFaca++;
     			 
     			    }else if(counFaca==9 ){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:970px;");
     			      counFaca++;
     			 
     			    }else if(counFaca==10){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:1070px;");
     			      counFaca++;
     			 
     			    }else if(counFaca==11 ){
     			      	imageFaca.src=(imagemFaca[0]);
     			      imageFaca.setAttribute("style","display:block;left:1170px;");
     			       contorDeNivel.value = "2";
     			       counFaca++;
     			       setInterval(faca, 100);
     			       

	}

}
//aqui em cima esta a animacao da faca

     function firstAnimation(){
     		if (currentPos==0 && currentPos2==0){
     			image.src = images[currentPos];
     			currentPos++;
                }else if(currentPos==1){
                	image.src = images[currentPos];
     			        currentPos++;
                }else if(currentPos==2){
                	image.src = images[currentPos];
     			        currentPos++;
     	          }else if(currentPos==3){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==4){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==5){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==6){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==7){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==8){
                	image.src = images[currentPos];
     			        currentPos++;
     			      }else if(currentPos==9){
                	image.src = images[currentPos];
                
     			        currentPos++;
     			      }
     			    setInterval(firstAnimation, 100);
     			    dieSecondCharacter();

     }

