import React from 'react'
import NavBar from '../components/universal/NavBar'
import WorkoutGrid from '../components/workouts/WorkoutGrid'
import Spacer from '../components/universal/Gap'
import { useState } from 'react'

const WorkoutsScreen = () => {


  const [workoutSearchValue, setWorkoutSearchValue] = useState('');
  const onWorkoutSearchValueChange = (e) => {console.log(e.target.value); setWorkoutSearchValue(e.target.value)};

  return (
    <>
      <NavBar
        searchValue={workoutSearchValue}
        onSearchValueChange={onWorkoutSearchValueChange}
        placeholder='Search for workouts'
        />
        <Spacer height={''}/>
      <WorkoutGrid/>

    </>
  )
}

export default WorkoutsScreen