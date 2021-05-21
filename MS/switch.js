
import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

 function Try() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
           
     <Switch 
      checked={state.checkedA} onChange={handleChange} name="checkedA" />
      
      
    
      
 
  );
}
export default Try;