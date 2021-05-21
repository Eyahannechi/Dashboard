import React , {useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";
//import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
//const toggleCheckbox = event => {
  //setChecked(event.target.checked)}
  //const [checked, setChecked] = React.useState(true)
 function Check(){
  const [name,setName]=useState([])
  const getValue=(e)=>{
    let data=name;
    data.push(e.target.value)
    setName(data)
    console.warn(name)
  }
  return (
   <Checkbox
        color="primary"
        icon={<RadioButtonUncheckedRoundedIcon/>}
        CheckedIcon={< CheckCircleRoundedIcon/>}
        onChange={(e)=>getValue(e)} />

  );
 }
 export default Check;
 