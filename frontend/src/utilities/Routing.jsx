import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import WorkoutsScreen from '../screens/WorkoutsScreen'

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/workouts" />}/>
          <Route path='/workouts' element={<WorkoutsScreen/>}/>
        </Routes>
      </Router>
  )
}

export default Routing