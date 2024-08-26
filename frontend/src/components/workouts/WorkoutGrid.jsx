import React from 'react'
import { 
    Center,
    Grid, 
    GridItem 
} from '@chakra-ui/react'
import Gap from '../universal/Gap'
import workouts from '../../assets/workouts'

const WorkoutGrid = () => {
  return (
    <Center>
        <Gap height={'60rem'}/>
        <Grid w={'70%'} h={'50rem'} templateColumns='repeat(3, 1fr)' gap={6}>
            {workouts.map((workout) => {
                return (<GridItem key={workout.id} w='100%' h='10' bg='blue.500'>
                    {workout.name}
                </GridItem>)
            })}
        </Grid>
    </Center>
  )
}

export default WorkoutGrid