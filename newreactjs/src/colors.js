// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// import react from 'react';

export function App1() {
return (
    <div>
      <ColorBox />
    </div>  
  )
}

export function ColorBox(){
const [color, setColor] = useState("");
const styles = { backgroundColor: color}; 
const [colors, setColors] = useState(["pink","blue","green"]);

  return(
    <div>
      <input 
      style={styles} 
      onChange={(event) => setColor(event.target.value)}
      placeholder = "Enter the color"/>
      <button onClick={() => setColors([...colors,color])}>Add Color</button>

      {colors.map((clr)=>(
        <AddColor clr = {clr}/>
      ))}
   
    </div>
  );
}

export function AddColor({clr}){
  const styles = {
    backgroundColor : clr,
  height: "50px",
width:"200px",
margin:"10px 0px"   }

return <div style={styles}></div>
}