import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Home from './Home/Home';
import Language from './Language/Language';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: '#F2F2F2' }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppBar position="fixed" style={{ top: 64, background: '#FFFFFF', color: '#1776D2', boxShadow: 'none' }}>
            <Tabs
              TabIndicatorProps={{ style: { background: '#1776D2' } }}
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Language" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={value} index={0}>
            {Home()}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {Language()}
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}