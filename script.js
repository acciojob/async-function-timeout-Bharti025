//your JS code here. If required.
let inputText=document.getElementById("text");
let inputNumber=document.getElementById("delay");
const btn=document.getElementById("btn");
let output=document.getElementById("output");

function display(input1,input2){
 return new Promise((resolve,reject)=>{
	 setTimeout(()=>{
		 resolve(input1);
	 },input2*1000);
 });	
}

async function check(){
let input1=inputText.value;
let input2=parseInt(inputNumber.value);
if (isNaN(input2) || input2 < 0) {
        output.innerText = "Please enter a valid delay time.";
        return;
    }
    try {
        let data = await display(input1, input2);
        output.innerText = data;
    } catch (error) {
        console.error("Error:", error);
        output.innerText = "An error occurred.";
    }
}

btn.addEventListener("click",check);
