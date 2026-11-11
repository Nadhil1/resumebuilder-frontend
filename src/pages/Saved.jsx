import { TextField } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function Saved() {
  return (
    <div>
      <Container>

        <Typography variant='h3' sx={{textAlign:'center', mt:'40px',mb:'20'}}>
        All Saved Resumes
      </Typography>
      <Typography variant='p' sx={{textAlign:'center'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam omnis iure id pariatur amet aliquid. Sunt, suscipit harum. Sit ad repellendus odit reprehenderit nobis laboriosam fugit! Corrupti, perspiciatis assumenda.
        Hic tempora aspernatur amet explicabo tempore deserunt blanditiis enim reiciendis voluptas laudantium facilis quos maxime assumenda consequatur sapiente labore
      </Typography>
      <br />

      <TextField placeholder='Enter Job Title' sx={{width:'100%',my:'10px'}} size='small'/>
      <SearchIcon sx={{position:'absolute',right:'200px',top:'240px'}}/>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Job Role</TableCell>
            <TableCell align="right">...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*rows.map((row) => (*/}
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                3243
              </TableCell>
              <TableCell align="right"> <Link to={'#'}>Nadhil resume link </Link></TableCell>
              <TableCell align="right">Full Stack</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          {/*))}*/}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>



      

    </div>
  )
}
