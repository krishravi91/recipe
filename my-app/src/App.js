import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Receipe App</h1>
     <Card 
     img="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg"
     title="Chicken briyani"/> 
     <Card 
     img="https://www.cubesnjuliennes.com/wp-content/uploads/2019/10/Tandoori-Chicken.jpg"
     title="Chicken Tandoori"/> 
     <Card 
     img="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg"
     title="Chicken Pulao"/> 
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className ="card1">
         <img src ={props.img} />
         <h2 className='cardTitle'> {props.title} </h2>

      </div>
      
    </div>
  );
}


export default App;
