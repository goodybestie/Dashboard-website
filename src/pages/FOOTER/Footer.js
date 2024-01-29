import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';

import Frame1 from '../IMAGES/Container/Frame1.png';
import Frame2 from '../IMAGES/Container/Frame2.png';
import Frame3 from '../IMAGES/Container/Frame3.png';
import Frame4 from '../IMAGES/Container/Frame4.png';
import Frame5 from '../IMAGES/Container/Frame5.png';

function createData(name, date, amount, status, action, Profile) {
  return { name, date, amount, status, action, Profile };
}

const rows = [
  createData('Marcus Bergson', 'Nov 15, 2023', '$80,000', 'Paid', 'View', Frame1),
  createData('Jaydon Vaccaro', 'Nov 15, 2023', '$150,000', 'Refund', 'View', Frame2),
  createData('Corey Schleifer', 'Nov 14, 2023', '$87,000', 'Paid', 'View', Frame3),
  createData('Cooper Press', 'Nov 14, 2023', '$100,000', 'Refund', 'View', Frame4),
  createData('Phillip Lubin', 'Nov 13, 2023', '$78,000', 'Paid', 'View', Frame5),
];

export default function BasicTable() {
  return (
    <Box sx={{ background: '#ffffff', padding: '1rem', borderRadius: '14px', mt: '1rem', width: {md:'59%', xs:"33%"}, height: '' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', ml: '1rem', mb: '1rem' }}>
        <Typography sx={{ color: '#26282C', fontWeight: '600' }}>Last Orders</Typography>
        <Typography sx={{ color: '#34CAA5', fontWeight: '500' }}>See All</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: '#9CA4AB', fontWeight: '500', fontSize:"16px" }}>
              <TableCell>Name</TableCell>
              <TableCell align="justify">Date</TableCell>
              <TableCell align="justify">Amount</TableCell>
              <TableCell align="justify">Status</TableCell>
              <TableCell align="justify">Invoice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Use the Image component with the corresponding avatar */}
                    <Image src={row.Profile} alt={row.name} width={20} height={23} />
                    <span style={{ marginLeft: '8px', color:"#3A3F51",fontSize:"16px", fontWeight:"500"  }}>{row.name}</span>
                  </div>
                </TableCell>
                <TableCell align="justify" sx={{color:"#737373"}}>{row.date}</TableCell>
                <TableCell align="justify" sx={{color:"#0D062D", fontWeight:"500", fontSize:"16px"}}>{row.amount}</TableCell>
                <TableCell align="justify">{row.status}</TableCell>
                <Box sx={{display:"flex", }}>
                <FaFileDownload  style={{marginTop:"1rem"}}/>
                <TableCell align="justify" > {row.action}</TableCell>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
