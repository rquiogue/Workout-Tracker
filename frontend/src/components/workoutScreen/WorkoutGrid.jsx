import React from 'react'
import { 
    Center,
    Grid
} from '@chakra-ui/react'
import Gap from '../universal/Gap'
import workouts from '../../assets/workouts'
import WorkoutGridItem from './WorkoutGridItem'
import Backdrop from '../universal/Backdrop'

const WorkoutGrid = (props) => {
    const {
        bg,
        color,
        searchText
    } = props;

    /* 
        Function created in order to filter the workouts based on the current search
    */

    const filterBasedOnSearch = (workout) => {
        const workoutLowerCaseName = workout.name.toLowerCase();
        const searchTextLowerCase = searchText.toLowerCase();
        return workoutLowerCaseName.includes(searchTextLowerCase)
    }

  return (
    <Backdrop>

        {/* 
            Grid used to display the the workouts basic information
        */}

        <Grid w={'70%'} h={'50rem'} templateColumns={'repeat(3, 1fr)'} gridAutoRows={'40%'} gap={6} marginBottom={'20rem'} marginTop={'5rem'}>
            {workouts.filter(filterBasedOnSearch)
                    .map((workout) => {
                return (<WorkoutGridItem key={workout.id} workout={workout} bg={bg} color={color}/>)
            })}
        </Grid>
    </Backdrop>
  )
}

export default WorkoutGrid