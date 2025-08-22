//your JS code here. If required.
let inputText=document.getElementById("text");
let inputNumber=document.getElementById("delay");
const btn=document.getElementById("btn");
let output=document.getElementById("output");

function display(input1,input2){
 return new Promise(resolve=>{
	 setTimeout(()=>{
		 resolve(input1);
	 },input2*1000);
 })	
}

async function check(){
let input1=inputText.value;
let input2=parseInt(inputNumber.value);
let data= await display(input1,input2);
output.innerText=data + " - " + input2;
}

btn.addEventListener("click",check);
