import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const API ="http://localhost:9000";

function App() {
  return (
    <div className="App">
      <h1>Receipe App</h1>
      <ReceipeList />
    </div>
  ); 
}
//commit----
function ReceipeList(){

const [receipe,setReceipe] = useState([]);
useEffect(() => {
  fetch(`${API}/recipes`)
  .then(data =>data.json())
  .then((receipe) => setReceipe(receipe)); 
},[]);

return( <div className="receipe-list">
 
  {receipe.map(({name,pic,_id}) => (
    <Recipe key={_id} name={name} pic={pic}/>
  ))}
  </div>
 )
}

function Recipe({name,pic}){
  return <div className="receipe-container">
    <img src={pic} alt="receipe pic" className="receipe-picture"/>
    <p className="receipe-name">{name}</p>

  </div>
}

// function Card(props) {
//   return (
//     <div className="card">
//       <div className ="card1">
//          <img src ={props.img} />
//          <h2 className='cardTitle'> {props.title} </h2>

//       </div>
      
//     </div>
//   );
// }


export default App;
