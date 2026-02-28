import { useState } from "react"
import './App.css'
function App(){

const[number,setnumber] = useState("");
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

function handleOprations(){
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

return <div className="main">
  <div className="calc">
<div className="display">
  {result
    ? result
    : `${previousnumber} ${operands} ${number}`.trim() || 0}
</div>
<div className="but-container">
  {[1,2,3,4,5,6,7,8,9,0].map((digits) => (
<button key={digits} onClick={()=>{handleDigits(digits.toString())}} >{digits}</button>
  ))}
  {["+","-","/","X"].map((operands)=>(
    <button key={operands} onClick={()=>{handleOperands(operands)}}>{operands}</button>
  ))}
  <button onClick={handleOprations}> = </button>
</div>
</div>
</div>
}
export default App