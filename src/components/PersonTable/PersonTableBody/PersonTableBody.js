import { TableBody, TableRow, TableCell }  from '@mui/material';
import { getValue } from '../../../core/utils';


export const PersonTableBody = ({rows, headers}) => {

    return (
      <TableBody>
      {rows?.map((item) => (
        <TableRow key={item.id * Math.random()}>
          {headers?.map((path) => (
            <TableCell key={item.id * Math.random()}>{getValue(item, path)}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
    );
  };