import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const TableData = () => {
    const dispatch = useDispatch();
    const tableHeaders = [ 'Project','Budget','Status','Users','Completion']
    const loadDataHandler = () => {
        dispatch({type:'HEADERS', payload: tableHeaders});
    }
  return (
    <Button variant="outlined" align= "center" onClick = {loadDataHandler}>Load Headers</Button>
  )
}

export default TableData;