import React from 'react'
import {
    GridItem,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    Stack
} from '@chakra-ui/react'

const ExerciseGridItem = ({exercise, color}) => {
  return (
    <Card>
        <CardBody>
        <Heading size={'md'} color={color}>
                {exercise.exerciseName}
            </Heading>
            {
                exercise.type == 'weight' ? (
                    <Stack spacing={0}>
                        <Text>
                            Weight: {exercise.weight}
                        </Text>
                        <Text>
                            Sets: {exercise.sets}
                        </Text>
                        <Text>
                            Reps: {exercise.reps}
                        </Text>
                    </Stack>
                ) : (  
                    <Text>
                        Duration(minutes): {exercise.durationMinutes}
                    </Text>
                )
            }
        </CardBody>
    </Card>
  )
}

export default ExerciseGridItem