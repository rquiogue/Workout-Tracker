import React from 'react'
import NavBar from '../components/universal/NavBarWithSearch'
import WorkoutGrid from '../components/workoutScreen/WorkoutGrid'
import Gap from '../components/universal/Gap'
import { useState } from 'react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const WorkoutsScreen = () => {
  const bg = 'white';
  const color = 'orange.500'

  const [workoutSearchValue, setWorkoutSearchValue] = useState('');
  const onWorkoutSearchValueChange = (e) => {console.log(e.target.value); setWorkoutSearchValue(e.target.value)};

  const {
    isSignedIn,
    isLoaded,
    user
  } = useUser();

  console.log(`isSignedIn: ${isSignedIn}, isLoaded: ${isLoaded}`);
  console.log(JSON.stringify(user));

  return (
    <>
      {/* 
        Nav Bar with a search option
      */}
      <NavBar
        searchValue={workoutSearchValue}
        onSearchValueChange={onWorkoutSearchValueChange}
        placeholder='Search for workouts'
        />

      
      <WorkoutGrid bg={bg} color={color} searchText={workoutSearchValue} zIndex={'1'}/>

      <Link to={'/createWorkout'}>
        <IconButton size={'lg'} icon={<AddIcon/>}
          variant={'outline'}
          bg={bg}
          position={'fixed'}
          bottom={'1rem'}
          right={'1rem'}
          colorScheme={'orange'}
          />
        </Link>
    </>
  )
}

export default WorkoutsScreen