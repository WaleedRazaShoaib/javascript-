var input =  document.getElementById("input");
var input2 =  document.getElementById("input2");
function values(num){
  
  console.log(num)
  input.value += num;

}
function equal(){
   console.log(input.value) 
  input.value = eval(input.value)
  Math.round(input.value)  
}