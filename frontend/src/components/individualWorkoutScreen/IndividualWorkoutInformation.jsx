import React from 'react'
import Backdrop from '../universal/Backdrop'
import {
    Grid, 
    GridItem,
} from '@chakra-ui/react'
import workouts from '../../assets/workouts'
import CommentsSection from './CommentsSection'
import WorkoutInformationCard from './WorkoutInformationCard'
import { useParams } from 'react-router-dom'
import BackButton from '../universal/BackButton'

const IndividualWorkoutInformation = () => {
    const color = 'orange.500';
    const { id } = useParams();
    const workout = workouts[id - 1];

    

  return (
    <Backdrop>
        <BackButton link={'/workouts'}/>

        <Grid w={'70%'} h={'fit-content'} templateColumns={'2fr 1fr'} gridAutoRows={'40rem'} gap={'3rem'} marginBottom={'10rem'} marginTop={'5rem'}>
            <GridItem>
                <WorkoutInformationCard workout={workout} color={color}/>
            </GridItem>
            <GridItem>
                <CommentsSection comments={workout.comments} color={color}/>
            </GridItem>
        </Grid>
    </Backdrop>
  )
}

export default IndividualWorkoutInformation