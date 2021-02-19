import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
// import JavaScript_Data_Type_Table from './Language_Components/JavaScript_Data_Type_Table';
// import Language_Card from './Language_Components/Language_Cards/Language_Cards';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(type: string, primOrRef: string, examples: String) {
  return { type, primOrRef, examples };
}

const rows = [
  createData('string', 'primitive', 'a, A, abc, @, æ, Δ'),
  createData('number', 'primitive', '1, -10, 3.2'),
  createData('boolean', 'primitive', 'true, false'),
  createData('object', 'reference', '{a: 1, b:2, c:3}'),
  createData('function', 'reference', "function() {console.log('hello');}"),
  createData('undefined', 'primitive', 'undefined'),
];

function Language() {
  const classes = useStyles();

  return (
    <Container style={{ marginTop: 112 }}>

              <ProjectCard/>


      <Grid container spacing={5}>
        
        {/* Title and subtitle section */}
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {/* Header: JavaScript */}
            <Grid item xs={12}>
              <Typography variant="h4">JavaScript</Typography>
            </Grid>
          
            {/* Subtitle: JavaScript description */}
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                JavaScript is a programming language initially designed to interact with elements of webpages.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Table section */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* Table header */}
            <Grid item xs={12}>
              <Typography variant="h5">JavaScript basic data types</Typography>
            </Grid>
            {/* Table contents */}
            <Grid item xs={12}>
              {/* <JavaScript_Data_Type_Table /> */}
            </Grid>
          </Grid>
        </Grid>
        {/* Frequent Functions Section */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {/* Header: Frequently used array functions */}
            <Grid item xs={12}>
              <Typography variant="h5">Frequently used array functions</Typography>
            </Grid>
            {/* Language Card Section */}
            <Grid item xs={12}>
              {/* <Language_Card></Language_Card> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Language;