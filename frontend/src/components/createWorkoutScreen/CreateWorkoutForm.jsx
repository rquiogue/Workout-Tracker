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
import BackButton from '../universal/BackButton'

const CreateWorkoutForm = () => {
    // Setting up navigate so we can use it for the buttons later
    const navigate = useNavigate();

    // Setting up variables for form control
    const [name, setName] = useState("");
    const onNameChange = (e) => setName(e.target.value);

    const [type, setType] = useState("");
    const onTypeChange = (e) => setType(e.target.value);

    const [intensity, setIntensity] = useState("");
    const onIntensityChange = (e) => setIntensity(e.target.value);

    const [description, setDescription] = useState("");
    const onDescriptionChange = (e) => setDescription(e.target.value);

    const [exercises, setExercises] = useState([]);

    // Setting up the toast
    const toast = useToast();

    // Using an id so we know which exercise we want to delete
    const [currentId, setCurrentId] = useState(1);

    const nextId = () => {
        const id = currentId;
        setCurrentId(prev => prev + 1);
        return id
    }

    /* 
        Here we have a series of functions that allow for manipulation of the exercises array

        newExercise() allows us to add a new exercise to the array

        deleteExercise(id) will remove the specified exercise from the array based on the id

        changeExercise(id) will change the specified exercise baseed on the id and the new exercise given
    */
    const newExercise = () => {
        const id = nextId();

        setExercises((prev) => {
            const newExercise = {
                id: id,
                exerciseName: `Exercise ${id}`,
                type: 'Weight',
                weight: '',
                sets: '',
                reps: '',
                duration: '',
            }
            return [...prev, newExercise]
        });

        console.log(exercises)
    }
    
    const deleteExercise = (id) => {
      setExercises((prev) => {
          return prev.filter((exercise) => exercise.id != id)
      })
    }

    const changeExercises = (id, updatedExercise) => {
        setExercises((prev) => {
            return prev.map(exercise => 
                exercise.id === id ? updatedExercise : exercise
            );
        });
    }

    // Used when the form is submitted
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
        <BackButton link={'/'}/>

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
                            <Input type="text" placeholder="Workout" value={name} onChange={onNameChange}/>
                        </FormControl>
                        <FormControl id="type" isRequired>
                            <FormLabel>Type</FormLabel>
                            <Input type="text" placeholder="Type" value={type} onChange={onTypeChange}/>
                        </FormControl>
                        <FormControl id="intensity" isRequired>
                            <FormLabel>Intensity</FormLabel>
                            <Select placeholder='Select option' value={intensity} onChange={onIntensityChange}>
                                <option value='Low'>Low</option>
                                <option value='Moderate'>Moderate</option>
                                <option value='High'>High</option>
                                <option value='Extreme'>Extreme</option>
                            </Select>
                        </FormControl>
                        <FormControl id="description" isRequired>
                            <FormLabel>Description</FormLabel>
                            <Textarea placeholder='Description' value={description} onChange={onDescriptionChange}/>
                        </FormControl>
                        <Divider />
                        <Flex justifyContent={'center'}>
                            <Grid w={'100%'} h={'fit-content'} templateColumns={'1fr 1fr 1fr'} gap={'5rem'}>
                                {exercises.map((exercise) => {
                                    return (<Exercise key={exercise.id} 
                                                exercise={exercise} 
                                                deleteExercise={() => deleteExercise(exercise.id)} 
                                                handleChange={(id, updatedExercise) => changeExercises(id, updatedExercise)}/>)
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