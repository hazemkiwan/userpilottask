import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const BasicTable =  ({data, columns, onRowClickCallBack}) => {
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
          {columns.map((column) => {
                return (<TableCell key={column.name}>
                    {column.name}</TableCell>)
            }) }
          </TableRow>
        </TableHead>
        <TableBody>

        {data.map((row) => 
            <TableRow key={row.key} onClick={onRowClickCallBack ? () => onRowClickCallBack(row.id) : ''}>
                {columns.map( column => {
                    return (<TableCell key={row.key + column.key}>{
                            column.cell ? column.cell(row[column.key]) : row[column.key]
                        }</TableCell>)
                })}
            </TableRow>
        )
        }
        </TableBody>
      </Table>  
    </TableContainer>
    );
}

const withTablePagination = Component => (props) => {
  const {initialPage, pagable, onPageChange, rowsPerPage, tableCount, rowsPerPageOptions} = props;
  const [currentPage, setCurrentPage] = useState(initialPage)
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
    onPageChange(page, rowsPerPage)
  };
  return  (
    <>
        <Component {...props} />
        {pagable &&<TablePagination
          component="div"
          count={tableCount}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          rowsPerPageOptions={rowsPerPageOptions}
          onChangePage={handleChangePage}
        />}
      </>
  )
}
export default withTablePagination(BasicTable);
