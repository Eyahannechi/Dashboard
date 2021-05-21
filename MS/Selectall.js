import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import mock  from "./mock";

export default function Selectall() {
    const [text,setName]=useState([])
      const getValue=(e)=>{
        let data=text;   
        data.push(e.target.value)
        setName(data)
        console.warn(text)
      }
     
       return ( 
<Checkbox
color="primary"
icon={<RadioButtonUncheckedRoundedIcon/>}
CheckedIcon={< CheckCircleRoundedIcon/>}
onChange={(e)=>getValue(e)}

/>


  )
};

 
 