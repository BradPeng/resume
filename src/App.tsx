  
import Grid from '@material-ui/core/Grid';
import React from 'react';
import App_Bar from './components/App_Bar';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <App_Bar />
        </Grid>
        <Grid item xs={12}>
          <NavTabs />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
