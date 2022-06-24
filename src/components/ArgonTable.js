import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

const useStyles = makeStyles(() => ({
tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#ced1d6'
},
tableCell: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '100px'
  },
  tableRow: {
    borderCollapse: 'collapse',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
}))

export default function BasicTable() {
    const classes = useStyles()
    const headers = useSelector(state => state.headers);
  return (
    <>
    
    <TableContainer component={Paper}>
      <Table  aria-label="simple table" className= {classes.tableCell}>
        <TableHead>
          <TableRow className= {classes.tableHeaderCell}>
            {headers.map((header) => {
                return <TableCell key ={header} align="left">{header}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.Project}
            >
              <TableCell className= {classes.tableRow}>
                {row.Project }
              </TableCell>
              <TableCell className= {classes.tableRow}>{row.Budget + " USD"}</TableCell>
              <TableCell className= {classes.tableRow}>
                <StatusBullet  color={statusColors[row.Status]} size="sm"/>
                {` ${row.Status}`}
              </TableCell>
              <TableCell className= {classes.tableRow}><GroupAvatars /></TableCell>
              <TableCell className= {classes.tableRow}>
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
