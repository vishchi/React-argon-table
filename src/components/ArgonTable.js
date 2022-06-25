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

const useStyles = makeStyles(() => ({
tableHeaderCell: {
    backgroundColor: '#ced1d6'
  },
tableCell: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '100px'
  }
}))

export default function BasicTable() {
    const classes = useStyles()
    const headers = useSelector(state => state.headers);
    const rows = useSelector(state => state.data);
  return (
    <>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table" className= {classes.tableCell}>
        <TableHead>
          <TableRow className= {classes.tableHeaderCell}>
            {headers && headers.map((header) => {
                return <TableCell key ={header} align="left">{header}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody >
          {rows && rows.map((row) => (
            <TableRow
              key={row.Project}
            >
              <TableCell>
                {row.Project}
              </TableCell>
              <TableCell>
                {"$" + row.Budget + " USD"}
              </TableCell>
              <TableCell>
                <StatusBullet  status={row.Status}/>
                {` ${row.Status}`}
              </TableCell>
              <TableCell>
                <GroupAvatars />
              </TableCell>
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
