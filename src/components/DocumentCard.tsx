import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import image1 from '../images/business_cover.jpg';
import Read_More_Button from './ReadMoreButton';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 'auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

const DocumentList = [
  {
    title: 'React',
    link: 'https://reactjs.org/',
    description: 'A JavaScript library for building user interfaces.',
    img: image1,
  },
  {
    title: 'Material - UI',
    link: 'https://material-ui.com/',
    description:
      'React components for faster and easier web development. Build your own design system, or start with Material Design.',
    img: image1,
  },
];

export default function DocumentCard() {
  const classes = useStyles();

  let cards = DocumentList.map((doc) => (
    <div style={{ marginBottom: 15 }}>
      <Card className={classes.root} variant="outlined" style={{ padding: 0 }} id="roundCorner">
        <CardContent style={{ paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}>
          {/* Main Container */}
          <Grid container spacing={0} direction="row">
            {/* Text and button elements (things aligned in a column) */}
            <Grid item xs={6}>
              {/* Container that holds text only */}
              <Grid
                container
                direction="column"
                justify="flex-start"
                spacing={3}
                style={{ paddingRight: 10, paddingTop: 10, paddingBottom: 10 }}
              >
                {/* Card Title and Subtitle */}
                <Grid item xs={6}>
                  <Grid container spacing={0} direction="column">
                    {/* Card Title*/}
                    <Grid item xs={12}>
                      <Typography variant="h5" component="h2">
                        {doc.title}
                      </Typography>
                    </Grid>
                    {/* Card Subtitle */}
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" className={classes.title} color="textSecondary" gutterBottom>
                        {doc.link}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Card Description and Button*/}
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" component="p" style={{ minHeight: 100 }}>
                        {doc.description}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CardActions style={{ paddingLeft: 0, marginTop: 65 }}>
                        <a target="_blank" href={doc.link}>
                          <Read_More_Button></Read_More_Button>
                        </a>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Card Image*/}
            <Grid item xs={6}>
              <img src={doc.img} style={{ height: '100%', width: '100%' }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
    </div>
  ));

  return (
    <Grid container spacing={3} direction="column" justify="space-evenly">
      {cards}
    </Grid>
  );
}