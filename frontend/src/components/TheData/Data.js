import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "state", label: "State", minWidth: 170 },
  { id: "code", label: "Postal\u00a0Code", minWidth: 100 },
  {
    id: "cases",
    label: "Confirmed\u00a0Cases",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deaths",
    label: "Confirmed\u00a0Deaths",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "recovered",
    label: "Confirmed\u00a0Recovered",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(state, code, cases, deaths, recovered) {
  return { state, code, cases, deaths, recovered };
}

const rows = [
  createData("Alabama", "AL", 0, 0, 0),
  createData("Alaska", "AK", 0, 0, 0),
  createData("Arizona", "AZ", 0, 0, 0),
  createData("Arkansas", "AR", 0, 0, 0),
  createData("California", "CA", 0, 0, 0),
  createData("Colorado", "CO", 0, 0, 0),
  createData("Connecticut", "CT", 0, 0, 0),
  createData("Delaware", "DE", 0, 0, 0),
  createData("Florida", "FL", 0, 0, 0),
  createData("Georgia", "GA", 0, 0, 0),
  createData("Hawaii", "HI", 0, 0, 0),
  createData("Idaho", "ID", 0, 0, 0),
  createData("Illinois", "IL", 0, 0, 0),
  createData("Indiana", "IN", 0, 0, 0),
  createData("Iowa", "IA", 0, 0, 0),
  createData("Kansas", "KS", 0, 0, 0),
  createData("Kentucky", "KY", 0, 0, 0),
  createData("Louisiana", "LA", 0, 0, 0),
  createData("Maine", "ME", 0, 0, 0),
  createData("Maryland", "MD", 0, 0, 0),
  createData("Massachusetts", "MA", 0, 0, 0),
  createData("Michigan", "MI", 0, 0, 0),
  createData("Minnesota", "MN", 0, 0, 0),
  createData("Mississippi", "MS", 0, 0, 0),
  createData("Missouri", "MO", 0, 0, 0),
  createData("Montana", "MT", 0, 0, 0),
  createData("Nebraska", "NE", 0, 0, 0),
  createData("Nevada", "NV", 0, 0, 0),
  createData("New Hampshire", "NH", 0, 0, 0),
  createData("New Jersey", "NJ", 0, 0, 0),
  createData("New Mexico", "NM", 0, 0, 0),
  createData("New York", "NY", 0, 0, 0),
  createData("North Carolina", "NC", 0, 0, 0),
  createData("North Dakota", "ND", 0, 0, 0),
  createData("Ohio", "OH", 0, 0, 0),
  createData("Oklahoma", "OK", 0, 0, 0),
  createData("Oregon", "OR", 0, 0, 0),
  createData("Pennsylvania", "PA", 0, 0, 0),
  createData("Rhode Island", "RI", 0, 0, 0),
  createData("South Carolina", "SC", 0, 0, 0),
  createData("South Dakota", "SD", 0, 0, 0),
  createData("Tennessee", "TN", 0, 0, 0),
  createData("Texas", "TX", 0, 0, 0),
  createData("Utah", "UT", 0, 0, 0),
  createData("Vermont", "VT", 0, 0, 0),
  createData("Virginia", "VA", 0, 0, 0),
  createData("Washington", "WA", 0, 0, 0),
  createData("West Virginia", "WV", 0, 0, 0),
  createData("Wisconsin", "WI", 0, 0, 0),
  createData("Wyoming", "WY", 0, 0, 0),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
