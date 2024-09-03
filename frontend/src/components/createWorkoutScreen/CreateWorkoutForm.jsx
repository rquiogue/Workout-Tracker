import React, { useState } from 'react'
import Backdrop from '../universal/Backdrop'
import { 
    Box, 
    Button, 
    FormControl, 
    FormLabel, 
    Input, 
    Stack, 
    useToast, 
    Heading, 
    Card, 
    CardHeader, 
    CardBody, 
    Flex,
    Select,
    Textarea,
    Divider,
    Grid
 } from '@chakra-ui/react'
 import Exercise from './Exercise'
import { useNavigate } from 'react-router-dom'

const CreateWorkoutForm = () => {
    const navigate = useNavigate();

    const toast = useToast();

    const [exercises, setExercises] = useState([]);
    const [currentId, setCurrentId] = useState(1);

    const nextId = () => {
        const id = currentId;
        setCurrentId(prev => prev + 1);
        return id
    }

    const newExercise = () => {
        const id = nextId();

        setExercises((prev) => {
            const newExercise = {
                id: 1,
                exerciseName: `Exercise ${id}`,
                type: 'Weight'
            }
            return [...prev, newExercise]
        });

        console.log(exercises)
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Form submitted.",
      description: "You've successfully submitted the form.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };



  return (
    <Backdrop>
        <Flex width={'70%'} display={'column'} alignItems={'start'} marginBottom={'10rem'} marginTop={'5rem'}>
            <Card >
                <CardHeader>
                    <Heading color={'orange.500'}>
                        Create New Workout
                    </Heading>
                </CardHeader>
                <CardBody>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Workout Name</FormLabel>
                            <Input type="text" placeholder="Workout" />
                        </FormControl>
                        <FormControl id="type" isRequired>
                            <FormLabel>Type</FormLabel>
                            <Input type="text" placeholder="Type" />
                        </FormControl>
                        <FormControl id="intensity" isRequired>
                            <FormLabel>Intensity</FormLabel>
                            <Select placeholder='Select option'>
                                <option value='Low'>Low</option>
                                <option value='Moderate'>Moderate</option>
                                <option value='High'>High</option>
                                <option value='Extreme'>Extreme</option>
                            </Select>
                        </FormControl>
                        <FormControl id="description" isRequired>
                            <FormLabel>Description</FormLabel>
                            <Textarea placeholder='Description' />
                        </FormControl>
                        <Divider />
                        <Flex justifyContent={'center'}>
                            <Grid w={'100%'} h={'fit-content'} templateColumns={'1fr 1fr 1fr'} gap={'5rem'}>
                                {exercises.map((exercise) => {
                                    return (<Exercise key={exercise.id} exerciseName={exercise.exerciseName}/>)
                                })}
                            </Grid>
                        </Flex>
                        <Button width={'100%'} onClick={newExercise}>
                            Add Exercise
                        </Button>
                        <Divider />
                        <Flex direction={'row'} justifyContent={'space-around'}>
                            <Button colorScheme="gray" width="45%" size={'lg'} onClick={() => navigate('/workouts')}>
                                Cancel
                            </Button>
                            <Button colorScheme="orange" type="submit" width="45%" size={'lg'}>
                                Submit
                            </Button>
                        </Flex>
                    </Stack>
                </form>
                </CardBody>
            </Card>
        </Flex>
    </Backdrop>
  )
}

export default CreateWorkoutForm