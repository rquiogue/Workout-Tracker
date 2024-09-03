import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Text,
    Flex,
    CardFooter,
} from '@chakra-ui/react'
import ExerciseGridItem from './ExerciseGridItem'
import { Link } from 'react-router-dom'

const WorkoutInformationCard = ({workout, color}) => {
  return (
    <Card height={'100%'}>
        <CardHeader >
            <Heading color={color}>
                {workout.name}
            </Heading>
            <Link to={`/users/${workout.username}`}>
                <Text color={'0B1215'}>
                    By {workout.username}
                </Text>
            </Link>
            <Text color={'0B1215'}>
                Type: {workout.type}
            </Text>
            <Text color={'0B1215'}>
                Intensity: {workout.intensity}
            </Text>
            <Text color={'0B1215'}>
                {workout.description}
            </Text>
        </CardHeader>
        <CardBody overflow={'scroll'}>
            <Heading size={'lg'} marginBottom={'1rem'} color={color}>
                <strong>Exercises</strong>
            </Heading>
            <Flex justifyContent={'start'}>
                <Flex flexDirection={'column'} gap={6} w={'70%'}>
                    {workout.exercises
                        .map((exercise, index) => {
                            return (<ExerciseGridItem key={index} exercise={exercise}/>)
                        })}
                </Flex>
            </Flex>
        </CardBody>
        <CardFooter></CardFooter>
    </Card>
  )
}

export default WorkoutInformationCard