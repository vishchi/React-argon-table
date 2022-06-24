import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const LoadHeadersButton = () => {
    const dispatch = useDispatch();
    const tableHeaders = [ 'PROJECT','BUDGET','STATUS','USERS','COMPLETION']
    const loadDataHandler = () => {
        dispatch({type:'HEADERS', payload: tableHeaders});
    }
  return (
    <Button variant="outlined"  color="secondary" onClick = {loadDataHandler}>Load Headers</Button>
  )
}

export default LoadHeadersButton;