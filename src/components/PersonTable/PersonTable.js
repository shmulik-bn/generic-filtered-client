import { Table } from '@mui/material'
import { getProperties } from '../../core/utils';
import { FilterForm } from './Filter/Filter';
import { PersonTableBody } from './PersonTableBody/PersonTableBody';
import { PersonTableHeader } from './PersonTableHeader/PersonTableHeader';
import { useSelector } from "react-redux";
import { usePersonTableStyle } from './PersonTable.styles';


export const PersonTable = () =>{

  const {rows, array} = useSelector((state) => state),
  headers = rows[0]? getProperties(rows[0]) : null,
  classes = usePersonTableStyle();

return <div>
  <FilterForm array={array} /> 
  <Table className={classes.table} >
    <PersonTableHeader headers={headers} />
    <PersonTableBody rows={rows} headers={headers}  />
  </Table>
</div>;
}