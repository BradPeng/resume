import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import image1 from "../../images/business_cover.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    //   maxHeight: 700,
    height: 650,
  },
  media: {
    height: 309,
  },
});

const ArrayFunctionList = [
  {
    img: image1,
    name: "Game of Apps Website",
    subtitle: "Internship Product, Summer 2020",
    description:
      "A website built using HTML, CSS, React and TypeScript during an internship position in the summer of 2020.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
  },
  {
    img: image1,
    name: "Space Shooter",
    subtitle: "Game Maker Studio 2 Project, February 2021",
    description:
      "A Basic 2D shooting game built using Game Maker Studio 2 and the Game Maker Language.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
  },
  {
    img: image1,
    name: "Reminder App",
    subtitle: "Java Project, September 2020 - December 2020",
    description:
      "A small app used to keep track of reminders built using Java for my UBC CPSC 210 course's term project.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
  },
];
export default function Language_Card() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      spacing={2}
      direction="row"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid
          container
          justify="space-between"
          spacing={1}
          direction="row"
          alignItems="center"
        >
          {ArrayFunctionList.map((element) => (
            <Grid item>
              {/* href={element.link} */}
              <CardActionArea>
                <a target="_blank">
                  <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "nowrap",
                      flexDirection: "column",
                    }}
                    id="roundCorner"
                  >
                    {/* Card Image */}
                    <CardMedia
                      className={classes.media}
                      image={element.img}
                      title={element.name}
                    />
                    {/* Card Text and Button */}
                    <CardContent
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: 8,
                        flexWrap: "nowrap",
                        flexDirection: "column",
                        alignItems: "baseline",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column",
                          alignItems: "baseline",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                            alignItems: "top",
                            height: "150px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="h2"
                            style={{}}
                          >
                            {element.name}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                            style={{ paddingBottom: "20px" }}
                          >
                            {element.subtitle}
                          </Typography>
                        </div>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          {element.description}
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="medium"
                        style={{
                          marginTop: 10,
                          marginBottom: 10,
                          color: "#1776D2",
                        }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </a>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
