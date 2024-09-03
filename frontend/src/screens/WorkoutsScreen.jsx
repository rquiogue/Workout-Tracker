import React from 'react'
import NavBar from '../components/universal/NavBarWithSearch'
import WorkoutGrid from '../components/workoutScreen/WorkoutGrid'
import Gap from '../components/universal/Gap'
import { useState } from 'react'

const WorkoutsScreen = () => {
  const bg = 'white';
  const color = 'orange.500'

  const [workoutSearchValue, setWorkoutSearchValue] = useState('');
  const onWorkoutSearchValueChange = (e) => {console.log(e.target.value); setWorkoutSearchValue(e.target.value)};

  return (
    <>
      <NavBar
        searchValue={workoutSearchValue}
        onSearchValueChange={onWorkoutSearchValueChange}
        placeholder='Search for workouts'
        />


      
      <WorkoutGrid bg={bg} color={color} searchText={workoutSearchValue} zIndex={'1'}/>
    </>
  )
}

export default WorkoutsScreen