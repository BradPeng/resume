import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import DocumentCard from "../DocumentCard";

function contact() {
  return (
    <Container style={{ marginTop: "150px" }}>
      <Grid container spacing={5}>
        <DocumentCard></DocumentCard>
      </Grid>
    </Container>
  );
}

export default contact;
