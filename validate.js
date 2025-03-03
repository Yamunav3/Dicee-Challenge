let num1=Math.floor(Math.random()*6)+1;
let randomRange="dice"+num1+".png";
let randomSource="images/"+randomRange;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute('src',randomSource);

let num2=Math.floor(Math.random()*6)+1;
let randomRange1="dice"+num2+".png";
let randomSource1="images/"+randomRange1;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute('src',randomSource1);

if(num1===num2)
    document.querySelector("h2").innerHTML=" Draw Match";
else if(num1>num2)
    document.querySelector("h2").innerHTML="Player-1 Wins🥳🥳🥳🥳!";
else 
    document.querySelector("h2").innerHTML="Player-2 wins 🥳🥳🥳🥳";