import { useState } from "react"
import './App.css'
function App(){

const [number,setnumber] = useState("");
const [operands,setoperands] = useState("");
const [previousnumber,setpreviousnumber] = useState("");
const [result,setresult] = useState("")

function handleDigits(digits){
  setnumber(prev => prev + digits);
}

function handleOperands(operands){
setoperands(operands);
setpreviousnumber(number);
setnumber("");
setresult("");
}

function handleOperations(){
  var math = 0
switch (operands) {
  case "+": math = Number(previousnumber) + Number(number)
             setresult(math.toString())   
    break;
  case "-": math = Number(previousnumber) - Number(number)
             setresult(math.toString())   
    break;
  case "X": math = Number(previousnumber) * Number(number)
             setresult(math.toString())   
    break;
  case "/": math = Number(previousnumber) / Number(number)
             setresult(math.toString())   
    break;

  default:setresult("")
    break;
}
setnumber("");
setoperands("");
setpreviousnumber("");
}

const buttons = [
  "1","2","3",
  "4","5","6",
  "7","8","9",
  "+","0","-",
  "/","=","x"
];

return (  
<div className="main">
  <div className="calc">
    <div className="display">
      {result
        ? result
        : `${previousnumber} ${operands} ${number}`.trim() || 0}
    </div>
    <div className="btn-container">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => {
            if (btn === "=") {
              handleOperations();
            } 
            else if (["+", "-", "X", "/"].includes(btn)) {
              handleOperands(btn);
            } 
            else {
              handleDigits(btn);
            }
          }}
        >
          {btn}
        </button>
       ))}
    </div>
 </div>
</div>
);
}

export default App