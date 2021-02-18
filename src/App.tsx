  
import Grid from '@material-ui/core/Grid';
import React from 'react';
import App_Bar from './components/App_Bar';
import NavTabs from './components/NavTabs';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Added Material UI and its dependencies!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

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
