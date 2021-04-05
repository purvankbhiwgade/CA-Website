import React from "react";
import {
  Divider,
  Grid,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../UI Elements/Button";

const DetailsStyles = makeStyles((theme) => ({
  root: {
    background: "#f1f1f1",
    borderRadius: "2rem",
    justifyContent: "center"
  },
  table: {
    minWidth: 650
  }
}));

const Details = ({ product }) => {
  const classes = DetailsStyles();
  console.log(product);
  return (
    <div>
      <Grid container spacing={2} className={classes.root}>
        <Grid
          item
          xs={12}
          spacing={3}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Typography style={{ margin: "0px", padding: "0px" }}>
            {product.name}
          </Typography>
          <Button text={"Add To Cart"} style={{ margin: "1rem" }}></Button>
        </Grid>

        <Divider variant="fullWidth" />

        <Grid item xs={12}>
          <Typography>Price</Typography>
          <Typography variant={"h6"}>About this Item</Typography>
          <Divider />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    size="small"
                    style={{ width: "fit-content" }}
                  >
                    Details
                  </TableCell>
                  <TableCell
                    align="left"
                    size="small"
                    style={{ width: "fit-content" }}
                  >
                    Information
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Name
                  </TableCell>
                  <TableCell align="left" size="small">
                    {product.name}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Price
                  </TableCell>
                  <TableCell align="left" size="small">
                    ₹ {product.price}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Discount
                  </TableCell>
                  <TableCell align="left" size="small">
                    ₹ {product.discount}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Faculty
                  </TableCell>
                  <TableCell align="left" size="small">
                    {product.course.faculty}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Mode
                  </TableCell>
                  <TableCell align="left" size="small">
                    {product.course["mode"]}
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    System Requirements
                  </TableCell>
                  <TableCell align="left" size="small">
                    Windows 7 Minimum
                  </TableCell>
                </TableRow>
                <TableRow style={{ width: "fit-content" }}>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    size="small"
                  >
                    Delivery Time
                  </TableCell>
                  <TableCell align="left" size="small">
                    6 to 8 days
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
