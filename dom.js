const canvasWidth=960;
const canvasHeight=960;
const canvas=document.getElementsByClassName("canvas");
function fillCanvas(numBoxes)
{
  
  let squareWidth=canvasWidth/numBoxes;
  let squareHeight=canvasHeight/numBoxes;
  
  for(let i=0;i<squareWidth;i++)
  {
    for(let j=0;j<squareHeight;j++)
    {
      canvas.appendChild(document.createElement("square").style("width:"));
    }
  }
     
}