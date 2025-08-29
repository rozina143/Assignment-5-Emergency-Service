
let heartCount = 0;

function newAdd(){
     document.getElementById('heart-count').textContent = heartCount;
  
}

function increaseHeart() {
        heartCount++;
      newAdd();
}


let copyCount = 2;

function newNumber(){
    
    document.getElementById('copy-count').textContent = copyCount;
    
    
}
 function increaseCopy(){
     let number = document.getElementById("helpLine").textContent;
    
     navigator.clipboard.writeText(number).then(() =>{
alert("copied:" +number);
          copyCount++;
newNumber(); 
     })
}



let coinCount = 100;
function newCoin(){
     document.getElementById("coin-count").textContent =coinCount;
}

 function decreaseCoin(id){

if (coinCount < 20){
     alert("no enough coin to call");
}


const serviceName =document.getElementById("service-name-" + id).textContent;
const helpNumber = document.getElementById("helpLine-" + id).textContent;



alert("calling :" +"  "  +serviceName +" "  +helpNumber +"...")

coinCount-=20;
newCoin();




const callList = document.getElementById("callHistory");

const creatDiv = document.createElement("div");
const element  = document.createElement("p");
element.textContent = serviceName;
const elements = document.createElement("p");
elements.textContent = helpNumber;

const time = document.createElement("p");
const runnigTime = new Date ();
const setTime = runnigTime.toLocaleTimeString();
time.textContent = setTime;
 

creatDiv.style.backgroundColor="#d7dad81a"
creatDiv.style.margin ="10px"
creatDiv.style.borderRadius ="7px"
creatDiv.style.padding ="20px"
time.style.textAlign = "end"


creatDiv.appendChild(element);
creatDiv.appendChild(elements);
creatDiv.appendChild(time);

callList.appendChild(creatDiv);





 }

function clearHistory(){
     const freshHistory = document.getElementById("callHistory");
    freshHistory.innerHTML = " ";

}
