// Your code here
const dodger = document.getElementById("dodger");
//Change the dodger color.
dodger.style.backgroundColor="#FF69B4";
//Move dodger to the left side.
//Add a check on the recent dodger position.
function moveDodgerLeft() {
   const leftNumbers = dodger.style.left.replace("px","");
   const left = parseInt(leftNumbers,10);
   if (left >0){
      dodger.style.left=`${left - 1}px`;
   }
   }
document.addEventListener("keydown",function(e){
   if (e.key === "ArrowLeft"){
      moveDodgerLeft();
   }
});
//move dodger to the right.
//check on the current dodger position.
function moveDodgerRight(){
   const rightNumbers= dodger.style.left.replace('px',"");
   const left =parseInt(rightNumbers,10);
   //Ensure that the right edge of the dodger is not positioned at the edge of it's container.
   if(left>0){
      dodger.style.left=`${left + 1}px`;
   }
}
//Add an event listener's callback function to call moveDodgerRight().
document.addEventListener("keydown",function(e){
   if(e.key==="ArrowRight"){
      moveDodgerRight();
   }
});