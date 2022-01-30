// import {Mov} from "./Mov";
import {useEffect,useState} from 'react'; 
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';


export function Counter() {
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);
    const incrementLike = () => setLike(like+1);
    const incrementDisLike = () => setDisLike(disLike+1);

    useEffect(()=> {}
    )

    return(
      <div className="counter-cont"> 

        <IconButton onClick={() => setLike(like+1)} color="primary">
            <Badge badgeContent ={like} color="primary">
            👍 
            </Badge>
        </IconButton>

        <IconButton onClick={() => setDisLike(disLike+1)} color="primary">
        <Badge badgeContent ={disLike} color="error">
            👎 
        </Badge> 
        </IconButton>
       
      </div>
    );
  }
  