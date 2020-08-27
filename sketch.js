var a,logoimg ,button,b,bimg,intro,extro,ambi,introing,extroimg,ambiimg
var score = 0; 
var count =0;
var r = 0;
var START = 0;
var PLAY = 1; 
var QUIZ =  2;  
var EXPERT = 4;
var TIPS = 3;
var gameState = START;
var database;
var chatofperson1;
 function preload () {
   logoimg=loadImage("logo.png") 
   bimg = loadImage("i.jpg") 
   qimg1 = loadImage("q1 (1).png")
   qimg2 = loadImage("q2 (1).png") 
   qimg3 = loadImage("q3 (1).png") 
   qimg4 = loadImage("q4 (1).png")
   qimg5 = loadImage("q5 (1).jpg") 
   h=loadImage("home.jpg") 
   quizimage = loadImage("quiz.jpg") 
   proimg = loadImage("pro.png")
   tipsimg = loadImage("b1.jpg") 
   chatimg = loadImage("chat.jpg") 
   yesimg=loadImage("yes.png");
   noimg=loadImage("no.jpg");
   maybeimg=loadImage("maybe.jpg");
  introimg = loadImage("result1.jpg")
  extroimg = loadImage("result 2.png") 
  ambiimg = loadImage("result 3.jpg") 
  pimg = loadImage("pro1.jpg") 
  doimg = loadImage("do.jpg")
  dimg = loadImage("doc.jpg"); 
  img1 = loadImage("LOGO.jpg")
 }
function setup() {
  createCanvas(400,650); 
  database = firebase.database();



  b=createSprite(200, 120, 50, 50); 
  b.addImage("b1",bimg)  
  b.scale = 0.35;

  button = createButton("Get Started :)"); 
  button.position (300,490); 

  c=createSprite(200, 120, 1, 1); 
  quiz= createSprite(80,320,1,1);
  b1 = createSprite(120,420,1,1); 
  b2 = createSprite(60,500,1,1); 
  b3 = createSprite(100,550,1,1); 

  yes1=createSprite(310,280,1,1);
  no1=createSprite(310,375,1,1);
  maybe1=createSprite(310,480,1,1);

  yes2=createSprite(310,280,1,1);
  no2=createSprite(310,375,1,1);
  maybe2=createSprite(310,480,1,1);

  yes3=createSprite(310,280,1,1);
  no3=createSprite(310,375,1,1);
  maybe3=createSprite(310,480,1,1);

  yes4=createSprite(310,280,1,1);
  no4=createSprite(310,375,1,1);
  maybe4=createSprite(310,480,1,1);

  yes5=createSprite(310,280,1,1);
  yes5.scale=0.2;
  no5=createSprite(310,375,1,1);
  maybe5=createSprite(310,480,1,1);

  q1 = createSprite(200,100,1,1); 
  q2 = createSprite(200,100,1,1); 
  q3 = createSprite(200,100,1,1); 
  q4 = createSprite(200,100,1,1); 
  q5 = createSprite(200,100,1,1);  

  extro = createSprite(200,250,1,1)
  intro = createSprite(200,250,1,1)
  ambi = createSprite(200,250,1,1)

  logo = createSprite(200,340,1,1) 
  logo.addImage(img1) 
  logo.scale = 0.27;
}

