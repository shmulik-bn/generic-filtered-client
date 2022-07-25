import { TableCell, TableHead, TableRow } from "@mui/material";
import { usePersonTableStyle } from "../PersonTable.styles";


export const PersonTableHeader = ({ headers }) => {
  const classes = usePersonTableStyle();
  return (
    <TableHead>
      <TableRow className={classes.headerRow} >
        {headers?.map((path) => (
          <TableCell key={Date.now() * Math.random()}>{path.join(" ")}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
