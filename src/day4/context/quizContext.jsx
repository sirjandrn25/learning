import React from 'react'

const dummyQuestion = {
  questionNo: 1,
  question: 'Which is the capital of provinance number 1?',
  answers: [
    { answer: 'Kathmandu', correct: false },
    { answer: 'Dharan', correct: false },
    { answer: 'Pokhara', correct: false },
    { answer: 'Biratnagar', correct: true },
  ],
  point: 2,
}

const QuizContext = React.createContext({
  question: {},
})

export const QuizProvider = ({ children }) => {
  const [question, setQuestion] = React.useState(dummyQuestion)

  const [score, setScore] = React.useState(0)
  const [ansStatus, setAnsStatus] = React.useState('')
  const [answerInfo, setAnswerInfo] = React.useState({
    correctAnswer: 0,
    totalAttempt: 0,
  })

  const handleAnswerCheck = (answer) => {
    setScore((prev_state) => {
      return answer.correct ? prev_state + question.point : prev_state - question.point
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
    <QuizContext.Provider value={{ question, handleAnswerCheck, ansStatus, setAnsStatus, answerInfo, score }}>
      {children}
    </QuizContext.Provider>
  )
}

export const UseQuizQuestion = () => {
  const { question, handleAnswerCheck, ansStatus, setAnsStatus, answerInfo, score } = React.useContext(QuizContext)
  return { question, handleAnswerCheck, ansStatus, setAnsStatus, answerInfo, score }
}
