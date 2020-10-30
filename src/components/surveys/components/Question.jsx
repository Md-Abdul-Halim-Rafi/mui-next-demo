import React from "react"
import PropTypes from "prop-types"

const Question = props => {
  return <h1 className="question">{props.content}</h1>
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Question
