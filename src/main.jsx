import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizLayoutContainer from './day4/QuizLayoutContainer'
import QuizHomeContainer from './day4/QuizHomeContainer'
import QuizContainer from './day4/QuizContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='quiz-day4' element={<QuizLayoutContainer />}>
          <Route index element={<QuizHomeContainer />} />
          <Route path='game' element={<QuizContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
