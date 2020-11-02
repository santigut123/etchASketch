const canvasWidth=700;
const canvasHeight=700;
const canvas=document.getElementById("canvas");
let canvasSize=20;
function fillCanvas(numBoxes)
{
  
  let squareWidth=canvasWidth/numBoxes;
  let squareHeight=canvasHeight/numBoxes;
  
  
  
  for(let i=0;i<numBoxes;i++)
  {
    for(let j=0;j<numBoxes;j++)
    {
      let square=document.createElement("div");
      square.className="square";
      square.style.height=squareHeight+"px";
      square.style.width= squareWidth+"px";
      square.addEventListener("mouseover",squareColor);
      
      
      
      canvas.appendChild(square);
    }
  }
 
  
     
}
function squareColor(e)
{ 
  this.style.backgroundColor="black";
}
function reset()
{
  let canvasParent=document.getElementById("canvas");
  canvas.textContent='';
  fillCanvas(canvasSize);
  
  

}
function resize()
{
  let canvasParent=document.getElementById("canvas");
  canvas.textContent='';
  canvasSize=prompt("What size do you want");;
  if(canvasSize>100)
  {
    alert("Canvas size has to be 100 or under!")
  }
  else{
    fillCanvas(canvasSize); 
  }
  
}




fillCanvas(canvasSize);


