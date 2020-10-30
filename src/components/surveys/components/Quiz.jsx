import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Fade from "@material-ui/core/Fade"
import Question from "../components/Question"
import QuestionCount from "../components/QuestionCount"
import AnswerOption from "../components/AnswerOption"

const Quiz = props => {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    )
  }

  const [fade, setFade] = useState(true)

  useEffect(() => {
    if (props.questionId !== props.questionTotal) {
      setFade(false)
      setTimeout(() => {
        setFade(true)
      }, 300)
    }
  }, [props])

  return (
    <Fade in={fade} timeout={{ enter: 800, exit: 500 }}>
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </Fade>
  )
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default Quiz
