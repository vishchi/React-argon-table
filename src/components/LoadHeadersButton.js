import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import rows from '../constants/Data';
import tableHeaders from '../constants/Headers';

const LoadHeadersButton = () => {
    const dispatch = useDispatch();

    const loadTableHandler = () => {
        dispatch({type:'HEADERS', payload: tableHeaders});
        dispatch({type:'DATA', payload: rows});
    }

  return (
    <Button variant="outlined"  color="secondary" onClick = {loadTableHandler}>Load Table</Button>
  )
}

export default LoadHeadersButton;