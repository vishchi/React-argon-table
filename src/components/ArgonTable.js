import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableData from './LoadHeadersButton';
import { useSelector } from 'react-redux';
import StatusBullet from "./StatusBullet";
import ProgressBar from './ProgressBar';
import { makeStyles } from '@material-ui/styles';
import GroupAvatars from './Avatars';
import rows from '../constants/Data'

const statusColors = {
  completed: "success",
  pending: "warning",
  delayed: "danger",
  "on schedule": "info"
};

const useStyles = makeStyles((theme) => ({table: {
    minWidth: 650
},
TableContainer: {
    borderRadius: 15,
    
},
tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#ce93d8'
},
tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  },
}))

export default function BasicTable() {
    const classes = useStyles()
    const headers = useSelector(state => state.headers);
  return (
    <>
    <TableData />
    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table  aria-label="simple table">
        <TableHead className= {classes.tableHeaderCell}>
          <TableRow>
            {headers.map((header) => {
                return <TableCell key ={header} align="left">{header}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Project}
            >
              <TableCell component="th" scope="row">
                {row.Project }
              </TableCell>
              <TableCell>{row.Budget + " USD"}</TableCell>
              <TableCell>
                <StatusBullet  color={statusColors[row.Status]} size="sm"/>
                {` ${row.Status}`}
              </TableCell>
              <TableCell align='left'><GroupAvatars /></TableCell>
              <TableCell>
                <ProgressBar  progress={row.Completion}  />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
