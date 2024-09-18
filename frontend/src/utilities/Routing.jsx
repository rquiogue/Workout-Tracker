import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import WorkoutsScreen from '../screens/WorkoutsScreen'
import IndividualWorkoutScreen from '../screens/IndividualWorkoutScreen'
import CreateWorkoutScreen from '../screens/CreateWorkoutScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/workouts" />}/>
          <Route path='/workouts' element={<WorkoutsScreen/>}/>
          <Route path='/workouts/:id' element={<IndividualWorkoutScreen/>}/>
          <Route path='/createWorkout' element={<CreateWorkoutScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
        </Routes>
      </Router>
  )
}

export default Routing