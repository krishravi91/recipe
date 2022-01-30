import './App.css';
import {Counter} from "./Counter"
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom"; 

export function Mov({post,name,sum,rat,id,deleteButton,editButton}){
    const [show, setShow] = useState(true);
    const history = useHistory();


    const styles = { display: show ? "block" : "none"};
    return(
      <div className ="mov-cont">
        <img className ="mov-post" height = "200" src = {post} alt = {name} />
        <div className ="mov-spec">
                <h3 className ="mov-Name"> {name} 
                <IconButton onClick={() => setShow(!show)} style ={{marginBottom: "10px" }} color="primary">
                {show? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                </IconButton>
                <IconButton onClick={() => history.push(`/Mov/${id}`)} color="primary">
                <InfoIcon />
                </IconButton>
                </h3>
                <p>✬  {rat} </p>
                
        </div>  
        
        {/* <button onClick={() => setShow(!show)} style ={{marginBottom: "10px" }}>
          {show ? "Hide": "Show"} Discription</button>       */}
        <p style ={styles} className ="mov-sum"> {sum} </p>
        <Counter />
        {deleteButton}
        {editButton}
      </div>
    )
  }