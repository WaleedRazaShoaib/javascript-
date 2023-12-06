var input =  document.getElementById("input");
function values(num){
  console.log(num)
  input.value += num;
}
input.style.fontSize = "30px";
function equal(){
   console.log(input.value) 
  input.value = eval(input.value)
  Math.round(input.value) 
}
if ( screen.value === ""){
alert("plz  write the number")
}
screen.value ="";