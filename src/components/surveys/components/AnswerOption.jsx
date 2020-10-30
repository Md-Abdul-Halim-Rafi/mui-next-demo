import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  quizOptions: {
    border:
      theme.palette.type === `light` ? `.5px solid #eee` : `.5px solid #616161`,
    margin: `1rem`,
    borderRadius: `12px`,
    "&:hover": {
      backgroundColor: theme.palette.type === `light` ? `#e2edfd` : `#5a5a5a`,
      border: `1px solid #000`,
    },
    "&:before": {
      border: `2px solid #fff`,
    },
  },
  label: {
    paddingTop: `24px`,
    boxShadow: `0 1px 1px rgba(0,0,0,0.08), 
    0 2px 2px rgba(0,0,0,0.12), 
    0 4px 4px rgba(0,0,0,0.16), 
    0 8px 8px rgba(0,0,0,0.20)`,
  },
}))

const AnswerOption = props => {
  const classes = useStyles()
  return (
    <li className={classes.quizOptions}>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label
        className={`radioCustomLabel ${classes.label}`}
        htmlFor={props.answerType}
      >
        {props.answerContent}
      </label>
    </li>
  )
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default AnswerOption
