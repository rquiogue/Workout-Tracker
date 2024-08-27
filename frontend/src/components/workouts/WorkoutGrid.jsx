import React from 'react'
import { 
    Center,
    Grid
} from '@chakra-ui/react'
import Gap from '../universal/Gap'
import workouts from '../../assets/workouts'
import WorkoutGridItem from './WorkoutGridItem'
import './WorkoutsScreen.css'

const WorkoutGrid = (props) => {
    const {
        bg,
        color,
        searchText
    } = props;

    const filterBasedOnSearch = (workout) => {
        const workoutLowerCaseName = workout.name.toLowerCase();
        const searchTextLowerCase = searchText.toLowerCase();
        return workoutLowerCaseName.includes(searchTextLowerCase)
    }

  return (
    <Center className='backdrop'>
        <Gap height={'60rem'}/>
        <Grid w={'70%'} h={'50rem'} templateColumns={'repeat(3, 1fr)'} gridAutoRows={'40%'} gap={6} marginBottom={'50rem'} marginTop={'5rem'}>
            {workouts.filter(filterBasedOnSearch)
                    .map((workout) => {
                return (<WorkoutGridItem key={workout.id} workout={workout} bg={bg} color={color}/>)
            })}
        </Grid>\
    </Center>
  )
}

export default WorkoutGrid