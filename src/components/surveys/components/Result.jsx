import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Result(props) {
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 300);

    if (props.quizResult) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [props]);

  useEffect(() => {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 500);
  }, [loading]);

  return (
    <Fade in={fade} timeout={{ enter: 800, exit: 800 }}>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h6">
          আমাদের অ্যালগরিদমটি আপনার জন্য পারসোনালাইজড গাইডলাইন তৈরী করেছে{" "}
        </Typography>
      </Grid>
    </Fade>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
