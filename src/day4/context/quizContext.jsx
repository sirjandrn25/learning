import React from 'react'
import { dummyQuestionsList } from './questions'

const QuizContext = React.createContext({
  question: {},
})

export const QuizProvider = ({ children }) => {
  const [question, setQuestion] = React.useState(dummyQuestionsList[0])

  const [score, setScore] = React.useState(0)
  const [ansStatus, setAnsStatus] = React.useState('')

  const [answerInfo, setAnswerInfo] = React.useState({
    correctAnswer: 0,
    totalAttempt: 0,
  })

  const handleNextQuestion = () => {
    
    const index = dummyQuestionsList.findIndex((object) => object.questionNo === question.questionNo)
    if (dummyQuestionsList.length - 1 > index) {
      setQuestion(dummyQuestionsList[index + 1])
      setAnsStatus('');
    } else {
      setAnsStatus('complete')
  }

  const handleAnswerCheck = (answer) => {
    setScore((prev_state) => {
      return answer.correct ? prev_state + question.point : prev_state
    })
    setAnsStatus(answer.correct ? 'correct' : 'wrong')
    setAnswerInfo((prev_state) => {
      return {
        totalAttempt: prev_state.totalAttempt + 1,
        correctAnswer: answer.correct ? prev_state.correctAnswer + 1 : prev_state.correctAnswer,
      }
    })
  }

  return (
    <QuizContext.Provider
      value={{ question, handleAnswerCheck, ansStatus, handleNextQuestion, answerInfo, score, gameOver }}>
      {children}
    </QuizContext.Provider>
  )
}

export const UseQuizQuestion = () => {
  const { question, handleAnswerCheck, ansStatus, handleNextQuestion, answerInfo, score, gameOver } =
    React.useContext(QuizContext)
  return { question, handleAnswerCheck, ansStatus, handleNextQuestion, answerInfo, score, gameOver }
}
