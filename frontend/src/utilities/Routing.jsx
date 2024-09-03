import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import WorkoutsScreen from '../screens/WorkoutsScreen'
import IndividualWorkoutScreen from '../screens/IndividualWorkoutScreen'

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/workouts" />}/>
          <Route path='/workouts' element={<WorkoutsScreen/>}/>
          <Route path='/workouts/:id' element={<IndividualWorkoutScreen/>}/>
        </Routes>
      </Router>
  )
}

export default Routing