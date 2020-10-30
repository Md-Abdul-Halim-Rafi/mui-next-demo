import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import VideoDialog from "./VideoDialog";
import RoadmapSurvey from "./surveys/RoadmapSurvey";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  dividerStyle: {
    marginTop: "10px",
    marginBottom: "30px",
  },
  heroImage: {
    width: "100%",
    objectFit: "cover",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    cursor: "pointer",
  },
  compareTable: {
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    cursor: "pointer",
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    cursor: "pointer",
  },
  coding: {
    width: "100%",
    objectFit: "cover",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    cursor: "pointer",
  },
  button: {
    margin: `20px 5px 0 5px`,
    color: theme.palette.type === `light` ? `#fff` : `#000`,
    backgroundColor: theme.palette.primary.main,
    border: `none`,
    borderRadius: `7px`,
    boxShadow: `0px 8px 18px ${theme.palette.primary.main}50`,
    transition: `all 0.3s ease 0s`,
    cursor: `pointer`,
    outline: `none`,
    fontSize: `medium`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.type === `light` ? `#fff` : `#000`,
      transform: `translateY(5px)`,
      border: `1px solid #f4f4f4`,
    },
  },
  joinButton: {
    width: "200px",
    marginTop: "30px",
  },
  testimonial: {
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    cursor: "pointer",
  },
  laptopUi: {
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
  authorFeatures: {
    width: "80%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    cursor: "pointer",
  },
  codeForBangladesh: {
    width: "100%",
    objectFit: "cover",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    cursor: "pointer",
  },
  contributeButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  contributeButtonDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  commonGridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={3}>
              <Grid
          container
          justifyContent='space-around'
          spacing={1}
          style={{ marginTop: "5px" }}>
          <Grid item md={5} xs={12}>
            <RoadmapSurvey />
            
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            style={{ alignSelf: `center`, textAlign: "center" }}>
            <VideoDialog />
            <Typography
              variant='h5'
              gutterBottom
              style={{ textAlign: "center" }}>
              <b>২,৭০০+</b> শিক্ষার্থীদের সাথে যোগ দিন আপনিও 😎
            </Typography>
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              size='large'
              style={{ marginTop: "20px" }}>
              প্রোগ্রামিং শিখুন
            </Button>
          </Grid>
        </Grid>

        <Divider
          variant='middle'
          style={{ marginTop: "10px", marginBottom: "20px" }}
        />
          <Grid
            className={classes.commonGridItem}
            item
            md={5}
            xs={12}>
            <Typography
              variant='h4'
              gutterBottom
              style={{ marginBottom: "40px" }}>
              কেন মেইনলি কোডিং?
            </Typography>
            <img
                className={classes.compareTable}
                src="/compareTable.png"
                alt='Features of Mainly Coding'
              />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            className={classes.text}
            style={{ marginLeft: "10px", textAlign: "center" }}>
             <img
                className={classes.heroImage}
                src="/mobileUi.png"
                alt='Mainly Coding Hero'
              />

              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                size='large'>
                প্রোগ্রামিং শিখুন
              </Button>
          </Grid>
        </Grid>
        <Divider style={{ margin: "50px" }} variant='middle' />

        <Grid container direction='row' justifyContent='space-around' spacing={3}>
          <Grid
          className={classes.commonGridItem}
            item
            md={4}
            xs={12}>
            <Typography variant='h5' gutterBottom>
              আমাদের শিক্ষার্থীগণ যা বলেন{" "}
              <span role='img' aria-label='like'>
                👍
              </span>
            </Typography>{" "}
            <img
                className={classes.testimonial}
                src="/testimonial.png"
                alt='Features of Mainly Coding'
              />
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
              size='large'>
              আপনিও লিখুন{" "}
              <span role='img' aria-label='like'>
                ✍️
              </span>
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
          <img
                className={classes.laptopUi}
                src="/laptopUi.png"
                alt='Features of Mainly Coding'
              />
          </Grid>
        </Grid>
        <Divider style={{ margin: "50px" }} variant='middle' />

        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={1}
          style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
          <Grid
            item
            md={5}
            xs={12}
            style={{ margin: "0 20px" }}
            className={classes.text}>
            <Typography variant='h4' gutterBottom style={{ color: "#000" }}>
                বাংলা ভাষায় সবচেয়ে বড় প্রোগ্রামিং কন্টেন্ট হাব তৈরীর মিশনে যোগ
                দিন
                <span role='img' aria-label='like'>
                  🎖️📚
                </span>
              </Typography>
              <img
                className={classes.authorFeatures}
                src="/authorFeatures.png"
                alt='Features of Mainly Coding'
              />
              <Button
                variant='contained'
                color='primary'
                size='large'
                className={`${classes.button} ${classes.contributeButtonDesktop}`}>
                আপনিও লিখুন
                <span role='img' aria-label='like'>
                  ✍️
                </span>
              </Button>
          </Grid>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={`${classes.button} ${classes.contributeButton}`}>
            আপনিও লিখুন{" "}
            <span role='img' aria-label='like'>
              ✍️
            </span>
          </Button>
          <Grid
            item
            md={5}
            xs={12}
            style={{ marginLeft: "10px" }}>
             <img
                className={classes.codeForBangladesh}
                src="/codeForBangladesh.png"
                alt='Features of Mainly Coding'
              />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
