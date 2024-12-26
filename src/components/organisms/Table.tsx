import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { placehoderData } from '@/app/types/placehoderData.type';

export default function BasicTable({ data }: { data: placehoderData[] }) {
  const [columns, setcolumns] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setcolumns(data && data.length > 0 ? Object.keys(data[0]) : []);
    }
  }, [data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((res) => (
              <TableCell>{res}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.userId}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell
                align="right"
                style={{
                  color: row.completed ? 'green' : 'red',
                  fontWeight: 'bold',
                }}
              >
                {row.completed ? 'Completed' : 'Pending'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
