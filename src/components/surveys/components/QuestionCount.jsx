import React from "react"
import PropTypes from "prop-types"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  questionCount: {
    padding: ` 0.5rem 2.5rem 0`,
    fontSize: `20px`,
    color:
      theme.palette.type === `light` ? `#636e72` : theme.palette.text.secondary,
  },
}))

const QuestionCount = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.questionCount}>
        <span>{props.total + 1 - props.counter}</span> টি
        প্রশ্ন বাকি রয়েছে
      </div>
      <BorderLinearProgress
        variant="determinate"
        value={(props.counter / props.total) * 100}
      />
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default QuestionCount
