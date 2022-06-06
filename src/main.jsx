import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizLayoutContainer from './day4/QuizLayoutContainer'
import QuizHomeContainer from './day4/QuizHomeContainer'
import QuizContainer from './day4/QuizContainer'
import LoginContainer from './day1/LoginContainer'
import ExpenseTrackerContainer from './day2/ExpenseTrackerContainer'
import NoteAppContainer from './day3/NoteAppContainer'
import { NoteProvider } from './day3/context/noteContext'
import FoodOrderContainer from './day6/FoodOrderContainer'
import { FoodProvider } from './day6/context/foodContext'
import { UIProvider } from './day6/context/uiContext'
import { UserAuthProvider } from './day6/context/userContext'
import PracticeContainer from './day5/PracticeContainer'
import TaskContainer from './day8/TaskContainer'
import { TaskProvider } from './day8/context/taskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='login-day1' element={<LoginContainer />} />
        <Route path='expense-tracker-day2' element={<ExpenseTrackerContainer />} />
        <Route
          path='noteapp-day3'
          element={
            <NoteProvider>
              <NoteAppContainer />
            </NoteProvider>
          }
        />
        <Route path='quiz-day4' element={<QuizLayoutContainer />}>
          <Route index element={<QuizHomeContainer />} />
          <Route path='game' element={<QuizContainer />} />
        </Route>
        <Route path='/practice-day5' element={<PracticeContainer />} />
        <Route
          path='food-order-day6'
          element={
            <FoodProvider>
              <UIProvider>
                <UserAuthProvider>
                  <FoodOrderContainer />
                </UserAuthProvider>
              </UIProvider>
            </FoodProvider>
          }
        />
        <Route
          path='/task-day8'
          element={
            <TaskProvider>
              <TaskContainer />
            </TaskProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
