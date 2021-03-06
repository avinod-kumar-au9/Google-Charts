import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },
  
  sticky: {
    position: "sticky",
    left: 0,
    background: "white",
    boxShadow: "5px 2px 5px grey"
  }
});



const rows = [
  {name:"Frozen yoghurt",calories: 159,fat: 6.0,carbs: 24,protein: 4.0},
  {name:"Ice cream sandwich",calories: 237,fat: 9.0,carbs: 37,protein: 4.3},
  
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <TableContainer style={{ maxWidth: 400, border: "1px solid black" }}>
        <Table
          className={classes.table}
          aria-label="simple table"
          style={{ tableLayout: "fixed" }}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.sticky}>
                Dessert (100g serving)
              </TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  className={classes.sticky}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </>
  );
}
