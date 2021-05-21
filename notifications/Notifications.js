import React from "react";
import { Grid , Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";


const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Admin" 
      button={<Button
        variant="contained"
        size="medium"
        color="primary"
      >
         Add Admin
      </Button>} />
      <Grid container spacing={4}>
       
        <Grid item xs={12}>
          <Widget>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
