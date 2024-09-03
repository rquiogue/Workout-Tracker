import { Box, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Gap from '../universal/Gap'
import { LinkIcon } from '@chakra-ui/icons'

const WorkoutGridItem = (props) => {
    const {
        workout,
        color,
        bg
    } = props

  return (
    <Link className='workout-grid-item' to={`/workouts/${workout.id}`}>
        <GridItem key={workout.id} w='100%' h='100%' borderRadius={'1rem'} background={bg} boxShadow={'2px 2px 10px rgba(0, 0, 0, 0.5)'} overflow={'hidden'}>
            <Box w={'100%'} h={'100%'} p={'1rem'}>
                <Heading as='h2' size='lg' noOfLines={1} minHeight={'fit-content'} color={color} className='workout-grid-item-heading'>
                    {workout.name} <LinkIcon boxSize={5}/>
                </Heading>
                <Link to={`/users/${workout.username}`}>
                    <Text fontSize={'xl'} color={color} className={'workout-grid-item-heading'}>
                        By {workout.username}
                    </Text>
                </Link>
                <Gap height={'1rem'}></Gap>
                <Text color={'0B1215'}>
                    Type: {workout.type}
                </Text>
                <Gap height={'1rem'}></Gap>
                <Text h={'50%'} w={'100%'} color={'0B1215'}  className='description'>
                    Description: {workout.description}
                </Text>
            </Box>
        </GridItem>
    </Link>
  )
}

export default WorkoutGridItem