function draw() {   

if(gameState === START) { 
  background("#CB9BE2");   

  fill("black")
  textSize(20) 
  //textFont("Black Jack")
  text("Learn how to stop wasting your time &",20,470) 
  text("Develop your personality",20,500)

 

  
  button.mousePressed (()=>{
    gameState = PLAY;
      })
} 
 if(gameState === PLAY) {
    background("#BEF0F4") 
   // a.destroy();
    b.destroy(); 
  logo.destroy();
   button.hide();

    c.scale = 0.45;
    c.addImage("h1",h)  
    
    quiz.scale=0.15;
  quiz.addImage("quiz",quizimage);

    b1.scale=0.1 
    b1.addImage("p",proimg)

   b2.addImage("c",chatimg); 
   b2.scale=0.15
     
    b3.addImage("t",tipsimg);
    b3.scale=0.2;   
   if(mousePressedOver(quiz)){
     gameState=QUIZ
   } 

   if(mousePressedOver(b1)){
    gameState = TIPS
  } 

  if(mousePressedOver(b3)){
    gameState = EXPERT
  }
   
  if(mousePressedOver(b2)){
    gameState="chat";
    console.log("hi")
    
   }
  } 


  if(gameState === QUIZ) { 
    background("#F6B6D1")
    c.destroy();
    quiz.destroy();
    b1.destroy();
    b2.destroy();
    b3.destroy();

    yes1.addImage(yesimg);
    yes1.scale=0.1;

    no1.addImage(noimg);
    no1.scale=0.1;

    maybe1.addImage(maybeimg);
    maybe1.scale=0.12;

    q1.addImage("q1",qimg1) 
    
    if(mousePressedOver(yes1)){
    count = count+1;
    quizresult();
    }

   if(mousePressedOver(yes2)){
    count = count+1;
      quizresult1();
       }
  
  if(mousePressedOver(yes3)){
    count = count+1;
        quizresult2();
         }
        
  if(mousePressedOver(yes4)){
    count = count+1;
        quizresult3();
         }
  if(mousePressedOver(yes5)){
    count = count+1; 
          quizresult4(); 
         }  

  if(mousePressedOver(no1)){
        score= score+1;
          quizresult();
          }
      
      if(mousePressedOver(no2)){
          score = score+1;
            quizresult1();
             }
        
        if(mousePressedOver(no3)){
          score= score+1;
              quizresult2();
               }
              
        if(mousePressedOver(no4)){
          score = score+1;
              quizresult3();
               }
        if(mousePressedOver(no5)){
          score = score+1; 
                quizresult4();
               }   

               if(mousePressedOver(maybe1)){
                r = r+1;
                quizresult();
                }
            
               if(mousePressedOver(maybe2)){
                r = r+1;
                  quizresult1();
                   }
              
              if(mousePressedOver(maybe3)){
                r = r+1;
                    quizresult2();
                     }
                    
              if(mousePressedOver(maybe4)){
              r= r+1;
                    quizresult3();
                     }
              if(mousePressedOver(maybe5)){
                r = r+1; 
                      quizresult4();
                     }  
    console.log(count)
    console.log(score)
    console.log(r)
  if(gameState==="tips"){
           background("#CB9BE2") 
           if(count>=13 && score<= 10 && r<= 10) {  
             textSize(30)
            fill("black")
             text("You are an extrovert!",10,400)
             extro.addImage(extroimg) 
             extro.scale = 0.3;
           }  
           if(score>=13 && count<= 10 && r<= 10) {
            intro.addImage(introimg) 
            intro.scale = 0.5  
            textSize(30)
            fill("black")
            text("You are an introvert!",10,450)
          }
          if(r>=13 && score<= 10 && count<= 10) {
            ambi.addImage(ambiimg) 
            ambi.scale = 0.7 
            textSize(30)
            fill("black")
            text("You are an ambivert!",10,400)
          }
         }
         
  }
  if(gameState==="chat"){
    background("#79F500") ;
    c.destroy();
    quiz.destroy();
    b1.destroy();
    b2.destroy();
    b3.destroy(); 
    getchat(); 
    input=createInput();
  input.position(50,520);
msg=input.value(); 
chat = chatofperson1;
console.log(chat) 
fill("black") 
textSize(20)
text("You : "+chat,10,100) 
textSize(20)
text("Type your message in the box below",10,500)
updatechatinfo(msg)
   }


 if(gameState === TIPS) {
  background("yellow") 
  quiz.destroy();
  b1.destroy();
  b2.destroy();
  b3.destroy();
  c.destroy(); 
  
 
  a=createSprite(200, 100, 50, 50); 
  a.addImage("a1",logoimg)  
  a.scale = 0.35;
   fill("black") 
   textSize(15)
  text("Scientifically Proven tips to stop procastinating",10,200) 
  text("1)Break down the big tasks into smaller ones",10,230) 
  text("2)Start with an easy task",10,260) 
  text("3)Think why you need to do this, and why you are avoiding it",10,290) 
  text("4)Be mindful and focused",10,320) 
  text("5)Set deadlines for yourself/ Challenge yourself",10,350) 
  text("6)Reward Yourself :)",10,380) 
  text("Make a timetable and follow it but dont forget",10,420) 
  text(" to include some breaks ;)",10,440) 
  p = createSprite(300,520,1,1)
  p.addImage(pimg) 
  p.scale = 0.3; 
  d=createSprite(100,520,1,1) 
  d.addImage(doimg);
  d.scale= 0.2
  } 

 
 if(gameState === EXPERT) {
  background("blue") 
  quiz.destroy();
  b1.destroy();
  b2.destroy();
  b3.destroy();
  c.destroy();  
  doc = createSprite(200,230,1,1) 
  doc.addImage(dimg); 
  doc.scale = 0.3 
  fill("black") 
  textSize(20)
  text("To ask your questions/quieries contact :",10,470) 
  text("bsp_1@ymail.com",10,500)  
  text("(Dr.Surya Prabha)",10,530) 
  text("Currently pursuing Post Graduation in",10,560) 
  text("Psychiatry",10,580)
  text("At Osmania University, Hyderabad",10,610)
 }
  drawSprites(); 
 
} 
function updatechatinfo(msg){
  database.ref('person1').set({
chat:msg
  })
}
function getchat(){           
  database.ref('person1/chat').on("value",(data)=>{
  chatofperson1=data.val(); 
 
  })

}

 function quizresult () {
  q1.destroy();
  q2.addImage("q2",qimg2) ;
  yes1.destroy();
  no1.destroy();
  maybe1.destroy();

  yes2.addImage(yesimg);
   yes2.scale=0.1;
   yes2.x=200;

   no2.addImage(noimg);
   no2.scale=0.1;
   no2.x=200;

   maybe2.addImage(maybeimg);
   maybe2.scale=0.12;
   maybe2.x=200;
 } 
 function quizresult1 () {
  q2.destroy();
  q3.addImage("q3",qimg3) ;
  yes2.destroy();
  no2.destroy();
  maybe2.destroy();

  yes3.addImage(yesimg);
   yes3.scale=0.1;

   no3.addImage(noimg);
   no3.scale=0.1;

   maybe3.addImage(maybeimg);
   maybe3.scale=0.12;  
}
function quizresult2 () {
  q3.destroy();
  q4.addImage("q4",qimg4) ;
  yes3.destroy();
  no3.destroy();
  maybe3.destroy();

  yes4.addImage(yesimg);
   yes4.scale=0.2;
   yes4.x=200;

   no4.addImage(noimg);
   no4.scale=0.08;
   no4.x=200;

   maybe4.addImage(maybeimg);
   maybe4.scale=0.12;
   maybe4.x=200; 
}
function quizresult3 () {
  q4.destroy();

  q5.addImage("q5",qimg5) ;
  yes4.destroy();
  no4.destroy();
  maybe4.destroy();

  yes5.addImage(yesimg);

   no5.addImage(noimg);
   no5.scale=0.08;
  

   maybe5.addImage(maybeimg);
   maybe5.scale=0.18;
       
}
function quizresult4 () {
  q5.destroy();
  yes5.destroy();
  no5.destroy();
  maybe5.destroy();
  gameState="tips" 
}