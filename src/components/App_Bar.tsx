import { AppBar, Toolbar } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import React from 'react';

function App_Bar() {
    return (
      <div>
        <AppBar style={{ background: '#1776D2', top: 0 }} position="fixed">
          <Toolbar>
            <Typography variant="h6">Ayo chief whats poppin</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  export default App_Bar;